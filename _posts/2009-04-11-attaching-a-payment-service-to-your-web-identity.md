---
layout: post
date: 2009-04-11 05:43:19
title: Attaching a payment service to your web identity
---

Chris [speculated][] some about the way payment processors like PayPal
can play nice in the digital identity arena. I don't think anyone's
surprised that the big issues in identity today are heath data and
payments. I do think that Chris has dropped the ball a bit by taking
such a big picture view of the problem. He's a designer and his real
forte is envisioning how tech should look, and then pushing the right
people to make it happen.

He needn't bother too much for this, though, since the [VRM Project][]
has already done a great job at imagining how payment should look. With
their [r-button project][], they imagine a common interface for payers
and providers to exchange cash and services. They even have a nice icon
to show that someone supports the r-button. Like the ever present feed
icon, I think it would work nicely in the address bar.

The VRM Project even has a side project of the r-button called
[PayChoice][r-button project], that is designing a way for users to pay
exactly what they want, how they want. Admittedly, most businesses
aren't keen on selling their stuff for just a penny. But if you haven't
heard, there are Real World Famous People, like Nine Inch Nails and
Radiohead, who are already doing business like this. If all it took was
a WordPress plugin to install, you can be sure plenty of bands would do
it too. But there's a wider range of CreativeCommons smoking, GPL
snorting, free-content loving creators who could use something a bit
easier to use than a PayPal donate button.

Unfortunately, VRM Project people generally aren't cypherpunks,
crypto-system designers, or programmers at all. So while we're got a
pretty interface that would be great to use, the wires aren't connected
to anything. There's no protocol, no implementation, nothing. So the
next step is to figure out what what wires we need and what parts we can
jack from the rusted Jeep in the backyard.

First of all, there's got to be security. Just sticking your credit card
number in an XML file and posting it on your site is not going to work.
I'm not positive, but I'd bet some combination of OAuth and OpenID
Attribute Exchange ought to be enough to keep private info safe. OAuth
tends to use a segmented system so your payment info would only work
with a single provider. And when that cute startup gets acquired by
Zombie Hitler's MultiNationalAcme Inc., you could revoke access to your
cash with a click of a button.

Behind that basic security, you've got to have some server handling
credits and debits. Secure payment systems get created all the time by
crypto fans, but there's a few modern examples that might fit the bill.

The first sort is a pretty close to how things work today. Typified by
PayPay, you and your service have accounts in the same bank. You or the
service request a transfer, both of you authorize it, and you both get
proof that the transfer happened. [OpenSocial Virtual Currency][] is a
protocol designed to do just that. It's strangely tied to the social
network where all this would happen, but it seems like that social
network could be a marketplace or something else very unlike today's
social networks. I'd be surprised if it weren't easy to pull this
protocol out of it's social network shell and make it happen anywhere.

This sort of bank-centric has a lot going for it. The protocol is super
lightweight, and most of hard security stuff happens behind bank walls.
In fact, it's pretty much the exact same thing as PayPal does now, with
a little more automation. Just getting a common protocol to handle the
things PayPal and Google Checkout do would make it much easier to
support competitors and push innovation into the market. Unfortunately
with this kind of protocol, a bank will have a hard time competing with
big players. Since both you and the service have to have accounts at the
bank, big banks will get more users. And without a protocol that tackles
non-repudiation, you have to seriously trust the bank handling the
transaction.

More powerful protocols can take care of that. They make sure that every
transaction is safe and could let complete strangers exchange things
without trusting each other. Protocols like [ripple][] let you use
whatever bank you trust and ensure the money gets to the service's bank
safely. In between, the protocol anonymizes the transaction so the
service can't see where you got your money and you can't see where they
spend it. It's quite a bit like onion routing or using a darknet.
Obviously, I'm much more keen on using a protocol that gives me more
control over my information and my money.

None of these projects is exactly an Enterprise Turn Key Solution, but
that's okay. Back when OpenID started, there were a large handful of
projects that did the same thing. But enter yadis and they could reuse
components, fight on an even playing field, and slowly add the features
of the others until OpenID eventually had everything in all the others.
I didn't think OpenID would win back then, but won because it got better
faster than anything else. We need to get the same thing happening with
payment processing. Getting them all to support OpenIDs and publish XRD
services would be the first step to snowball into a real solution.

  [speculated]: http://factoryjoe.com/blog/2009/01/28/what-paypals-member-in-the-openid-foundation-could-mean/
  [VRM Project]: http://cyber.law.harvard.edu/projectvrm
    "Vendor Relationship Management"
  [r-button project]: http://cyber.law.harvard.edu/projectvrm/R-button
  [OpenSocial Virtual Currency]: http://code.google.com/p/opensocial-virtual-currency/
  [ripple]: http://ripple.sourceforge.net/
