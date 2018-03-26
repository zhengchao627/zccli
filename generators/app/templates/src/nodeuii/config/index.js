import _ from 'lodash';
import path from 'path';
let config = {
  'viewDir': path.join(__dirname,'..', 'views'),
  'staticDir': path.join(__dirname,'..', 'assets')
};
// 开发
if (process.env.NODE_ENV == 'dev') {
  const localConfig = {
    port: 8081
  }
  config = _.extend(config, localConfig);
}
// 上线
if (process.env.NODE_ENV == 'prod') {
  const proConfig = {
    port: 8081
  }
  config = _.extend(config, proConfig);
}
export default config;