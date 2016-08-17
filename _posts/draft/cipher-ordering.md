Selecting SSL ciphers

http://www.openssl.org/docs/apps/ciphers.html


# OpenSSL

Let's begin with OpenSSL's default:
	ALL:!aNULL:!eNULL

This rejects the cipher sets:

- aNULL: anonymous or lacking authentication. By definition, these provide no protection against man-in-the-middle attacks.
- eNULL: lacking encryption. By definition, these transmit data in the clear. If you wanted this, you probably should just use DNSSec.

## Qualsys SSL Labs

https://www.ssllabs.com/downloads/SSL_TLS_Deployment_Best_Practices.pdf

		-3DES:EECDH:EDH:HIGH:MEDIUM:+3DES:!aNULL:!eNULL:!EXPORT:!LOW:!RC4

This rejects the above, and also the sets:

- EXPORT: export grade ciphers which only have 40 bits. https://freakattack.com/
- LOW: ciphers which only have 56 bits, deprecated in http://www.ietf.org/rfc/rfc5469.txt
- RC4: a very weak hash http://www.isg.rhul.ac.uk/tls/ and deprecated in http://www.ietf.org/rfc/rfc7465.txt

Beyond that, it ensures that 3DES is kept at the end of the cipher list because it's barely strong enough to qualify as secure, and because it's very slow.

Prefer ephemeral ciphers to provide forward secrecy, and prefer eliptic curve diffie-hellman to finite-field diffie-hellman.

## Logjam

Logjam is a weakness in the way Diffie-Hellman works with fixed key exchange. This weakness

		ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA

This is rather long, no? let's begin with the rejections

- DES: this is identical to LOW, and this algorithm is officially deprecated http://www.ietf.org/rfc/rfc5469.txt
- MD5: while universally accepted as broken for signing certificates http://www.win.tue.nl/hashclash/rogue-ca/, it's not known to be broken in use in a cipher suite. Also, it doesn't actually affect this list.
- PSK: pre-shared keys. These don't use the Certificate Authority based public key infrastructure used by most websites. Which is to say, if you need this you'll know.
- aECDH: fixed eliptic curve diffie-hellman. These don't provide the forward secrecy benefits of ephemeral keys. also supported by https://www.linshunghuang.com/papers/ecc-pfs.pdf
- EDH-DSS-DES-CBC3-SHA: Logjam claims 1024-bit may be within reach of state-level attackers.
- EDH-RSA-DES-CBC3-SHA: as above
- KRB5-DES-CBC3-SHA: kerberos5 key negotiation cipher suite. It's entirely unclear why this is excluded, since kerberos uses symetric ciphers, not discrete log. But like PSK, it doesn't use Certificate Authorities, you'd know if you were using it.

There are a couple things this is implicitly rejecting as well:
- SRP: Secure Remote Password, like PSK, is a system that doesn't Certificate Authorities. You'd know if you need it.
- SEED: Primarily intended for South Korean use, it is only used in Firefox and does not offer any ephemeral ciphersuites. https://briansmith.org/browser-ciphersuites-01.html

and finally this is missing ECDHE-RSA-DES-CBC3-SHA & ECDHE-ECDSA-DES-CBC3-SHA. This is a bit curious since the authors support ECDHE, and don't have any objection to DES-CBC3-SHA in its usual form with RSA.

so ignoring the ordering, and including last two ECDHE 3DES suites, we can more briefly describe this as

		ALL:!aNULL:!eNULL:!EXPORT:!LOW:!PSK:!SRP:!KRB5:!aECDH:!SEED:!DES:!RC4:!MD5:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA

## against SEED and Camillia

Like SEED above, Camillia was intended for Japanese use, it is only used in Firefox (though they do offer ephemeral ciphersuites, but not for eliptic curve diffie hellman). https://briansmith.org/browser-ciphersuites-01.html

Which brings us to a final set of

		ALL:!aNULL:!eNULL:!EXPORT:!LOW:!PSK:!SRP:!KRB5:!aECDH:!SEED:!CAMELLIA:!DES:!RC4:!MD5


## Ordering

Now that we've got a list we're comfortable with, how should we prioritize them?

