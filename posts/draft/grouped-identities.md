Title: Grouped and Correlated Identities

I've been neglecting my series on OpenStack gaps, but the next thing is
first order identities. Unlike today's identidies, usually usernames,
emails, and OpenIDs, first order identities are the aggregate of these
primitive identities. Without them you've got a bunch of work to figure
out the relationships between identities, but with them you can do
interesting processing to figure out what's really behind an identity.

Grouped identities aren't a new thing. The Federalist papers were
written under a group identity, but historians figured out the trick and
now most editions of those documents mention their actual authors. But
it's not just useful to realize that more than one person is claiming
the same identity. Privacy geeks often advocate the use of pseudonyms to
split one single person's idenity into many. If done well, these
seperate nyms can have altogether different reputations in different
spheres of influence. But without some sort of tool to figure out the
relationships between these identities, it's a damn spot of work to
understand them on your own.

At the moment, there's a few different ways to handle this problem. They
all suck, but it's worth noting that there's more than one perspective
on the problem. Today you'd probably get the most use from recognizing
shared relationships. If you can create a group of your friend's
friends, that's really useful. But right now, that's pretty limited. You
could figure out the facebook account which are friends with your
friend, or maybe the twitter users that follow your friend, or even the
URIs in your friend's XFN or PoCo markup. But I seriously doubt those
people are actually identifying themselves as the Friends of Bob in the
things that they do.

That's a big deal, because identity is as much about the stuff those
people do as it is about who's actually doing it. Much more useful would
be the group of members of a committee, or the authors of a blog, or
some other group of people who work together to make something.

Realize that OpenID was designed to be a way for blog authors to
identify themselves with that blog URI. But group blogs don't have a
good way to use that. They could all share the blog identity, and that's
interesting in its own right. But usually those people have a life
beyond that group blog. Seperate identities with seperate actions.

Some naive tool that just says bob@example.com is the same as
http://example.com/bob isn't going to be enough to understand Bob's
relationship to the work of his group blog.

In the same way, naive groups aren't enough. Saying that bob@example.com
and http://facebook.com/bob are members of http://example.com/bob
doesn't let some tool figure out that trolling comments from
http://example.com/bob mean bob@example.com is a jerk.

So it's obviously important that we have identifiers that are clearly
groups with members, and identifiers that are singular and can be
correlated with other singular identifiers. It even makes sense to
correlate two group identifiers that have the same members.

Getting some formal semantics for people to correlate their own
identities is a good start, but not enough.

