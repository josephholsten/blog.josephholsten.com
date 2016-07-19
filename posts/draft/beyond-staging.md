title: Why does my staging environment suck?
--


Your company is starting to grow, and suddenly you're beginning to notice all the ways your staging environment isn't like production. Like, at all.

It's driving your crazy, because all the machines are configured slightly differently than prod (usually because someone logged in and tweaked a few things and forgot to put them back).
Plus, the databases aren't exactly like prod. Usually the schemas are the same, but there's still a bunch of cruft because data got updated before the right validation code was added (how do you think we realized that validation was important?)

And then there's the fact that one of the services is running a version six months older than what's in production. And a different service is six months ahead of production.

And then there's that team that keeps calling dibs on staging. They're releasing a Big New Feature and they're locking down staging so they can do complete QA testing and internal training before everything goes live. So now a few folks are pushing directly to production because "It's just a small change" and "There's no way it could break anything".

And every day you keep hearing about these awesome little startups that somehow have figured it out and don't have any of these problems. They're just continuously delivering their way into the future. Why can't we be this awesome?

Don't worry. 

- performance, for measuring service envelopes for when components fail or operate outside performance requirements
- acceptance, for verifying new feature completeness or bug remission
- debug, for when an issue is not reproducible in a local dev environment
- demonstration, usually for pre-sales demo to clients or for acct mgmt & cust support training of a feature before public announcement
- security, for running penetration tests and vulnerability scans
- integration, for verifying a significant refactor of code or config integrates with other services correctly

- Dress rehearsal, for verifying a complex migration procedure
- Game days, for verifying disaster-recovery, service-outage or data-restoration procedures
