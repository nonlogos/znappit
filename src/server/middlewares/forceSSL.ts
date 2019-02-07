import url from 'url';

async function forceSSL(ctx, next) {
  console.log('does it get in here?');
  const { request } = ctx;
  if (request.secure) {
    await next();
  }
  const httpsPort = process.env.HTTPS_PORT || 3000;
  const urlObject = url.parse(`http://${request.header.host}`);
  const httpsHost = urlObject.hostname;
  console.log('redirect', `https://${httpsHost}:${httpsPort}${request.url}`);
  ctx.redirect(`https://${httpsHost}:${httpsPort}${request.url}`);
}

export default forceSSL;

// forceSSL(port, hostname, temporary) {
//   return function* forceSSL(next) {
//     if (this.secure) {
//       return yield next;
//     }
//     var httpsPort = port || 443;
//     var urlObject = url.parse('http://' + this.request.header.host);
//     var httpsHost = hostname || urlObject.hostname;
//     if (!temporary) {
//       this.response.status = 301;
//     }
//     this.response.redirect('https://' + httpsHost + ':' + httpsPort + this.request.url);
//   };
// };
