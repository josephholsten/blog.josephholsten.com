# Stupid Scripting Tricks

If you've done any administration or development on UNIX, you've heard of the shebang. Almost every script you'll encounter with a shebang is a old fashioned bourne shell script. You remember bourne shell, right? This is absolutely the first bit of programming a UNIX user should learn. Just create a file named `hello.sh` containing

```sh
#!/bin/sh
# hello.sh: Hello world in bourne shell
echo Hello, world!
```

Then make the file executable:

```shell
% chmod +x hello.sh
```

And now you have a perfectly suitable program:

```shell
% ./hello.sh
Hello, world!
```

So yes, this much is pretty elementary. But it seems that people forget this trick works for any scripting language. Say, TCL:

```tcl
#!/usr/bin/tclsh
# hello.tcl: Hello world in TCL
puts "Hello, world!"
```

Now this assumes that the system has TCL installed system wide. But what if we want the fancy new version that we just installed in /usr/local instead? We could always change the script to use a different interpreter

```tcl
#!/usr/local/bin/tclsh
# hello.tcl: Hello world with our local TCL
puts "Hello, world!"
```

A fine solution when you are sure of the path to the interpreter. But when you want to share that script between systems, things get a bit more difficult. If the system prefers to install things in /opt/csw or /opt/local or /sw, you need to replace these hardcoded paths with something that defers to the system's environment.

For scripts intended for regular users, the most reasonable thing is to use the current `$PATH` for the user.

```tcl
#!/usr/bin/env tclsh
```

## scripting languages

- perl hello
- python hello
- io
- javascript/rhino?
- awk
ruby
php
awk hello
rakefile
cucumber

## compiled languages
clojure
erlang
java?
scala?
prolog
c
go

## no idea
self
ocaml
haskell hello
clisp hello
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
m4
postscript
sql/sqlite
TeX/LaTeX
Verilog
VHDL
ratchet hello
ed/patch hello

