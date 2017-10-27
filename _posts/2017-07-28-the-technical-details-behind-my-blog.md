---
title: The Technical Details Behind My Blog
date: 2017-07-28 13:30:00 -0000
excerpt: The full scoop on why and how I created my own GitHub pages hosted blog and the technologies I used
tags: [blog, wordpress, GitHub Pages, CloudFlare, BootStrap]
comments: true
show: true
---
## Overview

The full scoop on why and how I created my own GitHub pages hosted blog and the technologies I used

## Why Go Self Designed?

This started out as a learning exercise. 

I have played with GitHub pages before on my [Gallifrey](https://gallifreyapp.co.uk) project & also played with [CloudFlare](https://www.cloudflare.com/) there too, but it was all based on standard [GitHub pages](https://pages.github.com) templates and no blogging capability.

I have also used [Bootstrap](http://getbootstrap.com/) on a couple of work projects, so wanted to experiment and get more familiar with the inner workings of GitHub pages, or rather [Jekyll](https://jekyllrb.com/).

I had also never linked or worked with things like comment sections, or social sharing.  Both are key to a successful blog, so this would be some interesting learning along the way.

## The Design

My idea was simple, keep it clean and minimalist.  But when on mobile, really strip down so only the content is on show.

I wanted a gradient background from my favourite HEX colour (#ABCDEF) to white with a white rounded content panel sitting dead centre with a little shadow.

The content panel is the broken down into 4 sections:
* Header
* Content
* Sidebar
* Footer

### Header

The header is a little under-utilised at present, I have a very simple title and navigation links.

The navigation links compress into a drop down on mobile to save on screen space which is a nice trick I learnt how to do using bootstraps styling to show or hide different content on different screen sizes.

### Content

The content area is quite rightly the largest section, it’s easy to read with black text on white background and it nicely framed with borders on all sides joining other content

### Sidebar

The sidebar is only visible on medium or large devices (i.e. phones or portrait tablets will not show it).

I’ve broken the sidebar into 3 vertical sections.  

The first has my photo and links to my social networks.  These icons are provided by [Font Awesome](http://fontawesome.io/icons/) They provide a CSS you can link to and add CSS tags to include little images.  With a bit of styling, these become link buttons with a nice hover effect!

The second is the latest 3 blog posts I have made (plus RSS link – another font awesome icon). 

The third is a widget with my Twitter timeline (created by [Twitter]( https://dev.twitter.com/web/embedded-timelines)).

The sidebar helps keep the content from looking too wide on larger screens, whilst also providing links off to other useful items.

### The Footer

Like the header, this is very underused.  I think in the future I may have some additional content to put here, but not sure what just yet!

## Blog Posts

### Design/Layout

I wanted to keep things how people expect to see blog posts, to up top we have the title, the publish date some tags and a comment count.

This is followed by social sharing buttons provided by [AddThis](https://www.addthis.com/).  AddThis enable automatic recommendation of what social sharing to show based on usage, but I’ve gone with the static I choose approach for now.  They allow for remote customisation of the buttons on their side which update in real-time & provide metrics on social shares which is kind of cool!

The main content of the post is separated from the social sharing with a horizontal bar top and bottom.

Under the post content is the [Disqus](https://disqus.com/). I’ve also never used Disqus before and it was surprisingly easy to add to the posts.  A quick sign-up process and a bit of Javascript and we are up and running.  Again, Disqus has analytics and comes complete with comment moderations by default

### Post List

As with most blogs, there is a standard page with all the posts, I’ve gone for a paginated approach with a maximum of 5 posts per page.  This it the bit that took me the longest to get working due to the complexity of Jekyll in this area.  There are a lot of tricks you need to know to get it working such as not using perma links and the page must be HTML and not markdown!

The net result though after that effort is a nice thing, I’ve made sure to include the date, tags and comment count on these too, but there is no sharing.

This page also (like the sidebar) links off to my blog RSS feed.

## Static Content

I had a couple of pages on my old Wordpress blog talking about me, my open source software and links to other blogs and websites I read/follow.

I’ve migrated these pretty much as was, but plan on sprucing that content up as time goes on as it’s a little outdated looking.

## Hosting/DNS/SSL/Caching/Analytics

### Hosting

The site is hosted purely on GitHub pages, this is free to use (if the repository is public).  It also means that I can get reader updates should I make any silly spelling mistakes (which is almost certain to happen).  This was a completely trivial exercise of creating a repository on GitHub.com and adding my pages to it!

### DNS

It took me a while to decided exactly what DNS I wanted to get and settled with blyth.me.uk.  A CNAME file in the root of my repository and a few DNS records added with my DNS provider and I was up and running!

### SSL

You could say that for a site like mine SSL is overkill.  But when a service like CloudFlare is offering is as part of their free package you would be a fool not to take it!

All I needed to do was update my DNS nameservers over to CloudFlare, they migrated the entries I had already created with the DNS provider.  Having turned on “Always HTTPS” they even handle the automatic redirects for me!

### Caching

Linking nicely from SSL, CloudFlare also provide free caching.  This doesn’t support HTML files as standard, but you can create a page rule to state all content on the domain should be cached.  I’ve set this up with a 2-day cache in CloudFlare for all content.

This has caught me out once when making changes but a quick cache purge on their website and I could see my changes instantly!

### Analytics

The WordPress site I came from had analytics all built in.  I didn’t want to lose this visibility, so have added [Google Analytics](https://analytics.google.com/analytics/web) to my site.  I already had a Google Analytics account setup from Gallifrey, so this is just a second “Property”

## SEO

Jekyll has a neat plugin called [Jekyll-SEO](https://github.com/jekyll/jekyll-seo-tag).  This takes some configuration information on the site and adds a whole load of meta content into the HEAD of all pages.  This helps improve SEO and means links on social networks get nice looking cards!

## The Cost

The cost was something I wanted to keep as low as possible.

I think I have achieved this, my only cost being my domain name.

A win for hosting yourself I would say!
