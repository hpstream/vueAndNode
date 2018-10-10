import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

// const whiteList1 = ['/login'] // 不重定向白名单
import whiteList from '@/router/whiteList.js'
import pageRouter from '@/router/pageRouter.js'
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (!getToken()) { // 未登录过
    if (whiteList.some((v)=>{return v.path==to.path})) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    
      NProgress.done()
    }
    return;
  }
  // 登录过

  if (to.path === '/login') { // 如果访问首页，跳转到首页
    next({ path: '/' })
    NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    return;
  }
  
  // 登录过，拉去用户的信息
  if (store.getters.roles && store.getters.roles.length === 0) {
    var res = await store.dispatch('GetInfo');
    // 获取到用户信息
    if (res.code) {
      router.addRoutes(res.data.router);
      next({ ...to, replace: true })
    } else {
      // 未获取到用户信息,退出到登录页
      store.dispatch('FedLogOut') 
      Message.error(err || 'Verification failed, please login again');
      next({ path: '/' })
    }
  } else {
    next()
  }

})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
