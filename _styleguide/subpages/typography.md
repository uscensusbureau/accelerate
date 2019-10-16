---
title: Typography
permalink: /styleguide/typography/
---

### Font family
<section class="usa-grid-full">
  <section class="usa-grid-full">
    <div class="usa-width-two-thirds usa-section">
      <div class="box-base-wrapper">
      $font-serif: 'Work Sans', sans-serif;<br>
      $font-mono: 'Overpass Mono', monospace;<br>
      $font-sans: 'Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Roboto', Arial, sans-serif;<br>
      </div>
      <div class="box-rem-wrapper" style="">
        <div class="box-rem"></div><span>1rem = 10px</span>
      </div>
    </div>
  </section>
  <div class="usa-width-one-half font-sans">
    <p>Work Sans</p>
    <div class="text-huge"> Aa </div>
    <p>A B C D E F G H I J K L M N O P Q R S T U V W Z Y Z</p>
    <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
    <p>0 1 2 3 4 5 6 7 8 9</p>
    <a href="https://fonts.google.com/specimen/Work+Sans">More information</a>
  </div>
  <div class="usa-width-one-half font-mono">
    <p>Overpass Mono</p>
    <div class="text-huge"> Aa </div>
    <p>A B C D E F G H I J K L M N O P Q R S T U V W Z Y Z</p>
    <p>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
    <p>0 1 2 3 4 5 6 7 8 9</p>
    <a href="https://fonts.google.com/specimen/Overpass+Mono">More information</a>
  </div>
</section>

{% include /styleguide/details-code.html
   title='fonts'
   description='We are overriding the font used by the [U.S. Web Design Standards](https://standards.usa.gov/components/typography/) with the font used by the [18F Brand](https://pages.18f.gov/brand/typography/).'
   scss_ref='https://github.com/18F/18f.gsa.gov/blob/master/_sass/_core/variables.scss#L20-L21'
   uswds_ref='https://github.com/18F/18f.gsa.gov/blob/master/_sass/_libs/wds/stylesheets/core/_variables.scss#L17-L18'
%}

---

### Typesetting

#### Headings
<h1 class="page-title">Heading 1. Page Title</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>

#### Alternate Headings

<h2 class="header-top-bar">Heading bar</h2>
<h2 class="header-light">Heading light</h2>


#### Paragraphs
<p class="text-large">
<strong>P Large.</strong> Current grantees and alumni, learn how you can <a href="#">help spread the word about the NSF SBIR/STTR program</a>.
</p>
<p class="text-medium">
<strong>P medium.</strong> Current grantees and alumni, learn how you can <a href="#">help spread the word about the NSF SBIR/STTR program</a>.
</p>
<p>
<strong>P (default).</strong> Current grantees and alumni, learn how you can <a href="#">help spread the word about the NSF SBIR/STTR program</a>.
</p>
<p class="text-small">
<strong>P small.</strong> Current grantees and alumni, learn how you can <a href="#">help spread the word about the NSF SBIR/STTR program</a>.
</p>
<p class="text-alt">
<strong>P alt.</strong> Current grantees and alumni, learn how you can <a href="#">help spread the word about the NSF SBIR/STTR program</a>.
</p>
<p class="p-subhead">
<strong>P subhead.</strong> Current grantees and alumni, learn how you can <a href="#">help spread the word about the NSF SBIR/STTR program</a>.
</p>

#### Lists

<ul>
<li>List item one</li>
<li>List item one</li>
<li>List item one</li>
</ul>
<ol>
<li>List item one</li>
<li>List item one</li>
<li>List item one</li>
</ol>



{% capture codeblock %}{% raw %}

{% endraw %}{% endcapture %}

{% capture type_description %}
To use headers, either use the semantic element, or reference it with a dot-delimited class.

For example:

`<p class =".h1"></p>` would render the same as `<h1></h1>`.

For size reference:

Element | Font size (rem) | Font size (px)
--- | --- | ---
h1 | 3.8rem | 38px
h2 | 3.4rem | 34px
h3 | 2.3rem | 23px
h4 | 2.1rem | 21px
h5 | 1.4rem | 14px
p | 1.8rem | 18px

{% endcapture %}
{% include /styleguide/details-code.html
   title='typography-example'
   content=codeblock
   description=type_description
   uswds_ref='https://github.com/18F/18f.gsa.gov/blob/master/_sass/_libs/wds/stylesheets/core/_variables.scss#L2-L15'
   scss_ref='https://github.com/18F/18f.gsa.gov/blob/master/_sass/_core/variables.scss#L2-L14'
%}

---

### Font weights

There are only two font weights used on 18f.gsa.gov.

{% capture codeblock %}{% raw %}
<p class="p-bold">Bold</p>
<p>Normal</p>
{% endraw %}{% endcapture %}

{% capture weight_description %}
Font weight is directly inherited from the U.S. Web Design Standards.

**Quick usage reference:**

SCSS variable | CSS class | Font weight
-- | -- | ---
**$font-bold** | **`p-bold`** | **700**
$font-normal | `p-normal` (only needs to be used to be used to override another class) | 400
{% endcapture %}
{% include /styleguide/details-code.html
   title='type-weight'
   content=codeblock
   description=weight_description
   uswds_ref='https://github.com/18F/18f.gsa.gov/blob/master/_sass/_libs/wds/stylesheets/core/_variables.scss#L20-L21'
%}

---

### Links

{% capture codeblock %}{% raw %}
<div class="styleguide-links-section">
  <a href="#">Active Link</a>
  <a href="#" class="visited">Visited</a>
</div>

{% endraw %}{% endcapture %}
{% include /styleguide/details-code.html
   description='To use a link, specify the text, direction that the arrow is pointing, and reference the SVG file for the corresponding arrow.'
   title='links-example'
   content=codeblock
%}
