import setting from './setting.js';


export default [
  setting,
  { path: '*', redirect: '/404', hidden: true }
]