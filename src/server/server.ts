import bodyParser from 'koa-bodyparser';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import koa2Connect from 'koa2-connect';
import Koa from 'koa';
import session from 'koa-session2';

import staticRouter from './routes/staticRouter';
import authRouter from './routes/authRouter';
const config = require('../../config/webpack/dev');

const app = new Koa();
app.use(bodyParser());

app.use(
  session({
    key: 'SESSIONID', // default "koa:sess"
  })
);

// Dev build
// use webpack dev middleware to serve the react bundle
// use webpack hot middleware to hot reload
const compile = webpack(config);
const expressDevMiddleware = devMiddleware(compile, {
  logLevel: 'silent',
  publicPath: config.output.publicPath,
});
const expressHotMiddleware = hotMiddleware(compile);
// convert to koaMiddleware!
app.use(koa2Connect(expressDevMiddleware));
app.use(koa2Connect(expressHotMiddleware));

app.use(authRouter.routes()).use(authRouter.allowedMethods());
app.use(staticRouter.routes()).use(staticRouter.allowedMethods());

export default app;
