<template>
	<div class="user">
		<h1>User component </h1>
		<a href="" @click="goBack" >Back</a>
		<div v-if="loading">
			loading ...
		</div>
		<div v-if="user.id && !loading">
			<h4>User Id: {{ user.id }}</h4>
			<h4>User fullName: {{ user.fullName }}</h4>
			<h4>User phone: {{ user.phone }}</h4>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import * as userAction from '../store/modules/user/user-actions'

	export default {
		name: 'User',
		computed: {
			...mapState({
				user: state => state.user.selectedUser,
				loading: state => state.user.loading
			})
		},
		methods: {
			goBack(e) {
				e.preventDefault();
				this.$router.push(this.backRoute);
			}
		},
		props: {
			backRoute: String,
			id: String
		},
		created: function () {
			this.$store.dispatch(`user/${userAction.LOAD_USER}`, { userId: this.id });
		}
	}
</script>

