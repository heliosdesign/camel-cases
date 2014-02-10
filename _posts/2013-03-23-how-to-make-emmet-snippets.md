---
layout: post
title: How To Make Emmet Snippets
excerpt: Sublime Text 2 allows you to customize almost everything, including a library of reusable snippets. Emmet reduces keystrokes on everything across the board. Here’s how to make them play nice.
categories: [Articles]
tags: [Emmet, snippets, Sublime Text 2]
published: true
---

<span data-typography="N">Not too long ago</span> the Zen Coding plugin for text editing applications was updated to Emmet. The change was mostly seamless, and I love some of the new features of Emmet (SASS and LESS support!), but my beloved code snippets were no longer accessible via the tab trigger. There was the possibility of disabling the tab trigger for Emmet, but it wasn’t worth sacrificing all that amazing time-saving greatness. The solution: convert my Sublime Text snippets into Emmet snippets. Here’s how.
<!--more-->

First, copy the Emmet settings file into your user directory to prevent your changes being overwritten during Emmet updates. To do this go to `Sublime Text 2` &rarr; `Preferences` &rarr; `Browse Packages`. This will open a dialogue box with all your package files. In the Emmet folder copy Emmet.sublime-settings and paste it into the User folder (on the same level as the Emmet directory). Go ahead and open that copied file.

<p class="aligncenter">
  <img src="{{ site.url }}/assets/img/2013/03/browse.jpg" alt="Browse Packages" width="630" height="190">
</p>

Like other settings files in Sublime Text, this is a JSON file. If you scroll to the bottom of Emmet.sublime-settings you’ll see the snippets object with a commented out example. You can go ahead and add your custom snippets there. All the snippet construction info can be found at <a href="http://docs.emmet.io/customization/snippets" target="_blank">http://docs.emmet.io/customization/snippets</a>.

<p class="aligncenter">
  <img src="{{ site.url }}/assets/img/2013/03/snippets.jpg" alt="Snippets Code" width="630" height="143">
</p>

If you’re planning on having a lot of snippets, or if you use multiple computers you may want to house your snippets in a separate file. We can do that as well. Look at the top of the Emmet.sublime-settings doc and you will see the `"extensions_path"` node. Here you can define the path to where your (surprise, surprise) extension files are kept. Create a directory where makes sense for your workflow. For example, I’ve made an `_emmet` directory in my "websites" folder so I have changed the path to `~/websites/_emmet`. Be sure to do this in the Emmet.settings file that you **copied** into your User folder, **not** the one in the Emmet directory. 

(**Sidebar**: If you’re not sure where the `~/` is on your computer open up your terminal application and type `cd ~/` at the prompt. This will change directory to that location. Now to see where you are type `pwd`. This will show you the path to where you are. You can also type `ls` to list all the directories in that folder.)

One you’ve created that directory, and pointed Emmet to it, you can write your own snippets.json file inside. Let’s do an example to get started. One of the snippets I lost was my section comment in CSS that looks something like this:

{% highlight css linenos=table %}
/* =Header
/*------------------------*/
{% endhighlight %}

To create this as an Emmet Snippet, I would write the following object to make it appear when I hit the tab key directly after the word `comment` in CSS documents.

{% highlight css linenos=table %}
{
  "css": {
    "snippets": {
      "comment": "/* =${1:Section}\n/*------------------------*/"
    }
  }
}
{% endhighlight %}

A couple quick notes on the structure here. `"css"` dictates which type of document this snippet works in. `"comment"` is the tab trigger that you define. `${}` is a tabstop, the word `Section` is a placeholder for the tabstop and the number `1:` communicates in which order the tabstops get highlighted (I don’t actually need it in this comment since there is only one tabstop). Lastly, because this comment spans many lines I needed to include a line break. In JSON syntax we can’t just hit return and go to the next line, we have to use `\n`.

Happy snippeting!
