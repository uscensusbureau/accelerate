require 'yaml'
require 'fileutils'

module SiteData
  class ProgramDirectors
    attr_reader :path, :basepath, :topics, :directors, :util, :program_directors

    def initialize(site)
      @basepath = Dir.pwd

      @util = SiteData::AwardsUtility.new(site)
      @site = site
      @path = File.join(@basepath, '_data', 'tech-topics.yml')
      @program_directors_path = File.join(@basepath, '_data', 'program-directors.yml')

      if File.exists? @path
        @topics = YAML.load_file(@path)
      else
        FileUtils.touch(@path)
        @topics = YAML.load_file(@path)
      end

      if File.exists? @program_directors_path
        @program_directors = YAML.load_file(@program_directors_path)
      else
        FileUtils.touch(@program_directors_path)
        @program_directors = YAML.load_file(@program_directors_path)
      end

    end

    def update
      @util.update_yaml(@directors, @program_directors_path)
    end

    def generate
      @directors = []
      @topics.each do |topic|
        new_director = {}

        topic['programDirector'].each do |pd|
          new_director['photo'] = pd['photo']
          new_director['name'] = pd['name']
          new_director['last_name'] = pd['last_name']
          new_director['email'] = pd['email']
          new_director['bio'] = pd['bio']
          new_director['topic'] = topic['topic']
          new_director['topic_permalink'] = topic['permalink']
          new_director['topics'] = []
          matching = @directors.select do |d|
            d['name'] == new_director['name']
          end

          if matching.any?
            if matching.first['topic'] && matching.first['topic_permalink']
              old_topic = {}
              old_topic['topic'] = matching.first['topic']
              old_topic['permalink'] = matching.first['topic_permalink']
              matching.first['topics'] << old_topic
              matching.first['topic'] = nil
              matching.first['topic_permalink'] = nil
            end
            new_topic = {}
            new_topic['topic'] = new_director['topic']
            new_topic['permalink'] = new_director['topic_permalink']
            matching.first['topics'] << new_topic
          else
            @directors << new_director
          end
        end
      end
      update
    end
  end
end
