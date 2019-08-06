import Vue from 'vue'
import App from './App.vue'
import GameData from './gameData/dataIndex.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: GameData
}).$mount('#app')