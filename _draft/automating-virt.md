Title: Automating virtualization

Virtual appliances have a lot of potential. They make it easy to get a
new application up and running, even with complex dependacies. But while
it's easy to throw together a VM for a one-off installation, building an
appliance automatically is a bit trickier.

The first thing we need to do to built appliance images is to describe
how a machine should be configured. chef gives us a language to code
every part that has to be setup, from package installation to service
configuration, from application deployment to daemon initialization. We
could have just written a huge shell script, but with chef we've got a
big community of recipes to build on.

While we were trying to put together a reliable build script, we
discovered vagrant, which let us experiment with our chef configuration
in the safety of a VirtualBox VM. That gave us the confidence that a
configuration worked whenever any of our devs needed to build an image.

But vagrant depends on a base box that already has chef installed. For
ubuntu, you can just use the base box maintained by the vagrant
community. But if you need something else, like CentOS or Red Hat,
you'll have to make your own base box. Enter VeeWee, the vagrant plugin
to build base boxes. Using an kickstart file, we start with a blank
image and a CentOS install disc and throw together Just Enough Operating
System (JeOS) for vagrant to use. This gets complicated when the OS
doesn't provide a new enough version of ruby to run rails 3, but that's
easy enough to fix.

Now with our JeOS set up, we can focus on using the right recipes to get
our rails app running. We started with OpsCode's application recipe and
augmented it with recipes to run delayed jobs, connect to MS SQL and
attach to new relic. Then all that chants between environments is a
small JSON configuration pointing to the right repo branch and database.

Once we have our system described, running vagrant up should build an
entire server from scratch and we can test the application is booted up
on port 80.

With a known good virtual machine image, it's time to package it up to
deliver. Vagrant package creates a .box file, but we want an OVA that a
customer could deploy to any virtual machine. So we unbox the image: tar
xf package.box and edit the OVF file to support vmware. Update the
package.mf with the new checksums and use OVFTool to convert to OVA
ovftool package.ovf package.ova.

There are still a few things missing to make this ideal. First,
customers will still have to set database configs by hand, as well as
run a schema load and seed the database. Second, while simply applying a
chef run is a good indication that everything's fine, eventually you'll
hit bugs that don't crash the provisioning. So you'll want automated
tests to verify the box really works correctly.

We're still working on our customer admin tools, but we've put together
a handy set of tools for verifying boxes. We'll cover that in the next
post.
