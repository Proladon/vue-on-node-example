import { createStore } from 'vuex'

// 建立 vuex store
const store = createStore({
  state: {
    count: 0
  },

  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store
