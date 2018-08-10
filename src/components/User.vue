<template>
	<div class="user">
		<h1>User component </h1>
		<a href="" @click="goBack" >Back</a>
		<h4>User Id: {{ userId }}</h4>
	</div>
</template>

<script>
	export default {
		name: 'User',
		computed: {
			userId: function() {
				return this.id;
			}
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
		}
	}
</script>

