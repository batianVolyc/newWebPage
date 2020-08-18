<template>
	<div class="online">
		<AnchorNavigation :allMenuList="$t('online.allMenuList')"></AnchorNavigation>
		<div class="banner">
			<img src="../../assets/eduTres/onlineBanner.png" alt="">
			<div class="cover">
				<div class="title">{{$t('online.title')}}</div>
				<div class="subTitle">{{$t('online.subTitle')}}</div>
			</div>
		</div>
		<div class="item section">
			<div class="title">
				<div class="main">{{$t('online.Inventory.title')}}</div>
				<div class="subtitle flex">
					<div class="sub" v-for="(item,index) in $t('online.Inventory.subList')" :key="index" @click="jump(index)"><a href="javascript:;">{{item}}</a></div>
				</div>
			</div>
			<div class="content flex">
				<div class="left">
					<div class="video videoM" @mouseenter="index=1" @mouseleave="index=null" :class='index==1?"getchange":""'>
						<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions1"></video-player>
					</div>
					<div class="text" @mouseenter="index=2" @mouseleave="index=null" :class='index==2?"getTextchange":""'>
						<a href="javascript:;">{{$t('online.Inventory.titleList[0]')}}</a>
						<div class="arrow">
							<i class="iconfont icon-jiantou_xiangyou"></i>
						</div>
					</div>
					<div class="video videoM" @mouseenter="index=3" @mouseleave="index=null" :class='index==3?"getchange":""'>
						<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions3"></video-player>
					</div>
					<div class="text" @mouseenter="index=4" @mouseleave="index=null" :class='index==4?"getTextchange":""'>
						<a href="javascript:;">{{$t('online.Inventory.titleList[1]')}}</a>
						<div class="arrow">
							<i class="iconfont icon-jiantou_xiangyou"></i>
						</div>
					</div>
					<div class="video videoM" @mouseenter="index=5" @mouseleave="index=null" :class='index==5?"getchange":""'>
						<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions5"></video-player>
					</div>
				</div>
				<div class="center">
					<div class="line"></div>
				</div>
				<div class="right">
					<div class="text" @mouseenter="index=1" @mouseleave="index=null" :class='index==1?"getTextchange":""'>
						<a href="javascript:;">{{$t('online.Inventory.titleList[2]')}}</a>
						<div class="arrow">
							<i class="iconfont icon-jiantou_xiangzuo"></i>
						</div>
					</div>
					<div class="video videoM" @mouseenter="index=2" @mouseleave="index=null" :class='index==2?"getchange":""'>
						<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions2"></video-player>
					</div>
					<div class="text" @mouseenter="index=3" @mouseleave="index=null" :class='index==3?"getTextchange":""'>
						<a href="javascript:;">{{$t('online.Inventory.titleList[3]')}}</a>
						<div class="arrow">
							<i class="iconfont icon-jiantou_xiangzuo"></i>
						</div>
					</div>
					<div class="video videoM" @mouseenter="index=4" @mouseleave="index=null" :class='index==4?"getchange":""'>
						<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions4"></video-player>
					</div>
					<div class="text" @mouseenter="index=5" @mouseleave="index=null" :class='index==5?"getTextchange":""'>
						<a href="javascript:;">{{$t('online.Inventory.titleList[4]')}}</a>
						<div class="arrow">
							<i class="iconfont icon-jiantou_xiangzuo"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="item section">
			<div class="title">
				<div class="main">{{$t('online.Assets.title')}}</div>
				<div class="subtitle flex">
					<div class="sub" v-for="(item,index) in $t('online.Assets.subTitle')" :key="index">{{item}}</div>
				</div>
				<div class="item2Content flex">
					<div class="left">
						<div class="video">
							<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions6"></video-player>
						</div>
						<div class="text">{{$t('online.Assets.videoText1')}}</div>
					</div>
					<div class="right">
						<div class="video">
							<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions7"></video-player>
						</div>
						<div class="text">{{$t('online.Assets.videoText2')}}</div>
					</div>
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
				scroll: null,
				activeMenu: null,
				index: null,
				// 视频播放1
				playerOptions1: {
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					techOrder: ['flash', 'html5'], // 兼容顺序
					flash: {
						hls: { withCredentials: false },
						swf: './static/media/video-js.swf' // 引入静态文件swf
					},
					html5: { hls: { withCredentials: false } },
					sources: [{
						type: "",
						src: require('../../assets/video/eduOne.mp4')
					}],
					poster: "", //你的封面地址
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
						timeDivider: true,
						durationDisplay: true,
						remainingTimeDisplay: false,
						fullscreenToggle: true //全屏按钮
					}
				},
				// 视频播放2
				playerOptions2: {
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					techOrder: ['flash', 'html5'], // 兼容顺序
					flash: {
						hls: { withCredentials: false },
						swf: './static/media/video-js.swf' // 引入静态文件swf
					},
					html5: { hls: { withCredentials: false } },
					sources: [{
						type: "",
						src: require('../../assets/video/eduTwo.mp4')
					}],
					poster: "", //你的封面地址
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
						timeDivider: true,
						durationDisplay: true,
						remainingTimeDisplay: false,
						fullscreenToggle: true //全屏按钮
					}
				},
				// 视频播放3
				playerOptions3: {
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					techOrder: ['flash', 'html5'], // 兼容顺序
					flash: {
						hls: { withCredentials: false },
						swf: './static/media/video-js.swf' // 引入静态文件swf
					},
					html5: { hls: { withCredentials: false } },
					sources: [{
						type: "",
						src: require('../../assets/video/eduThree.mp4')
					}],
					poster: "", //你的封面地址
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
						timeDivider: true,
						durationDisplay: true,
						remainingTimeDisplay: false,
						fullscreenToggle: true //全屏按钮
					}
				},
				// 视频播放4
				playerOptions4: {
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					techOrder: ['flash', 'html5'], // 兼容顺序
					flash: {
						hls: { withCredentials: false },
						swf: './static/media/video-js.swf' // 引入静态文件swf
					},
					html5: { hls: { withCredentials: false } },
					sources: [{
						type: "",
						src: require('../../assets/video/eduFour.mp4')
					}],
					poster: "", //你的封面地址
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
						timeDivider: true,
						durationDisplay: true,
						remainingTimeDisplay: false,
						fullscreenToggle: true //全屏按钮
					}
				},
				// 视频播放5
				playerOptions5: {
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					techOrder: ['flash', 'html5'], // 兼容顺序
					flash: {
						hls: { withCredentials: false },
						swf: './static/media/video-js.swf' // 引入静态文件swf
					},
					html5: { hls: { withCredentials: false } },
					sources: [{
						type: "",
						src: require('../../assets/video/eduFive.mp4')
					}],
					poster: "", //你的封面地址
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
						timeDivider: true,
						durationDisplay: true,
						remainingTimeDisplay: false,
						fullscreenToggle: true //全屏按钮
					}
				},
				// 视频播放6
				playerOptions6: {
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					techOrder: ['flash', 'html5'], // 兼容顺序
					flash: {
						hls: { withCredentials: false },
						swf: './static/media/video-js.swf' // 引入静态文件swf
					},
					html5: { hls: { withCredentials: false } },
					sources: [{
						type: "",
						src: require('../../assets/video/eduSix.mp4')
					}],
					poster: "", //你的封面地址
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
						timeDivider: true,
						durationDisplay: true,
						remainingTimeDisplay: false,
						fullscreenToggle: true //全屏按钮
					}
				},
				// 视频播放7
				playerOptions7: {
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					techOrder: ['flash', 'html5'], // 兼容顺序
					flash: {
						hls: { withCredentials: false },
						swf: './static/media/video-js.swf' // 引入静态文件swf
					},
					html5: { hls: { withCredentials: false } },
					sources: [{
						type: "",
						src: require('../../assets/video/eduSeven.mp4')
					}],
					poster: "", //你的封面地址
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
						timeDivider: true,
						durationDisplay: true,
						remainingTimeDisplay: false,
						fullscreenToggle: true //全屏按钮
					}
				}
			}
		},
		mounted() {
			window.addEventListener('scroll', this.dataScroll);
		},
		methods: {
			dataScroll: function() {
				this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
			},
			jump(index) {
				this.activeMenu = index
				let jump = document.getElementsByClassName('videoM');
				// 获取需要滚动的距离
				let total = jump[index].offsetTop;
				document.body.scrollTop = total;
				document.documentElement.scrollTop = total - 90;
				window.pageYOffset = total;
			}
		}
	}
