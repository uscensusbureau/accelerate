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
<form id="video-filter-form">
  <div class="grid-row">
    <div class=" usa-width-one-fourth">
      <div class="usa-accordion video-filter-form">
        <h2><button class="usa-accordion-button" aria-expanded="false" aria-controls="1">
          Community
        </button></h2>
        <div id="1" class="usa-accordion-content filters-box">
          {% for community in site.data.filters.communities %}
            <input id="{{community | slugify }}" type="checkbox" name="filter-checkbox" class="filter-checkbox" value="{{community | slugify }}">
            <label for="{{community | slugify }}">{{community}}</label>
          {% endfor %}
        </div>
      </div>
    </div>
    <div class=" usa-width-one-fourth">
      <div class="usa-accordion">
        <h2><button class="usa-accordion-button" aria-expanded="false" aria-controls="2">
          Language
        </button></h2>
        <div id="2" class="usa-accordion-content filters-box">
        {% for language in site.data.filters.languages %}
          <input id="{{language | slugify }}" type="checkbox" name="filter-checkbox" class="filter-checkbox" value="{{language | slugify }}">
          <label for="{{language | slugify }}">{{language}}</label>
        {% endfor %}
        </div>
      </div>
    </div>
    <div class=" usa-width-one-fourth">
      <div class="usa-accordion">
        <h2><button class="usa-accordion-button" aria-expanded="false" aria-controls="3">
          Best Of
        </button></h2>
        <div id="3" class="usa-accordion-content filters-box">
          {% for category in site.data.filters.best %}
            <input id="{{category | slugify }}" type="checkbox" name="filter-checkbox" class="filter-checkbox" value="{{category | slugify }}">
            <label for="{{category | slugify }}">{{category}}</label>
          {% endfor %}
        </div>
      </div>
    </div>
    <div class="usa-width-one-fourth">
      <input type="submit" value="Filter">
      <p style="display:inline-block;" id="reset-filter">Reset &#127335;</p>
    </div>
  </div>
</form>

</div>

<div class="usa-grid top-space video-grid">
  <h2> Top Picks </h2>
  {% for submission in site.data.video-playlist %}
  {% if submission.top-pick == true %}
    <div id="video-card-{{submission.id}}" class="video-div usa-width-one-third finalist-block">
      {% if submission.html %}
        {{ submission.html }}
        <h3>{{ submission.title }}</h3>
      {% else %}
        <a href="{{ submission.link }}" target="_blank"><h3>{{ submission.title }}</h3></a>
      {% endif %}
      <h4 class="video-hidden">{{submission.language}}</h4>
      <h5 class="video-hidden">{{submission.community}}</h5>
      <h6 class="video-hidden">{{submission.id}}</h6>
      {% if submission.team != null %}
        <p>Created by: {{submission.team}}</p>
      {% else %}
        <p>Created by: {{submission.name}}</p>
      {% endif %}
    </div>
  {% endif %}
  {% endfor %}
  <h2> Search Results </h2>
  {% for submission in site.data.video-playlist %}
  <div id="video-card-{{submission.id}}" class="video-div video-hidden usa-width-one-third finalist-block">
    <div class="finalists">
      <div class="finalists-text">
        <a href="{{ submission.link }}" target="_blank"><h3>{{ submission.title }}</h3></a>
        <h4 class="video-hidden">{{submission.language}}</h4>
        <h5 class="video-hidden">{{submission.community}}</h5>
        <h6 class="video-hidden">{{submission.id}}</h6>
        {% if submission.team != null %}
          <p>Created by: {{submission.team}}</p>
        {% else %}
          <p>Created by: {{submission.name}}</p>
        {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
