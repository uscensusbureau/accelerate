---
title: Layouts
permalink: /styleguide/layouts/
---

### Landing page layout

Located at [_layouts/landing.html](https://github.com/18F/18f.gsa.gov/tree/master/_layouts/primary.html), this is the layout that is used for the landing page on seedfund.nsf.gov.

#### Landing page general front matter

The primary template uses [Jekyll front matter](https://jekyllrb.com/docs/frontmatter/) heavily to account for variations within the site. Below are the the potential front matter attributes that you can use. Some are listed as _(optional)_. These can be used to alter the appearance of a page.

Attribute | Value | Type | What it does
--- | --- | --- | ---
`title` | `NSF SBIR` | String | Title for the page visible in blue banner at the top of the page
`permalink` | `/` | String | Path that the page renders relative to the site's `baseurl`
`layout` | `landing`  | String | Sets the page layout to `primary`



#### Landing page hero front matter

Attribute | Value | Type | What it does
--- | --- | --- | ---
`hero: image` | `/assets/img/hero-2.png` | String | Path to the image to used for the background of the hero
`hero: callout: alt` | `Up to $225,000 seed funding.` | String |  Text to use in the hero title
`hero: callout: text` | `0% equity.` | String |  Additional text to use in the hero title
`hero: button: href` | `/how-to-apply/` | String |  URL where you want the button to go
`hero: button: text` | `Start your application` | String | Main button text
`hero: button: subtext` | `Deadline:` | String |  Additional supporting button text

---

### Secondary page layout

The most common layout on the site. Used for sub pages.

Located at [_layouts/project-page.html](https://github.com/18F/18f.gsa.gov/tree/master/_layouts/project-page.html), this is the template for creating new project pages as well as [project cards]({{ site.baseurl }}/styleguide/components/#project-cards) that show up at [/what-we-deliver/]({{ site.baseurl }}/what-we-deliver/).

#### Secondary page front matter

The primary template uses [Jekyll front matter](https://jekyllrb.com/docs/frontmatter/) heavily to account for variations within the site. Below are the the potential front matter attributes that you can use. Some are listed as _(optional)_. These can be used to alter the appearance of a page.

Attribute | Value | Type | What it does
--- | --- | --- | ---
`title` | `NSF SBIR` | String | Title for the page visible in blue banner at the top of the page
`permalink` | `/about/` | String | Path that the page renders relative to the site's `baseurl`
`layout` | `secondary`  | String | Sets the page layout to `secondary`

---

### Grid

The layout and grid structure inherits from the U.S. Web Design Standards and makes some slight adjustments. Layout changes are not overrides of the standards, but a handful of CSS classes have been added to compliment the Standards.

Class name | What it does
--- | ---
[`usa-width-tablet`](https://github.com/18F/18f.gsa.gov/blob/master/_sass/_core/grid.scss) | A class that allows certain content, namely the [project cards]({{ site.baseurl }}/styleguide/project-cards/), and the [blog previews]({{ site.baseurl }}/styleguide/blog-components/#post-previews) to respond at a different breakpoint, [`$tablet-screen`](https://github.com/18F/18f.gsa.gov/blob/master/_sass/_core/variables.scss) (768px).
[`usa-flex`](https://github.com/18F/18f.gsa.gov/blob/master/_sass/_components/layout.scss) | Wrapper class that sets `display: flex`, and can be used to create more flexible layouts.
Classes used with `usa-flex` | `usa-flex-baseline`, `usa-flex-end`, `usa-flex-pull-right`, `usa-flex-always`, `usa-flex-wrap`, `usa-flex-vertically-top`, `usa-flex-pull-right`, and `usa-flex-vertically-bottom`.
[`usa-grid-reversed`](https://github.com/18F/18f.gsa.gov/blob/master/_sass/_core/grid.scss) | This class can be used to alternate the order that content appears in mobile vs desktop screen widths.
`content-wide` | In the Standards, the primary way to improve readability is via the `usa-content` class, which [limits content to 75 characters](https://standards.usa.gov/components/typography/#typesetting). Instead of relying on this mechanism, the site wraps site content with the `content-focus` class, [limiting the entire grid to roughly 100 characters](https://github.com/18F/18f.gsa.gov/blob/master/_sass/_components/layout.scss).
`content-focus` | When the the grid needs to be wider, `content-wide` is used and the content width is controlled by using partial grid layouts.
