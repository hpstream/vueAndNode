import Cookies from 'js-cookie'

const app = {
  state: {
    chidlMenu:[],
  },
  mutations: {
    SET_CHILDMENU:(state,chidlMenu)=>{
      state.chidlMenu = chidlMenu;
    }
  },
  actions: {}
}

export default app
