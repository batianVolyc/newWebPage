<template>
	<div class="index">
		<AnchorNavigation :allMenuList="$t('allMenuList')"></AnchorNavigation>
		<!-- banner -->
		<div class="indexBanner">
			<img src='../assets/index/banner.jpg' alt="banner">
			<div class="bannerCover">
				<div class="text">
					<div class="title">{{$t('index.banner.title')}}</div>
					<div class="detail">{{$t('index.banner.detail1')}}</div>
					<div class="detail">{{$t('index.banner.detail2')}}</div>
					<router-link to="">
						<div class="btn" @click="next()">DETAIL</div>
					</router-link>
				</div>
			</div>
		</div>
		<!-- 区块1 -->
		<div class="item section">
			<!-- 标题 -->
			<div class="titleBox">
				<div class="LTitle">{{$t('index.titleBox.box1.LTitle')}}</div>
				<div class="MTitle">{{$t('index.titleBox.box1.MTitle')}}</div>
			</div>
			<!-- 内容 -->
			<div class="contentBoxThree">
				<!-- 三个框 -->
				<div class="list" v-for="(item,index) in $t('index.threeBox')" :key='index' @mouseenter="changeIndexThree=index"
				 @mouseleave="changeIndexThree=null" :class="changeIndexThree==index?'listChange':''">
					<router-link :to="item.link">
						<div class="imgBox">
							<img :class="changeIndexThree==index?'imgChange':''" :src="item.url" alt="">
							<div class="cover" :class="changeIndexThree==index?'coverChange':''">
								<div class="text">{{item.text}}</div>
								<div class="textDetail">{{item.textDetail}}</div>
							</div>
						</div>
						<div class="more">
							<div class="link" :class="changeIndexThree==index?'linkChange':''">→</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
		<!-- 区块2 -->
		<div class="item item2 section">
			<!-- 标题 -->
			<div class="titleBox">
				<div class="LTitle">{{$t('index.titleBox.box2.LTitle')}}</div>
				<div class="MTitle">{{$t('index.titleBox.box2.MTitle')}}</div>
			</div>
			<!-- 内容 -->
			<div class="contentBoxTwo">
				<!-- 两个框 -->
				<div class="list" v-for="(item,index) in $t('index.twoBox')" :key='index' @mouseenter="changeIndexTwo=index"
				 @mouseleave="changeIndexTwo=null" :class="changeIndexTwo==index?'listChange':''">
					<router-link :to="item.link">
						<div class="imgTextBox" v-if="index==0">
							<div class="imgBox">
								<img :class="changeIndexTwo==index?'imgChange':''" :src="item.url" alt="">
								<div class="cover" :class="changeIndexTwo==index?'coverChange':''"></div>
							</div>
							<div class="right">
								<div class="text" :class="changeIndexTwo==index?'textChange':''">
									<div class="title">{{item.text}}</div>
									<div class="detail">{{item.textDetail}}</div>
								</div>
								<div class="link" :class="changeIndexTwo==index?'linkChange':''"><span>MORE</span></div>
							</div>
						</div>
						<div class="imgTextBox" v-if="index==1">
							<div class="right">
								<div class="text" :class="changeIndexTwo==index?'textChange':''">
									<div class="title">{{item.text}}</div>
									<div class="detail">{{item.textDetail}}</div>
								</div>
								<div class="link" :class="changeIndexTwo==index?'linkChange':''"><span>MORE</span></div>
							</div>
							<div class="imgBox">
								<img :class="changeIndexTwo==index?'imgChange':''" :src="item.url" alt="">
								<div class="cover" :class="changeIndexTwo==index?'coverChange':''"></div>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
		<!-- 区块3 -->
		<div class="item section">
			<!-- 标题 -->
			<div class="titleBox">
				<div class="LTitle">{{$t('index.titleBox.box3.LTitle')}}</div>
				<div class="MTitle">{{$t('index.titleBox.box3.MTitle')}}</div>
			</div>
			<!-- 内容 -->
			<div class="contentBoxFour">
				<!-- 四个框 -->
				<div class="list" v-for="(item,index) in $t('index.fourBox')" :key='index' @mouseenter="changeIndexFour=index"
				 @mouseleave="changeIndexFour=null" :class="changeIndexFour==index?'listChange':''">
					<router-link :to="item.link">
						<div class="imgBox">
							<img :class="changeIndexFour==index?'imgChange':''" :src="item.url" alt="">
						</div>
						<div class="detail" :class="changeIndexFour==index?'detailChange':''">
							<div class="text" :class="changeIndexFour==index?'textChange':''">
								<div class="title">{{item.text}}</div>
								<div class="detail">{{item.textDetail1}}</div>
								<div class="detail">{{item.textDetail2}}</div>
								<div class="detail">{{item.textDetail3}}</div>
							</div>
							<div class="more">
								<div class="link" :class="changeIndexFour==index?'linkChange':''">MORE</div>
								<div class="go" :class="changeIndexFour==index?'goChange':''">></div>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
		<!-- 区块4 -->
		<div class="item item4 section">
			<!-- 标题 -->
			<div class="titleBox">
				<div class="LTitle">{{$t('index.titleBox.box4.LTitle')}}</div>
				<div class="MTitle">{{$t('index.titleBox.box4.MTitle')}}</div>
			</div>
			<!-- 内容 -->
			<div class="contentBoxThree">
				<!-- 三个框 -->
				<div class="list" v-for="(item,index) in $t('index.threeBox2')" :key='index' @mouseenter="changeIndexThree2=index"
				 @mouseleave="changeIndexThree2=null" :class="changeIndexThree2==index?'listChange':''">
					<router-link :to="item.link">
						<div class="imgBox">
							<img :class="changeIndexThree2==index?'imgChange':''" :src="item.url" alt="">
							<div class="cover" :class="changeIndexThree2==index?'coverChange':''">
								<div class="text">{{item.text}}</div>
								<div class="textDetail">{{item.textDetail}}</div>
							</div>
						</div>
						<div class="more">
							<div class="link" :class="changeIndexThree2==index?'linkChange':''">→</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import AnchorNavigation from '@/components/AnchorNavigation.vue'
	export default {
		components: { AnchorNavigation },
		data() {
			return {
				scrollTop: 0,
				changeIndexFour: null,
				changeIndexThree: null,
				changeIndexThree2: null,
				changeIndexTwo: null,
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
			},
			next() {
				const that = this
				let jump = document.getElementsByClassName('section');
				let total = jump[0].offsetTop;
				document.documentElement.scrollTop = document.body.scrollTop = total - 70
			}
		}
	}
