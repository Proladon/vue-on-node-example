import express from 'express'
import store from './store.js'
import { computed } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
import { createApp } from 'vue'

const app = express()
const port = 5000

// 必要
// 實例化 vue 並使用 vuex
createApp().use(store) 

// vue computed -> 當 store 裡的 count 有變化時更新值
const countState = computed(() => store.state.count)

// vue watch -> 監聽 countState 裡的值，當值有變化時執行自定義功能
watch(countState, () => 
  console.log('watch: count changed', countState.value)
)

app.get('/', (req, res) => {
  // 更新 store 裡 count 的值，這邊會觸發 watch 的監聽功能
  store.commit('increment') 
  res.send('hello world')
})

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})
