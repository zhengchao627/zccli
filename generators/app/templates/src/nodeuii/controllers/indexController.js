import indexModel from '../models/indexModel';
const indexController = {
  // 路由注册中心
  indexAction() {
    return async (ctx, next) => {
      const indexModelIns = new indexModel();
      const result = await indexModelIns.getData();
      /* ctx.body = result; */
      ctx.body = await ctx.render('index', {
        data: result
      });
    }
  },
  testAction() {
    return (ctx, next) => {
      ctx.body = {
        data: 'testing'
      };
    }
  }
}
export default indexController;