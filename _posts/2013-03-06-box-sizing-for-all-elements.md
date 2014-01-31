---
layout: post
title: Box-Sizing For All
excerpt: Apply the border-box model to all styles. Padding, borders get push inward (the way you expect it to work) rather than outward.
categories: [Articles]
tags: [border-box, box-sizing, CSS3]
published: true
---

Dealing with padding and borders can be tricky—especially when you’re working in a fluid layout (as you should be). Enter box-sizing, which adds borders and padding to the inside of the element.<!--more--> Here’s how to add the border-box box model to all elements on a page:

{% highlight css linenos=table %}
* { 
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box; 
}
{% endhighlight %}

Be careful when using the asterisk. It adds the specified CSS rules to everything which can be a bit performance heavy. I like to use SASS bring in border-box when I need it:

{% highlight css linenos=table %}
.boxy {
  -moz-box-sizing: border-box; 
  -webkit-box-sizing: border-box; 
  box-sizing: border-box;
}

/* Then pull it in where needed. */
.some-element {
  @extend .boxy;
}
{% endhighlight %}

Is this safe to use? [Paul Irish says we can use it](http://paulirish.com/2012/box-sizing-border-box-ftw) and that’s good enough for me. Here’s the [caniuse.com compatibility chart](http://caniuse.com/#search=Box-sizing) (hint: IE8+).
