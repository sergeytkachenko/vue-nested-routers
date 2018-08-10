import Vue from 'vue'
import * as action from './user-actions'
import * as mutation from './user-mutation'

const state = {
	selectedUser: {
		id: null,
		fullName: null,
		phone: null
	},
	searchUsers: [],
	loading: false
};

const mutations = {

	[mutation.SET_LOADING] (state, loading) {
		Vue.set(state, 'loading', loading);
	},

	[mutation.SELECT_SEARCH_USERS] (state, users) {
		Vue.set(state, 'searchUsers', users);
	},

	[mutation.SET_SELECTED_USER] (state, user) {
		Vue.set(state, 'selectedUser', user);
	}
};

const actions = {
	[action.SEARCH_USER_BY_PHONE] ({ commit }, { phone }) {
		commit(mutation.SET_LOADING, true);
		Vue.http.get(`/users.json`, { phone }).then(res => {
			setTimeout(() => {
				commit(mutation.SELECT_SEARCH_USERS, res.body.users);
				commit(mutation.SET_LOADING, false);
			}, 2000);
		});
	},

	[action.LOAD_USER] ({ commit }, { userId }) {
		commit(mutation.SET_LOADING, true);
		// todo : loading user
		Vue.http.get(`/users.json`, { userId }).then(res => {
			setTimeout(() => {
				const users = res.body.users;
				const user = users.find(u => u.id === parseInt(userId));
				commit(mutation.SET_SELECTED_USER, user);
				commit(mutation.SET_LOADING, false);
			}, 2000);
		});
	}
};

const getters = {

};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
