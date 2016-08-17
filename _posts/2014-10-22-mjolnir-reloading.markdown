---
layout: post
title:  "Scripting Mjolnir: Quick Config Reloading"
date:   2014-10-22 12:47:25
categories: jekyll update
---


If you're just joining us, you may want to start at the beginning with [hello world](http://blog.josephholsten.com/post/scripting-your-mac-getting-started).

If you've been following along by actually typing all this stuff into a text editor, you've probably gotten a little tired of having to switch to a mouse to click on the Mjolnir menu item, the click reload. And hope that no errors were found in your config.

So let's make things a bit easier by adding a reload hotkey!

Looking through the Mjolnir docs, looks like `mjolnir.reload()` is the function we want.

So let's try the simplest thing that could possibly work.

<?prettify language=lua?>
<pre class=prettyprint>
hotkey.bind({"cmd", "alt", "ctrl"}, "R", function()
  mjolnir.reload()
end)
</pre>

Then for the last time, let's reload the config with your mouse. Now you can just press `Cmd+Alt+Ctrl+R` any time you make a change.

Of course, it feels odd just having this happen in the background without any indicator of success. So let's add a couple alerts to show what's going on:

<?prettify language=lua?>
<pre class=prettyprint>
hotkey.bind({"cmd", "alt", "ctrl"}, "R", function()
  mjolnir.alert("reloading config")
  mjolnir.reload()
  mjolnir.alert("reloaded config")
end)
</pre>

Then let's reload the config once to get this updated hotkey loaded. Now reload again using the hotkey.

See anything wrong? No alerts? Yep, it's surprising and it doesn't work as you'd expect.

Turns out that what `mjolnir.reload()` does is destroy the existing lua environment and creates a new one. So the first alert is destroyed before you even notice it. And the rest of the function never gets executed.

So how do we get a notification? Well lua is a real scripting language, anything outside function definitions is executed just like a `main()` in a compiled language.

So let's add the following to the top of the config:

<?prettify language=lua?>
<pre class=prettyprint>
mjolnir.alert("reloaded config")
</pre>

Now every time Mjolnir loads the config, it'll show this alert. Just reload (either with the hotkey or the menu item) and you should see that notification.
