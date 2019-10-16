require 'yaml'
require 'fileutils'

module SiteData
  class AwardsSummary
    attr_reader :path, :basepath, :awards, :awards_summary, :util, :site_config

    def initialize(site)
      @basepath = Dir.pwd

      @site_config = site.config['awards_api']
      @util = SiteData::AwardsUtility.new(site)
      @path = File.join(@basepath, '_data', 'awards.yml')
      @meta_path = File.join(@basepath, '_data', 'awards_meta.yml')
      @awards_summary_path = File.join(@basepath, '_data', 'awards_summary.yml')
      @awards_phase_1_path = File.join(@basepath, '_data', 'awards_phase_1.yml')
      @awards_phase_2_path = File.join(@basepath, '_data', 'awards_phase_2.yml')
      @awards_phase_1_recent_path = File.join(@basepath, '_data', 'awards_phase_1_recent.yml')


      @awards = nil
      @awards_data = nil

      if File.exists? @path
        @awards = YAML.load_file(@path).uniq
      else
        FileUtils.touch(@path)
        @awards = YAML.load_file(@path).uniq
      end

      if File.exists? @meta_path
        @awards_meta = YAML.load_file(@meta_path)
      else
        FileUtils.touch(@meta_path)
        @awards_meta = YAML.load_file(@meta_path)
      end

      if File.exists? @awards_summary_path
        @awards_summary = YAML.load_file(@awards_summary_path)
      else
        FileUtils.touch(@awards_summary_path)
        @awards_summary = YAML.load_file(@awards_summary_path)
      end

      if File.exists? @awards_phase_1_path
        @awards_phase_1 = YAML.load_file(@awards_phase_1_path)

      else
        FileUtils.touch(@awards_phase_1_path)
        @awards_phase_1 = YAML.load_file(@awards_phase_1_path)
      end

      if File.exists? @awards_phase_2_path
        @awards_phase_2 = YAML.load_file(@awards_phase_2_path)

      else
        FileUtils.touch(@awards_phase_2_path)
        @awards_phase_2 = YAML.load_file(@awards_phase_2_path)
      end

      if File.exists? @awards_phase_1_recent_path
        @awards_phase_1_recent = YAML.load_file(@awards_phase_1_recent_path)
      else
        FileUtils.touch(@awards_phase_1_recent_path)
        @awards_phase_1_recent = YAML.load_file(@awards_phase_1_recent_path)
      end
    end

    def companies_total
      @awards.map { |a| a['awardeeName'] }.uniq.length.to_i
    end

    def funding_total
      @awards.map { |a| a['fundsObligatedAmt'].to_f }.inject(0, :+).to_f.round(2)
    end

    def funding_per_company
      (funding_total / companies_total).round(2)
    end

    def states
      @awards.map { |a| a['awardeeStateCode'] }.uniq.sort_by(&:upcase).reject(&:empty?)
    end

    def states_count
      states.length.to_i
    end

    def applications_total
      @awards.length
    end

    # Phase 1 and 2

    def applications_phase_1_and_2
      @awards.select do |a|
        a['fundProgramName'].downcase.include?("phase i")
      end.uniq
    end


    #  Phase 1

    def applications_phase_1
      applications_phase_1_and_2.reject do |a|
        a['fundProgramName'].downcase.include?("phase ii")
      end.uniq
    end

    def applications_phase_1_count
      applications_phase_1.size
    end

    def funding_phase_1
      applications_phase_1.uniq.map { |a| a['fundsObligatedAmt'].to_f }.inject(0, :+).to_f.round(2)
    end

    def companies_phase_1
      applications_phase_1.uniq.map { |a| a['awardeeName'] }.uniq.length.to_i
    end

    def companies_unique_phase_1_percent
      (100 * companies_phase_1.to_f / companies_phase_1.to_f).round(2)
    end

    def funding_per_application_phase_1
      (funding_phase_1 / applications_phase_1_count).round(2)
    end

    def funding_per_company_phase_1
      (funding_phase_1 / companies_phase_1).round(2)
    end

    def states_phase_1
      applications_phase_1.map { |a| a['awardeeStateCode'] }.uniq.sort_by(&:upcase).reject(&:empty?)
    end

    def states_phase_1_count
      states_phase_1.length.to_i
    end

    #  Phase 2

    def applications_phase_2
      applications_phase_1_and_2 - applications_phase_1
    end

    def applications_phase_2_count
      applications_phase_2.size
    end

    def funding_phase_2
      applications_phase_2.map { |a| a['fundsObligatedAmt'].to_f }.inject(0, :+).to_f.round(2)
    end

    def companies_phase_2
      applications_phase_2.map { |a| a['awardeeName'] }.uniq.length.to_i
    end

    def companies_unique_phase_2_percent
      (100 * companies_phase_2.to_f / companies_phase_2.to_f).round(2)
    end

    def funding_per_application_phase_2
      (funding_phase_2 / applications_phase_2_count).round(2)
    end

    def funding_per_company_phase_2
      (funding_phase_2 / companies_phase_2).round(2)
    end

    def states_phase_2
      applications_phase_2.map { |a| a['awardeeStateCode'] }.uniq.sort_by(&:upcase).reject(&:empty?)
    end

    def states_phase_2_count
      states_phase_2.length.to_i
    end


    #  Phase 1 – recent

    def applications_phase_1_recent
      app = applications_phase_1.select do |application|
        if application['startDate']
          @util.to_date(application['startDate']) > @util.to_date(@site_config['recent_date'])
        end
      end
      app
    end

    def applications_phase_1_recent_count
      applications_phase_1_recent.size
    end

    def funding_phase_1_recent
      applications_phase_1_recent.map { |a| a['fundsObligatedAmt'].to_f }.inject(0, :+).to_f.round(2)
    end

    def companies_phase_1_recent
      applications_phase_1_recent.map { |a| a['awardeeName'] }.uniq.length.to_i
    end

    def companies_unique_phase_1_recent_percent
      (100 * companies_phase_1_recent.to_f / companies_phase_1_recent.to_f).round(2)
    end

    def funding_per_application_phase_1_recent
      (funding_phase_1_recent / applications_phase_1_recent_count).round(2)
    end

    def funding_per_company_phase_1_recent
      (funding_phase_1_recent / companies_phase_1_recent).round(2)
    end

    def states_phase_1_recent
      applications_phase_1_recent.map { |a| a['awardeeStateCode'] }.uniq.sort_by(&:upcase).reject(&:empty?)
    end

    def states_phase_1_recent_count
      states_phase_1_recent.length.to_i
    end


    # generates a summary of date based on _data/awards.yml
    def generate
      @awards_summary['companies_total'] = companies_total
      @awards_summary['funding_total'] = funding_total
      @awards_summary['funding_per_company'] = funding_per_company
      @awards_summary['applications_total'] = applications_total
      @awards_summary['states'] = states
      @awards_summary['states_count'] = states_count

      # Phase 2
      @awards_phase_2 = applications_phase_2
      @awards_summary['awards_phase_2'] = {}
      @awards_summary['awards_phase_2']['applications_count'] = applications_phase_2_count
      @awards_summary['awards_phase_2']['funding'] = funding_phase_2
      @awards_summary['awards_phase_2']['companies'] = companies_phase_2
      @awards_summary['awards_phase_2']['companies_unique_percent'] = companies_unique_phase_2_percent
      @awards_summary['awards_phase_2']['funding_per_company'] = funding_per_company_phase_2
      @awards_summary['awards_phase_2']['funding_per_application'] = funding_per_application_phase_2
      @awards_summary['awards_phase_2']['states_count'] = states_phase_2_count

      # Phase 1
      @awards_phase_1 = applications_phase_1
      @awards_summary['awards_phase_1'] = {}
      @awards_summary['awards_phase_1']['applications_count'] = applications_phase_1_count
      @awards_summary['awards_phase_1']['funding'] = funding_phase_1
      @awards_summary['awards_phase_1']['companies'] = companies_phase_1
      @awards_summary['awards_phase_1']['companies_unique_percent'] = companies_unique_phase_1_percent
      @awards_summary['awards_phase_1']['funding_per_company'] = funding_per_company_phase_1
      @awards_summary['awards_phase_1']['funding_per_application'] = funding_per_application_phase_1
      @awards_summary['awards_phase_1']['states_count'] = states_phase_1_count

      # Phase 1 recent
      @awards_phase_1_recent = applications_phase_1_recent
      @awards_summary['awards_phase_1_recent'] = {}
      @awards_summary['awards_phase_1_recent']['applications_count'] = applications_phase_1_recent_count
      @awards_summary['awards_phase_1_recent']['funding'] = funding_phase_1_recent
      @awards_summary['awards_phase_1_recent']['companies'] = companies_phase_1_recent
      @awards_summary['awards_phase_1_recent']['companies_unique_percent'] = companies_unique_phase_1_recent_percent
      @awards_summary['awards_phase_1_recent']['funding_per_company'] = funding_per_company_phase_1_recent
      @awards_summary['awards_phase_1_recent']['funding_per_application'] = funding_per_application_phase_1_recent
      @awards_summary['awards_phase_1_recent']['states_count'] = states_phase_1_recent_count

      if @site_config['reset'] == true
        @util.update_yaml(@awards_summary, @awards_summary_path)
        @util.update_yaml(@awards_phase_1, @awards_phase_1_path)
        @util.update_yaml(@awards_phase_2, @awards_phase_2_path)
        @util.update_yaml(@awards_phase_1_recent, @awards_phase_1_recent_path)
      else
        puts "skipping summary update. Set 'reset' to true to update.".yellow
      end
    end

  end
end
