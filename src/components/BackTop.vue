<template>
	<div class="backTopBtn">
		<a href="javascript:;">
			<div v-if="btnFlag" class="btn" @click="backTop">TOP</div>
		</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				btnFlag: false,
				scroll: null
			}
		},
		mounted() {
			window.addEventListener('scroll', this.scrollToTop)
		},
		destroyed() {
			window.removeEventListener('scroll', this.scrollToTop)
		},
		methods: {
			// 点击图片回到顶部方法，加计时器是为了过渡顺滑
			backTop() {
				let timer = setInterval(() => {
					let ispeed = Math.floor(-this.scroll / 5)
					document.documentElement.scrollTop = document.body.scrollTop = this.scroll + ispeed
					if (this.scroll === 0) {
						clearInterval(timer)
					}
				}, 16)
			},

			// 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
			scrollToTop() {
				this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
				if (this.scroll > 600) {
					this.btnFlag = true
				} else {
					this.btnFlag = false
				}
			}
		}
	}
</script>

<style lang="scss">
	.backTopBtn {
		position: fixed;
		right: 8px;
		bottom: 30px;
		background-color: rgb(78, 78, 78);
		font-size: 18px;
		border-radius: 10px;

		a {
			color: white;
		}

		.btn {
			padding: 17px 10px;
		}

	}

	.backTopBtn:hover {
		a {
			color: orange;
		}
	}
</style>
