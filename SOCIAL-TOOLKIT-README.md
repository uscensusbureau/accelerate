# Social Media Toolkit Generation

## Background 
In 2021, in collaboration with CNMP, a few pages were developed to help Census Bureau partners have access to relevant social media assets. These toolkit pages, instead of being hosted on a standalone census.gov site were added on to the accelerate.census.gov domain and thus live in this repository.

These pages are quite different in style and functionality than the rest of the site. 

This guide outlines the key points in maintaining these pages as well as creating new pages should the need arise.

## Live URLs
- [Apportionment Results Toolkit](https://accelerate.census.gov/2020-results-toolkit)
- [Redistricting Results Toolkit](https://accelerate.census.gov/2020-redistricting-toolkit/) 

## Repository Structure

- **Pages:** Both pages' content lives in [`/pages/social-toolkits`](https://github.com/uscensusbureau/accelerate/tree/main/pages/social-toolkits)
- **Layout:** Both pages make use of the [`/_layouts/sm-toolkit-layout.html` layout](https://github.com/uscensusbureau/accelerate/blob/main/_layouts/sm-toolkit-layout.html) 
- **Includes / partials:** All relevant `_includes` are in the `_includes/sm-toolkit` folder. 

- **Styling:** All toolkit-specific styling is contained within [`/_sass/smtk.scss`](https://github.com/uscensusbureau/accelerate/blob/main/_sass/smtk.scss)
- **Data:** All data for these pages ("more helpful link" data, static and video asset data, etc.) are contained within the following folder and file: 
    - [`_data/smtk`](https://github.com/uscensusbureau/accelerate/tree/main/_data/smtk)
    - [`_data/2020-data-release.yml`](https://github.com/uscensusbureau/accelerate/blob/main/_data/2020-data-release.yml)

## Creating a New Page

The easiest way to create a new page would be to duplicate either `/pages/social-toolkits/redistricting.md` or `/pages/social-toolkits/apportionment.md` and place the new page in the same `social-toolkits` folder.

### Hero Section
Edit the `hero` object in the front matter with the content of your new page.

Place the background image in `/assets/img/backgrounds/`

### Body Text
Note how the main body text below the hero section is captured using markdown between `{% capture %}...{% endcapture %}` tags. Copy that pattern.

### The actual social media posts
Then there are different `_include` files for displaying different groupings of sample posts. You will then pick and choose which ones are best suited to your specific toolkit.

#### Used in the Apportionment page:
- `assets.html`: A generic layout for displaying static and/or video assets. A good choice if you don't need any interaction / switching between different asset sets.
- `territories.html`: Switches between many different asset sets using a dropdown (such as one that selects a state or territory).
- `creative-resources.html`: Also switches b/w different asset sets but can hold different formats within including a gallery of images.

#### Used in the Redistricting page:
A much simpler layout which makes repeated use of the `assets.html` include file. See `redis-sample-posts.html` for details. This is a fine pattern to copy!

### Data Visualizations
If your preview page has data visualizations provided by Census, you can use `_includes/sm-toolkit/dataviz.html` as an example, but this file is not extensible.

Simply copy and paste the embed code from whatever data visualization you want to use and paste it into your layout.

### Links
Use the `_includes/sm-toolkit/links.html` file to recreate the list of "Helpful Links" found at the bottom of both toolkits.

This partial ingests a data file containing the lists of links to display along with the title of each list.

For lists of links whose hrefs follow a pattern (the same resource translated into different languages, for example), you can provide a `link-prefix`, `link-suffix`, and `languages` property on a list, and the partial will programmatically generate the hrefs. This can save you some copy and pasting. See `_data/smtk/redistricting/links.yml` lines 113 - 131 for details. For translation pages whose href doesn't exactly match the name of the language (as in, you want to display "Chinese (Simplified)", but the href has the pattern "simplified-chinese"), you can specify an explicit `href` property of the language.

### Uploading assets
It is important to note that the container Federalist uses to build the site has a 1GB cap. So be careful about adding too many and too large assets to your toolkits! At the same time, it's important that the toolkits contain assets at the proper size for partners. 

For large assets do not upload the asset with this repo. Instead, upload them to an external bucket such as S3 and then link to that asset. When uploading to s3, make sure to set "content-disposition" to "attachment".
