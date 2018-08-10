<template>
	<div>
		<h1>User search component </h1>
		<h4>selected phone: {{ phone }}</h4>
		<a href="#" @click="goBack" >Back</a>
		<br/>
		<div v-if="searchUsersLoading">
			<strong>loading ...</strong>
		</div>
		<table v-if="searchUsers.length && !searchUsersLoading">
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>phone</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="searchUser in searchUsers" :key="searchUser.id">
					<td>{{ searchUser.id }}</td>
					<td>{{ searchUser.fullName }}</td>
					<td>{{ searchUser.phone }}</td>
					<td>
						<button @click="selectUser(searchUser.id)">select</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import * as userAction from '../store/modules/user/user-actions'

	export default {
		name: 'UserSearch',
		computed: mapState({
			searchUsers: state => state.user.searchUsers,
			searchUsersLoading: state => state.user.loading
		}),
		methods: {
			selectUser: function(userId){
				const selectRoutePath = this.selectRouteFn(userId);
				this.$router.push(selectRoutePath);
			},
			goBack(e) {
				e.preventDefault();
				this.$router.push(this.backRoute);
			}
		},
		props: {
			phone: String,
			selectRouteFn: Function,
			backRoute: String
		},
		created: function () {
			this.$store.dispatch(`user/${userAction.SEARCH_USER_BY_PHONE}`, { phone: this.phone });
		}
	}
</script>

