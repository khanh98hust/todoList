import {createStore } from 'vuex'

export default createStore({
  state: {
    tacgia : 'a',
    tong : 0
  },
  mutations: {
    TINH_TONG(state, {a, b, tinh}){
      if(tinh == '+'){
        return state.tong = parseInt(a) + parseInt(b)
      }else if(tinh == '-'){
        return state.tong = parseInt(a) - parseInt(b)
      }else if(tinh == '*'){
        return state.tong = parseInt(a) * parseInt(b)
      }else if(tinh == '/'){
        return state.tong = parseInt(a) / parseInt(b)
      }
    }
  },
  actions: {
    tinhtong({commit}, {a , b, tinh}){
      commit('TINH_TONG', {a, b, tinh})
    }
  }
})

