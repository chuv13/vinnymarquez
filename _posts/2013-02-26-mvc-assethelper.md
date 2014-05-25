---
title: MVC ASSETHELPER
author: John Vinny "Basti" Marquez
layout: post
permalink: /blog/2013/02/26/mvc-assethelper/
#categories:
#  - Personal
category: blog
---
<span class="dropcap1">H</span>i guys! Welcome to my first ever post categorized as coding here in my blog so I will start with something small.� As I was developing this site, I encountered the problem of having the same header tags due to my use of a master template which leads to poor SEO (<a title="PinoyLancers" href="http://pinoylancers.com" target="_blank">As indicated by a friend</a>). Me being new to asp mvc tried to consult my loving friend Google who then forwarded to <a href="http://stackoverflow.com/questions/5110028/add-css-or-js-files-to-layout-head-from-views-or-partial-views/5148224#5148224" target="_blank">an article from another good friend mine where I usually find answers to my seemingly simple problems: StackOverflow</a>� (the guy who offered the solution also <a href="https://github.com/speier/mvcassetshelper" target="_blank">has this up on GitHub</a>). I was delighted to find this solution but then I figured I wanted to add my own touch to the code.

First off, I wanted to have the tags as entities. So I created the base class for all tags:

Then I made a contract:

<pre class="brush: csharp">public interface ITag
    {
        /// 
        /// Formats this instance.
        /// 
        /// 
        string Format();

        /// 
        /// Gets or sets the tag parameters.
        /// 
        /// 
        /// The tag parameters.
        /// 
        string[] TagParameters { get; set; }
    }</pre>

Then I inherited the tags from the base:

<pre class="brush: csharp">public class TitleTag : TagBase, ITag
    {
        #region Constructor
        /// 
        /// Initializes a new instance of the  class.
        /// 
        public TitleTag()
        {
            this.TagFormat = "&lt;title&gt;{0} - {1}&lt;/title&gt;";
        }
        #endregion
    }</pre>

<pre class="brush: csharp">public class MetaTag : TagBase, ITag
    {
        #region Namespaces
        /// 
        /// Initializes a new instance of the  class.
        /// 
        public MetaTag()
        {
            this.TagFormat = "&lt;meta name=\"{0}\" content=\"{1}\"&gt;&lt;/meta&gt;";
        }
        #endregion
    }</pre>

Then I modified the ItemRegistrar class:

<pre class="brush: csharp">public class ItemRegistrar
    {
        #region Fields
        private readonly IList&lt;ITag&gt;; _items;
        #endregion

        #region Contructor

        ///
        /// Initializes a new instance of the class.
        ///
        public ItemRegistrar()
        {
            _items = new List&lt;ITag&gt;();
        }
        #endregion

        #region Methods
        ///
        /// Adds the specified parameters.
        ///
        ///The parameters.
        /// 
        public ItemRegistrar Add&lt;T&gt;(string[] parameters) 
            where T : ITag, new()
        {
            var tag = new T { TagParameters = parameters };

            if (!_items.Contains(tag))
                _items.Insert(0, tag);

            return this;
        }

        /// 
        /// Renders this instance.
        /// 
        /// 
        public IHtmlString Render()
        {
            var sb = new StringBuilder();
            foreach (var item in _items.Reverse())
            {
                sb.AppendLine(item.Format());
            }

            return new HtmlString(sb.ToString());
        }
        #endregion
    }</pre>

So now I can arrange my layout header:

<pre class="brush: js">@{
    @Html.Assets().Title.Render()
    @Html.Assets().Meta.Render()
    @Html.Assets().Styles.Render()
    @Html.Assets().HeaderScripts.Render()
}</pre>

Here&#8217;s an example of how I use the code in one of my views

<pre class="brush: js">@{
    //Title
    Html.Assets().Title.Add&lt;TitleTag&gt;(new string[] { TagHelpers.Title, Model.Post.Title });

    //Meta
    Html.Assets().Meta.Add&lt;MetaTag&gt;(new string[] { TagHelpers.Description, 
Html.Truncate(Html.StripHtml(Model.Post.PostContent), 250) });
    Html.Assets().Meta.Add&lt;MetaTag&gt;(new string[] { TagHelpers.Keywords, 
string.Join(",", Model.Post.Tags.Select(tag =&gt; tag.Name)) });
}</pre>

So there you have it. I&#8217;ll be making a sample solution for this in a matter of days. Until then, happy coding! <img src="http://johnvinnymarquez.net/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />