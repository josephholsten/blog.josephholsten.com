---
layout: post
date: 2009-04-11 02:07:03
title: Next and previous page bookmarklets using prototype
---

I'm working on a few tools to do semantic web stuff in Safari. Since I'm
just at the prototype phase, I'm handling this stuff with javascript. I
just want to make some useful bookmarklets and be done with it. The
trouble is I normally can't depend on Prototype or jQuery to make my
life easier.

Fortunately, Mr. David Hochman whipped together a little [Protoype
bookmarklet][] that pulls down Protoype wherever you need it. It's
pretty spiffy, but a bit special purpose. It depending on a `script`
link to use an `id` of `"prototype.js"`, which won't always be true.
Instead, you should check the value of `Prototype.Version`, which has
the added benefit of letting your stuff be version dependent. Also,
doesn't everyone <acronym title="Don't Repeat Yourself">DRY</acronym>
out their code to the point that Huffman coding fails to improve
anything?

```.javascript
(function() {
  var d = document;
  try { Prototype.Version }
  catch(e) {
    var s = d.createElement('script');
    s.type = 'text/javascript';
    s.src = 'http://scripts.example/prototype.js';
    d.getElementsByTagName('head')[0].appendChild(s);
  }
})();void(0)
```

To install this
<a href="javascript:(function(){try{Prototype.Version}catch(e){var%20s=document.createElement('script');s.type='text/javascript';s.src='http://scripts.example/prototype.js';document.getElementsByTagName('head')[0].appendChild(s);}})();void(0)">bookmarklet</a>,
just drag it to your bookmark bar or right-click and save. If you
haven't noticed, you'll still need to point your script at a copy of
Prototype. Version checking is left as an exercise for the reader.

But let's not forget I hacked this up so I could use Prototype to a real
end. Sadly it's not
<acronym title="Resource Description Format">RDF</acronym> or
microformats or HTML5. In fact, it's just for a feature from HTML3.2,
`rel="next"`. I'm far too attached to Safari's minimalism to suffer
Firefox just for the plugins, and Opera just feels funny. Don't get me
wrong, it's quite a nice sort of funny. I do enjoy using substances that
make me feel pleasantly funny; I just gave up my habit of doing that all
the time. Now it's more of an occasional celebration. Say, in honor of
passing acid. No really, the other [Acid][].

But I digress. I just want a simple tool to go back and forward. I know
it's in vogue to have little text hanging about the page that does that.
But it's also in vogue to say that the web will never supplant books.
And that journalism is dying. Probably fnords as well. But I'm not that
kind of gas-guzzeling, coke-drinking, twitter-checking sheep. No, I'm
the other kind. Really, I'm glad they finally took the next- and
previous-page buttons out of books. But they're turning around that sort
of innovation and putting them back into
news<del>paper</del><ins>site</ins>s. Come on!

So I proudly present to you—in this original, exclusive, and one-time
event—my
<a href="javascript:(function(){var%20d=document;try{Prototype.Version}catch(e){var%20s=d.createElement('script');s.type='text/javascript';s.src='http://josephholsten.com/javascripts/prototype.js';d.getElementsByTagName('head')[0].appendChild(s);}d.location=$$('[rel~=next]')[0].readAttribute('href')})();void(0)">next</a>
and
<a href="javascript:(function(){var%20d=document;try{Prototype.Version}catch(e){var%20s=d.createElement('script');s.type='text/javascript';s.src='http://josephholsten.com/javascripts/prototype.js';d.getElementsByTagName('head')[0].appendChild(s);}d.location=$$('[rel~=prev]')[0].readAttribute('href')})();void(0)">previous</a>
buttons. Once you're done, lock up and turn the lights out.

  [Protoype bookmarklet]: http://serverless.blogspot.com/2007/06/prototype-bookmarklet.html
  [Acid]: http://acid3.acidtests.org/
