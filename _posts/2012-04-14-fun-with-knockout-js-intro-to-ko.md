---
title: 'FUN WITH KNOCKOUT.JS &#8211; INTRO TO KO'
author: John Vinny "Basti" Marquez
layout: post
permalink: /blog/2012/04/14/fun-with-knockout-js-intro-to-ko/
category: blog
#categories:
#  - Personal
tags:
  - asp
  - code
  - dotnet
  - knockout.js
  - mvc 3
  - software development
---
Finally!� <a title="MVVM" href="http://en.wikipedia.org/wiki/Model_View_ViewModel" target="_blank">MVVM</a>� implemented using JavaScript for the web! The pattern I fell in love with in WPF/Silverlight is now made available to the web via� [Knockout.js][1]! After trying out code on the tutorials, I wanted to try using it on top of ASP MVC (If you do not have prior experience to MVVM read this� [article][2]). � So first off, knockout basics.

**Creating a ViewModel**

<pre>function SampleViewModel() {
    this.sampleProperty1 = ko.observable("Property1");
    this.sampleProperty2 = ko.observable("Property2");
}

ko.applyBindings(new SampleViewModel());</pre>

The code above basically creates a VM named SampleViewModel with 2 &#8220;observable&#8221; properties (the magic that makes the 2 properties observable is the� *ko.observable()*� method), which is then bound to the view via the code� *ko.applyBindings(new SampleViewModel());*

**DataBinding**

<pre>&lt;span data-bind="text: sampleProperty1"&gt;&lt;/span&gt;</pre>

The code above behaves like the standard WPF TextBlock.

<pre>&lt;input data-bind="value: sampleProperty2" /&gt;</pre>

While this one behaves like the TextBox.

<pre>&lt;span data-bind="text: thisIsAnObject().propertyOne"&gt;&lt;/span&gt;</pre>

The code above shows how to get a property from an object to be observable. Notice the object called like a method?

<pre>&lt;button data-bind="click: sampleMethod"&gt;Please press me&lt;/button&gt;</pre>

<pre>&lt;script type="text/javascript"&gt;
function SampleViewModel() {
    this.sampleProperty1 = ko.observable("Property1");
    this.sampleProperty2 = ko.observable("Property2"); 
    this.sampleMethod = function() {
          alert("I was pressed!");
    }
}
&lt;/script&gt;</pre>

This one shows how to bind to the click event.

Easy enough right? To learn more about KO features head to� [http://learn.knockoutjs.com][3]!� Watch out for part 2 of Fun with Knockout.js where I&#8217;ll tackle using KO with ASP MVC 3. I&#8217;ll start writing after cleaning and taking care of the dogs. lol.

 [1]: http://knockoutjs.com/ "Knockout.js"
 [2]: http://msdn.microsoft.com/en-us/magazine/dd419663.aspx "article"
 [3]: http://learn.knockoutjs.com/