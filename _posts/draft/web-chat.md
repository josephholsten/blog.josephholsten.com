2014-11-15 holy cow this is out of date. this needs to be updated to referece otalk.


Omg this is huge and out of date. Needs web sockets, probably socket.io also.



A friend of mine contacted me about a little problem he was having, I'm just going to pretend you're him. You've got a site and you wants to add live chat. You got as far as a polling XMLHttpRequest prototype and realized this stuff is hard and kind a slow. What should you do next?

You've got a fundamental problem. You're polling (Are we there yet? Are we there yet?), when you'd rather be blocking (I'm going to sleep, wake me when we get there.) and you can't solve that with naive XHR. What you need is a way for the server to notify the client. Or, as the cool kids say, you need to push messages.

At this point, the community hasn't agreed on what the right way to do this is. You are in unexplored territory. HIC SUNT DRACONES.

I don't want to stand in the way of you reinventing the wheel, but I'm not in the mood for that. If you're just dying to do that, pick a tutorial on COMET and be on your merry way. Call me when you've solved world peace with in-browser chat.

In a perfect world, browsers would come with JavaScript clients for XMPP (or IRC if you're old school), so all we'd have to do is flip on a server[ejabberd] and write an interface in HTML.

So what works today? BOSH[wiki-bosh] is the standard way to push XMPP to the browser with COMET[better-w-bosh].

That means you've got a real chat server running your web chat.

Maybe you're thinking you don't want to use a big bad chat server. Maybe you're thinking that it's just a couple of lines in php, wasn't there a five minute screencast somewhere? I wonder, did you write your own web server? Are you using a database whipped together from a couple blog posts? Sit down, grab a

Once you've got that set up, you probably want to reusing some existing client code. Check out speeqe[speeqe], a finished group chat setup built from modular systems.

That means you can go in and replace your ejabberd with openfire, then maybe swap out punjab with

If you're just making a hobby website to play with things, please figure out how to replace the Comet in BOSH with Web Sockets. WebSockets are perfect for bidirectional I/O in a browser, but the only browsers with support are beta releases right now.

Your assignment for this weekend: port speeqe onto rails with ruby-bosh, then replace punjab with rhb, finally moving the support onto sinatra






JSJaC: http://blog.jwchat.org/jsjac/

Strophe: http://code.stanziq.com/strophe/

XMPPoverWS: http://stackoverflow.com/questions/1850162/is-there-an-open-source-websockets-javascript-xmpp-library

emite: http://code.google.com/p/emite/

ijab: http://code.google.com/p/ijab/

better-w-bosh: http://metajack.wordpress.com/2008/07/02/xmpp-is-better-with-bosh/

bosh-cloud: http://thetofu.livejournal.com/71339.html
(XEP-0124 Bidirectional-streams Over Synchronous HTTP)
wiki-bosh: http://en.wikipedia.org/wiki/BOSH
which-bosh: http://metajack.im/2008/09/08/which-bosh-server-do-you-need/

speeqe: http://code.stanziq.com/speeqe
sqeeqe-setup: http://code.stanziq.com/speeqe/wiki/SpeeqeSetup

http-bidi: http://tools.ietf.org/html/draft-loreto-http-bidirectional-01

rhb: http://rubyforge.org/projects/rhb/

ruby-bosh: http://github.com/skyfallsin/ruby_bosh
http://intridea.com/2009/3/1/rubybosh-an-xmpp-bosh-session-initializer?blog=company

xmpp4r: http://home.gna.org/xmpp4r/
