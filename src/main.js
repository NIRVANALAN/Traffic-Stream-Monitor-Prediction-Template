import Vue from 'vue'
import App from './App.vue'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: '6CWm9eOX1pjyGCoLbLecFnCT6I02D7kR'
})

import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
