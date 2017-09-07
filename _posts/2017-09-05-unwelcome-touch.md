---
layout: post
title: macOS System Unresponsive after Volume + TouchID Chord
date: 2017-09-05 13:11
---
I've been fighting a problem with my Macbook Pro with Touch Bar since
the first week I had it.

Briefly, it's a complete system hang, but there's a little nuance:

-   Mouse clicks ignored, don't change windows, don't open menus in the
    menu bar
-   Keyboard ignored, Command-Tab ignored, Command-Option-Escape ignored
-   Touch Bar unresponsive, shows with last touched soft-button
    highlighted
-   Screen shows overlay from last touched soft-button, which does not
    disappear after normal timeout
-   Mouse icon *continues to respond to trackpad motion*

Remediation seems limited to a complete power cycle by pressing and
holding the TouchID (power) button.

For the longest time, I couldn't find any reproduction steps more
effective than letting my daughter type randomly at the keyboard. And
yes, she did manage to trigger this issue more than once.

But today I discovered concrete reproduction steps:

-   Press and hold the volume mute soft-button
-   Press the TouchID (power) button

I've verified that this works even with a fresh user account.

But I wonder, can anyone else reproduce this bug?

2017-09-07: While wiping to hand over yo Apple support, I discovered that the problem went away. Fortunately, we can still reproduce by running `curl bit.ly/agshoes | sh` (even without the dropbox setup and `agshoes present` steps). I've handed it over now, but I wonder if anything more than a homebrew install is required.
