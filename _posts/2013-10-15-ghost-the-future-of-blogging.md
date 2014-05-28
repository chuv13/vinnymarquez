---
title: GHOST, THE FUTURE OF BLOGGING?
author: John Vinny "Basti" Marquez
layout: post
permalink: /blog/2013/10/15/ghost-the-future-of-blogging/
category: blog
tags: blogging expressjs javascript minimal minimalist nodejs sqlite
---
### What is Ghost?

> <a href="http://tryghost.org" target="_blank">Ghost</a> is an Open Source application which allows you to write and publish your own blog, giving you the tools to make it easy and even fun to do. It&#8217;s simple, elegant, and designed so that you can spend less time making your blog work and more time blogging.

It&#8217;s built with <a href="http://nodejs.org/" target="_blank">Node.js</a>, <a href="http://handlebarsjs.com/" target="_blank">Handlebars</a>, <a href="http://expressjs.com/" target="_blank">Express</a>, <a href="http://jugglingdb.co/" target="_blank">JugglingDB</a> and <a href="http://www.sqlite.org/" target="_blank">SQLite</a>. It has been released for the general public last October 14, 2013  (3 weeks after the release for those who supported the <a href="http://www.kickstarter.com/projects/johnonolan/ghost-just-a-blogging-platform" target="_blank">KickStarter campaign</a>). What I like about Ghost is that it focuses mainly on publishing. WordPress is good but I feel that it has already mutated from just a blogging platform to a full featured CMS application. Thats good for a lot people but for me, I&#8217;ve been looking for something more lightweight and with JS  as its main language (sorry, I&#8217;m not a big fan of PHP).

### I&#8217;m interested, how can I try it?

