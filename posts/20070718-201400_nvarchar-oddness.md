Date: 2007-07-18 20:14:00
Title: NVarchar Oddness

I was wondering what the difference between varchar and nvarchar sql
types, when I ran across a [brief by guyS][]. I was slightly confused by
such wierdness, so I did investigate.For future reference, you should be
aware: SQL Server nvarchar data is UCS-2. That is Unicode but not UTF-8,
the sort that acts just like eight bit ASCII when the high bit is 0.
Otherwise it may map to any plane in unicode by gaining extra bytes to
store itself. It's also not UTF-16, the sort that automatically takes
sixteen bits to store the lowest plane of unicode, and scales similarly
to handle all the rest. This is similar but different.UCS-2 is the home
planet of UTF-16, where everthing is two bytes. Instead of allowing
sixteen planes for data, you get plane 0. That is all. Everything is two
bytes or not supported.

  [brief by guyS]: http://weblogs.asp.net/guys/archive/2005/01/15/353550.aspx
