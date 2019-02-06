import bodyParser from 'koa-bodyparser';
import koaWebpack from 'koa-webpack';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import koa2Connect from 'koa2-connect';
import send from 'koa-send';
import Koa from 'koa';
import Router from 'koa-router';
import path from 'path';

const config = require('../../config/webpack/dev');

const app = new Koa();
const router = new Router();
// Dev build
// use webpack dev middleware to serve the react bundle
// use webpack hot middleware to hot reload
const compile = webpack(config);
const expressDevMiddleware = devMiddleware(compile, {
  publicPath: config.output.publicPath,
});
const expressHotMiddleware = hotMiddleware(compile);
// convert to koaMiddleware!
app.use(koa2Connect(expressDevMiddleware));
app.use(koa2Connect(expressHotMiddleware));

app.use(bodyParser());

router.get('*', async ctx => {
  await send(ctx, ctx.path, { root: path.join(__dirname, '../public') });
});

app.use(router.routes()).use(router.allowedMethods());

export default app;