OpenSSL provides a simple strength sort:


		ALL:!aNULL:!eNULL:!EXPORT:!LOW:!PSK:!SRP:!KRB5:!aECDH:!SEED:!CAMELLIA:!DES:!RC4:!MD5:@STRENGTH

		ECDHE-RSA-AES256-GCM-SHA384
		ECDHE-ECDSA-AES256-GCM-SHA384
		ECDHE-RSA-AES256-SHA384
		ECDHE-ECDSA-AES256-SHA384
		ECDHE-RSA-AES256-SHA
		ECDHE-ECDSA-AES256-SHA
		DHE-DSS-AES256-GCM-SHA384
		DHE-RSA-AES256-GCM-SHA384
		DHE-RSA-AES256-SHA256
		DHE-DSS-AES256-SHA256
		DHE-RSA-AES256-SHA
		DHE-DSS-AES256-SHA
		AES256-GCM-SHA384
		AES256-SHA256
		AES256-SHA
		# 168
		ECDHE-RSA-DES-CBC3-SHA
		ECDHE-ECDSA-DES-CBC3-SHA
		EDH-RSA-DES-CBC3-SHA
		EDH-DSS-DES-CBC3-SHA
		DES-CBC3-SHA
		# 128
		ECDHE-RSA-AES128-GCM-SHA256
		ECDHE-ECDSA-AES128-GCM-SHA256
		ECDHE-RSA-AES128-SHA256
		ECDHE-ECDSA-AES128-SHA256
		ECDHE-RSA-AES128-SHA
		ECDHE-ECDSA-AES128-SHA
		DHE-DSS-AES128-GCM-SHA256
		DHE-RSA-AES128-GCM-SHA256
		DHE-RSA-AES128-SHA256
		DHE-DSS-AES128-SHA256
		DHE-RSA-AES128-SHA
		DHE-DSS-AES128-SHA
		AES128-GCM-SHA256
		AES128-SHA256
		AES128-SHA

Entertainingly, this places the poorly regarded 3DES ciphers (with 168-bits) above the AES128 ciphers.

http://www.keylength.com/en/3/

logjam ordering

		ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA

		ECDHE-RSA-AES128-GCM-SHA256
		ECDHE-ECDSA-AES128-GCM-SHA256
		ECDHE-RSA-AES256-GCM-SHA384
		ECDHE-ECDSA-AES256-GCM-SHA384
		DHE-RSA-AES128-GCM-SHA256
		DHE-DSS-AES128-GCM-SHA256
		DHE-DSS-AES256-GCM-SHA384
		DHE-RSA-AES256-GCM-SHA384
		ECDHE-RSA-AES128-SHA256
		ECDHE-ECDSA-AES128-SHA256
		ECDHE-RSA-AES128-SHA
		ECDHE-ECDSA-AES128-SHA
		ECDHE-RSA-AES256-SHA384
		ECDHE-ECDSA-AES256-SHA384
		ECDHE-RSA-AES256-SHA
		ECDHE-ECDSA-AES256-SHA
		DHE-RSA-AES128-SHA256
		DHE-RSA-AES128-SHA
		DHE-DSS-AES128-SHA256
		DHE-RSA-AES256-SHA256
		DHE-DSS-AES256-SHA
		DHE-RSA-AES256-SHA
		AES128-GCM-SHA256
		AES256-GCM-SHA384
		AES128-SHA256
		AES256-SHA256
		AES128-SHA
		AES256-SHA
		SRP-DSS-AES-256-CBC-SHA
		SRP-RSA-AES-256-CBC-SHA
		SRP-AES-256-CBC-SHA
		DHE-DSS-AES256-SHA256
		SRP-DSS-AES-128-CBC-SHA
		SRP-RSA-AES-128-CBC-SHA
		SRP-AES-128-CBC-SHA
		DHE-DSS-AES128-SHA
		DHE-RSA-CAMELLIA256-SHA
		DHE-DSS-CAMELLIA256-SHA
		CAMELLIA256-SHA
		DHE-RSA-CAMELLIA128-SHA
		DHE-DSS-CAMELLIA128-SHA
		CAMELLIA128-SHA
		DES-CBC3-SHA

brian ordering

