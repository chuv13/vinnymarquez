---
title: 'CUSTOM SILVERLIGHT CONTROLS: SELECTIONGROUPCONTROL'
author: John Vinny "Basti" Marquez
layout: post
permalink: /blog/2012/07/02/custom-silverlight-controls-selectiongroupcontrol/
category: blog
tags: code csharp dotnet silverlight customcontrols
---
<span><span>Wow, thats a mouthful. I just didn&#8217;t know what to call it. It basically behaves like radio buttons in a group, but instead of of radio buttons, you see clickable buttons. It is a lookless control, usable by markup, items are variable and bindable, and so is the current selected item (sourcecode available at the end of the page). I plan to include this in my upcoming control library for Silverlight named: Silverlight con Trolls.</span></span>

Disclaimer: I am actually pretty new to lookless controls. Because of the prodding (and guidance) of our CTO Mark Ortigas and TL Mikee Reyes I decided to take the plunge. Lol. So from now on I&#8217;ll be writing more articles about Silverlight development (even if you guys don&#8217;t want to read them. lol).

***EDITED: 7/3/2012**

**Demo: <a title="Silverlight con Trolls Demo" href="http://demos.johnvinnymarquez.net/index.aspx" target="_blank">http://demos.johnvinnymarquez.net/index.aspx</a>**

**Code structure:**

**SelectionGroupControl.cs** &#8211; This is the main control, where the magic happens.  
**SelectionButton.cs** &#8211; This is to what the list of strings are remapped to and bound to the buttons.  
**StylishButton.cs** &#8211; Extension of the Silverlight button class. Basically created new properties for the styles that I use. (more on styling on the next posts)

**How it works:**

The control is actually simple: It accepts a list of string that are to be a button&#8217;s title (1 button will be generated for each item on the list). You can push/select any of these buttons and it will be selected (the selected button will be disabled and the selected button text will be pushed to the property SelectedItem which bubbles up to your ViewModel). Theoretically it will work with an unlimited number of buttons (tested only on a maximum of 3) and the buttons are customizable.

**How to use the control:**

Create a list of strings and a selected item property in your ViewModel:

<pre class="prettyprint">public ObservableCollectionButtons
{
   get { return _buttons; }
   set
      {
         _buttons = value;
         RaisePropertyChangedEvent("Buttons");
      }
}

public string SelectedTwo
   {
      get { return _selectedTwo; }
      set
         {
            _selectedOne = value;
            RaisePropertyChangedEvent("SelectedTwo");
         }
}</pre>

Then fill &#8216;em up with strings:

<pre class="prettyprint">this.Buttons = new ObservableCollection{
   "One",
   "Two",
   "Three"
};</pre>

Bind to list and selected item to the control. You may chose to apply a style, otherwise button will be rendered using the default skin.

<pre class="prettyprint">&lt;CommonControls:SelectionGroupControl HorizontalAlignment="Left" Grid.Row="3" Grid.Column="0" 
ButtonLabels="{Binding Buttons, Mode=OneWay}" SelectedItem="{Binding SelectedTwo, Mode=TwoWay}" 
ButtonStyle="{StaticResource RedButton}" /&gt;</pre>

**Source Code:** <a title="Download Source Code" href="https://docs.google.com/folder/d/0B1-62G9s1gjBWFlXVzY2VXpQbWM/edit" target="_blank">Download Source Code</a>

So there you have it. I hope you guys can use it. Next issue I will discuss my implementation of my custom button (StylishButton) and how the I styled it. Till then, happy coding!