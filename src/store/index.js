import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user/user';

Vue.use(Vuex);

const state = {
	loading: false
};

const mutations = {

};

const actions = {

};

const store = new Vuex.Store({
	state,
	mutations,
	actions,
	modules: {
		user
	}
});

export default store
