Title: I've Got My Personal Cloud, Where's Yours?

Wouldn't it be nice if all the sites and apps you use kept your data
where you can get to it? A place could have one place to store
credentials for all the places you sign in to? A place that you could
point an app you're trying at and start using your existing info without
having to import? A place that lets you revoke an app's access to your
data when you aren't using it any more? Lets you revert the changes a
stupid application made? And while we're at it, automatically sync to
your computer and mobile for offline access? I've already got it, and
it's pretty nice.

I'm not in some stealth beta, or using stuff I wrote myself. I'm just
using Dropbox. And it's giving me a new perspective on personal data
stores.

Folks around the internet-identity and vendor-relationship-management
communities have been talking for years about personal data stores to
help me keep control of my data, instead of the eternal silo-to-silo
export and import that is so broken today. But while the conversation
has been framed as putting the power back in individuals hands, the
approaches I hear talked about sound less like the inverse of a
client-relationship-management tool, and more like
digital-rights-management for individuals. I tend to read VRM as
personal-rights-management anymore.

I'm sure it would be nice to control how companies use our personal info
like how they've controlled our access to media. But while we've barely
still got DVD Jon fighting to keep us in control of the info we buy, big
institutions aren't constrained to the spare time of teenage
cryptanalysts. Plenty will have the resources to work around the modest
barriers crypto could give us. What are we supposed to do, watermark our
Amazon purchase history? Most of the time when we give institutions our
information, we want them to be able to read it. And there is no way
around the analog hole for this kind of data.

That's why these conversations happen around identity people. The only
hope for slowing institutions down is to make it harder to correlate
info we don't want correlated. The only way to do that is with
pseudonymous identities, so there's less info attached to each identity
and less to tie them together with.

That's the theory, but it's seeming less like a possible reality every
day. OpenID, our last great hope, is starting to lose ground. The parts
that are supposed to enable pseudonymity and personal control of
information have never caught on. Well, that's not quite true. Sites
that take OpenIDs strongly support the provider handing over one piece
of information: your email address. Any pseudonymity is wasted effort
once institutions can join your data by your email.

Clearly I don't much care about the classical goals of
personal-data-stores. I don't feel the need to wrap my info in a digital
tinfoil hat, but I still want as much control as is pragmatic.

When I was a freshman at Northeastern University I spend a ridiculous
amount of time talking about thin clients, digital reputation and
artificial intelligence. I probably got the furthest with planning the
thin client I most wanted.

Like all Linux geeks, my first thought was to have just enough for a
remote shell. We're talking teletype terminal meets SSH. And later we
could add an X11 server so I could use the only graphical app I needed:
a browser.

Then GMail came out. I was the first person I knew to get an invite and
it opened my eyes. All you needed was a browser. Then I discovered I was
an audiophile and I realized things were complicated.

In case you don't remember, audio used to be something JavaScript
couldn't do (looping MIDI backgrounds don't count). Direct file access
still isn't an option. So I learned about flash and figured it would be
a temporary fix until I was awesome enough to add that to browsers.

But storing music stopped me up. Sure, you could have the player use
music on a web server, but how would you manage your music collection?
And what about all your other files? How could you create work without
some sort of file manager?

Fast forward to last December. I never built any of that stuff, though I
did get to tell myself I had dreamed of the iPhone before it was born. I
actually know how to build all those web apps I dreamed of, but google
had mostly done that for me (still, where's my music player? Lulu and
muxtape have gone, and slimbox is hardly sufficient).

But I've learned that I have flaws, many I don't realize, and more I can
barely control. I've tracked my location on whatever service was best
since those days in Boston. I loved data, but I needed more to actually
start fixing myself.

Quantitative Self showed me the tools. But they keep their data in their
silos and I'm lucky if they have an API. So I've started aggregating
this info, but I need some place to put it.

Enter Dropbox. With Apple's MobileMe hardly meeting the data sync needs
of the hordes of iPhone users, Dropbox has become the de facto data
store. It is to consumer applications what Amazon S3 is to web
applications.

This is what a personal cloud looks like. 1Password managing credentials
for all my services. AccountEdge storing my business finances.
NotationalVelocity and PlainText storing notes. All my documents and
pictures. And the tracking data I scrape from APIs.

Built on OAuth, Dropbox gives me control over what can access my data. I
can't take it back, but I can stop handing it over. It's API isn't
officially for web app use yet, but it still works. The worst part is
that the API is entirely custom and doesn't reuse much from other file
APIs.

There are two big issues. First, not everything work with Dropbox. I
can't run a photo gallery, music player or address book off of it. It
may not be anywhere near ideal storage for many apps either, it
certainly isn't MySQL. second, it may be a separate data outside the
siloed applications that have our data today, but it's still a silo.
There is no real way to replace it with an alternative if things go bad.

We can integrate more with Dropbox and make drop-in replacements. We
need a common file store to have a useful personal cloud, and Dropbox is
the best out there. We can push it to be better, say with OpenID, UMA
and a more normal API. But we need to start using it like a personal
data store if we're going to find places to improve it. Let's go.

