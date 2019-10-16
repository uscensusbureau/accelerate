---
title: Colors
permalink: /styleguide/colors/
---

### Primary colors

<ul class="palette">
  <li markdown="1">
  <span class="block background-primary"></span>
  `$color-primary`

  #0071BC
  </li>
  <li markdown="1">
  <span class="block background-primary-darker"></span>
  `$color-primary-darker`

  #205493
  </li>
  <li markdown="1">
  <span class="block background-primary-darkest"></span>
  `$color-primary-darkest`

  #112E51
  </li>
</ul>
<ul class="palette">
  <li markdown="1">
  <span class="block background-base"></span>
  `$color-base`

  #212121
  </li>
  <li markdown="1">
  <span class="block background-gray-dark"></span>
  `$color-gray-dark`

  #323A45
  </li>
  <li markdown="1">
  <span class="block background-gray-light"></span>
  `$color-gray-light`

  #AEB0B5
  </li>
  <li markdown="1">
  <span class="block background-white"></span>
  `$color-white`

  #FFFFFF
  </li>
</ul>
### Secondary colors
<ul class="palette">
  <li markdown="1">
  <span class="block background-primary-alt"></span>
  `$color-primary-alt`

  #02BFE7
  </li>
  <li markdown="1">
  <span class="block background-primary-alt-darkest"></span>
  `$color-primary-alt-darkest`

  #046B99
  </li>
  <li markdown="1">
  <span class="block background-primary-alt-dark"></span>
  `$color-primary-alt-dark`

  #00A6D2
  </li>
  <li markdown="1">
  <span class="block background-primary-alt-light"></span>
  `$color-primary-alt-light`

  #9BDAF1
  </li>
  <li markdown="1">
  <span class="block background-primary-alt-lightest"></span>
  `$color-primary-alt-lightest`

  #E1F3F8
  </li>
  <li markdown="1">
  <span class="block background-secondary"></span>
  `$color-secondary`

  #FFF039
  </li>
  <li markdown="1">
  <span class="block background-secondary-darkest"></span>
  `$color-secondary-darkest`

  #F1E235
  </li>
  <li markdown="1">
  <span class="block background-secondary-dark"></span>
  `$color-secondary-dark`

  #FFE61A
  </li>
  <li markdown="1">
  <span class="block background-secondary-light"></span>
  `$color-secondary-light`

  #FFF79C
  </li>
  <li markdown="1">
  <span class="block background-secondary-lightest"></span>
  `$color-secondary-lightest`

  #FFFAC3
  </li>
</ul>
### Background colors
<ul class="palette">
  <li markdown="1">
  <span class="block background-light-neutral"></span>
  `$color-Light-neutral`

  #F5FBFC
  </li>
  <li markdown="1">
  <span class="block background-light-blue"></span>
  `$color-light-blue`

  #E0F3F8
  </li>
  <li markdown="1">
  <span class="block background-gray-warm-light"></span>
  `$color-gray-warm-light`

  #E4E2E0
  </li>
</ul>
### Tertiary colors
<ul class="palette">
  <li markdown="1">
  <span class="block background-tertiary"></span>
  `$color-tertiary`

  #E31C3D
  </li>
  <li markdown="1">
  <span class="block background-tertiary-darkest"></span>
  `$color-tertiary-darkest`

  #981B1E
  </li>
  <li markdown="1">
  <span class="block background-tertiary-dark"></span>
  `$color-tertiary-dark`

  #CD2026
  </li>
  <li markdown="1">
  <span class="block background-tertiary-light"></span>
  `$color-tertiary-light`

  #E59393
  </li>
  <li markdown="1">
  <span class="block background-tertiary-lightest"></span>
  `$color-tertiary-lightest`

  #F9DEDE
  </li>
</ul>

{% capture colors_description %}
We are primarily using [18F Brand colors](https://pages.18f.gov/brand/color-palette/).

Site-specific colors, `$color-medium-hover` and `$color-bright-hover` were created as web-specific extensions of the 18F Brand.

U.S. Web Design standards colors, `$color-gray` and `$color-gray-lightest`, were pulled for utility use.
{% endcapture %}

{% include /styleguide/details-code.html
   title='colors'
   description=colors_description
   scss_ref='https://github.com/18F/18f.gsa.gov/blob/master/_sass/_core/variables.scss#L25-L35'
   uswds_ref='https://github.com/18F/18f.gsa.gov/blob/master/_sass/_libs/wds/stylesheets/core/_variables.scss#L24-L74'
%}

---

### Backgrounds
{% capture styleguide_background %}{% raw %}
<section class="usa-grid-full">
  <div class="usa-width-one-half">
    <div class="background-dark styleguide-bg-box">
      <div class="p-bold">
        <p>$color-dark
          <br>Hero, Header</p>
      </div>
      <p class="section-heading">Highlight: $color-bright</p>
      <p>Text: $color-inverse</p>
    </div>
    <div class="background-medium styleguide-bg-box">
      <div class="p-bold">
        <p>$color-medium
          <br>Navigation, Fields, Page</p>
      </div>
      <p>Text: $color-inverse</p>
    </div>
  </div>
  <div class="usa-width-one-half">
    <div class="background-gray styleguide-bg-box">
      <div class="p-bold">
        <p>$color-gray-lightest
        <br>Banner & Footer</p>
      </div>
      <p>Text: $color-black</p>
    </div>
    <div class="background-white styleguide-bg-box">
      <div class="p-bold">
        <p>$color-inverse
        <br>Navigation, Fields, Page</p>
      </div>
      <p>Text: $color-black</p>
    </div>
  </div>
</section>
{% endraw %}{% endcapture %}

{% capture backgrounds_description %}
We are using the [18F Brand](https://pages.18f.gov/brand/color-palette/) color palette for our background colors.

Instead of overriding the SCSS classes and variables used by the U.S. Web Design Standards, we have created a parallel set of background color classes and variables.

CSS class | SCSS variable
--- | ---
`background-dark` | `$color-dark`
`background-medium` | `$color-medium`
`background-gray` | `$color-gray`
`background-white` | `$color-inverse`
{% endcapture %}
{% include /styleguide/details-code.html
   title='background-colors-example'
   content=styleguide_background
   lang='html'
   description=backgrounds_description
   scss_ref='https://github.com/18F/18f.gsa.gov/blob/master/_sass/_components/layout.scss#L121-L189'
%}