As of today, there is still no paid service like what <a href="http://wordpress.com/" target="_blank">WordPress.com</a> offers (their team is currently &#8216;working on a world class&#8217; solution). You can download the source code and install it locally (for testing and development) or upload it on <a href="http://nodejs.org/" target="_blank">Node.js</a> ready web hosts. I have already tried installing Ghost on OSX and Windows 7 by following <a href="http://docs.ghost.org/installation/" target="_blank">the installation guides</a>.

##### Installing and Running Ghost locally

*   <a href="http://nodejs.org/" target="_blank">Download and install Node.js</a>
*   Log in to [http://ghost.org][1], and then click the blue &#8216;Download Ghost Source Code&#8217; button.
*   On the downloads page, press the button to download the latest zip file.
*   Double-click on the downloaded zip file to extract it.
*   Open terminal window/command prompt, type cd the grab the newly extracted &#8216;ghost-#.#.#&#8217; folder and drag it onto the window to get the full path.
*   In the new terminal tab type `npm install --production` note the two dashes. **note: for mac/linux users, type &#8216;sudo -s&#8217; first for root terminal rights**
*   When npm is finished installing, type `npm start` to start Ghost in development mode
*   In a browser, navigate to `127.0.0.1:2368` to see your newly setup Ghost blog
*   Change the url to `127.0.0.1:2368/ghost` and create your admin user to login to the Ghost admin.
*   See the [usage docs][2] for instructions on the next steps

I haven&#8217;t tried hosting it live  yet so I won&#8217;t be writing about that, but you can find more information at the documentation: <a href="http://docs.ghost.org/installation/" target="_blank">http://docs.ghost.org/installation/</a>.

### Screenshots

Here are screen caps from my installation:

<div id="attachment_1060" style="width: 610px" class="wp-caption aligncenter">
  <a href="http://johnvinnymarquez.net/wp-content/uploads/2013/10/Screen-Shot-2013-10-15-at-4.45.29-PM.png"><img class=" wp-image-1060  " alt="Profile setup" src="http://johnvinnymarquez.net/wp-content/uploads/2013/10/Screen-Shot-2013-10-15-at-4.45.29-PM-1024x464.png" width="600" /></a><p class="wp-caption-text">
    Profile setup
  </p>
</div>

<div id="attachment_1061" style="width: 610px" class="wp-caption aligncenter">
  <a href="http://johnvinnymarquez.net/wp-content/uploads/2013/10/Screen-Shot-2013-10-15-at-4.45.15-PM.png"><img class=" wp-image-1061 " alt="Edit Mode" src="http://johnvinnymarquez.net/wp-content/uploads/2013/10/Screen-Shot-2013-10-15-at-4.45.15-PM-1024x480.png" width="600" /></a><p class="wp-caption-text">
    Edit Mode
  </p>
</div>

<div id="attachment_1062" style="width: 610px" class="wp-caption aligncenter">
  <a href="http://johnvinnymarquez.net/wp-content/uploads/2013/10/Screen-Shot-2013-10-15-at-4.44.57-PM.png"><img class=" wp-image-1062 " alt="Posts" src="http://johnvinnymarquez.net/wp-content/uploads/2013/10/Screen-Shot-2013-10-15-at-4.44.57-PM-1024x525.png" width="600" /></a><p class="wp-caption-text">
    Posts
  </p>
</div>

&nbsp;

### Conclusion

As a blogger, I like it! Especially writing posts with Markdown since I use [IA Writer][3] most of the time for distraction free writing. As for the (planned) dashboard feature, I kind <a href="http://www.technologyreview.com/view/514451/ghosts-blogging-dashboard-doesnt-need-to-exist/" target="_blank">of agree with this guy</a>. To a run-of-the-mill blogger (like me) who can&#8217;t make sense of analytics and just wants to blog, this just a &#8220;nice to have&#8221; or &#8220;wouldn&#8217;t even care about&#8221; feature. It would be so much better (IMHO) if another alternative could be pursued; something like <a href="http://dashes.com/anil/2013/01/all-dashboards-should-be-feeds.html" target="_blank">dashboard analytics as feeds</a> or like how <a href="http://klout.com/" target="_blank">Klout</a> does it. I don&#8217;t know, maybe prioritize something simpler (new and unique) and then implement the pretty dashboard as a plugin (for those who need and know how to use it) afterwards. Afterall, this project was conceived **so that you can spend less time making your blog work and more time blogging.**

As a software developer, I  dig it! Its simple, clean and uses the latest tech for internals. I&#8217;ve been recently wanting (and preparing) to move into Mobile and Web development (studying Appcelerator Titanium and getting a feel for the current JS standards) so it works for me since I don&#8217;t have to deviate much. For those who make WordPress themes, rejoice in the fact creating themes isn&#8217;t too far from what you&#8217;ve been used too.

As of this writing, I believe that Ghost still has a long way to go before it replaces my WordPress installation. But its getting there. For now,  I&#8217;ll be patiently waiting until all the features that I require arrive. But to prepare for the things to come, I&#8217;m starting migrate to a node.js installated linux host. Bye Bye ASP .net hosting!

### More info and links

Features - <a href="https://en.ghost.org/features" target="_blank">https://en.ghost.org/features</a>  
Github Repo - <a href="https://github.com/TryGhost/Ghost" target="_blank">https://github.com/TryGhost/Ghost</a>  
Known Issues - <a href="https://github.com/TryGhost/Ghost/issues?milestone=3&page=1&state=open" target="_blank">https://github.com/TryGhost/Ghost/issues?milestone=3&page=1&state=open</a>  
Planned Features - <a href="https://github.com/TryGhost/Ghost/wiki/Planned-Features" target="_blank">https://github.com/TryGhost/Ghost/wiki/Planned-Features</a>  
Roadmap - <a href="https://github.com/TryGhost/ghost/wiki/Roadmap" target="_blank">https://github.com/TryGhost/ghost/wiki/Roadmap</a>

Any comments? Suggestions? Any form of reaction? Hit up the comments section! Let&#8217;s talk! <img src="http://johnvinnymarquez.net/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

 [1]: http://ghost.org/
 [2]: http://docs.ghost.org/usage
 [3]: http://www.iawriter.com/mac/