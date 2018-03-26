import Koa from 'koa';
import config from './config';
import controllerinit from './controllers/controllerinit';
import log4js from 'log4js'
import errorHandler from './middlewares/errorHandler';
import { configure, getLogger } from 'log4js';
import router from 'koa-simple-router';
import render from 'koa-swig';
import co from 'co';
import serve from 'koa-static';

const app = new Koa();
// 模版swig
app.context.render = co.wrap(render({
  root: config.viewDir,
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  varControls: ['[[',']]'],
  writeBody: false
}));
// 错误处理日志
log4js.configure({
  appenders: { cheese: { type: 'file', filename: './logs/zc.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = log4js.getLogger('cheese');
errorHandler.error(app, logger);
// 初始化路由
controllerinit.routers(app, router);
// 加载静态文件
app.use(serve(config.staticDir));
// 监听端口
app.listen(config.port, () => {
  console.log(`监听的端口是${config.port}`);
});
module.exports = app;