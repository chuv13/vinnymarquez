---
title: 'APPCELERATOR TITANIUM: LOCALIZATION AND JSS'
author: John Vinny "Basti" Marquez
layout: post
permalink: /blog/2013/10/05/appcelerator-titanium-localization-and-jss/
category: blog
#categories:
#  - Software Development
#  - Technology
tags:
  - appcelerator
  - css
  - fromzerotohero
  - javascript
  - jss
  - sublime text
  - titanium studio
---
I&#8217;ve recently re-evaluated my career path and realized that transitioning to a full UX role right now will not only be impractical, but will also take too much from my time and resources. I&#8217;ve decided that moving into mobile development will be a much better transition instead. I&#8217;ve been dabbling with <a href="https://developer.apple.com/xcode/" target="_blank">Apple&#8217;s XCode</a> (for objective-C) and <a href="http://www.appcelerator.com/titanium/titanium-studio/" target="_blank">Appcelerator&#8217;s Titanium Studio</a>. I&#8217;ve barely scratched the surface with these two platforms, but for now I think it will be much better if I go for Titanium Studio since it uses JavaScript. I don&#8217;t have to maintain knowledge of different languages mobile and web development.

This will be the first (and I hope many) post about me learning mobile software development. Again, these will be posts regarding me learning new stuff so I&#8217;m practically starting from scratch. I&#8217;ll be devoting the tag &#8216;<a href="http://johnvinnymarquez.net/tag/fromzerotohero/" target="_blank">FromZeroToHero</a>&#8216;� for my activities related to this activity.

Oh BTW, I don&#8217;t use Titanium Studio much because I use <a href="http://www.sublimetext.com/" target="_blank">Sublime Text 2</a> for development (I&#8217;ll share my development environment/stack on a future article) so the screenshots will be code in ST2.

### Localization / Internationalization in Titanium

Create a folder at root level of your project and name it &#8216;i18n&#8217;. This will be the folder where � the app will look for folder containing localized strings,� which names should be� according to the <a href="http://en.wikipedia.org/wiki/ISO_639-1" target="_blank">ISO 639-1 standard</a>. For my sample project, I have 3 languages inside the folder (meh, ph is not supported though). Take a look at the screenshot below:

<div id="attachment_1025" style="width: 192px" class="wp-caption aligncenter">
  <a href="http://johnvinnymarquez.net/wp-content/uploads/2013/10/Screen-Shot-2013-10-05-at-8.18.55-PM.png"><img class="size-full wp-image-1025" alt="Localization Structure" src="http://johnvinnymarquez.net/wp-content/uploads/2013/10/Screen-Shot-2013-10-05-at-8.18.55-PM.png" width="182" height="567" /></a><p class="wp-caption-text">
    Folder Structure, Sublime Text 2
  </p>
</div>

Lets have a look at the contents of the xml files.

strings.xml &#8211; en

{% highlight xml %}
<?xml version=”1.0” encoding=”UTF-8”?>
<resources>
<string name=”appname”>Cat</string>
<string name=”greeting_android”>Hello, I’m an Android!</string>
<string name=”greeting_ios”>Greetings, I’m a Potatoe!</string>
</resources>
{% endhighlight %}

<address>
  strings.xml &#8211; es
</address>

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<resources>
<string name="appname">Gato</string>
<string name="greeting_android">Hola, el Android!</string>
<string name="greeting_ios">Hola, soy una Patata!</string>
</resources>
{% endhighlight %}

You can call these strings by using Ti.Locale.getString(&#8220;resourcename&#8221;); or L(&#8220;resourcename&#8221;); as a shortcut:

{% highlight javascript %}
alert(L("appname"));
alert(Ti.Locale.getString("appname"));
{% endhighlight %}


Both lines will return appname&#8217;s value depending on the locale.

### Using JSS (JavaScript Style Sheets)

JSS are Style Sheets that you can use to separate design for each platform. Since I just want iOS and Android for samples, here are my JSS files:

<address>
  app.android.jss
</address>

{% highlight javascript %}
#mainwin {
background-color: '#f00';
}

