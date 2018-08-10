<template>
	<div>
		<h1>User search component </h1>
		<h4>selected phone: {{ phone }}</h4>
		<a href="#" @click="goBack" >Back</a>
		<br/>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>phone</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Sergey</td>
					<td>0971665017</td>
					<td>
						<button @click="selectUser('1')">select</button>
					</td>
				</tr>
				<tr>
					<td>Dima</td>
					<td>0501665017</td>
					<button @click="selectUser('2')">select</button>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'UserSearch',
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
		}
	}
</script>

