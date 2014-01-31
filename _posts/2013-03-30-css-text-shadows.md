---
layout: post
title: CSS Text Shadows
categories: [Snippets]
tags: [CSS3, text-shadow]
published: true
---
A single shadow:

{% highlight css linenos=table %}
element { 
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5); 
}
{% endhighlight %}
<!--more-->

Multiple shadows on one element:

{% highlight css linenos=table %}
element { 
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5), -1px -1px 1px rgba(255, 255, 255, 0.5);
}
{% endhighlight %}
