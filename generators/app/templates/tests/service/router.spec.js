const supertest = require('supertest');
const app = require('../../build/app');

function request() {
  return supertest(app.listen());
}

describe('自动化测试脚本', function () {
  describe('api接口测试', function () {
      it('获取测试的数据', function (done) {
        request()
          .get('/test')
          .set('Accept', 'appliaction/json')
          .expect('Content-Type',/json/)
          .expect(200)
          .end(function(err, response){
            if(response.body.data == 'testing') {
              done();
            } else {
              done(new Error('数据不符合'))
            }
          })
      });
    }),
    describe('自动化测试脚本', function () {
      it('测试404容错', function (done) {
        request()
        .get('/message/notfound')
        .expect(404, done);
      });
    })
})