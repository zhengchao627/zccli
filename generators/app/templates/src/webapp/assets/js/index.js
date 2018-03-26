import '../css/index.css';
import '../css/hello.css';
console.log('index');
import(/* webpackChunkName: "lodash" */ "./hello.js").then(_ => {
  _.init();
});