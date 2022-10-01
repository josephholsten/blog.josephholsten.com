---
layout: post
title: Deploying with Bundler and Capistrano
date: 2010-09-03T10:05:09
---

When I stumbled across Richard Huang's [DRY bundler in capistrano][], I
got excited thinking I'd learn even more about bundler's internals and
maybe even a few more tricks with using bundler and capistrano together.
Unfortunately, all I really got was to use this in my `deploy.rb`:

```ruby
require 'bundler/capistrano'
```

Now that will probably be enough for most people. But if you're already
using bundler 1.0 with capistrano, you probably aren't most people.

The bundler team has put a lot of work into documenting every little
part of the project, so after we've required bundler's capistrato
recipe, let's grab the task explanation:

```shell
% cap --explain bundle:install
------------------------------------------------------------
cap bundle:install
------------------------------------------------------------
Install the current Bundler environment. By default, gems will be installed to
the shared/bundle path. Gems in the development and test group will not be
installed. The install command is executed with the --deployment and --quiet
flags. You can override any of these defaults by setting the variables shown
below.

  set :bundle_gemfile,      'Gemfile'
  set :bundle_dir,          fetch(:shared_path)+'/bundle'
  set :bundle_flags,        '--deployment --quiet'
  set :bundle_without,      [:development, :test]
```

You're probably going to want to start playing around with bundler 1.0
on your dev machine before you deploy it on production. Since bundler
0.9 doesn't support all the useful flags in 1.0, so we need to empty a
couple of these default settings to make it work:

```ruby
set :bundle_dir, ''
set :bundle_flags, ''
```

Now you can have 1.0 on your dev machines and test that this deploys
properly.

If you're like me, you forgot that need a few gems in your development
group on your staging machine. So just set the groups you can live
without:

```ruby
set :bundle_without, [:test]
```

Of course, our production environment doesn't actually need anything in
the development group, and we use separate `production` and `staging`
cap tasks to load settings for our different environments. So we just
modify those to have the right bundler groups:

```ruby
task :staging do
  set :bundle_without, [:test]
  # other staging specific settings, like
  # set :rails_env, 'staging'
end

task :production do
  # this is the default, but left here for reference
  set :bundle_without, [:development, :test]
  # other production specific settings, like
  # set :rails_env, 'production'
end
```

Once you've got everything tailored and working, you can update bundler
on your boxes and restart the app servers. You could leave the
`bundle_dir` and `bundle_flags` settings the way they are, but I
strongly recommend using the `--deployment` flag to run in [deployment
mode][], the `--quiet` flag to stop printing so much information, and a
[bundle directory][] in your `shared_path` instead of deployment mode's
default of `vendor/bundle`.

You'll also want to start using [bundle package][] to include all the
gems you need into `vendor/cache`. Check that into your in your version
control to make the deployment process even better, you won't even have
to talk to rubygems when you run `bundle install` during a deploy.

If you like more technical documentation, bundler goes into even more
depth in its manual pages for [bundle-install(1)][] and
[bundle-package(1)][]. They explain in depth how deployment mode works
differently, how conservative updating works, how gems are cached and
quite a bit more. If you find yourself wanting even more control than
I've explained here, that's where I would look.

  [DRY bundler in capistrano]: http://rails-bestpractices.com/posts/51-dry-bundler-in-capistrano
  [deployment mode]: http://gembundler.com/deploying.html
  [bundle directory]: http://gembundler.com/bundle_install.html
  [bundle package]: http://gembundler.com/bundle_package.html
  [bundle-install(1)]: http://gembundler.com/man/bundle-install.1.html
  [bundle-package(1)]: http://gembundler.com/man/bundle-package.1.html
