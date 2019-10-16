require 'yaml'
require 'fileutils'

module SiteData
  class AwardsData
    attr_reader :path, :basepath, :meta_path, :awards, :meta, :site, :config_params, :util

    def initialize(site)
      @basepath = Dir.pwd

      @util = SiteData::AwardsUtility.new(site)
      @site = site
      @config_params = @site.config['awards_api']
      @path = File.join(@basepath, '_data', 'awards.yml')
      @meta_path = File.join(@basepath, '_data', 'awards_meta.yml')
      @awards = nil
      @meta = nil

      if File.exists? @path
        @awards = YAML.load_file(@path)
      else
        FileUtils.touch(@path)
        @awards = YAML.load_file(@path)
      end

      if File.exists? @meta_path
        @meta = YAML.load_file(@meta_path)
      else
        FileUtils.touch(@meta_path)
        update_meta
        @meta = YAML.load_file(@meta_path)
      end
    end

    def consolidate_params
      new_params = @meta.clone

      if @config_params['active_date_is_now'] == true
        new_params['exp_date_start'] = @util.to_date_string(@site.time)
      end
      new_params
    end

    # should return something like [ { params } ]
    def create_params
      if @config_params['reset'] == true
        consolidate_params
      end
    end

    def remove_old(awards)
      awards.select do |award|
        # select only those with expiration dates in the future
        @util.to_date(award['expDate']) > @util.to_date(@site.time)
      end
    end

    def generate(params)
      configs = [ params ].flatten.compact
      if configs.empty?
        puts "the awards config is unchanged".yellow
        remove_old(@awards).uniq
      else
        awards = configs.map do |config|
          SiteData::AwardsApi.new.get(config)
        end

        awards.flatten.uniq
      end
    end

    def update(params, awards)
      @util.update_yaml(awards, @path)
      update_meta
    end

    def update_meta
      @config_params['last_updated'] = @util.to_date_string(@site.time)
      @config_params['active_date'] = @util.to_date_string(@site.time) if @meta['active_date_is_now'] == true
      @util.update_yaml(@config_params, @meta_path)
      @config_params
    end
  end
end
