// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import '../theme/index.css'
import router from './router'
import './assets/css/common.css'
import Format from '@/common/js/time'
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */

// router.beforeEach((to, from, next) => {
//     if (to.path == '/login') {
//         sessionStorage.removeItem('user');
//     }
//     let user = JSON.parse(sessionStorage.getItem('user'));
//     if (!user && to.path != '/login'&&to.path != '/registration' ) {

// //      next({ path: '/login' })

//     } else {
//         next()
//     }
// })

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
