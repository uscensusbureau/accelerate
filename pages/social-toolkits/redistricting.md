---
layout: sm-toolkit-layout
title: 2020 Redistricting Social Media Toolkit
permalink: /2020-redistricting-toolkit/

scripts:
  -
    src: https://public.tableau.com/javascripts/api/viz_v1.js
    attrs: 
      - defer
    isExternal: true

hero:
  title: 'Social Media Toolkit: Redistricting Data'
  subtitle: 'The 2020 Census determines congressional representation, informs the allocation of hundreds of billions of dollars in federal funding, and provides data that afects communities for the next 10 years.
  

  You helped us spread the word about the 2020 Census count. Now the redistricing data is in!
  
  
  Social media is a great way to help us share the news.'
  text-on-left: true
  background-img: 
    src: backgrounds/Hero_Image.jpg
    alt: "Polaroids of smiling people on a dark blue field"
  
posts:
  - 
    title: Release Day Save the Date
    subtitle: The U.S. Census Bureau will release redistricting data on August 12th. Share this post with your followers to let them know!
    post: 'View more than 10 decades of #apportionment and population data by exploring this interactive Historical Apportionment Data Map 👉 [https://go.usa.gov/xHnkH](https://go.usa.gov/xHnkH) #2020Census #CensusBureau'
    images: 
      - src: redis/redistricting-data-release-august-12--landscape.png
        hasPreview: true
        alt: "Teal circles on a white field with text 'Redistrictring Data Release: August 12'"
      - src: redis/redistricting-data-release-august-12--ig.png
        hasPreview: true
        alt: "Teal circles on a white field with text 'Redistrictring Data Release: August 12'"

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

{% include sm-toolkit/assets.html header=site.data.smtk.redistricting.social-posts.national-count.header
  data=site.data.smtk.redistricting.social-posts.national-count %}

{% comment %}
  {% include sm-toolkit/dataviz.html id='viz1627999344640' %}
{% endcomment %}

{% include sm-toolkit/links.html 
  data = site.data.smtk.redistricting.links
  class="margin-y-6" %}