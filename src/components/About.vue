<template>
	<div class="about">
		<h1>About</h1>
		<hr/>
		<input v-model="phone" @change="searchUser" placeholder="enter user phone"/>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'About',
		data: () => {
			return {
				phone: null
			}
		},
		methods: {
			searchUser() {
				const params = {from: this.$route.path, phone: this.phone};
				this.$router.push({ name: 'about.search', params: params});
			}
		}
	}
</script>
