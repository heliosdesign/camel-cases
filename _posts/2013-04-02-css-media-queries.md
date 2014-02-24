---
layout: post
title: CSS Media Queries
categories: [Snippets]
tags: [CSS, media queries, responsive web design]
published: true
---

## Screen Widths:

{% highlight css linenos=table %}
@media screen and (min-width : 500px) {
  /* Engages when screen > 500px */
}

@media screen and (max-width : 500px) {
  /* Engages when screen < 500px */
}
{% endhighlight %}

<!--more-->

## Orientation:

{% highlight css linenos=table %}
@media screen and (orientation : landscape) {
  /* Engages when screen width is > screen height */
}

@media screen and (orientation : portrait) {
  /* Engages when screen height > screen width */
}
{% endhighlight %}

## Aspect Ratios:

{% highlight css linenos=table %}
@media screen and (device-aspect-ratio: 16/9) {
  /* Engages when aspect ratio is at least 16/9 */
}
{% endhighlight %}

##Retina:

{% highlight css linenos=table %}
@media screen and (-webkit-min-device-pixel-ratio : 1.5),
screen and (min-device-pixel-ratio : 1.5) {
  /* Engages when pixel density is > 1.5 */
}
{% endhighlight %}

If you want to see how you can detect media queries from your JavaScript have a look at the Camel Cases article: [Detect Media Queries in JavaScript]({{ site.url }}/detect-media-queries-in-javascript "Detect Media Queries in JavaScript").