#mainlabel {
color:'#fff';
top:100;
width:'auto';
height:'auto';
text:'Greetings! I'm an Android!';
}
{% endhighlight %}

For my main application, take a look at the code below:

<address>
  app.js
</address>

{% highlight javascript %}
var win = Ti.UI.createWindow({ id:'mainwin' });
var label = Ti.UI.createLabel({ id:'mainlabel' });
win.add(label);
win.open();
{% endhighlight %}

It just basically creates a window (with the style &#8216;mainwin&#8217;) and a label (with &#8216;mainlabel&#8217;) then opens it. If the app is deployed to iOS, then the window background will be blue and red if it is deployed to Android. Nifty eh?

### Using Localized strings with JSS

We&#8217;re just going to combine these techniques. How? Its actually very simple. As an example, lets take a look at the <a href="http://docs.appcelerator.com/titanium/2.0/#!/api/Titanium.UI.Label" target="_blank">Titanium Label class</a>� and look specifically at the <a href="http://docs.appcelerator.com/titanium/2.0/#!/api/Titanium.UI.Label-property-textid" target="_blank">textid property</a>:

<div id="attachment_1028" style="width: 467px" class="wp-caption aligncenter">
  <a href="http://johnvinnymarquez.net/wp-content/uploads/2013/10/Screen-Shot-2013-10-05-at-8.44.48-PM.png"><img class="size-full wp-image-1028" alt="textid" src="http://johnvinnymarquez.net/wp-content/uploads/2013/10/Screen-Shot-2013-10-05-at-8.44.48-PM.png" width="457" height="114" /></a>
</div>

So to use localized strings, lets use the textid property instead of text in our JSS:

<div id="attachment_1026" style="width: 647px" class="wp-caption aligncenter">
  <a href="http://johnvinnymarquez.net/wp-content/uploads/2013/10/Screen-Shot-2013-10-05-at-8.33.03-PM.png"><img class="size-full wp-image-1026" alt="I'm a potatoe!" src="http://johnvinnymarquez.net/wp-content/uploads/2013/10/Screen-Shot-2013-10-05-at-8.33.03-PM.png" width="637" height="308" /></a><p class="wp-caption-text">
    Yeah, I&#8217;m a Potatoe!
  </p>
</div>

<div id="attachment_1030" style="width: 643px" class="wp-caption aligncenter">
  <a href="http://johnvinnymarquez.net/wp-content/uploads/2013/10/Screen-Shot-2013-10-05-at-8.33.47-PM.png"><img class="size-full wp-image-1030" alt="In Spanish!" src="http://johnvinnymarquez.net/wp-content/uploads/2013/10/Screen-Shot-2013-10-05-at-8.33.47-PM.png" width="633" height="291" /></a><p class="wp-caption-text">
    In Spanish!
  </p>
</div>

So there you have it! I hope this post can be of help to you. I know its not much, but at least I&#8217;m making progress. Happy coding!

Do you do mobile development? Do you use Appcelerator? Any questions, comments and/or feedback? I would love to hear from you, hit the comments section below! <img src="http://johnvinnymarquez.net/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> 

***UPDATE &#8211; (10/10/2013)**: I&#8217;ve received and email from <a href="https://developer.appcelerator.com/devlink/profile/427941/malcolm-hollingsworth" target="_blank">Malcolm Hollingsworth</a>� pointing out that JSS was slated to be removed for version 2 of the SDK. He recommends that I learn Alloy (Titanium&#8217;s built-in� MVC framework). He&#8217;s at <a href="https://developer.appcelerator.com/questions/top-100-experts" target="_blank">#1 (at the time of this writing) of the top 100 experts/contributors within the Titanium</a>� community. Awesome guy, he actually took the time to email me. I really appreciate it. Thanks Malcom! <img src="http://johnvinnymarquez.net/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> *