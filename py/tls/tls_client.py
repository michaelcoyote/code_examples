#!/usr/bin/env python3

import socket
import ssl
import toml
from time import sleep

# quick and dirty tls client
# https://docs.python.org/3/library/ssl.html


def main():

    conf = toml.load("./tls_config.toml")

    ssl_context = ssl.create_default_context()
    ssl_context.load_cert_chain(certfile=conf['tls']['certfile'],
                                keyfile=conf['tls']['keyfile'])
    ssl_context.load_verify_locations(cafile=conf['tls']['cafile'])

    # declare a socket, set timeout, and allowreuse address
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0) as csock:
        csock.settimeout(conf['client']['timeout'])
        csock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        # wrap the socket in ssl and bind to address and port
        with ssl_context.wrap_socket(csock,
                                     server_hostname=conf['server']['addr']
                                     ) as scsock:
            # reach out and connect to the server
            try:
                scsock.connect((conf['server']['addr'],
                                conf['server']['port']))
            except Exception as e:
                print(f"Error: {type(e).__name__} at "
                      f"line {e.__traceback__.tb_lineno} "
                      f"of {__file__}: {e}")
                exit(e.errno)

            try:
                scsock.sendall("This message will be encrypted and sent "
                               "over the wire using TLS.\n".encode("utf-8"))
                sleep(1)
            except Exception as e:
                print(f"Error: {type(e).__name__} at "
                      f"line {e.__traceback__.tb_lineno} "
                      f"of {__file__}: {e}")
                exit(e.errno)
            # it's important to close the socket or you'll get a
            # "Connection reset by peer" (Errno 54)
            # https://docs.python.org/3/howto/sockets.html#disconnecting
            scsock.shutdown(socket.SHUT_RDWR)
            scsock.close()


if __name__ == "__main__":
    main()
