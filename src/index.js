/**
 * Created by Anshi on 2017/7/26.
 */
import Vue from 'vue';
import router from './router'
import App from './app.vue';

// import 'mint-ui/lib/style.css'
import'normalize.css';
import'./assest/style/common.scss';
import {Swipe, SwipeItem} from 'mint-ui';

Vue.use(Swipe);
Vue.use(SwipeItem);


let app = new Vue({
  // el:'#app',
  router,
  render: h => h(App),
}).$mount('#app');