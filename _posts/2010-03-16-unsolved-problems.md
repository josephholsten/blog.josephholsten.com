---
layout: post
date: 2010-03-16 07:37:25
title: Unsolved Problems
---

This week I've had a bunch of problems I haven't finished solving. So
instead of writing a handful of walkthroughs, I thought I'd write about
all these issues.

For years now I've wanted to set up my own chat server so you can
message me at joseph@josephholsten.com instead of through Google,
Facebook or any of the other IM services. Recently I also found a great
looking framework for accessing your XMPP server from a website called
[Speeqe][], and I'd like to give that a try as well. Since I just got a
hand-me-down desktop machine, I thought I'd also try my hand at
[OpenSolaris][]. It has a futuristic package management system called
IPS, but unfortunately there doesn't seem to be any XMPP server
available through the official Sun package repositories or any of the
community managed repos. So while IPS is the the most modern package
system for OpenSolaris and I'd like to use it exclusively, that doesn't
seem like an option.

The options I haven't tried are to build from the official source, use
old [SVR4][] packages, or use a weird source based system called a
consolidation. Sun maintains one consolidation called [Sun Freeware][]
which contains the trusty [ejabberd][]. But unlike the source based
package management systems I've used, you don't get the option of just
installing the package you want plus dependencies. So at some point I'm
going to have to build a ridiculous number of projects just to get the
one I want. I'll give this vaguely official way a shot first before I
try anything else.

I'm also trying to get back up to speed with the Open Stack standards I
love playing with. So I put some time into updating my [webfinger
toolkit][] to work with what's live at google right now. I've got it
working, but I discovered a little nit about how XML namespaces handle
unprefixed attributes that surprise. I'm investigating further, but it
worries me for the compatibility of XRD parsing implementations. But
once I get that clarified, I'll be starting on a prototype of a XRD
provisioning service.

While I was getting that webfinger project working, it occurred to me
that I should be testing my code against Ruby 1.9 by now so I can post
my projects in [Is It Ruby 1.9?][]. So I gave [multiruby][] a try, then
played with [rvm][], but couldn't convince 1.9 to install rubygems. Ruby
says it's got issues finding the `_rb_Digest_MD5_Finish` symbol in
`digest/md5.bundle`, but it may as well be speaking Hungarian for all
that means to me. After giving up, I installed the [macports][] ruby19
package and it works flawlessly. I did manage to run `nm` on the bundle
in both the broken and the working installs but the symbol tables look
the same. One lead I haven't followed up on is that rvm is using
ruby-1.9.1-p378 while macports uses ruby-1.9.1-p376. At some point I'll
be comparing the build process used by rvm to the macport to see if I
can divine anything else.

  [Speeqe]: http://code.stanziq.com/speeqe
  [OpenSolaris]: http://www.opensolaris.com/
  [SVR4]: http://en.wikipedia.org/wiki/UNIX_System_V#SVR4
  [Sun Freeware]: http://hub.opensolaris.org/bin/view/Project+sfwnv/
  [ejabberd]: http://www.ejabberd.im/
  [webfinger toolkit]: http://github.com/josephholsten/discodactyl
  [Is It Ruby 1.9?]: http://isitruby19.com/
  [multiruby]: http://www.zenspider.com/ZSS/Products/ZenTest/
  [rvm]: http://rvm.beginrescueend.com/
  [macports]: http://www.macports.org/
