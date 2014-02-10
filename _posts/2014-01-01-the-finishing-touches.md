---
layout: post
title: The Finishing Touches
excerpt: Ready to deploy? Not so fast! Run through a checklist to make sure nothing has fallen through the cracks.
categories: [Articles]
tags: [finishing touches, launch, website]
published: false
---

<span data-typography="I">I’ve heard a saying that</span> goes something like: “A project will always expand to fill the allotted timeframe”. It’s true, even if our time management is impecable, I’m always madly rushing in the last few hours to duck under that looming deadline. But before pushing that “go live” button, think about the finishing touches, the behind-the-scenes details that will help search engines find and index your project, improve the user’s experience and improve the over-all health of the website. The following areas are included in the mental checklist that I go through at the end of every project.

## Validation

Does your site validate? Though you should be checking this throughout your build, you should run your site through a validator like [The W3C Markup Validator](http://validator.w3.org) as you get to the finish line. I agree with a lot of developers that you don't need to be 100% dogmatic about this. You may be including certain tags and are aware that they don’t validate. Just make sure you haven’t messed up your markup or missed an `alt`tag or something. Plus, it is always nice to see that green bar.

## Browser Testing

Perhaps this goes without saying, but make sure your site looks good everywhere you need it to. Screenshots just aren’t good enough. If you are supporting old versions of Internet Explorer invest in a virtual machine (I use [VMWare Fusion](http://www.vmware.com/products/fusion/overview.html)) and put your site through the paces.

## Organization

I’m fairly particular about how my projects are set up. Even so, things can get out of hand. In the winter of your project it’s time to do some spring cleaning. Delete files that you aren’t using or move them to an _archive folder; clear “TO DO” reminders and commented code that you won't be needing to reference anymore; maybe run a [CSS Comb](http://csscomb.com) through your styles. Trust me, it feels good to purge and you don’t want junk sent up to the server.

## Performance

This could be an entire post on its own but make sure you are doing at least these simple things:

* Minify and combine your CSS.
* Minify, concatenate, and (if possible) put your JavaScript at the end of your HTML.
* GZIP your assets and files (in your .htaccess file).
* Optimize all your images.

There are a plethora of online tools, like <a href="https://developers.google.com/speed/pagespeed/insights" target="_blank">Google Page Speed</a>, that you can run your site through to analyze the page speed.

Some other helpful links:

* [HTML5 Boilerplate’s .htaccess File](https://github.com/h5bp/html5-boilerplate/blob/master/.htaccess). Grab at least their GZIP snippet.
* [GZIPwtf.com](http://gzipwtf.com) to make sure all your assets are getting zipped.
* [JPEGmini](http://www.jpegmini.com) to losslessly compress your .jpgs.
* [TinyPNG](http://tinypng.org) to losslessly compress your .pngs.

## Meta and Open Graph Tags
## Icons and Bookmarks
## Humans and Robots
## Analytics and Webmaster Tools