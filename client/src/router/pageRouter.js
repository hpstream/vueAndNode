import setting from './page/setting.js';
import shopping from './page/shopping.js';

export default [
  shopping,
  setting,
  { path: '*', redirect: '/404', hidden: true }
]