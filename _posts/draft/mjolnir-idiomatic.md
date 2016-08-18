Title: Scripting your Mac: Simplifying with idioms
Date: 2014-10-19 16:27:17

If you're just joining us, you may want to start at the beginning with [hello world](http://blog.josephholsten.com/post/scripting-your-mac-getting-started).

We've set up Mjolnir to handle the basic tiling motions we would get out of the box with SizeUp and Spectacle. But while our code is great for introducing how the basic APIs work, it's not very idiomatic or terse. We can do better.


```shell
luarocks install mjolnir.hotkey
luarocks install mjolnir.window
luarocks install mjolnir.screen
```
