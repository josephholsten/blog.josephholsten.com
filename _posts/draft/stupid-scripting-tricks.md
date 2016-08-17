Title: Stupid Scripting Tricks

If you've done any administration or development on UNIX, you've heard of the shebang. Almost every script you'll encounter with a shebang is a old fashioned bourne shell script. You remember bourne shell, right? This is absolutely the first bit of programming a UNIX user should learn. Just create a file named 'hello.sh' containing


<pre><code>#!/bin/sh
# hello.sh: Hello world in bourne shell
echo Hello, world!
</code></pre>


Then make the file executable:


<pre><code>% chmod +x hello.sh
</code></pre>


And now you have a perfectly suitable program:


<pre><code>% ./hello.sh
Hello, world!
</code></pre>


So yes, this much is pretty elementary. But it seems that people forget this trick works for any scripting language. Say, TCL:


<pre><code>#!/usr/bin/tclsh
# hello.tcl: Hello world in TCL
puts "Hello, world!"
</code></pre>


Now this assumes that the system has TCL installed system wide. But what if we want the fancy new version that we just installed in /usr/local instead? We could always change the script to use a different interpreter


<pre><code>#!/usr/local/bin/tclsh
# hello.tcl: Hello world with our local TCL
puts "Hello, world!"
</code></pre>


A fine solution when you are sure of the path to the interpreter. But when you want to share that script between systems, things get a bit more difficult. If the system prefers to install things in /opt/csw or /opt/local or /sw, you need to replace these hardcoded paths with something that defers to the system's environment.



For scripts intended for regular users, the most reasonable thing is to use the current $PATH for the user.


<pre><code>#!/usr/bin/env tclsh
</code></pre>


perl hello



python hello



haskell hello



clisp hello



clojure



erlang



io



java?



scala?



prolog



javascript/rhino?



self



ocaml



awk



ruby



php



c
sql



fortran
cobol



i386  asm



algol
pascal
apl
pl/i
simula
smalltalk/squeek
ada
basic
e
eiffel
forth
limbo
go
m4
postscript
sql/sqlite
TeX/LaTeX
Verilog
VHDL



ratchet hello



awk hello



ed/patch hello


<pre><code>rakefile

cucumber
</code></pre>


Really cool trick for test files: in vim, set your make command to %. then the output will link back against the file.
