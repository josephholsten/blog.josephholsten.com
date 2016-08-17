Date: 2009-08-31 17:23:11
Title: Prev and Next II: Electric Boogaloo

It seems Jonathan Palardy [doesn't like](http://technotales.wordpress.com/2009/05/04/next-page-bookmarklet/) my old prev/next bookmarklets. He thinks I should actually include code that works, even if it means having people pull some javascript library from my site. So do I.

Trouble is, I don't use those anymore. It's a real hassle to negotiate Prototype to play nice with everyone else's javascript, so I've moved onto a simpler approach. Like Mr. Palardy, I wanted something using something standard and with builtin support from modern browsers. But I thought I'd give CSS selectors a shot using the [Selectors API](http://www.w3.org/TR/selectors-api/), available in [Firefox 3.1+](https://developer.mozilla.org/En/DOM/Document.querySelector), [IE8](http://msdn.microsoft.com/en-us/library/cc288326(VS.85).aspx), [Safari 3.1+](http://webkit.org/blog/156/queryselector-and-queryselectorall/), and [Opera 10](http://my.opera.com/core/blog/selectors-api).

What we want is very simple: elements with a `rel` value of `prev` or `next`. You find those easily with the CSS selectors `[rel~=prev]` or `[rel~=next]`. We need to get the link those elements are pointing to, so we just pull that from the `href` attribute. Finally, we tell the browser to update the document location with that URI. Like so:

<?prettify language=javascript?>
<pre class=prettyprint>
location = document.querySelector('[rel~=prev]').getAttribute('href');
</pre>

Of course, I took a second to wrap this stuff up as proper bookmarklets. Just drag these to your link bar: <a href="javascript:(function(){location=document.querySelector('[rel~=prev]').getAttribute('href')})();void(0)">prev</a> and <a href="javascript:(function(){location=document.querySelector('[rel~=next]').getAttribute('href')})();void(0)">next</a>.
