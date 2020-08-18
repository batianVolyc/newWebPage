<template>
	<div class="newHeader">
		<div class="navbar">
			<div class="left">{{$t('header.logo')}}</div>
			<div class="center">
				<ul v-for="(item,index) in $t('header.navList')" :key="index">
					<li class="navItem" @mouseenter="navIndex=index" @mouseleave="navIndex=null">
						<router-link :to="item.link" :class="navIndex==index||changeNavNum==index?'aChange':''" @click="changeNav(index)">{{item.name}}</router-link>
					</li>
					<ul class="navList" @mouseleave="navIndex=null" @mouseenter="navIndex=index" :class="navIndex==index?'navShow':''"
					 @click="changeNav(index)">
						<li class="text" v-for="(item,index) in item.children" :key='index'>
							<router-link :to="item.link">{{item.name}}</router-link>
						</li>
					</ul>
				</ul>
			</div>
			<div class="right">
				<router-link to=""> <span class="item">{{$t('header.right')}}</span></router-link>
				<i class="item iconfont icon-yonghu"></i>
				<svg class="icon" aria-hidden="true" v-show="cn">
					<use xlink:href="#icon-zhongguo"></use>
				</svg>
				<svg class="icon" aria-hidden="true" v-show="us">
					<use xlink:href="#icon-meiguo"></use>
				</svg>
				<a href="javascript:;"><span @click="changeLangEvent()">{{changetext}}</span></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentNav: '',
				changetext: '简体中文',
				navIndex: null,
				cn: true,
				us: false,
				changeNavNum: null
			}
		},
		mounted() {
			this.currentNav = this.$route.name
			// console.log(this.currentNav)
		},
		updated() {
			this.currentNav = this.$route.name
			// console.log(this.currentNav)
		},
		watch: {
			currentNav() {
				if (this.currentNav == "Index") {
					this.changeNavNum = 0
				}
				if (this.currentNav == "S4Hana" || this.currentNav == "S4HanaCloud" || this.currentNav == "SuccessFactors") {
					this.changeNavNum = 1
				}
				// if (this.currentNav == "name") {
				// 	this.changeNavNum = 2
				// }
				if (this.currentNav == "Online") {
					this.changeNavNum = 3
				}
				if (this.currentNav == "name" || this.currentNav == "Attest") {
					this.changeNavNum = 4
				}
			}
		},
		methods: {
			changeLangEvent() {
				if (this.cn == true) {
					this.cn = false
					this.us = true
					this.$i18n.locale = 'en-US';
					this.changetext = 'English'
				} else {
					this.cn = true
					this.us = false
					this.$i18n.locale = 'zh-CN';
					this.changetext = '简体中文'
				}
			},
			changeNav(index) {
				this.changeNavNum = index
			}
		}
	}
</script>

<style lang="scss">
	.newHeader {
		font-size: 16px;
		width: 100%;
		position: fixed;
		top: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 999;
		color: white;
		min-height: 75px;

		a {
			color: white;
		}

		ul,
		li {
			list-style: none;
			padding: 0px;
			margin: 0px;
		}

		.navbar {
			display: -webkit-flex;
			/* Safari */
			display: flex;
			justify-content: space-between;
			align-items: center;
			max-width: 1600px;
			margin-right: auto;
			margin-left: auto;

			.left {
				font-size: 20px;
			}

			.center {
				display: -webkit-flex;
				/* Safari */
				display: flex;

				.navItem {
					padding: 27px 0;
					padding-left: 10px;
					padding-right: 40px;
					position: relative;
					-moz-transition: all .3s;
					-webkit-transition: all .3s;
					-o-transition: all .3s;
					-ms-transition: all .3s;
					transition: all .3s;
				}

				a {
					-moz-transition: all .3s;
					-webkit-transition: all .3s;
					-o-transition: all .3s;
					-ms-transition: all .3s;
					transition: all .3s;
				}

				.aChange {
					color: orange;
				}

				.navList {
					background-color: rgba(0, 0, 0, 0.8);
					position: absolute;
					top: 75px;
					width: 192px;
					opacity: 0;
					-moz-transition: all .3s;
					-webkit-transition: all .3s;
					-o-transition: all .3s;
					-ms-transition: all .3s;
					transition: all .3s;

					.text {
						height: 0px;
						overflow: hidden;
						opacity: 0;
						padding: 0px 20px;
						-moz-transition: all .3s;
						-webkit-transition: all .3s;
						-o-transition: all .3s;
						-ms-transition: all .3s;
						transition: all .3s;
					}

					.text:hover {
						background-color: rgba(0, 0, 0, 1);

						a {
							color: orange;
						}
					}
				}

				.navShow {
					opacity: 1;

					.text {
						height: 100%;
						opacity: 1;
						padding: 15px 20px;
					}
				}
			}

			.right {
				display: -webkit-flex;
				/* Safari */
				display: flex;
				align-items: center;

				.item {
					margin: 0 15px;
				}

				i {
					font-size: 24px;
				}

				.icon {
					width: 30px;
					height: 30px;
					margin-left: 15px;
				}
			}
		}
	}
</style>
