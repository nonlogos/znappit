import Router from 'koa-router';

const authRouter = new Router();

authRouter.get('/test', ctx => {
  ctx.session.view = 'index';
  ctx.body = { hello: 'world' };
});

export default authRouter;
