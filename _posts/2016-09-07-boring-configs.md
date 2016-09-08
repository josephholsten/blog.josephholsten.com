---
date: '2016-09-07 22:51:00'
layout: post
title: The Most Boring Configs
---

I never want to see exciting tech in production. As the guy who gets
woken up at 4am when it breaks, I'd much rather have boring.

For years, I've been optimizing for boring. I try not to invent new
standards, usually there's already something good enough out there. Why
write a new library, style guide, protocol or data schema? Worst case,
I'd rather copy as much of the spirit of an old standby into a new realm
than start from scratch.

In that spirit, I've long been putting up snippets up as Github gists
with titles like, "The Most Boring nginx.conf". The spirit of the
projects has always been the same: I want the simplest template of
reasonable defaults for a thing, and I may as well make it public.

Now at first glance it might sound like I'd put up the most minimal
config possible, because what's more boring than nothing? Sadly, this is
rarely the case. Instead, I actually include *all* the default value for
important parameters in as defaults. "Why!?" I've been asked by friends
and coworkers who've suffered through my needlessly long configs. Two
reasons: explicitness & reference. First, I often see folks putting
default values in as if they needed to be specified. This leads to cargo
cult configs (I truly hope you've never experienced old sendmail
configs, which consist entirely of remembrances of use cases lost),
which will eventually cascade into a Revolution in which Everything Must
Be Rewritten!

Second is as reference to default values. Sometimes defaults change.
Sometimes, expectations are made of these default values. And while they
may be the default, ultimately you are responsible for software being
configured this way. You are specifying this behaviour, and so I
encourage being explicit.

Of course, if you look at my configs, you'll occasionally note that I
have more than a single "default" left in comments. Usually these are
Debian or Red Hat packager settings that vary from the vendor defaults.
I list them because many people accidentally mistake them for official
defaults. And why wouldn't you? If you install with a system package,
it's settings truly are a default.

So I've discussed the two values I always consider in my configs: vendor
and packager defaults. But often that is not enough.

Consider a common usage of Nginx: that of a front-end proxy for web
applications. For that we want TLS settings, vhost settings, and
potentially many features that aren't on by default. For this we need to
have an understanding of the browser landscape, HTTP semantics
(especially about caching), and expectations about the app to be
proxied.

Worst of all, we have the atrocious default values for TLS that ship
with almost anything built on OpenSSL. You see, OpenSSL rarely updates
their recommended ciphers, and even if they did they likely wouldn't
match browser best practices. For that sort of thing, it's important to
refer to expert third parties.

Finally, some things just aren't clear. Sometimes performance tuning is
off by default, even when it is appropriate in most cases. Sometimes
there are bugs outstanding that require workarounds. For this sort of
thing, we can only confidently refer to the source.

Which is to say, in making the most boring configs, I comb through the
vendor docs, common packager settings, expert guidance, and the source
to figure out what exactly the best general value should be.

Then I actually combine it into a config. Of course, the file should
start with a description and some links to the official doc for the
settings in question. I always stick a comment saying that the file is
config managed and shouldn't be changed by hand. Because I do so hope we
aren't savages here.

Then I go through all the settings, set into logical group (often
alphabetical inside those groups) and every single value has a comment
with a justification. It might be "vendor default" or "debian default",
or it might be enabling a straightforward feature. But anything which
might be mistaken for an interesting value should include a link to an
explanatory reference or ticket.

You might wonder why I'm not doing this in chef, or puppet, or ansible
or any of the many tools I use every day. Would templates make this
clearer? The problem is that to do so would make some folks feel
isolated. These are reference texts, and exist as a place outside config
management modules where we can share our common ends, even if we don't
share means. And ultimately, all this stuff should just be in the
vendor's defaults, right?

I've described the why and the how, so if you're still interested in
what these actually are, you can find them at:

http://github.com/josephholsten/boring
