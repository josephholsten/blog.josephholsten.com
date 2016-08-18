---
layout: post
date: 2014-10-19 16:27:17
title: "Scripting your Mac: Tiling Motion"
---

If you're just joining us, you may want to start at the beginning with [hello world](http://blog.josephholsten.com/post/scripting-your-mac-getting-started).

Now that we know how to move windows around on command, we can start implementing the basic window motions that SizeUp and Spectacle support.

Let's start with the simplest case: full screen. I'm not talking about the native full screen mode provided by the operating system. Instead, we just want to expand the size of the window to fill the screen.

To do this, we'll need to access the screen dimensions so we can appropriately scale the window's width `w` and height `h`. The screen API is available through `mjolnir.screen` and it has a convenience function to get the screen of the currently focused window: `mjolnir.screen.mainscreen()`. Just like last time, we can grab the dimensions of the object by accessing its `frame()`.

Of course, we'll need to make sure the `mjolnir.screen` rock is installed along with the ones from last time:

```.shell
luarocks install mjolnir.hotkey
luarocks install mjolnir.window
luarocks install mjolnir.screen
```

And we can make sure the window's dimensions fill the screen by setting the window's frame to have the same `x`, `y`, `w` & `h` as the screen's frame:

```.lua
local hotkey = require "mjolnir.hotkey"
local window = require "mjolnir.window"
local screen = require "mjolnir.screen"

hotkey.bind({"cmd", "alt", "ctrl"}, "M", function()
  local win = window.focusedwindow()
  local f = win:frame()
  local primary_screen = screen.mainscreen()
  local max = primary_screen:frame()

  f.x = max.x
  f.y = max.y
  f.w = max.w
  f.h = max.h
  win:setframe(f)
end)
```

As always, reload the config. Then try it out by pressing `Cmd+Alt+Ctrl+M` while uttering "embiggen!"

Next, let's make windows snap to the left side of the screen. This should be relatively simple, we just need to make sure we have the width is half that of the screen, and otherwise should be identical to full screen.

```.lua
local hotkey = require "mjolnir.hotkey"
local window = require "mjolnir.window"
local screen = require "mjolnir.screen"

hotkey.bind({"cmd", "alt", "ctrl"}, "Left", function()
  local win = window.focusedwindow()
  local f = win:frame()
  local primary_screen = screen.mainscreen()
  local max = primary_screen:frame()

  f.x = max.x
  f.y = max.y
  f.w = max.w / 2
  f.h = max.h
  win:setframe(f)
end)
```

And then we just need to flesh out the rest of the sides and corners to get:

```.lua
local hotkey = require "mjolnir.hotkey"
local window = require "mjolnir.window"
local screen = require "mjolnir.screen"

-- Tiling motions
hotkey.bind({"cmd", "alt", "ctrl"}, "M", function()
  local win = window.focusedwindow()
  local f = win:frame()
  local primary_screen = screen.mainscreen()
  local max = primary_screen:frame()

  f.x = max.x
  f.y = max.y
  f.w = max.w
  f.h = max.h
  win:setframe(f)
end)

hotkey.bind({"cmd", "alt", "ctrl"}, "Left", function()
  local win = window.focusedwindow()
  local f = win:frame()
  local primary_screen = screen.mainscreen()
  local max = primary_screen:frame()

  f.x = max.x
  f.y = max.y
  f.w = max.w / 2
  f.h = max.h
  win:setframe(f)
end)

hotkey.bind({"cmd", "alt", "ctrl"}, "Up", function()
  local win = window.focusedwindow()
  local f = win:frame()
  local primary_screen = screen.mainscreen()
  local max = primary_screen:frame()

  f.x = max.x
  f.y = max.y
  f.w = max.w
  f.h = max.h / 2
  win:setframe(f)
end)

hotkey.bind({"cmd", "alt", "ctrl"}, "Right", function()
  local win = window.focusedwindow()
  local f = win:frame()
  local primary_screen = screen.mainscreen()
  local max = primary_screen:frame()

  f.x = max.x + (max.w / 2)
  f.y = max.y
  f.w = max.w / 2
  f.h = max.h
  win:setframe(f)
end)

hotkey.bind({"cmd", "alt", "ctrl"}, "Down", function()
  local win = window.focusedwindow()
  local f = win:frame()
  local primary_screen = screen.mainscreen()
  local max = primary_screen:frame()

  f.x = max.x
  f.y = max.y + (max.h / 2)
  f.w = max.w
  f.h = max.h / 2
  win:setframe(f)
end)
```

Now you've got the chops to match any tiling motion that SizeUp or Spectacle can handle. Now let's make development easier with [quick config reloading](http://blog.josephholsten.com/post/scripting-mjolnir-quick-config-reloading).
