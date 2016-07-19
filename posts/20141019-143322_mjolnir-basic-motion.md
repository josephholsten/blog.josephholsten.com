Title: Scripting your Mac: Basic Motion
Date: 2014-10-19 14:33:22

If you're just joining us, you may want to start at the beginning with [hello world](http://blog.josephholsten.com/post/scripting-your-mac-getting-started).

While that was fun, it's not the most useful. Let's start moving things around. Also, I'm going to make a point of explaining what's going on from now on.

To move windows at your command, we'll again need the `mjolnir.hotkey` rock. As you probably noticed, `mjolnir.hotkey.bind()` allows you to attach functions to key press and release events. This is how we'll be triggering the window changes we want to make.

We'll also need the `mjolnir.window` rock to give us access to the windows we want to control. We'll be focusing on moving the currently active window, so we'll access its `window` object with `mjolnir.window.focusedwindow()`. Then we'll want to change it's position on the screen, which is available as the `rect` object from `mjolnir.window:frame()`. Then we can fiddle with the `x` & `y` positions and save using `mjolnir.window:setframe()`!


So let's begin by installing our dependencies:

<?prettify language=shell?>
<pre class=prettyprint>
luarocks install mjolnir.hotkey
luarocks install mjolnir.alert
</pre>

Let's begin with a tiny use case, just moving a window a bit to the left. Users of `vi` and `nethack` know that the only appropriate key bindings for this must use the `H` key. I'll be assuming that you also don't mind a bit of key mashing, so I'll use `Cmd+Alt+Ctrl` as our mode. Here goes:

<?prettify language=lua?>
<pre class=prettyprint>
local hotkey = require "mjolnir.hotkey"
local window = require "mjolnir.window"

hotkey.bind({"cmd", "alt", "ctrl"}, "H", function()
  local win = window.focusedwindow()
  local f = win:frame()
  
  f.x = f.x - 10
  win:setframe(f)
end)
</pre>

Seems simple enough right? The only thing to remember is that the origin of this Cartesian plane is in the upper left corner of the screen. So making `x` smaller means left, larger means right. And for `y` smaller means up, larger means down.

So let's extend this control to the full `nethack` motion:

<table>
<tr>
<td>y</td>
<td>k</td>
<td>u</td>
</tr>
<tr>
<td>h</td>
<td></td>
<td>l</td>
</tr>
<tr>
<td>b</td>
<td>j</td>
<td>n</td>
</tr>
</table>

<?prettify language=lua?>
<pre class=prettyprint>
local hotkey = require "mjolnir.hotkey"
local window = require "mjolnir.window"

-- Basic movement
-- y up-left
-- k up
-- u up-right
-- h leftgg
-- l right
-- b down-left
-- j down
-- n down-right

hotkey.bind({"cmd", "alt", "ctrl"}, "Y", function()
  local win = window.focusedwindow()
  local f = win:frame()
  
  f.x = f.x - 10
  f.y = f.y - 10
  win:setframe(f)
end)

hotkey.bind({"cmd", "alt", "ctrl"}, "K", function()
  local win = window.focusedwindow()
  local f = win:frame()
  
  f.y = f.y - 10
  win:setframe(f)
end)

hotkey.bind({"cmd", "alt", "ctrl"}, "U", function()
  local win = window.focusedwindow()
  local f = win:frame()
  
  f.x = f.x + 10
  f.y = f.y - 10
  win:setframe(f)
end)

hotkey.bind({"cmd", "alt", "ctrl"}, "H", function()
  local win = window.focusedwindow()
  local f = win:frame()
  
  f.x = f.x - 10
  win:setframe(f)
end)

hotkey.bind({"cmd", "alt", "ctrl"}, "L", function()
  local win = window.focusedwindow()
  local f = win:frame()
  
  f.x = f.x + 10
  win:setframe(f)
end)

hotkey.bind({"cmd", "alt", "ctrl"}, "B", function()
  local win = window.focusedwindow()
  local f = win:frame()
  
  f.x = f.x - 10
  f.y = f.y + 10
  win:setframe(f)
end)

hotkey.bind({"cmd", "alt", "ctrl"}, "J", function()
  local win = window.focusedwindow()
  local f = win:frame()
  
  f.y = f.y + 10
  win:setframe(f)
end)

hotkey.bind({"cmd", "alt", "ctrl"}, "N", function()
  local win = window.focusedwindow()
  local f = win:frame()
  
  f.x = f.x + 10
  f.y = f.y + 10
  win:setframe(f)
end)
</pre>

Remember to reload your config!

And there you have it, basic motion for all cardinal and ordinal directions. With that under our belt, we're ready to handle [tiling motions](http://blog.josephholsten.com/post/scripting-your-mac-tiling-motion).
