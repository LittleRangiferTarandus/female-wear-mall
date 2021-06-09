import { createStore } from 'vuex'

export default createStore({
  state: {
    cart : {
      '1m70y5k':1000,
      '1m745k0':100,
      '1lrzvr8':100,
      '1jw0sr2':100,
      '1m7s9c4':1,
      '1m7rp9w':11,
      '1m4tdhy':13141,

    }
  },
  mutations: {
  },
  actions: {
    cartAdd(state,id){
      if (state.state.cart[id] ) {
        state.state.cart[id] ++
      }else{
        state.state.cart[id] = 1
      }
    }
  },
  modules: {
  }
})
