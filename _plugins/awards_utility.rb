require 'yaml'
require 'fileutils'

module SiteData
  class AwardsUtility
    attr_reader :site

    def initialize(site)
      @site = site
    end

    def is_unchanged?(old_file_path, new_obj)
      old_o = [YAML.load_file(old_file_path)]
      new_o = [new_obj]
      unchanged = (old_o - new_o).empty?
      unless unchanged
        if (new_o.flatten.size - old_o.flatten.size) > 0
          puts "#{new_o.flatten.size - old_o.flatten.size} new records".green
        elsif (new_o.flatten.size - old_o.flatten.size) < 0
          puts "#{old_o.flatten.size - new_o.flatten.size} records removed".red
        end
      end
      unchanged
    end

    def update_yaml(new_obj, path)
      if is_unchanged?(path, new_obj)
        puts "no changes to #{path}".yellow
      else
        new_yaml = YAML.dump(new_obj) << "---\n\n"
        puts "updating file #{path}".green
        File.write(path, new_yaml) if File.exists? path
      end
    end

    def to_date_string(date_obj)
      DateTime.parse(date_obj.to_s).strftime('%m/%d/%Y') || '06/14/2017'
    end

    def to_date(date_string)
      date_string ||= '06/14/2017'
      date_string = to_date_string(date_string) unless date_string.class == String
      DateTime.strptime(date_string, '%m/%d/%Y')
    end

    def date_add(date, number)
      to_date_string(to_date(date) + number)
    end

    def date_now
      to_date_string(@site.time)
    end

    def date_subtract(date, number)
      to_date_string(to_date(date) - number)
    end

    def date_past(number)
      to_date(@site.time) - number
    end
  end
end
