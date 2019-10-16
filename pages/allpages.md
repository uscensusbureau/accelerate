---
title: All pages
permalink: /allpages/
layout: secondary-narrow
---
<ol>
{% assign sorted = site.pages | sort: 'permalink' %}
{% for page in sorted %}
  {% if page.permalink %}
    <li style="border-bottom:1px solid #02BFE7;Padding-bottom: 1rem;">
    Link to page: <a href="{{site.baseurl}}{{ page.url }}">{{ page.title }}</a><br>
    Permalink: {{ page.permalink }}<br>
    Layout: {{ page.layout }}
    </li>
  {% endif %}
{% endfor %}
</ol>
