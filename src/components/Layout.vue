<template>
	<div>
		<div class="header">
			<Header></Header>
		</div>
		<div class="main">
			<router-view></router-view>
		</div>
		<div class="footer">
			<Footer></Footer>
		</div>
		<div class="contact">
			<Contact></Contact>
		</div>
		<div class="back">
			<BackTop></BackTop>
		</div>
	</div>
</template>

<script>
	import Header from "@/components/NewHeader.vue";
	import Footer from "@/components/NewFooter.vue";
	import Contact from "@/components/NewContact.vue";
	import BackTop from "@/components/BackTop.vue";
	export default {
		components: {
			Header,
			Footer,
			Contact,
			BackTop
		},
		data() {
			return {
			
			}
		},
		mounted() {

		}
	}
</script>

<style lang='scss'>

</style>
