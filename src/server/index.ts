import http from 'http';
import http2 from 'http2';
import net from 'net';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

import app from './server';

const certs = {
  cert: fs.readFileSync(path.join(__dirname, '../../private/local.com.cert')),
  key: fs.readFileSync(path.join(__dirname, '../../private/local.com.key')),
};

// start the server

http2.createSecureServer(certs, app.callback()).listen(process.env.HTTPS_ADDRESS, error => {
  if (error) {
    process.stderr.write(chalk.red(`http2 server error:${error}\n`));
  }
  process.stdout.write(chalk.yellow(`http2 server listening on localhost:${process.env.HTTPS_ADDRESS}\n`));
});
