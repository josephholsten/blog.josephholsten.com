---
layout: post
date: 2010-05-16 05:33:10
title: Your New New Web Identity
---

David Recordon just let us know about a little strawman proposal he's
calling [OpenID Connect][]. It's not exactly perfect, but it's a good
jumping off point for the ideas that are shaping the next version of
OpenID. And I love that he's just throwing some ideas out there. It's
really in the original spirit of Request For Comments. There's even code
in there!

Most noticibly, the proposal guts most of the work in OpenID, replacing
its discovery and security bits with [LRDD][] and [OAuth 2][]
respectively. LRDD is a rewrite of the discovery process used in OpenID
2 intended to be more modular and simpler. OAuth 2 is also a rewrite,
but not of existing OpenID parts. Instead, it takes the OAuth concept
and makes it easier for to write clients, among many other changes. But
with OAuth 2, you can just use curl to get at APIs instead of having to
dig into HTTP headers. Having OAuth 2 underneath OpenID should make it
much easier to write clients that work with OpenIDs.

There are some other changes as well. OpenID currently lets you delegate
your OpenID from any web address to any OpenID server. This is pretty
much only used by early adopters who want vanity OpenIDs. That's how
I've got my OpenID set up today. But really it provides almost no
benefit with the new disco process. And most people are using an
insecure web address to delegate from, making them vulnerable to well
known weaknesses in OpenID. The consesus is that all future OpenID
versions will have to mandate TLS to keep things safe. If you're enough
of a power user to limit your vanity web address to HTTPS, you'll have
no trouble setting up your own OpenID Provider as well. So losing
delegation is a non-issue.

But the OpenID Connect proposal has one change that I can't talk myself
into to supporting. It introduces a very simple User Information API
that provides the basic personal information every site needs for
registering an account. The problem is that we already have the Simple
Registration Extension and Attribute Exchange. Instead of reusing the
format of either, it introduces another new one.

Instead of inventing another new format for the next version of OpenID,
I'd much rather it have a common way to embed existing formats like
hCard, vCard, FOAF and PoCo. Like [YADIS][] so long ago, we've got a
bunch of competing tools for the same job. So let's build a way for them
to compete instead of one more extremely specialized solution. LID and
DIX may no longer be with us, but OpenID incorporated their best ideas.
Maybe we could call it Yet Another Personal Information Schema System?
Nah.

I figure [X/JRD][] gets us most of the way. Webfinger demos show that we
can already do this stuff by just pointing around. But what's missing is
a way to inline the data so clients don't have to keep making requests
to get standard data. I imagine it could be as simple as:

```javascript
{"user_id":"https://graph.fb.me/24400320",
 "url":"http://fb.me/davidrecordon",
 "link": [
   {"rel":"http://portablecontacts.net/spec/1.0#me",
    "href":"http://poco.fb.me/davidrecordon",
    "entity":
      {"entry":
        {"id": "692",
         "displayName": "David Recordon",
         "name":
           {"familyName": "David",
            "givenName": "Recordon" },
         "emails":
           [{"value": "recordond@gmail.com",
             "type": "home",
             "primary": "true" }],
          "photos":
            [{"value": "http://pics.fb.me/davidrecordon",
              "type": "home",
              "primary": "true" }]}}},
   {"rel":"describedby",
    "type": "application/rdf+n3",
    "href":"http://foaf.fb.me/daveman692",
    "entity": "You get the idea"}]}
```

Specifically, this would just be an OAuth API that provides X/JRD data
to authorized clients. The only extension is to add an `entity` element
to a resource descriptor link that includes the copy of the linked
resource.

Two things complicate a solution like this. First, [encoding is hard][].
There are four main kinds of data that people will want to embed, JSON,
XML, binary data, and everything else. XML and JSON are special because
they could concievably be included inline in XRD and JRD respectively.
And really, that's the ideal because no one likes having to pull out
more than one parser just to deal with some data. I'm not entirely sure
how to handle this, but formats that have both XML and JSON would be
very nice. So Portable Contacts gets extra points here.

Binary and other data still make trouble though. What's the best way to
signal that you're using Base64? Is it enough to just use the `type` of
the link? Only some implementation experience will really tell.
Singpolyma has done some fancy things with data: URIs, so that may be a
starting point for binary.

The other issue is that web resources are more than just data. Good HTTP
servers provide all sorts of metadata about when the resource was
updated, how long to cache, &c. The simplest solution would be to just
include the entire HTTP response as a string, but that's certainly more
trouble than it's worth.
[CloudKit](http://getcloudkit.com/rest-api.html) handles this
by tacking on `etag` and `last_modified` values. Seems like a sound
blueprint to me.

If OpenID adopts this sort of solution, it's not just good for OpenID
users. Everything else that uses XRD would benefit. If you want to have
standard data publicly available, you could have that on your public
XRD, while more sensitive things would be available to clients you
trust. And maybe you could finally start doing more with your web
identity than just log in.

  [OpenID Connect]: http://openidconnect.com/
  [LRDD]: http://hueniverse.com/2009/11/the-discovery-protocol-stack-redux/
  [OAuth 2]: http://hueniverse.com/2010/05/introducing-oauth-2-0/
  [YADIS]: http://en.wikipedia.org/wiki/Yadis
  [X/JRD]: http://hueniverse.com/2010/05/jrd-the-other-resource-descriptor/
  [encoding is hard]: http://cf.josephholsten.com/post/174607916/when-the-world-ends-the-only-things-left-will-be
    "When the world ends, the only things left will be cockroaches, rats, Keith Richards, and mangled text that has been escaped one-too-many or one-too-few times"
