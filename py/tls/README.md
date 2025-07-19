# Quick and dirty TLS client and server

This one was just a quick project to see if I could put together a bare socket 
server and client with TLS in python without too much trouble. I also wanted to
see how the toml library works (it works fine and it's simple).

There's very little error handling in this code.

Client Server TLS based on python 3.12.  Changes were made in 3.8 that changed
the way TLS is implemented on a socket.  The old way uses a bare `ssl.wrap_socket()` 
call while the new way requres that you set up the `ssl.SSLContext` object first.

The server and client use a self-signed certificate and we stick the
certificate into the context `context.load_verify_locations()` to trick the client
into thinking it is a trusted certificate. This is a workaround for not adding
the CA to the trust store.

The ssl module docs reccomend using a context handler to set up the sockets so
I just followed that example but I wasn't sure how to best handle exception. It
might be a worthwhile exercise to improve the error handling. Some ideas on
this are to simply follow the `with` block with an `except` or `except` /
`finally` block as outlined in this [discussion post](https://discuss.python.org/t/try-with-resources-elegant-handling-of-exceptions-in-context-managers/86956/4).

The biggest troubleshooting challenge was remebering that I needed to use the
CN/SAN name as my hostname so the certificate would validate. This took longer
to figure out than I care to admit, so note to anyone who runs across this,
make sure your CN/SAN name matches your hostname and that you use the hostname
as your server address in the `socket.bind()` configuration.

## Generating a self-signed certificate

```bash
# Generate CA
openssl req -x509 -new -nodes -newkey rsa:2048 -keyout myCA.key -sha256 -days 1825 -out myCA.crt -subj /CN='localhost ca'
# Generate server certificate request. You are also adding the SAN as some ssl
# implementations (notably Golang) require SAN and ignore CN as it is deprecated.
# Note we are getting a localhost.key and localhost.csr file out out this step
openssl req -newkey rsa:2048 -nodes -keyout localhost.key -out localhost.csr -subj /CN=localhost -addext subjectAltName=DNS:localhost
# sign the server certificate using the CA certificate and key
openssl x509 -req -in localhost.csr -copy_extensions copy -CA myCA.crt -CAkey myCA.key -CAcreateserial -out localhost.crt -days 365 -sha256
```
Optionally we can add myCA.crt to the trust store.  On Linux it looks something
like this:

```bash
sudo cp myCA.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```
Other platforms have different procedures.

I didn't do this because this was a temp key.

## TODO
if this were a real project / all the shortcuts I took to stand this up quickly
- Wrap key and cert file locations in logic to insure everything exists.
- Wrap cafile and `context.load_verify_locations()` in logic to skip the setting if the file doesn't exist and use the system CA.
- `except` blocks for the `with` blocks to handle errors.
- add connection/tls logging

## Findings

This was a lot of fun.  I knocked this out in about a day or so while doing
other things.  About 4 hours total maybe?  Mostly just to see if I could and
partually to better understand sockets and TLS. Working with bare sockets was
a learning experience as I've not used them before and I got to see some of
the implentation details that I've missed by using higher level abstractions.
While the socket library is very easy to use I got to see how easy it is to
write a badly behaved client and leave connections hanging open and end up
with messy / misleading messages in the console.

I might give this a try in Rust and possibly JS as a comparison. I'd also like
to try an mtls client/server.


## References
- [Python ssl module docs](https://docs.python.org/3/library/ssl.html)
- [Python toml library](https://pypi.org/project/toml/)
- [Python socket module howto](https://docs.python.org/3/howto/sockets.html)
- [Python exception handling](https://docs.python.org/3/tutorial/errors.html)
- [generating CA and signing certs](https://serverfault.com/questions/1156946/how-to-properly-create-ca-certificate-and-sign-the-ssl-tls-cert-to-use-in-apache)
- [self signed certs with ansible](https://www.jeffgeerling.com/blog/2017/generating-self-signed-openssl-certs-ansible-24s-crypto-modules)

