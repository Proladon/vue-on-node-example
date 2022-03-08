import { createApp } from 'vue'
import vuex, { createStore } from 'vuex'

// 必要
// 實例化 vue 並使用 vuex
createApp().use(vuex) 

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