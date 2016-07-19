Title: Scripting your Mac: Getting started
Date: 2014-10-19 14:03:38

I'm switching from [Spectacle](http://spectacleapp.com/) to [Mjolnir](http://mjolnir.io/) mostly as an excuse to learn [Lua](http://www.lua.org/). I've noticed that introductory documentation is a little sparing, so I figure I may as well start writing some.

If you've never programmed in Lua before, you may want to run through 
[Learn Lua in Y minutes](http://learnxinyminutes.com/docs/lua/) before you begin.

We're going to work our way through building a subset of common tiling window managers like [Spectacle](http://spectacleapp.com/) and [SizeUp](http://www.irradiatedsoftware.com/sizeup/).

First let's build the traditional "Hello World!".

We'll need to install Mjolnir first, so download the [latest release](https://github.com/sdegutis/mjolnir/releases/latest), move it into your `Applications` folder, and fire it up.

This example will need a couple libraries to work, so we'll need to install the `mjolnir.hotkey` and `mjolnir.alert` rocks:

<?prettify language=shell?>
<pre class=prettyprint>
luarocks install mjolnir.hotkey
luarocks install mjolnir.alert
</pre>

Then in your config (usually `~/.mjolnir/init.lua`) file enter:

<?prettify language=lua?>
<pre class=prettyprint>
local hotkey = require "mjolnir.hotkey"
local alert = require "mjolnir.alert"

hotkey.bind({"cmd", "alt", "ctrl"}, "H", function()
  alert.show("Hello World!")
end)
</pre>

Reload your config and press `Cmd+Alt+Ctrl+H`. You should see a bubble in the middle of the screen with the text "Hello World!"

Now that we understand the basic parts, we're ready to move onto [basic motion](http://blog.josephholsten.com/post/scripting-your-mac-basic-motion).

