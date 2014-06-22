---
title: USING DISQUS
author: John Vinny 'Basti' Marquez
layout: post
permalink: /blog/2012/04/12/using-disqus/
category: blog
tags: asp code dotnet mvc3
---
Good day! It&#8217;s a hot sunday here in the Philippines!

So onto business. I built this site from scratch and one of the most annoying features that I had to do was the comments section. Logically its supposed to be easy but since everything is social nowadays I had a difficult time to get it up to speed (not to mention the fact that readers find it hard to comment using my implementation&#8230; that or my blog posts are just too boring. Lolz). So I finally caved in and used [Disqus][1] (thanks to realizing it through Pipeburn, one my daily reads about custom bikes and ofcourse the early prodding of [Chardingkles][2]).

So without further adieu, here&#8217;s a walkthrough of the modifications I made to this site.

**Creating the forum/comments section**

I used the universal code implementation:

<pre class="prettyprint">&lt;div id="disqus_thread"&gt;&lt;/div&gt; "</pre>

<pre class="prettyprint">&lt;script type="text/javascript"&gt;
 /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'example'; 
// required: replace example with your forum shortname 

/* * * DON'T EDIT BELOW THIS LINE * * */ 
(function() { 
     var dsq = document.createElement('script'); 
     dsq.type = 'text/javascript'; 
     dsq.async = true; 
     dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js'; 

     (document.getElementsByTagName('head')[0] || 
     document.getElementsByTagName('body')[0]).appendChild(dsq); })(); 
&lt;/script&gt; 
&lt;noscript&gt;Please enable JavaScript to view the 
&lt;a href="http://disqus.com/?ref_noscript"&gt;comments powered by Disqus.&lt;/a&gt;&lt;/noscript&gt; 
&lt;a href="http://disqus.com" class="dsq-brlink"&gt;blog comments powered by 
&lt;span class="logo-disqus"&gt;Disqus&lt;/span&gt;&lt;/a&gt;</pre>

**Displaying the comment count in an index page**

I used the universal code implementation:

<pre class="prettyprint">&lt;div id="disqus_thread"&gt;&lt;/div&gt; "</pre>

<pre class="prettyprint">&lt;script type="text/javascript"&gt; 
/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'example'; 
// required: replace example with your forum shortname 

/* * * DON'T EDIT BELOW THIS LINE * * */ 
(function() { 
     var dsq = document.createElement('script'); 
     dsq.type = 'text/javascript'; 
     dsq.async = true; 
     dsq.src = 'http://' + disqus_shortname + '.disqus.com/count.js'; 

     (document.getElementsByTagName('head')[0] || 
     document.getElementsByTagName('body')[0]).appendChild(dsq); })(); 
&lt;/script&gt; 
&lt;noscript&gt;Please enable JavaScript to view the 
&lt;a href="http://disqus.com/?ref_noscript"&gt;comments powered by Disqus.&lt;/a&gt;&lt;/noscript&gt; 
&lt;a href="http://disqus.com" class="dsq-brlink"&gt;blog comments powered by 
&lt;span class="logo-disqus"&gt;Disqus&lt;/span&gt;&lt;/a&gt;</pre>

**Notes**

I am still having difficulty with the timing of this script with Cufon. I tried refreshing Cufon in the callback but to no avail. Will post as soon as I find a fix for that.

 [1]: https://disqus.com/ "Disqus"
 [2]: http://richardneililagan.com/ "Chardingkles"