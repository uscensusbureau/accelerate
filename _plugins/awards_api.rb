require 'net/http'
require 'yaml'

module SiteData
  class AwardsApi

    def standardize(str)
      return unless str.class == String
      str.downcase.gsub(/[^a-z ^0-9]/, "")
    end

    def only_matching_awardees(new_awards, awardeeName)
      new_awards.select do |a|
        standardize(a['awardeeName']) =~ /#{standardize(awardeeName)}(.*)/
      end
    end

    def get(params)
      allow_recent = params['allow_recent'] if params['allow_recent']
      expDateStart = params['exp_date_start'] if params['exp_date_start']
      expDateEnd = params['exp_date_end'] if params['exp_date_end'] && !allow_recent
      printFields = params['printFields']
      awardeeName = params['awardeeName'] if params['awardeeName']
      dateStart = params['date_start'] if params['date_start']
      dateEnd = params['date_end'] if params['date_end'] && !allow_recent
      fundProgramName = params['fundProgramName'] if params['fundProgramName']
      offset = 1
      successful_connection = true
      awards = []

      uri = URI('https://api.nsf.gov/services/v1/awards.json')
      company_logs = awardeeName ? "for company #{params['awardeeName']}" : ""
      puts "expiration start threshhold set to #{expDateStart} #{company_logs}" if expDateStart

      start_time = Time.now.to_i

      while successful_connection do
        puts "matching awards: #{offset}".green
        params = {
          :agency => 'nsf',
          :printFields => printFields.join(','),
          :offset => offset
        }
        params[:dateStart] = dateStart if dateStart
        params[:dateEnd] = dateEnd if dateEnd
        params[:expDateStart] = expDateStart if expDateStart
        params[:expDateEnd] = expDateEnd if expDateEnd
        params[:awardeeName] = standardize(awardeeName) if awardeeName
        params[:fundProgramName] = fundProgramName if fundProgramName

        uri.query = URI.encode_www_form(params)
        res = Net::HTTP.get_response(uri)
        #new_awards = JSON.parse(res.body)['response']['award']
        tmp_awards = JSON.parse(res.body)['response']['award']
        new_awards = tmp_awards.reject {|x| x['fundProgramName'].downcase.include?("phase i ctrs for chem innovati")}
        break unless new_awards
        if awardeeName
          matching_awards = only_matching_awardees(new_awards, awardeeName)
          puts "matching records: #{matching_awards.size}".green if matching_awards.any?
          puts awardeeName.red unless matching_awards.any?
          puts "matching records: #{matching_awards.size}".red unless matching_awards.any?
          `echo "#{awardeeName}" >> #{Dir.pwd}/_data/missing_companies.yml` unless matching_awards.any?
          awards_present = res.is_a?(Net::HTTPSuccess) && matching_awards.size == 25
        else
          matching_awards = new_awards
          awards_present = res.is_a?(Net::HTTPSuccess) && !new_awards.empty?
        end

        if matching_awards.any?
          awards << matching_awards
        end

        if awards_present
          offset += 25
        end
        successful_connection = awards_present
      end
      end_time = Time.now.to_i
      puts "Done in #{end_time - start_time} seconds".green
      awards.flatten
    end
  end
end
