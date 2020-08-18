<template>
	<div class="S4HanaCloud">
		<div class="nav flex">
			<div class="title" @click="show=true" :class="{'blue':show}">{{$t('productHanaCloud.nav1')}}</div>
			<div class="title" @click="show=false" :class="{'blue':!show}">{{$t('productHanaCloud.nav2')}}</div>
		</div>
		<div class="activate" v-if="show">
			<div class="title">{{$t('productHanaCloud.ACtitle')}}</div>
			<div class="flow">
				<img :src="$t('productHanaCloud.ACimg')" alt="">
			</div>
			<div class="detail">
				<img :src="$t('productHanaCloud.ACimg1')" alt="">
			</div>
		</div>
		<div class="enforce" v-if="!show">
			<div class="title">{{$t('productHanaCloud.ENtitle')}}</div>
			<div class="flow">
				<img :src="$t('productHanaCloud.ENimg')" alt="">
			</div>
			<div class="box">
				<div class="milestone flex">
					<div class="item" v-for="(item,index) in  $t('productHanaCloud.milestoneList')" :key="index" :class="{'realizeWidth':index==1}">
						<div class="head">{{item.title}}</div>
						<div class="text">{{item.detail}}</div>
					</div>
				</div>
				<div class="activity flex">
					<div class="item" v-for="(item,index) in $t('productHanaCloud.activityList')" :key="index">
						<div class="head">{{item.title}}</div>
						<div class="text">{{item.detail}}</div>
					</div>
				</div>
			</div>
			<div class="transports">
				<img :src="$t('productHanaCloud.explain')" alt="">
				<img :src="$t('productHanaCloud.transports')" alt="">
				<div class="notes">{{$t('productHanaCloud.notes')}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
			}
		}
	}
</script>

<style lang="scss">
	.S4HanaCloud {
		padding-top: 75px;
		background-color: #000000;
		color: #dfdfdf;

		.flex {
			display: -webkit-flex;
			/* Safari */
			display: flex;
			align-items: center;
		}

		.nav {
			max-width: 1750px;
			margin: 50px auto;

			.title {
				font-size: 22px;
				padding: 10px 20px;
				cursor: pointer;
				-moz-transition: all .3s;
				-webkit-transition: all .3s;
				-o-transition: all .3s;
				-ms-transition: all .3s;
				transition: all .3s;
			}
		}

		.activate,
		.enforce {
			max-width: 1750px;
			margin: 0 auto;
			text-align: center;

			.title {
				color: white;
				font-size: 28px;
				padding-bottom: 10px;
			}

			.detail,
			.flow {
				padding: 50px 0;
			}

			.detail {
				padding-bottom: 0;
			}

			.detail img {
				width: 1330px;
			}
		}

		.enforce {
			.box {
				height: 250px;
				position: relative;
			}

			.milestone,
			.activity {
				position: absolute;
				right: 185px;

				.item {
					width: 170px;
					text-align: left;
					padding: 0 50px;

					.head {
						font-size: 20px;
						line-height: 34px;
					}

					.text {
						font-size: 16px;
						line-height: 20px;
					}
				}

				.realizeWidth {
					width: 270px;
				}
			}

			.activity {
				left: 420px;
				bottom: 40px;

				.item {
					width: 200px;
					margin-right: 140px;

					.head {
						font-weight: bold;
					}
				}
			}

			.transports {
				position: relative;

				.notes {
					font-size: 24px;
					color: rgb(239, 171, 0);
					margin-top: 20px;
				}
			}
		}

		.blue {
			color: rgb(0, 143, 210);
		}
	}
</style>
