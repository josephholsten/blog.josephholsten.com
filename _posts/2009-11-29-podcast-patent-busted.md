---
layout: post
date: 2009-11-29T16:02:50
title: "Podcast Patent: Busted"
---

The [EFF][] is starting up a new [patent-busting project][] aimed at
[VoloMedia][]’s [podcasting patent][]. Even if you're a fan of software
patents, it's obvious bad patents screw up the whole intellectual
property system. So I thought I'd check out if VoloMedia's patent is
legit, or if those cypherpunks at the
<acronym title="Electronic Frontier Foundation"><span
class="caps">EFF</span></acronym> are onto something. Turns out someone
beat VoloMedia to the punch by at least half a year.

[VoloMedia applied for their patent in November 2003][] but [wikipedia's
history of podcasting][] mentions quite a few pieces of podcasting prior
art. But it's not good enough to say podcasting existed before the
patent, therefore the patent is invalid. The real task is to figure out
which prior art knocks out which of VoloMedia's claims, and see if
there's anything left standing. So what are the actual claims? In their
[patent submission][podcasting patent] they're laying claim to software
that can:

1.  Subscribe to and automatically download from a feed of episodes
2.  Indicate new episodes are in the feed
3.  Sync the episodes to a portable device
4.  Sync to the device based on settings
5.  Sync to the device manually
6.  Share the episodes over a local network
7.  Limit automatic download based on feed priority
8.  Sync less than all of the feed's episodes to a portable device
9.  Sync when the feed removes episodes

That describes every podcatcher available these days. But we've got to
find out prior art published before the patent was submitted. So key is
finding out what the state of podcasting was before November 19, 2003.

There are a whole bunch of standards docs (and conversations about them)
from the people implementing this sort of tool. Searching around for the
history of the
<acronym title="Really Simple Syndication. No wait, RDF Site Summary. Or maybe Rich Site Summary?"><span
class="caps">RSS</span></acronym> `enclosure` tag will find a bunch of
people talking about downloading media through aggregators. But you
don't often get a big picture in these conversations, hardly anything
focused on how the client actually goes about handling feeds.

But I did stumble accross [Mark Pilgrim][] [writing in February 2003][]
about some features in a brand new feed aggregator that sound a lot like
the first claim in VoloMedia's patent:

> Ignoring for the moment all the things it doesn’t do yet (which all
> sound quite cool), it has one particularly disturbing feature:
> extracting full <span class="caps">HTML</span> content from linked
> <span class="caps">RSS</span> items. The feature is off by default,
> but once turned on (one checkbox during installation), every time it
> finds a new <span class="caps">RSS</span> item in your feed, it will
> automatically download the linked <span class="caps">HTML</span> page
> (as specified in the <span class="caps">RSS</span> item’s link
> element), along with all relevant stylesheets, Javascript files, and
> images.

But wait, there's more! Deep in the comments, Kevin Burton [mentions][]
that one use case for sync is accessing that data on a
<acronym title="personal digital assistant"><span
class="caps">PDA</span></acronym>. Bam! Claim 3. In the same comment, he
makes a big deal of the fact that this syncing only occurs based on user
preferences, taking out claim 4. He later [mentions][1] the standard
(and for patent purposes, obvious) way to indicate that a feed has been
updated using [ETags][]. Yes, that's claim 2. And that second comment
also mentions sharing NewsMonster downloads on the local network using
the same [protocol Apple uses in iTunes][] today, stardardized as
[ZeroConf][]. Claim 6, down.

Only syncing less than all the episodes so they fit on the device seems
novel, if a bit obvious. The rest of the claims (manual sync,
prioritized download, and syncing when a feed removes old content) were
common in feed aggregators of the time. But considering NewsMonster's
[coming soon features][] of the time, I'd bet that NewsMonster supported
every single feature claimed by VoloMedia's patent. I'd love to get my
hands on an old beta 1 just to check.

For what it's worth, podcasting is a terrificly successful and useful
idea. It took plenty of great ideas to invent it and make it successful.
And like it or not, those people who created it deserve the rights to
those ideas. If Winer kept his <span class="caps">RSS</span> work to
himself, it would still be as useful as it is today. But he gave it away
and now everyone profits from his ideas.

The thing is, VoloMedia didn't invent podcasting and they don't deserve
exclusive rights to it. So we've got to get rid of this patent, or we're
punishing all the podcasters, fans and real inventors that made
podcasting awesome. If you've got any more information to help, [get
ahold of the EFF][] or [let me know][].

  [EFF]: http://eff.org "Electronic Frontier Foundation"
  [patent-busting project]: http://www.eff.org/deeplinks/2009/11/eff-tackles-bogus-podcasting-patent-and-we-need-yo
    "EFF Tackles Bogus Podcasting Patent - And We Need Your Help"
  [VoloMedia]: http://www.volomedia.com/
  [podcasting patent]: http://patft1.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=7568213.PN.&OS=PN/7568213&RS=PN/7568213
  [VoloMedia applied for their patent in November 2003]: http://newteevee.com/2009/07/29/volomedia-awarded-the-patent-for-podcasting/
  [wikipedia's history of podcasting]: http://en.wikipedia.org/wiki/History_of_podcasting
  [Mark Pilgrim]: http://diveintomark.org
  [writing in February 2003]: http://diveintomark.org/archives/2003/02/20/robotstxt_support_for_uberaggregators
  [mentions]: http://diveintomark.org/archives/2003/02/20/robotstxt_support_for_uberaggregators#comment-480
  [1]: http://diveintomark.org/archives/2003/02/20/robotstxt_support_for_uberaggregators#comment-481
  [ETags]: http://rfc2616.com/#14.19 "entity tags"
  [protocol Apple uses in iTunes]: http://www.apple.com/support/bonjour/
    "Bonjour"
  [ZeroConf]: http://zeroconf.org
  [coming soon features]: http://web.archive.org/web/20030401171052/http://www.newsmonster.org/coming-soon.html
  [get ahold of the EFF]: mailto:podcasting_priorart@eff.org
  [let me know]: http://josephholsten.com