Key Negotiation: ECDHE -> DHE -+> RSA
Stream Cipher: AES128 -> AES256 -+> 3DES -> RC4
Auth: RSA -> ECDSA -+> DSS
Hash: SHA -+> MD5


		# ECDHE-AES128
		ECDHE-RSA-AES128-GCM-SHA256
		ECDHE-ECDSA-AES128-GCM-SHA256
		ECDHE-RSA-AES128-SHA
		ECDHE-ECDSA-AES128-SHA
		# ECDHE-AES256
		ECDHE-RSA-AES256-GCM-SHA384
		ECDHE-ECDSA-AES256-GCM-SHA384
		ECDHE-RSA-AES256-SHA
		ECDHE-ECDSA-AES256-SHA
		# DHE
		DHE-RSA-AES128-SHA
		DHE-RSA-AES256-SHA
		# Deprecated
		DHE-DSS-AES128-SHA
		ECDHE-RSA-RC4-SHA
		ECDHE-ECDSA-RC4-SHA
		AES128-SHA
		AES256-SHA
		DES-CBC3-SHA
		RC4-SHA
		RC4-MD5




mozilla ordering
		ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:ECDHE-RSA-DES-CBC3-SHA:ECDHE-ECDSA-DES-CBC3-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:DES-CBC3-SHA:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA

Encoding: GCM -> CBC
Key Negotiation: ECDHE -> DHE -+> RSA
Stream Cipher: AES128 -> AES256 -+> 3DES -> RC4
Auth: RSA -> ECDSA -+> DSS
Hash: SHA -+> MD5

		# (EC)DHE-AES-GCM
		ECDHE-RSA-AES128-GCM-SHA256
		ECDHE-ECDSA-AES128-GCM-SHA256
		ECDHE-RSA-AES256-GCM-SHA384
		ECDHE-ECDSA-AES256-GCM-SHA384
		DHE-RSA-AES128-GCM-SHA256
		DHE-DSS-AES128-GCM-SHA256
		DHE-DSS-AES256-GCM-SHA384
		DHE-RSA-AES256-GCM-SHA384
		# (EC)DHE-AES-CBC
		ECDHE-RSA-AES128-SHA256
		ECDHE-ECDSA-AES128-SHA256
		ECDHE-RSA-AES128-SHA
		ECDHE-ECDSA-AES128-SHA
		ECDHE-RSA-AES256-SHA384
		ECDHE-ECDSA-AES256-SHA384
		ECDHE-RSA-AES256-SHA
		ECDHE-ECDSA-AES256-SHA
		DHE-RSA-AES128-SHA256
		DHE-RSA-AES128-SHA
		DHE-DSS-AES128-SHA256
		DHE-RSA-AES256-SHA256
		DHE-DSS-AES256-SHA
		DHE-RSA-AES256-SHA
		# (EC)DHE-3DES
		ECDHE-RSA-DES-CBC3-SHA
		ECDHE-ECDSA-DES-CBC3-SHA
		# RSA-AES
		AES128-GCM-SHA256
		AES256-GCM-SHA384
		AES128-SHA256
		AES256-SHA256
		AES128-SHA
		AES256-SHA
		# *-AES-*
		SRP-DSS-AES-256-CBC-SHA
		SRP-RSA-AES-256-CBC-SHA
		SRP-AES-256-CBC-SHA
		DHE-DSS-AES256-SHA256
		SRP-DSS-AES-128-CBC-SHA
		SRP-RSA-AES-128-CBC-SHA
		SRP-AES-128-CBC-SHA
		DHE-DSS-AES128-SHA
		# RSA-3DES
		DES-CBC3-SHA
		# HIGH
		DHE-RSA-CAMELLIA256-SHA
		DHE-DSS-CAMELLIA256-SHA
		CAMELLIA256-SHA
		SRP-DSS-3DES-EDE-CBC-SHA
		SRP-RSA-3DES-EDE-CBC-SHA
		SRP-3DES-EDE-CBC-SHA
		DHE-RSA-CAMELLIA128-SHA
		DHE-DSS-CAMELLIA128-SHA
		CAMELLIA128-SHA






## Protocol considerations
### avoid SSLv3

POODLE
https://www.openssl.org/~bodo/ssl-poodle.pdf

### avoid TLSv1

BEAST
http://blog.zoller.lu/2011/09/beast-summary-tls-cbc-countermeasures.html
https://bug665814.bugzilla.mozilla.org/attachment.cgi?id=540839

### disable compression

CRIME
BREACH



## Reviewing clients in the field

https://cc.dcsec.uni-hannover.de/


# Or just do what mozilla tells you

https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations
