<template>
	<div class="contact">
		<h1>Contact</h1>
		<hr/>
		<input v-model="phone" @change="searchUser" placeholder="enter user phone"/>
		<router-view></router-view>
	</div>
</template>

<script>
	import * as userAction from '../store/modules/user/user-actions'

	export default {
		name: 'About',
		data: () => {
			return {
				phone: null
			}
		},
		methods: {
			searchUser() {
				this.$store.dispatch(`user/${userAction.SEARCH_USER_BY_PHONE}`, { phone: this.phone });
				const params = {from: this.$route.path, phone: this.phone};
				this.$router.push({ name: 'contact.search', params: params});
			}
		}
	}
</script>
