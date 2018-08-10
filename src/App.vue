<template>
	<div id="app">
		<ul>
			<li>
				<router-link :to="{ name: 'contact'}">contact</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'about'}">about</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>

	export default {
		name: 'app',
		components: {}
	}
</script>
