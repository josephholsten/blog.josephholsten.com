Date: 2007-07-09 03:46:00
Title: Embrace your identity

> If anyone knows you by a web address, than you've got a web identity.
> And all around today's web we can find interesting distributed
> services. So you need a way to tie your web identity to the services
> you need and use. That is what Yadis does.

[Posted][] by me in February 02006.

The service you need is authentication. Really. Because you need amazon
to authenticate you to show your wish list. Your bank needs to
authenticate you to let you transfer funds. Hotmail needs to
authenticate you to show you targeted ads. Or whatever.

Yadis is what makes OpenID 2 nifty. With it, your new web identity can
authenticate with OpenID, or Lid, or Dix. In theory, you could extend
your identity to support SAML, or some other authentication protocol you
happen to like. I hear that Microsoft is even working on CardSpace
integration. No, I don't know more than a google would provide.

Why do you want authentication? Because it means that you don't have to
remember a username and password for any OpenID suporting sites. Instead
of typing in a username and password for jyte, you simply enter your
OpenID and it redirects you to your identity provider. Then you type in
a password, or in the case of vidoop, select the images of the
categories you've chosen. When your identity provider is confident you
are who you say you are, it redirects you back to jyte. And jyte
recognizes you are http://josephholsten.com (or whoever you are today).

  [Posted]: http://lists.danga.com/pipermail/yadis/2006-February/002195.html
