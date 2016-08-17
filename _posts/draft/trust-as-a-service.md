Title: Trust as a Service

I had a bad week. I'd taken on a feature with what originally seemed
like a rather flattering deadline, had it relaxed about the seat and
thighs, yet still managed to fire the waist button half way across the
room. So while I'm waiting for my build, I'm a little obsessed with how
to stay out of this situation in the future.

I got a big dose of this anxiety the other night when I skimmed
Rasmusson's [The Speed of Trust][]. It hit me that I've been living in a
strange dreamland that looks agile if you're up really close. We have
almost continuous deployment, a strong don't-break-the-chain mentality
to continuous integration, and do-it-live attitude that often has the
turn around from feature request to deploy under an hour.

But quality has taken a hit in the last six months. We're just not
getting the thoughtfulness in design, reliability and performance that
we used to have. Rasmusson says to “Take away the quality lever,” but I
don't remember anyone pushing it down. So how'd it get down there?

Next, Rasmusson says “Deliver something of value every week” and I
realize that our deliver-value relationship is out of whack. We're
trying to deliver features as fast as we can implement them. And our
stakeholders are getting us great ideas for features as fast as they
think of them. But no one is taking the time to step back and feel how
valuable all these features are, so while we might live up to the letter
of Rasmusson's law every week, we haven't delivered its spirit in
months.

It's actually worse than I'm making it sound. We use Pivotal's
[Tracker][] to follow features from idea to implementation so we've got
lists of what features have been accepted (as complete), delivered (for
acceptance testing), started (being implemented), scheduled and
estimated. Over the life of the project, we normally get 19 points of
work done every week. Looking at our current queue, we've 52 points
worth of work delivered, but neither accepted or rejected. That's nearly
three weeks worth of features. Fortunately, we've had 70 points accepted
in the last two weeks.

The problem is that the oldest of the delivered features was finished
five months ago. This feature took one of our devs a full week of
effort. It one of the original features with a spec written in Word that
in no way describes the current interface, metaphors, or domain
language. It asserts what the database tables are supposed to be named.
In only mentions two kinds of validation or errors that might happen.

Which is to say, it's a placeholder feature. No one actually wants us to
use the old ideas in the spec, so that it's implemented entirely
differently isn't an indication of a problem. But no one except a
stakeholder could check that the feature is acceptable. It's entirely
possible that some day a stakeholder will say that it's not working
correctly and we'll have to implement changes. Who has to foot the bill
for the stuff that's inevitably going to be wrong with this feature?
Where is line between the fixes we're happy to make and the enhancements
we probably should be getting paid for?

Which brings me to (the apparently ancient) [How to Sell Agile to Fixed
Bid Contract Clients][].

  [The Speed of Trust]: http://www.pragprog.com/magazines/2011-03/way-of-the-agile-warrior
  [Tracker]: https://www.pivotaltracker.com/
  [How to Sell Agile to Fixed Bid Contract Clients]: http://www.codesqueeze.com/how-to-sell-agile-to-fixed-bid-contract-clients/
