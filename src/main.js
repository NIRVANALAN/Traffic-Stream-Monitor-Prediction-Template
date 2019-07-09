import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/element'
import 'echarts/theme/macarons'
import 'echarts/theme/vintage'
import 'echarts/theme/roma'
import 'echarts/extension/bmap/bmap'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
