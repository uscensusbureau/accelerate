---
title: Get Out The Count Challenge Videos
permalink: /video-database/
layout: interior
description: Get Out The Count Challenge Videos
nav:
  color: light
  page: about
hero:
  color: blue
  callout:
    text: Get Out The Count Challenge Videos
    subtext: We received hundreds of video submissions in over a dozen languages from all across the United States. Search and share videos below.


---
<div  class="usa-section usa-content usa-grid bottom-space" markdown="1" style="margin-top:-75px; margin-bottom:100px;">
# Browse and share from hundreds of video submissions
<p>Videos sorted alphabetically. You can use the filters to refine your results. </p>
<p>This content is NOT produced by the U.S. Census Bureau. These videos were submitted by the public in response to the Get Out the Count Video Prize Challenge (see: <a href="https://www.challenge.gov/challenge/2020-census-get-out-the-count-video-challenge/">https://www.challenge.gov/challenge/2020-census-get-out-the-count-video-challenge/</a>), under the authority of the America Competes Reauthorization Act of 2010- PUBLIC LAW 111–358—JAN. 4, 2011. The challenge opened on 03/12/2020 12:00 PM ET and closed on 05/07/2020 11:59 PM ET. </p>
<form id="video-filter-form" class="top-space">
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
      <input class="filter-button" type="submit" value="Filter">
      <span id="reset-filter">Reset &#127335;</span>
    </div>
  </div>
</form>

</div>

<div class="usa-grid top-space video-grid">
  <h2> Top Picks </h2>
  {% for submission in site.data.video-playlist %}
  {% if submission.top-pick == true %}
    <div id="video-card-{{submission.id}}" class="video-div usa-width-one-third finalist-block">
      <div class="header">
        <h3><a href="{{ submission.link }}" target="_blank" class="title-link">{{ submission.title }}</a></h3>
        <h6 class="video-hidden">{{submission.id}}</h6>
        {% if submission.team != null %}
          <p class="card-text">{{submission.team}}</p>
        {% else %}
          <p class="card-text">{{submission.name}}</p>
        {% endif %}
      </div>
      <div class="preview-img">
        <a href="{{ submission.link }}" target="_blank" class="title-link"><img src="{{site.baseurl}}/assets/img/video-posters/{{submission.image}}" alt="{{ submission.image-alt}}"></a>
      </div>
      <div class="footer">
        {% if submission.language %}
          <span class="tag language-tag">{{submission.language | upcase }}</span>
        {% endif %}
        {% if submission.community != '' and submission.community != 'general'%}
          {% assign communities = submission.community | split: ", " %}
          {% for item in communities %}
            <span class="tag communities-tag">{{item | upcase }}</span>
          {% endfor %}
        {% endif %}
        {% if submission.best-of != null %}
          <span class="best-of-tag tag">BEST OF {{submission.best-of | upcase }}</span>
        {% endif %}
      </div>
    </div>
  {% endif %}
  {% endfor %}
  </div>
  <div id="view-more" class="view-more-container">
  <h2> Complete Search Results </h2>
  <p>Search results show a list of video submissions that passed compliance, sorted alphabetically.</p>
  {% for submission in site.data.video-playlist %}
  {% if submission.top-pick != true %}
  <div id="video-card-{{submission.id}}" class="video-div video-list">
    <div>
      <div class="finalists-text">
        <h3><a href="{{ submission.link }}" target="_blank">{{ submission.title }}</a></h3>
        <h6 class="video-hidden">{{submission.id}}</h6>
        {% if submission.team != null %}
          <p>{{submission.team}}
        {% else %}
          <p>{{submission.name}}
        {% endif %}
        <br>
        {% if submission.language %}
          <span class="tag language-tag">{{submission.language | upcase }}</span>
        {% endif %}
        {% if submission.community != '' and submission.community != 'general'%}
          {% assign communities = submission.community | split: ", " %}
          {% for item in communities %}
            <span class="tag communities-tag">{{item | upcase }}</span>
          {% endfor %}
        {% endif %}
        {% if submission.best-of != null %}
          <span class="best-of-tag tag">BEST OF {{submission.best-of | upcase }}</span>
        {% endif %}
        </p>
      </div>
    </div>
  </div>
  {% endif %}
  {% endfor %}
  </div>
