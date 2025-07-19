#!/usr/bin/env python3

import socket
import ssl
import toml


# quick and dirty tls server
# https://docs.python.org/3/library/ssl.html

def main():
    conf = toml.load("./tls_config.toml")
    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    ssl_context.load_cert_chain(certfile=conf['tls']['certfile'],
                                keyfile=conf['tls']['keyfile'])
    ssl_context.load_verify_locations(cafile=conf['tls']['cafile'])

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0) as sock:
        sock.bind((conf['server']['addr'], conf['server']['port']))
        sock.listen(5)
        with ssl_context.wrap_socket(sock, server_side=True) as ssock:
            conn, client_addr = ssock.accept()
            with conn:
                while True:
                    data = conn.recv(1024)
                    if not data:
                        break
                    print(f"Received from {client_addr[0]}: "
                          f"{data.decode('utf-8')}")
                    ssock.shutdown()


if __name__ == "__main__":
    main()
