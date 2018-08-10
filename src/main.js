import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueResource);

new Vue({
	router: router,
	store: store,
	render: h => h(App)
}).$mount('#app');
