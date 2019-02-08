# znappit

## Generate self-signed certs :

openssl req -x509 -nodes -days 730 -newkey rsa:2048 -keyout private/local.com.key -out private/local.com.cert -config private/req.cnf -sha256
