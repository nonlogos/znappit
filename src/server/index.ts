import * as http2 from 'http2';
import * as fs from 'fs';
import * as path from 'path';

import app from './server';

const certs = {
  cert: fs.readFileSync(path.join(__dirname, '../../private/cert.pem')),
  key: fs.readFileSync(path.join(__dirname, '../../private/cert.key'))
};

http2
  .createSecureServer(certs, app.callback())
  .listen(3000, () => console.log('http2 server listening on localhost:3000'));
