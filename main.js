import Vue from 'vue'
import App from './App'
import http from './api/http.js'

Vue.config.productionTip = false
Vue.prototype.apihttp=http

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
