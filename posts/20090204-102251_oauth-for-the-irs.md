Date: 2009-02-04 10:22:51
Title: OAuth for the IRS

I am tired of giving out my social security number. If you have looked
into digital identity technology recently, you have probably heard of
the password anti-pattern. As Jeremy Keith [puts it][],

> asking users to input their email address and password from a
> third-party site like GMail or Yahoo Mail is completely unacceptable.
> Here’s why:

> It teaches people how to be phished.

The same thing applies to my social security number. Every time I give
it out, I am making it a habit. I am accepting identity theft.

This anti-pattern has gotten a lot of notice recently as OpenID has
gained use. OpenIDs are just a URI, and if some bank told the IRS that
my OpenID had earned one million dollars interest this year, there would
be no way for the IRS to verify the claim. That is, unless I gave that
bank my OpenID password, which would prove that they really were
speaking for me.

But what if that bank were broken into? If some thief gained access to
the bank database, they could go around acting like me until I changed
my password. They might even be able to set my password to whatever they
wanted wanted with that information. So giving out my password, even to
my bank, is a bad idea.

To fix this problem with OpenID, a group of people developed the [OAuth
protocol][]. OAuth doesn't need you to give your password to your bank.
OAuth works by having your bank ask your OpenID provider for permission.
Then, you can log into your OpenID provider, grant permission, and the
bank gets to prove that you really are who you say you are. Entirely
without giving your bank the sensitive information that would be lost in
a break in.

Now, it is possible that the bank could be broken into. They would still
have some OAuth credentials that the thief could use to claim to be you.
But OAuth has already thought of that. With OAuth, you can revoke those
credentials at any time. If your bank gets nationalized by the Fourth
Reich of Zombie Hitler, have no fear. One click and there is nothing the
undead national socialists can do.

But today I still need to give my bank my real and entire social
security number. That is all some crook needs to ruin my credit. I have
no way of revoking that information. In this modern age, this needs to
change.

The IRS needs to stop making us give irrevocable identity information to
everyone who asks. If I sign up for a job, let me log into the IRS web
site and create a unique tax identifier for that employer. If and, given
today's security climate, when their human resources database is broken
into, no big deal. I just need to log into the IRS site and let them
know the identifier needs to be revoked. No more would illegal
immigrants pretend to use my social security number. No more would
criminals apply for loans and credit cards in my name. All because the
government started using secure identity.

While I am a big fan of OAuth, it is not the first protocol that could
handle this trick. Kerberos and WS-Trust and perhaps many others could
be made to do the job. Of course, I like OAuth because I have been
involved with it, and because it was designed for just this problem. But
it is being reworked for a formal standard today in the IETF. Much is my
love for OAuth, but if government is in the place to make these changes
now, they will need to use something else. And I would rather have my
identity be safe than wait for my pet protocol to be finished.

  [puts it]: http://adactio.com/journal/1357/
  [OAuth protocol]: http://oauth.net/
