Jekyll::Hooks.register :site, :after_init do |site|
  puts "--------------------"
  puts "starting awards updates..."
  awards_data = SiteData::AwardsData.new(site)
  awards_params = awards_data.create_params

  new_awards_data = awards_data.generate(awards_params)
  awards_data.update(awards_params, new_awards_data)

  # Duplicate above, but for topics/portfolio
  puts "--------------------"
  puts "starting topics updates..."
  topics_data = SiteData::TopicsData.new(site)
  topics_params = topics_data.create_params

  new_topics_data = topics_data.generate(topics_params)
  topics_data.update(topics_params, new_topics_data)

  puts "--------------------"
  puts "starting awards summary updates..."
  awards_summary = SiteData::AwardsSummary.new(site)
  awards_summary.generate

  puts "--------------------"
  puts "updating program directors..."
  program_directors = SiteData::ProgramDirectors.new(site)
  program_directors.generate

end
