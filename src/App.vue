<template>
	<router-view></router-view>
</template>

<style lang="scss">
	body {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #545454;
		font-size: 14px;
		width: 100%;
		min-width: 1500px;
		max-width: 100%;
		height: 100%;
	}

	* {
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}

	.flex {
		display: -webkit-flex;
		display: flex;
	}

	// .icon {
	// 	width: 1em;
	// 	height: 1em;
	// 	vertical-align: -0.15em;
	// 	fill: currentColor;
	// 	overflow: hidden;
	// }
</style>
