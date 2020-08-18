<template>
	<div class="newContact" v-if="flag">
		<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1806637966&site=qq&menu=yes">
			<div class="item">
				<i class="iconfont icon-qq"></i>
				<div class="text">{{$t('NewContact.text1')}}</div>
			</div>
		</a>
		<a href="javascript:;">
			<div class="item wechat"><i class="iconfont icon-weixin1"></i>
				<div class="text">{{$t('NewContact.text3')}}</div>
				<div class="wechatDetail">
					<img src="../assets/index/qrcode.jpg" alt="">
					<div>{{$t('NewContact.text5')}}</div>
				</div>
			</div>
		</a>
		<a href="javascript:;">
			<div class="item phone"><i class="iconfont icon-phone"></i>
				<div class="text">{{$t('NewContact.text2')}}</div>
				<div class="phoneDetail">+86(0)532-87075257</div>
			</div>
		</a>
		<a href="javascript:;">
			<div class="item mail">
				<i class="iconfont icon-emailicon"></i>
				<div class="text">{{$t('NewContact.text4')}}</div>
				<div class="mailDetail">rongke.wang@rheinchina.com</div>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: false
			}
		},
		mounted() {
			window.addEventListener('scroll', this.scrollToTop)
		},
		destroyed() {
			window.removeEventListener('scroll', this.scrollToTop)
		},
		methods: {
			scrollToTop() {
				const that = this
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				that.scrollTop = scrollTop
				if (that.scrollTop > 600) {
					that.flag = true
				} else {
					that.flag = false
				}
			}
		}
	}
</script>

<style lang="scss">
	.newContact {
		position: fixed;
		right: 0px;
		top: 35%;
		border: 1px solid #e6e6e6;
		border-bottom: none;

		a {
			color: gray;
		}

		a:hover {
			color: orange;
		}

		.item {
			text-align: center;
			background-color: rgb(241, 241, 241);
			padding: 18px 7px;
			border-bottom: 1px solid #e6e6e6;

			.text {
				width: 56px;
			}
		}

		.mail,
		.wechat,
		.phone {
			position: relative;
		}

		.mailDetail,
		.wechatDetail,
		.phoneDetail {
			height: 79px;
			overflow: hidden;
			font-size: 20px;
			position: absolute;
			top: 0;
			right: 71px;
			background-color: orange;
			color: white;
			text-align: center;
			width: 0px;
			opacity: 0;
			-moz-transition: all .3s;
			-webkit-transition: all .3s;
			-o-transition: all .3s;
			-ms-transition: all .3s;
			transition: all .3s;
			border-top-left-radius: 5px;
			border-bottom-left-radius: 5px;
		}

		.wechatDetail {
			top: -47px;
		}

		.mailDetail,
		.phoneDetail {
			line-height: 79px;
		}

		.wechatDetail {
			padding: 10px 0;
			height: 160px;
			overflow: hidden;
		}

		.mail:hover {
			.mailDetail {
				opacity: 1;
				width: 290px;
			}
		}

		.wechat:hover {
			.wechatDetail {
				opacity: 1;
				width: 180px;
			}
		}

		.phone:hover {
			.phoneDetail {
				opacity: 1;
				width: 220px;
			}
		}

		.iconfont {
			font-size: 22px;
		}
	}
</style>
