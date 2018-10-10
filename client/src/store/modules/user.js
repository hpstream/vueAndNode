import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import pageRouter from '@/router/pageRouter.js'

function getmenu(defaultarr,condsarr){
  var newarr = [];
  defaultarr.forEach(element => {
      var keyId = element.routerId;
      if(keyId){ // 必须有唯一id

        if(element.children){ // 如果有子路由，进行遍历
          var newchildren = getmenu(element.children,condsarr);
          element.children = newchildren;
        }
        
        if(condsarr.indexOf(keyId)>-1){ // 如果大于-1,那么则是他可以看到路由
          newarr.push(element);
        }
      }
  });
  return newarr;
}
const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    
    async Login({ commit }, userInfo) {
      const username = userInfo.username.trim();
      var res = await login(username, userInfo.password);
      if(res){
          const data = res.data;
          setToken(data.token);
          commit('SET_TOKEN', data.token);
          return data;
      }
    },

    // 获取用户信息
    async GetInfo({ commit, state }) {
      var res = await getInfo(state.token)
      if(res){
        if (res.data.roles && res.data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
         
          var isdata = ['00_00_00','00_01_00','00_02_00','01_00_00','01_01_00','01_02_00'];
          var isvisiablerouter = getmenu(pageRouter,isdata);
          commit('SET_ROLES', isvisiablerouter);
          // 404路由需要放到数组最后
          isvisiablerouter.push( { path: '*', redirect: '/404', hidden: true });
          res.data.router =isvisiablerouter;
          return res;
        } else {
          console.log('getInfo: roles must be a non-null array !')
        }
       
      }
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      commit('SET_TOKEN', '')
      removeToken()
    }
  }
}

export default user