</script>

<style lang="scss">
	.online {

		.banner {
			position: relative;

			img {
				width: 100%;
			}

			.cover {
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.5);
				position: absolute;
				top: 0;
				color: white;
				text-align: center;

				.title {
					margin-top: 290px;
					font-size: 56px;
					font-weight: bold;
					margin-bottom: 50px;
				}

				.subTitle {
					font-size: 16px;
				}
			}
		}

		.item {
			max-width: 1650px;
			margin: 50px auto;

			.title {
				text-align: center;

				.main {
					font-size: 30px;
				}

				.subtitle {
					justify-content: center;

					.sub {
						padding: 5px 10px;
						border: 1px solid gray;
						margin: 20px 10px;

						a {
							color: rgb(24, 29, 108);
							-moz-transition: all .3s;
							-webkit-transition: all .3s;
							-o-transition: all .3s;
							-ms-transition: all .3s;
							transition: all .3s;
						}
					}

					.sub:hover {
						a {
							color: orange;
						}
					}
				}

			}

			.content {
				margin: 30px 0;

				.left,
				.right {
					margin: 5%;
					width: 39.8%;

					.video {
						border-radius: 10px;
						padding: 15px;
						background-color: rgb(24, 29, 108);
						-moz-transition: all .3s;
						-webkit-transition: all .3s;
						-o-transition: all .3s;
						-ms-transition: all .3s;
						transition: all 0.3s;
					}

					.getchange {
						background-color: orange;
					}

					.text {
						height: 200px;
						line-height: 200px;
						font-size: 18px;
						position: relative;

						a {
							color: black;
							-moz-transition: all .3s;
							-webkit-transition: all .3s;
							-o-transition: all .3s;
							-ms-transition: all .3s;
							transition: all 0.3s;
						}

						.arrow {
							position: absolute;
							top: 0;
							right: -70px;

							i {
								font-size: 30px;
								color: orange;
							}
						}
					}

					.getTextchange {
						a {
							padding: 10px;
							border: 3px solid orange;
						}
					}
				}

				.right .arrow {
					left: -70px;
				}

				.left .text {
					text-align: right;
				}

				.center {
					width: 0.4%;

					.line {
						height: 100%;
						background-color: orange;
						border-radius: 20px;
					}
				}
			}

			.item2Content {
				margin: 30px 0;

				.right,
				.left {
					padding: 0.5%;
					margin: 0.5%;
					width: 48%;
					-moz-transition: all .3s;
					-webkit-transition: all .3s;
					-o-transition: all .3s;
					-ms-transition: all .3s;
					transition: all .3s;

					.text {
						font-size: 20px;
						margin: 20px 0;
					}
				}

				.right:hover,
				.left:hover {
					background-color: orange;
					color: white;
				}
			}
		}
	}
</style>