</script>

<style lang="scss">
	.index {
		background-color: #000000; //删除
		color: rgb(224, 224, 224);

		img {
			display: block;
			width: 100%;
			-moz-transition: all .5s;
			-webkit-transition: all .5s;
			-o-transition: all .5s;
			-ms-transition: all .5s;
			transition: all 0.5s;
		}

		.indexBanner {
			position: relative;
			overflow: hidden;

			img {
				margin-top: 70px;
			}

			.bannerCover {
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.5);
				position: absolute;
				top: 0;
				color: white;
				text-align: center;

				.text {
					margin-top: 280px;

					.title {
						font-size: 56px;
						font-weight: bold;
						margin-bottom: 50px;
					}

					.detail {
						font-size: 16px;
						color: rgba(204, 204, 204, 1);
						margin: 5px 0;
					}

					.btn {
						margin: 0 auto;
						margin-top: 50px;
						height: 40px;
						line-height: 40px;
						width: 120px;
						border-radius: 5px;
						background-color: orange;
						border: 3px solid transparent;
						-moz-transition: all .5s;
						-webkit-transition: all .5s;
						-o-transition: all .5s;
						-ms-transition: all .5s;
						transition: all .5s;
					}

					.btn:hover {
						background-color: transparent;
						border: 3px solid orange;
					}

					a {
						color: white;
					}
				}
			}
		}

		.item {
			max-width: 1750px;
			margin: 0 auto;
			padding-top: 30px;
			padding-bottom: 100px;


			a {
				color: #545454;
			}

			.titleBox {
				padding: 50px 0;
				text-align: center;

				.LTitle {
					font-size: 34px;
					margin-bottom: 5px;
				}

				.MTitle {
					font-size: 18px;
					color: #666666;
				}
			}

			.contentBoxFour {
				display: -webkit-flex;
				/* Safari */
				display: flex;
				justify-content: center;

				.list {
					width: 24%;
					margin: 0 0.5%;
					background-color: rgb(78, 78, 78);
					border-radius: 5px;
					overflow: hidden;
					border: 3px solid rgb(0, 0, 0);
					-moz-transition: all .3s;
					-webkit-transition: all .3s;
					-o-transition: all .3s;
					-ms-transition: all .3s;
					transition: all .3s;

					.imgBox {
						overflow: hidden;

						.imgChange {
							transform: scale(1.2, 1.2);
						}
					}

					.detail {
						-moz-transition: all .5s;
						-webkit-transition: all .5s;
						-o-transition: all .5s;
						-ms-transition: all .5s;
						transition: all 0.5s;
						color: rgb(224, 224, 224);

						.text {
							padding: 15px;
							font-size: 15px;
							line-height: 2;

							.title {
								font-size: 22px;
							}

						}

						.more {
							padding: 0 15px 20px 0;
							text-align: right;
							position: relative;

							.link {
								-moz-transition: all .2s;
								-webkit-transition: all .2s;
								-o-transition: all .2s;
								-ms-transition: all .2s;
								transition: all .2s;
							}

							.linkChange {
								color: #0077AA;
								font-weight: bold;
								transform: translateX(-30px);
							}

							.go {
								position: absolute;
								right: 27px;
								opacity: 0;
								-moz-transition: all .2s;
								-webkit-transition: all .2s;
								-o-transition: all .2s;
								-ms-transition: all .2s;
								transition: all .2s;
							}

							.goChange {
								color: #0077AA;
								font-weight: bold;
								transform: translateY(-17px);
								opacity: 1;
							}
						}
					}

					.textChange {
						color: white;
					}
				}

				.listChange {
					background-color: rgb(34, 34, 34);
				}
			}

			.contentBoxThree {
				display: -webkit-flex;
				/* Safari */
				display: flex;
				justify-content: center;

				.list {
					width: 31%;
					margin: 0 1%;
					border-radius: 5px;
					-moz-transition: all .3s;
					-webkit-transition: all .3s;
					-o-transition: all .3s;
					-ms-transition: all .3s;
					transition: all .3s;
					background-color: rgb(78, 78, 78);
					border: 3px solid rgb(78, 78, 78);

					.imgBox {
						width: 430px;
						height: 300px;
						margin: 20px auto;
						position: relative;
						overflow: hidden;

						img {
							height: 100%;
						}

						.cover {
							position: absolute;
							top: 0;
							width: 100%;
							height: 100%;
							-moz-transition: all .5s;
							-webkit-transition: all .5s;
							-o-transition: all .5s;
							-ms-transition: all .5s;
							transition: 0.5s;
							opacity: 0;
							color: white;

							.text {
								padding: 0 20px;
								margin-top: 5%;
								line-height: 2;
								font-size: 22px;
								text-align: center;
							}

							.textDetail {
								padding: 0 20px;
								line-height: 2;
								font-size: 18px;
							}
						}

						.coverChange {
							opacity: 1;
							background-color: rgba(0, 0, 0, 0.5);
						}
					}

					.more {
						text-align: center;
						margin-bottom: 20px;

						.link {
							color: white;
							width: 44px;
							height: 44px;
							margin: 0 auto;
							line-height: 40px;
							font-size: 30px;
							background-color: orange;
							border-radius: 50%;
							-moz-transition: all .5s;
							-webkit-transition: all .5s;
							-o-transition: all .5s;
							-ms-transition: all .5s;
							transition: all 0.5s;
						}

						@keyframes myfirst {
							50% {
								background-color: rgb(28, 31, 107);
							}
						}

						@-moz-keyframes textChange {
							50% {
								background-color: rgb(28, 31, 107);
							}
						}

						@-webkit-keyframes textChange {
							50% {
								background-color: rgb(28, 31, 107);
							}
						}

						@-o-keyframes textChange {
							50% {
								background-color: rgb(28, 31, 107);
							}
						}

						.linkChange {
							transform: rotate(360deg);
							-webkit-animation: myfirst 0.5s alternate;
							animation: myfirst 0.5s alternate;
						}
					}
				}

				.listChange {
					border: 3px solid orange;
				}
			}

			.contentBoxTwo {

				.list {
					width: 90%;
					margin: 0 auto;
					border-radius: 5px;
					overflow: hidden;
					-moz-transition: all .3s;
					-webkit-transition: all .3s;
					-o-transition: all .3s;
					-ms-transition: all .3s;
					transition: all .3s;

					.imgTextBox {
						display: -webkit-flex;
						/* Safari */
						display: flex;
						align-items: center;
						background-color: rgb(78, 78, 78);
						margin-bottom: 30px;

						.imgBox {
							width: 30%;
							margin: 20px;
							overflow: hidden;
							position: relative;
						}

						.imgChange {
							transform: scale(0.9, 0.9);
						}

						.right {
							width: 70%;
							color: white;
							padding: 0 20px;
							line-height: 2;
							font-size: 18px;
							color: rgb(224, 224, 224);

							.text {
								margin-bottom: 10px;
								-moz-transition: all 1s;
								-webkit-transition: all 1s;
								-o-transition: all 1s;
								-ms-transition: all 1s;
								transition: all 1s;

								.title {
									font-size: 22px;
									text-align: center;
									padding-bottom: 10px;
								}

								.detail {
									padding: 0 100px;
								}
							}

							@keyframes textChange {
								0% {
									transform: rotateX(90deg);
								}

								100% {
									transform: rotateX(0deg);
								}
							}

							@-moz-keyframes textChange {
								0% {
									transform: rotateX(90deg);
								}

								100% {
									transform: rotateX(0deg);
								}
							}

							@-webkit-keyframes textChange {
								0% {
									transform: rotateX(90deg);
								}

								100% {
									transform: rotateX(0deg);
								}
							}

							@-o-keyframes textChange {
								0% {
									transform: rotateX(90deg);
								}

								100% {
									transform: rotateX(0deg);
								}
							}

							.textChange {
								-webkit-animation: textChange 1s;
								animation: textChange 1s;
								color: white;
							}

							.link {
								text-align: center;
								color: #0077AA;
								-moz-transition: all .1s;
								-webkit-transition: all .1s;
								-o-transition: all .1s;
								-ms-transition: all .1s;
								transition: all .1s;
								padding-top: 10px;
								color: rgb(78, 78, 78);

								span {
									border: 1px solid rgb(78, 78, 78);
									padding: 10px 20px;
									-moz-transition: all .5s;
									-webkit-transition: all .5s;
									-o-transition: all .5s;
									-ms-transition: all .5s;
									transition: all .5s;
								}

								span:hover {
									border: 1px solid orange;
								}
							}

							.linkChange {
								color: orange;
							}

						}

						.cover {
							position: absolute;
							top: 0;
							width: 100%;
							height: 100%;
							-moz-transition: all .5s;
							-webkit-transition: all .5s;
							-o-transition: all .5s;
							-ms-transition: all .5s;
							transition: all 0.5s;
							opacity: 0;

						}

						.coverChange {
							opacity: 1;
							background-color: rgba(0, 0, 0, 0.3);
						}
					}
				}

				.listChange {
					transform: translateY(10px);

					a {
						color: white;
					}
				}
			}

		}

		.item2 {
			background-color: rgb(34, 34, 34);
			padding-bottom: 70px;
		}


		.item4 {
			background-color: rgb(34, 34, 34);
		}
	}
</style>
