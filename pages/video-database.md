---
title: Get Out The Count Video Submission Database
permalink: /video-database/
layout: interior
description: Video Prize Submission Database
nav:
  page: about
image: /assets/img/graphics/video-prize-preview.png
hero:
  color: multi
  callout:
    text: Get Out The Count Video Submission Database
    subtext: We received hundreds of video submissions in over a dozen languages from all across the United States. Search and share videos below.


---
<div  class="usa-section usa-content usa-grid bottom-space" markdown="1" style="margin-top:-75px; margin-bottom:100px;">
# Browse and share from hundreds of video submissions
</div>

<div class="usa-grid top-space">
  <h2> Top Picks </h2>
  {% for submission in site.data.video-playlist %}
  {% if submission.top-pick == true %}
    <div class="usa-width-one-third finalist-block" style="height:350px;">
      {% if submission.html %}
        {{ submission.html }}
        <h3>{{ submission.title }}</h3>
      {% else %}
        <a href="{{ submission.link }}" target="_blank"><h3>{{ submission.title }}</h3></a>
      {% endif %}
      {% if submission.team != null %}
        <p>Created by: {{submission.team}}</p>
      {% else %}
        <p>Created by: {{submission.name}}</p>
      {% endif %}
    </div>
    {% endif %}
  {% endfor %}
  <div class="usa-width-two-thirds testimonial" markdown="1">
  <div class="divider"></div>
  <h4>“When we launched this competition in March, we could never have anticipated the challenges we face as a nation and need for continued support of our Census. These inspiring and engaging videos help to reach hard-to-count communities, ensuring people are counted and more voices are heard through Census completion.”</h4>
  <h4> - Ron Jarmin, Deputy Director, U.S. Census Bureau. </h4>
  <div class="divider"></div>
  </div>
</div>

<div class="usa-grid top-space bottom-space " markdown="1">
<img src="{{ site.baseurl }}/assets/img/graphics/doodle-01.svg" alt="Decorative line break" />
# Still feeling creative?
## Check out our  <a href="https://accelerate.census.gov/get-involved/virtual-create-a-thon/">Virtual create-a -thon model</a> and Get Out The Count <a href="https://www.creativesforthecount.org/gallery/">social media shareables</a>.
</div>
<div class="usa-grid top-space bottom-space">
<img src="{{ site.baseurl }}/assets/img/graphics/doodle-04.svg" alt="Decorative line break" />
<img src="{{ site.baseurl }}/assets/img/graphics/doodle-05.svg" alt="Decorative line break" />
<img src="{{ site.baseurl }}/assets/img/graphics/doodle-03.svg" alt="Decorative line break" />
</div>
