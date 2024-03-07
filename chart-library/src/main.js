import Vue from 'vue'
import App from './App.vue'
import chartPlugin from './plugins/chartPlugin'

Vue.config.productionTip = false

// install(); <기능을 하는 것.(install()함수는 chartPlugin.js 파일에)
Vue.use(chartPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
