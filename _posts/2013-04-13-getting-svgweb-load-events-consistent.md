---
layout: post
title: Getting SVGWeb Load Events to Fire Consistently
excerpt: SVGWeb is an awesome way to embed complicated interactive SVG elements into your web site. But if it’s not initialized properly you could end up with a big fat error instead.
categories: [Articles]
tags: [Flash, JavaScript, Load Event, SVG, SVGWeb]
hashtag: ccLoadSVGWeb
status: publish
type: post
published: true
---
<span data-typography="T">The audience for this post</span> will definitely be small, but hopefully I alleviate at least one person’s frustration. I’ve used SVGWeb on a few different projects now. Its biggest advantage is that it renders your SVG creations in non-capable browsers with Flash. I’ve had very little trouble with the library except in one area: getting SVGWeb load events to fire consistently in different browsers while using an embedded SVG files. 

Nine times out of ten everything will click just fine, and then all of a sudden... no load.<!--more--> There are detailed descriptions of a few different ways to properly initiate JavaScript in [SVGWeb’s documentation](http://svgweb.googlecode.com/svn/trunk/docs/UserManual.html), but the only sure fire method I’ve found is a bit of a home-brew.

First of all, your SVG embed looks something like this:

{% highlight html linenos=table %}
<!--[if !IE]>-->
  <object data="example.svg" type="image/svg xml"
      width="1250" height="750" id="mySVGObject"> 
<!--<![endif]-->
<!--[if lt IE 9]>
  <object src="example.svg" classid="image/svg xml"
      width="1250" height="750" id="mySVGObject">
<![endif]-->
<!--[if gte IE 9]>
  <object data="scimitar.svg" type="image/svg xml"
      width="1250" height="750" id="mySVGObject">
<![endif]-->
    </object>
{% endhighlight %}

Ugly, isn’t it? But blame IE, not SVGWeb. It’s adjusting the object for the different versions of our very favourite browser. Now, as far as I can tell, we run into trouble because sometimes it takes longer than others to load the embedded object. So we start everything off with with this trigger at the END of the SVG file right before the closing `</svg>` tag.

{% highlight html linenos=table %}
<script type="text/javascript"><![CDATA[
  window.parent.SVGInit();
]]></script>
{% endhighlight %}

Then somewhere in our HTML file, before our SVG embed (could be in the head), we write our `SVGInit()` function to fire a ready event. It works with jQuery as well.

{% highlight html linenos=table %}
<script>
  function SVGInit() {
    $(document).ready(function(){
      // SVG is loaded and ready.
    }
  }
</script>
{% endhighlight %}

From there you’re good to go.

If you think that this seems convoluted and hacky and gross, that’s because it is. But, like I said, I’ve tried it pretty much every other way with no *consistent* success.
