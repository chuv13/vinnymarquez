---
title: 'CUSTOM SILVERLIGHT CONTROLS: STYLISHBUTTON'
author: John Vinny "Basti" Marquez
layout: post
permalink: /blog/2012/07/03/custom-silverlight-controls-stylishbutton/
category: blog
tags: code csharp dotnet silverlight customcontrols
---
Ah the stylish button. As [stated in my post yesterday][1], this will serve as a primer on how I do styling in Silverlight.

<img style="display: block; margin-left: auto; margin-right: auto;" title="StylishButton" alt="StylishButton" src="http://i1169.photobucket.com/albums/r511/johnvinnymarquez/stylishbutton.jpg" width="287" height="75" />

**Demo:� <a title="Demos" href="http://demos.johnvinnymarquez.net/index.aspx" target="_blank">http://demos.johnvinnymarquez.net/index.aspx</a>**

It really is a simple control if you look at it closely, its just an extension of the regular Silverlight Button except for a few Dependency Properties:

**DisabledElementBrush **  
** NormalElementBrush **  
** PressedElementBrush**  
** HighlightElementBrush**  
** ContentHostBrush**

You might wonder why I added these properties. The reason for that is because of the way I do styling with Silverlight Controls. I like using BasedOn with my styles so that thei can achieve some sort of inheritance(that what I&#8217;d like to think of it) and help with reusablility. For example:

<pre class="prettyprint">&lt;!-- Commons --&gt;
&lt;Style x:Key="BaseControlStyle" TargetType="Control"&gt;
 &lt;Setter Property="FontFamily" Value="Arial" /&gt;
 &lt;Setter Property="FontWeight" Value="Normal" /&gt;
 &lt;Setter Property="FontSize" Value="12" /&gt;
 &lt;/Style&gt;</pre>

&nbsp;

<Style x:Key=&#8221;CommandControlBaseStyle&#8221; TargetType=&#8221;ContentControl&#8221;  
BasedOn=&#8221;{StaticResource BaseControlStyle}&#8221;>  
<Setter Property=&#8221;Padding&#8221; Value=&#8221;18,6&#8243; />  
<Setter Property=&#8221;Cursor&#8221; Value=&#8221;Hand&#8221; />  
</Style>  
<Style x:Key=&#8221;StylishButtonBaseStyle&#8221; TargetType=&#8221;CommonControls:StylishButton&#8221;� BasedOn=&#8221;{StaticResource CommandControlBaseStyle}&#8221;>  
<Setter Property=&#8221;Cursor&#8221; Value=&#8221;Hand&#8221; />  
<Setter Property=&#8221;Foreground&#8221; Value=&#8221;{StaticResource WhiteBrush}&#8221; />  
<Setter Property=&#8221;Template&#8221; Value=&#8221;{StaticResource StylishButtonBaseControlTemplate}&#8221; />  
</Style>  
<!&#8211; Buttons &#8211;>  
<Style x:Key=&#8221;RedButton&#8221; TargetType=&#8221;CommonControls:StylishButton&#8221;� BasedOn=&#8221;{StaticResource StylishButtonBaseStyle}&#8221;>  
<Setter Property=&#8221;DisabledElementBrush&#8221; Value=&#8221;{StaticResource RedGradient3}&#8221; />  
<Setter Property=&#8221;NormalElementBrush&#8221; Value=&#8221;{StaticResource ControlBorderBrush}&#8221; />  
<Setter Property=&#8221;PressedElementBrush&#8221; Value=&#8221;{StaticResource DarkBorder}&#8221; />  
<Setter Property=&#8221;HighlightElementBrush&#8221; Value=&#8221;{StaticResource DarkBorder}&#8221; />  
<Setter Property=&#8221;ContentHostBrush&#8221; Value=&#8221;{StaticResource DarkGreen1}&#8221; />  
</Style>  
<Style x:Key=&#8221;MiniGrayButton&#8221; TargetType=&#8221;CommonControls:StylishButton&#8221;� BasedOn=&#8221;{StaticResource StylishButtonBaseStyle}&#8221;>  
<Setter Property=&#8221;Padding&#8221; Value=&#8221;12,1&#8243; />  
<Setter Property=&#8221;FontSize&#8221; Value=&#8221;11&#8243; />  
<Setter Property=&#8221;DisabledElementBrush&#8221; Value=&#8221;{StaticResource GreenGradient1}&#8221; />  
<Setter Property=&#8221;NormalElementBrush&#8221; Value=&#8221;{StaticResource ControlBorderBrush}&#8221; />  
<Setter Property=&#8221;PressedElementBrush&#8221; Value=&#8221;{StaticResource DarkBorder}&#8221; />  
<Setter Property=&#8221;HighlightElementBrush&#8221; Value=&#8221;{StaticResource DarkBorder}&#8221; />  
<Setter Property=&#8221;ContentHostBrush&#8221; Value=&#8221;{StaticResource DarkGreen1}&#8221; />  
<Setter Property=&#8221;Template&#8221; Value=&#8221;{StaticResource MiniStylishButtonBaseControlTemplate}&#8221; />  
</Style>

As you can see, everytime I want to create a new style/color of a button I just have to base it on� StylishButtonBaseStyle then change up the properties. You can also change the button templates on the fly (see above that the MiniGrayButton overrides the default style in favor of the MiniStylishButtonBaseControlTemplate which will ofcourse generate a different look). You can create as many colors/template variations you want, you can event create a default implicit style for buttons aside from all the pretty colored ones. Lol.

**Source Code:**<span>� </span>[Download Source Code][2]

There you have it! Hope you guys can use it. Until next time! Happy coding!

&nbsp;

 [1]: ../blog/2012/7/2/custom-silverlight-controls-selectiongroupcontrol "Custom Silverlight Controls: SelectionGroupButton"
 [2]: https://docs.google.com/folder/d/0B1-62G9s1gjBWFlXVzY2VXpQbWM/edit