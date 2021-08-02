---
layout: sm-toolkit-layout
title: 2020 Redistricting Social Media Toolkit
permalink: /2020-redistricting-toolkit/

hero:
  title: 'Social Media Toolkit: Redistricting Data'
  subtitle: 'The 2020 Census determines congressional representation, informs the allocation of hundreds of billions of dollars in federal funding, and provides data that afects communities for the next 10 years.
  

  You helped us spread the word about the 2020 Census count. Now the redistricing data is in!
  
  
  Social media is a great way to help us share the news.'
  text-on-left: true
  background-img: 
    src: backgrounds/MicrosoftTeams-image-3.jpeg
    alt: "Grid of smiling people with text United States Census Bureau"
  
national-count:
  title: The First Results of the 2020 Census
  subtitle: 'The 2020 Census took a snapshot of all people living in the United States on April 1, 2020 and the results are in. According to the 2020 Census, the number of people living in the United States was 331,449,281. We encourage you to share the items in this toolkit and add your personal touch to these messages to align with the interests of your audience.'

state-counts: 
  title: 2020 Census Population by State or Territory
  subtitle: Share these animations and graphics for each of the 50 states, the District of Columbia, and Puerto Rico.

population-counts:
  title: 2020 Census Apportionment Population Counts
  subtitle: Apportionment is the process of distributing the 435 memberships, or seats, in the U.S. House of Representatives among the 50 states based on the apportionment population counts from the 2020 Census. The “Historical Apportionment Data Map” displays apportionment results for each census from 1910 to 2020.
  post: 'View more than 10 decades of #apportionment and population data by exploring this interactive Historical Apportionment Data Map 👉 [https://go.usa.gov/xHnkH](https://go.usa.gov/xHnkH) #2020Census #CensusBureau'
  images: 
    - src: populationCounts/graphic-1.png
      hasPreview: true
    # - src: populationCounts/graphic-2.png
    #   hasPreview: true
  videos:
    - src: populationCounts/Apportionment2020.gif
      hasPreview: true
    # - src: populationCounts/Density2020.gif
    #   hasPreview: true

links:
  title: Helpful Links for Partners and Stakeholders
  
---

{% capture mainText %}
## How To Use This Toolkit
1. Choose the type of asset you will use (graphic, animation, or video) and the social media channel you plan to post on.
2. Click “DOWNLOAD ASSET” to save the graphic, animation, or video to your device.
3. Highlight and select the text that you want to use for your social media post and copy the text to your clipboard.
4. Go to the social media channel you plan to post on, paste the copied text, and add the downloaded graphic or animation to your post.
{% endcapture %}

<section class="smtk-main-text smtk-section">
  {{ mainText | markdownify }}
</section>

{% include sm-toolkit/links.html 
  data = site.data.smtk.redistricting.links
  class="margin-y-6" %}