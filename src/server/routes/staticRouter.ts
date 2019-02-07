import Router from 'koa-router';
import send from 'koa-send';
import path from 'path';

const staticRouter = new Router();

staticRouter.get('*', async ctx => {
  await send(ctx, ctx.path, { root: path.join(__dirname, '../../public') });
});

export default staticRouter;
