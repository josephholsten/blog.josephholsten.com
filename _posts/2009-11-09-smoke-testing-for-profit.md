---
layout: post
date: 2009-11-09T07:52:39
title: Smoke Testing for Profit
---

A coworker of mine wants to stub out our access to external services so
our tests work faster and better. Trouble is, he seemed to be pointing
at our end-to-end testing when he said he wanted to stub things. And
that's exactly where you should stub as little as possible.

But you ask, aren't all the cool kids are using mocking frameworks? Yes,
they are. And so should you. Especially in your unit tests. You should
learn the difference between a stub and a mock. And you should remember
that really complicated mock expectations mean you're probably doing
something wrong. And that the the harder it is to mock out side effect
behavior, the harder it is to make concurrent and thread safe. But you
should totally be using test doubles as much as you possibly can in your
unit tests, and using the stupidest ones that could possibly work. If
you've managed to build an app with good test coverage without test
doubles, and didn't suffer in the process, contact me immediately. I've
got to see that in action.

But theres a maxim that you shouldn't mock code you don't own. Instead,
it's generally a good idea to stub out interfaces. And not just to
externally developed services, but to externally developed libraries
too. Totally makes unit testing more sane.

That's because unit testing is about creating a suite of assertions that
say "it's not this part that's broken". If (and when) that test fails,
you can be sure that something in the test is broken. But if that test
does alot, then you haven't got a clue which of the things the test does
didn't get done right. Which makes it about as useful as a bug report
from my sister the graphic designer. Pleasant, better than nothing, but
sightly twitch-inducing.

But you don't want the external stuff doubled out in integration tests.
Actually, I hate calling it integration testing. 'Integration' is what
you do when you need to know the volume of a space. End-to-end testing
has less sylables and actually means something. But I personally call it
smoke testing as in home inspection. Because you really need to push
stuff through every pipe to make sure it isn't squirting out somewhere.

If you're doing smoke testing, you shouldn't be doubling out your
services. And you really should be smoke testing. Cucumber makes this
stuff dead simple. Especially compared to calling DOM events through the
COM interface of Internet Explorer from inside an NUnit test. Cucumber
tests are even obviously useful, unlike unit testing. They're useful
because they can check that your app actually does stuff. Just like you
would do a million times if you didn't know how to automate tests.

But back before you knew how to automate tests, didn't you have the
program set up to actually talk to everything it would actually talk to?
So you'd know if someone updated the database, or reorganized the file
system, or the network was down. At the end of the day, that stuff has
to get delt with or the app won't actually work. Which means it won't
make anyone happy. Which means you won't get paid. Glum face.

So automating smoke tests means you know if you deserve to get paid.
That makes it totally the most important testing you could do.

So why is my friend, who is no fool, trying to screw with the most
important testing we have so that it wouldn't actually tell us if we can
get paid?

Because he isn't, of course. He's got a hankering for a different kind
of test, sometimes called an acceptance test or an integration test or a
functional test, depending on who you're talking to today. I like
calling them functional tests, but yeah, that's at least as bad as
'integration'. But the point of a functional test is to make sure that
your code provides the functionality you expect. If the network is down,
that's not your code's fault. Where unit tests exist to say, "it's not
this part that's broken," functional tests exits to say "it's not my
stuff that's broken."

Why would you need three different kinds of tests? If you've smoke tests
to tell you if you can get paid, and unit tests to tell you if you've
got bug regressions, what's the point of functional tests? To winnow
decision trees. When you get a bug report, the entire reproduction
scenario is the functional test. The fencepost error that causes the
scenario to fail is the unit test. As a developer with a good testing
suite, functional tests can let you inject whatever you like into your
app without having to fire up the debugger.

If your fuctional tests are working, then you know it's not your
problem. Well, it's almost certainly your problem, but that problem is
something more like sitting on the phone all day explaining the bug to
your service provider's tech support instead of twiddling with edge
cases in the deepest recesses of your code.

So please, write smoke tests. Write other tests if it suits your fancy,
and please write tests for any bugs you find to avoid regression. But
don't cripple your existing smoke tests in the name of TDD. Not unless
you don't care to get paid.
