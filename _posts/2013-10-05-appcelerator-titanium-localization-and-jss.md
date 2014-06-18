---
title: 'APPCELERATOR TITANIUM: LOCALIZATION AND JSS'
author: John Vinny "Basti" Marquez
layout: post
permalink: /blog/2013/10/05/appcelerator-titanium-localization-and-jss/
category: blog
type: preview
preview_url: 'http://i1169.photobucket.com/albums/r511/johnvinnymarquez/titnium_zps14d74a93.jpg'
tags: appcelerator css fromzerotohero javascript jss sublime text titanium studio
code: true
---
I&#8217;ve recently re-evaluated my career path and realized that transitioning to a full UX role right now will not only be impractical, but will also take too much from my time and resources. I&#8217;ve decided that moving into mobile development will be a much better transition instead. I&#8217;ve been dabbling with <a href="https://developer.apple.com/xcode/" target="_blank">Apple&#8217;s XCode</a> (for objective-C) and <a href="http://www.appcelerator.com/titanium/titanium-studio/" target="_blank">Appcelerator&#8217;s Titanium Studio</a>. I&#8217;ve barely scratched the surface with these two platforms, but for now I think it will be much better if I go for Titanium Studio since it uses JavaScript. I don&#8217;t have to maintain knowledge of different languages mobile and web development.

This will be the first (and I hope many) post about me learning mobile software development. Again, these will be posts regarding me learning new stuff so I&#8217;m practically starting from scratch. I&#8217;ll be devoting the tag &#8216;<a href="http://johnvinnymarquez.net/tag/fromzerotohero/" target="_blank">FromZeroToHero</a>&#8216; for my activities related to this activity.

Oh BTW, I don&#8217;t use Titanium Studio much because I use <a href="http://www.sublimetext.com/" target="_blank">Sublime Text 2</a> for development (I&#8217;ll share my development environment/stack on a future article) so the screenshots will be code in ST2.

### Localization / Internationalization in Titanium

Create a folder at root level of your project and name it &#8216;i18n&#8217;. This will be the folder where  the app will look for folder containing localized strings, which names should be according to the <a href="http://en.wikipedia.org/wiki/ISO_639-1" target="_blank">ISO 639-1 standard</a>. For my sample project, I have 3 languages inside the folder (meh, ph is not supported though). Take a look at the screenshot below:

<div class="centered">
  <img src="http://i1169.photobucket.com/albums/r511/johnvinnymarquez/Screen-Shot-2013-10-05-at-81855-PM_zpse7aedc72.png" />
</div>
<div class="caption-text">
  Folder Structure, Sublime Text 2
</div>

Lets have a look at the contents of the xml files.

<pre class="brush: xml">
  /********* strings.xml  *********/  

  <?xml version=”1.0” encoding=”UTF-8”?>
  <resources>
    <string name=”appname”>Cat</string>
    <string name=”greeting_android”>Hello, I’m an Android!</string>
    <string name=”greeting_ios”>Greetings, I’m a Potatoe!</string>
  </resources>

</pre>

<address>
</address>

<pre class="brush: xml">
  /******* strings.xml - es *******/

  <?xml version="1.0" encoding="UTF-8"?>
  <resources>
    <string name="appname">Gato</string>
    <string name="greeting_android">Hola, el Android!</string>
    <string name="greeting_ios">Hola, soy una Patata!</string>
  </resources>

</pre>

You can call these strings by using Ti.Locale.getString(&#8220;resourcename&#8221;); or L(&#8220;resourcename&#8221;); as a shortcut:

<pre class="brush: xml;">
alert(L("appname"));
alert(Ti.Locale.getString("appname"));
</pre>


Both lines will return appname&#8217;s value depending on the locale.

### Using JSS (JavaScript Style Sheets)

JSS are Style Sheets that you can use to separate design for each platform. Since I just want iOS and Android for samples, here are my JSS files:

<pre class="brush: js" style="width: 100%">
/********* app.android.jss  *********/

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
</pre>

For my main application, take a look at the code below:

<pre class="brush: js">
/********* app.android.jss  *********/

var win = Ti.UI.createWindow({ id:'mainwin' });
var label = Ti.UI.createLabel({ id:'mainlabel' });
win.add(label);
win.open();
</pre>

It just basically creates a window (with the style &#8216;mainwin&#8217;) and a label (with &#8216;mainlabel&#8217;) then opens it. If the app is deployed to iOS, then the window background will be blue and red if it is deployed to Android. Nifty eh?

### Using Localized strings with JSS

We&#8217;re just going to combine these techniques. How? Its actually very simple. As an example, lets take a look at the <a href="http://docs.appcelerator.com/titanium/2.0/#!/api/Titanium.UI.Label" target="_blank">Titanium Label class</a> and look specifically at the <a href="http://docs.appcelerator.com/titanium/2.0/#!/api/Titanium.UI.Label-property-textid" target="_blank">textid property</a>:

<div class="centered" >
  <img src="http://i1169.photobucket.com/albums/r511/johnvinnymarquez/Screen-Shot-2013-10-05-at-84448-PM_zpsdc93e29f.png" />
</div>

So to use localized strings, lets use the textid property instead of text in our JSS:

<div class="centered" width="90%">
  <img src="http://i1169.photobucket.com/albums/r511/johnvinnymarquez/Screen-Shot-2013-10-05-at-83303-PM_zps1ec54684.png" width="90%" />
</div>
<div class="caption-text">
  Yeah, I&#8217;m a Potatoe!
</div>

<div class="centered">
  <img src="http://i1169.photobucket.com/albums/r511/johnvinnymarquez/Screen-Shot-2013-10-05-at-83347-PM_zpsa2b21b3d.png" width="90%" />
</div>
<div class="caption-text">
  In Spanish!
</div>

So there you have it! I hope this post can be of help to you. I know its not much, but at least I&#8217;m making progress. Happy coding!

Do you do mobile development? Do you use Appcelerator? Any questions, comments and/or feedback? I would love to hear from you, hit the comments section below!

***UPDATE &#8211; (10/10/2013)**: I&#8217;ve received and email from <a href="https://developer.appcelerator.com/devlink/profile/427941/malcolm-hollingsworth" target="_blank">Malcolm Hollingsworth</a> pointing out that JSS was slated to be removed for version 2 of the SDK. He recommends that I learn Alloy (Titanium&#8217;s built-in MVC framework). He&#8217;s at <a href="https://developer.appcelerator.com/questions/top-100-experts" target="_blank">#1 (at the time of this writing) of the top 100 experts/contributors within the Titanium</a> community. Awesome guy, he actually took the time to email me. I really appreciate it. Thanks Malcom!