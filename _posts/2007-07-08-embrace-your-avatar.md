---
layout: post
date: 2007-07-08 09:25:39
title: Embrace your avatar
---

I registered for a web app last week. It imported most of my profile
from OpenID simple registration. But I want an avatar. If you've used
myspace, then you get the idea of a profile picture. If you've posted on
a site supporting gravatars, you know how nifty it is to get that little
picture next to your post. I want this nifty feature as a yadis (nee
xrds-simple) service with my OpenId. That means we have to invent
something.

Here goes:

```xml
&lt;Service priority="30"&gt;
  &lt;Type&gt;http://josephholsten.com/avatar/1.0&lt;/Type&gt;
  &lt;URI&gt;http://en.gravatar.com/userimage/529392/71f60655008051cefc0474c09dac3289&lt;/URI&gt;
&lt;/Service&gt;
```

What is it? A yadis document specifying my avatar URI. Along with it
might lie LID, OAuth, or OpenID service descriptions. The type element
is just an example right now, I'll be needing a real service descriptor
URI before this is a standard. But the URI element is interesting.
That's my gravatar! Or rather, it's a URL for a real live image
somewhere on the internet. For the geeks out there, we should assume
that the URL responds with the appropriate mime type. Even better, it
should convert into the appropriate mime type that is requested of it,
REST style. But if places like jyte like this, you won't have to upload
images to every OpenID supporting site out there, it'll just figure it
out.

I have considered that simple registration extensions might provide this
role. The problem lies with updating information. I change my avatar
often enough to reflect my current appearence. Simple Registration
really should apply just to the one time act of registering at an OpenID
relying party. This is not a one time sort of use case. Thus the new
service type.

Some problems are unresolved. Gravatar, the gold standard for globally
recognized avatars, supports multiple image sizes and filtering by
appropriateness. This could be solved by having multiple services in
your XRDS, with each service providing an optional size and
appropriatness rating. Alternatively, the service URI could support HTTP
GET parameters to specify those attributes. While both reasonable for
Every Use Case, I feel that Usually, it is best left as the Relying
Party's problem. Or rather, You Aren't Going To Need It.
