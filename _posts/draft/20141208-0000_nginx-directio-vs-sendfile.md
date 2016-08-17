Title: Nginx directio vs sendfile

So you may have noticed that nginx has a few different fs io configs


                   sendfile   aio        directio
  ---------------- ---------- ---------- ----------
  off              off        off        off
  sendfile         on         off        off
  directio         off        on         512
  directio (zfs)   off        on         4k
  aio              off        on         off
  sendfile+aio     on         sendfile   off





## directio

FreeBSD: +
Linux:   +
Illumos: +
Darwin:  +

fcntl(O_DIRECT); Linux 2.4.10+, FreeBSD
fcntl(fd,F_NOCACHE,1); darwin
directio(fd, DIRECTIO_ON); solaris

avoids touching the page cache, useful for large files that would cause cache churn.

works by reading complete blocks from the file system, so the size should match the fs block size.




## aio

FreeBSD: +
Linux:   +
Darwin:  +
Illumos: -

asynchronous IO


aiocb
aio_read()

ngx_aio_read
ngx_aio_read_chain
ngx_aio_write
ngx_aio_write_chain


## sendfile

FreeBSD: +
Linux:   +
Illumos: +
Darwin:  +

sendfile()

## aio+sendfile

FreeBSD: +
Linux:   -
Illumos: -
Darwin:  -

FreeBSD only

aio is used to preload the file into memory (warm the page cache), then sendfile is used to write the file to the socket.

“In this configuration, sendfile() is called with the SF_NODISKIO flag which causes it not to block on disk I/O, but, instead, report back that the data are not in memory. nginx then initiates an asynchronous data load by reading one byte. On the first read, the FreeBSD kernel loads the first 128K bytes of a file into memory, although next reads will only load data in 16K chunks. This can be changed using the read_ahead directive.”
