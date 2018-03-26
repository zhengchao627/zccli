/**
 * @fileOverview 实现index数据模型
 * @author chao.z
 */
import { resolve } from 'dns';
/**
 * indexModel 类 生成一段异步的数据
 * @class
 */
export default class indexModel {
  constructor(){

  };
  /**
   * 获取api接口数据
   * @return {promise} 返回的异步处理结果
   * @example 
   * return new Promise()
   * getData()
   */
  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('hello hahah');
      }, 1000);
    })
  }
}