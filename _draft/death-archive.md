Death archive

They say at the end of your life, all you've got are the stories you leave behind. Our ancestors had correspondence, journals, photo albums and jewelry & junk drawers that we could dig through to learn their stories. And these days, we record more of our lives than at any point in history. But for most of us, it's all one slip near a puddle away from complete destruction.

Of course, you should have backups. And you can probably make them better. But I'm not going to discuss general purpose backups. Because while my descendants may swoon over my application configs, the thing I really want them to have are the stories.

So I asked myself: what does an archive need to have for that, and how do I make sure it gets to the people I care about?

In particular, what data tells a story in my life? Used to be, I kept my documents, notes, and photos in application specific formats and databases. Sure, I could leave it to my descendants to convert to their preferred format, but leaving things in a timeless format has an appeal.

Heres what I'm using currently:

- photos: So these days I keep my photos in chronological folder structure with the help of sortphotos.
	- Photos/
		- 2016/
			- 09/
			- ...


- documents: And of course, I keep most of my documents in markdown. Anything I'm currently working on lives in Documents/
	- Documents/
		: working documents, including runbooks, quick references, 


- records: Of course, some works actually are "finished". I file these in Records/ which contains the same year/month structure as photos. 
	- Records/
		: finalized documents organized by finalization date. Usually receipts, contracts, tax documents, financial records, &c 
		- 2016/
			- 09/
			- ...

- database: Finally, I have a number of records that prefer to be databases. 

	- Databases/
		: Some things don't live easily as files. 
		- Passwords/
			: 1passwd & pass(1) archives
		- Mail/
			: maildir via offlineimap
		- Calendars/
			: iCalendar via vdirsyncer
		- Contacts/
			: vCard via vdirsyncer
			
Ok, so that's the contents

But it takes a little effort getting all of these synced. 

Once you've got all that synced into a working directory, you've got to guild a package regular folks can access

That means zip+pgp. Everyone can get easy tools for accessing these.

Here's what I use for my decrypt instructions: ...

With it fully decrypted, you just need to publish it. I'm happy with s3, but there are permanent hosting companies.

Finally, you've got to have a way to notify folks with credentials to access the archive. I use dead mans switch. 


### Relevant
Backupify
Digital death day
- Deadman.io
- http://www.deadmansswitch.net/
- Data inherit
- World without me
- http://www.thedigitalbeyond.com/online-services-list/

### Todo
- social network backup
- Dead mans switch


### Stories:
- About filling out violets an book
- About my parents visit
- About making this archive