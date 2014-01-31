---
layout: post
title: Detect Media Queries in JavaScript
excerpt: A cross browser method for getting your CSS file to chat with your JavaScript file and let it know which breakpoint is currently showing.
categories: [Articles]
tags: [breakpoints, CSS, JavaScript, media queries]
published: true
---

Don’t you just love resizing a page and seeing all your content re-shuffle itself into position? CSS media queries are awesome! For a while now I've been trying to find a consistant way to manipulate JavaScript based on the breakpoints defined in my CSS. On my search, I came across an article entitled [Breakpoint Checking in Javascript with CSS User Values](http://seesparkbox.com/foundry/breakpoint_checking_in_javascript_with_css_user_values) by Andy Rossi. I took the basic ingredients found therein and went to the lab, testing out various solutions in different environments. The following is an explanation of the media query detection I’ve started working with in my projects.<!--more-->

* [View Demo](http://camelcas.es/demos/media-query-detection)

Let’s start with the CSS. We’ll use the `content` property to name the media query.

{% highlight css linenos=table %}
@media screen and (min-width: 31.25em) {
  body:after {
    content: "medium";
    display: none;
  }
}
{% endhighlight %}

You would create a rule like this for every breakpoint in the CSS document. I usually end up with `small`, `medium`, and `large` named media queries. Note that you don't need to put the pseudo class on the `body` tag, but I like to use it instead of creating a new element in the markup.

Next, the JavaScript. Let’s start by creating a function that will read and return the content value that we set in the CSS:

{% highlight javascript linenos=table %}
(function() {
  // Create the function that reads our media query;
  var getMq = function(){
    if (!window.getComputedStyle) {
      return 'large';
    } else {
      var el = document.querySelector('body');
      var mq = getComputedStyle(el, ':after').content;
      mq = mq.replace(/["']/g, "");
      return mq;
    }
  }
})();
{% endhighlight %}

So what are we doing here? First we check to see that getComputedStyle is supported by the browser. Internet Explorer 8 and below doesn’t, so we want to return a default value instead of having it throw an error. If getComputedStyle is supported we use it to get the `content` value. Lastly, we make sure the string is consistant by taking out any quotation marks that some browsers (Firefox) include. Now that we have that function, we can get the our breakpoint whenever we need it. For example, on init:

{% highlight javascript linenos=table %}
(function() {
  
  // Let's declare a variable to store our device size.
  var deviceSize;
  
  // The function we made before.
  var getMq = function(){
    if (!window.getComputedStyle) {
      return 'large';
    } else {
      var el = document.querySelector('body');
      var mq = getComputedStyle(el, ':after').content;
      mq = mq.replace(/["']/g, "");
      return mq;
    }
  }

  function init() {
    if (deviceSize === 'small') {
      // Initialize for small screens.
    } else {
      // Initialize for medium and large.
    }
  }

  window.onload = function() {
    deviceSize = getMq();
    init();
  }

})();
{% endhighlight linenos=table %}


Great! But what happens when the browser gets resized? I'm glad you asked. To finish things off let’s add a resize event.

{% highlight javascript linenos=table %}
(function() {
  
  // Add the variable declaration 't' for our timeout.
  var deviceSize, t;

  var getMq = function(){
    if (!window.getComputedStyle) {
      return 'large';
    } else {
      var el = document.querySelector('body');
      var mq = getComputedStyle(el, ':after').content;
      mq = mq.replace(/["']/g, "");
      return mq;
    }
  }

  function init() {
    if (deviceSize === 'small') {
      // Initialize for small screens.
    } else {
      // Initialize for medium and large.
    }
  }

  window.onload = function() {
    deviceSize = getMq();
    init();
  }

  window.onresize = function(){
    if (t) { clearTimeout(t); }
    t = setTimeout(function(){
      var checkSize = getMq();
      if (checkSize !== deviceSize) {
        deviceSize = checkSize;
        init();
      }
    }, 50);
  }

})();
{% endhighlight %}


As you can see, in our `onresize` function, we’re creating a timeout so that the code only get executed when the resize stops. When it does, we check to see if our media query is different and if it is we call the `init` function.

And that’s that. Again, thanks to Rob Tarr and Andy Rossi for pointing me in the right direction.

(Tested successfully in Chrome, Firefox, Opera, Safari, iOS and IE7+).
