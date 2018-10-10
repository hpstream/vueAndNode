import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

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
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
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
          commit('SET_ROLES', res.roles)
        } else {
          console.log('getInfo: roles must be a non-null array !')
        }
        return res;
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
