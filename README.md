# znappit

## Generate certs :

openssl req -x509 -nodes -days 730 -newkey rsa:2048 -keyout local.com.key -out local.com.cert -config req.cnf -sha256
