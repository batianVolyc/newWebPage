<template>
	<div class="attest">
		<div class="bg">
			<div class="content">
				<!-- 标题和副标题 -->
				<div class="title-box">
					<div class="title">{{$t('eduScheme.attest.title')}}</div>
					<div class="subTitle">{{$t('eduScheme.attest.subTitle')}}</div>
				</div>
				<!-- 圆点 -->
				<div class="point-box">
					<div class="point" v-for="(item,index) in pointList" :key="index" :class="{'poOne':index==0,'poTwo':index==1,'poThree':index==2,'poFour':index==3,'pointHover':currentIndex==index}"
					 @mouseenter="currentIndex=index" @mouseleave="currentIndex=null"></div>
				</div>
				<!-- 对话框 -->
				<div class="dialog-box">
					<div class="dialog" v-for="(item,index) in $t('eduScheme.attest.dialogList')" :key="index" :class="{'diOne':index==0,'diTwo':index==1,'diThree':index==2,'diFour':index==3,'change':currentIndex==index}"
					 @mouseenter="currentIndex=index" @mouseleave="currentIndex=null">
						<img :src="item.src" alt="">
					</div>
				</div>
				<!-- 文字 -->
				<div class="text-box">
					<div class="text" v-for="(item,index) in $t('eduScheme.attest.textList')" :key="index" :class="{'teOne':index==0,'teTwo':index==1,'teThree':index==2,'teFour':index==3,'show':currentIndex==index}">
						<div v-for="(item,index) in item" :key="index">
							{{item}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: null,
				// 圆点
				pointList: ['', '', '', '', ],
			}
		}
	}
</script>

<style lang="scss">
	.attest {
		background-color: #000000;

		// font-size: 16px;
		.bg {
			height: 900px;
			width: 100%;
			max-width: 1750px;
			background-image: url("../../assets/eduTsol/attest/bg.png");
			background-repeat: no-repeat;
			background-position: center;
			margin: 0 auto;
			position: relative;
			overflow: auto;

			.content {
				padding-top: 75px;
				color: white;
			}
		}

		// 圆点
		.point-box {
			.point {
				position: absolute;
				width: 55px;
				height: 55px;
				background-color: transparent;
				border-radius: 50%;
				z-index: 99;
				-moz-transition: all .3s;
				-webkit-transition: all .3s;
				-o-transition: all .3s;
				-ms-transition: all .3s;
				transition: all .3s;
				cursor: pointer;
			}

			.pointHover {
				background-color: orange;
			}

			.poOne {
				top: 616px;
				left: 179px;
			}

			.poTwo {
				top: 511px;
				left: 531px;
			}

			.poThree {
				top: 410px;
				left: 920px;
			}

			.poFour {
				top: 306px;
				right: 430px;
			}

		}

		// 标题
		.title-box {
			text-align: center;

			.title {
				font-size: 36px;
				line-height: 80px;
				color: orange;
				font-weight: bold;
			}

			.subTitle {
				font-size: 24px;
			}
		}

		// 对话框
		.dialog-box {
			.dialog {
				position: absolute;

				img {
					width: 70%;
					-moz-transition: all .3s;
					-webkit-transition: all .3s;
					-o-transition: all .3s;
					-ms-transition: all .3s;
					transition: all .3s;
				}
			}

			.diOne {
				top: 400px;
				left: 60px;
			}

			.diTwo {
				top: 570px;
				left: 490px;
			}

			.diThree {
				top: 230px;
				left: 750px;
			}

			.diFour {
				top: 365px;
				right: 30px;
			}

			.change {

				img {
					width: 73%;
				}
			}
		}

		// 文字
		.text-box {
			.text {
				position: absolute;
				line-height: 20px;
				// opacity: 0;
				-moz-transition: all .3s;
				-webkit-transition: all .3s;
				-o-transition: all .3s;
				-ms-transition: all .3s;
				transition: all .3s;
			}

			.teOne {
				bottom: 30px;
				left: 80px;
			}

			.teTwo {
				bottom: 170px;
				left: 920px
			}

			.teThree {
				top: 330px;
				left: 505px;
			}

			.teFour {
				left: 1350px;
				// right: 250px;
				bottom: 80px;
			}

			.show {
				// opacity: 1;
				color: orange;
			}
		}

	}
</style>
