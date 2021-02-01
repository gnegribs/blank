import serve from 'koa-static';
import Koa from 'koa';
import helmet from 'koa-helmet';
import Router from 'koa-router';
import { createReadStream } from 'fs';
import Templates from './services/templates';

const router = new Router();
const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(helmet());

router.get('/', (ctx) => {
  ctx.type = 'html';
  ctx.body = Templates.renderHTML();
});

router.get('/error', (ctx) => {
  ctx.type = 'html';
  ctx.body = createReadStream('./public/error.html');
});

app.use(serve('./public'));
app.use(serve('./dist/frontend'));

app.use(router.routes());

app.listen(PORT);
