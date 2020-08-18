<template>
	<div class="newFooter">
		<div class="content">
			<div class="item">
				<a href="javascript:;">
					<div class="text">{{$t('NewFooter.text1')}}</div>
				</a>
				<a href="javascript:;">
					<div class="text">{{$t('NewFooter.text2')}}</div>
				</a>
				<a href="javascript:;">
					<div class="text">{{$t('NewFooter.text3')}}</div>
				</a>
				<div class="detail">
					<div>{{$t('NewFooter.detail1')}}</div>
					<div>{{$t('NewFooter.detail2')}}</div>
				</div>
				<div>
					<span>{{$t('NewFooter.text4')}}</span>
					<i class="iconfont icon-ins"></i>
					<i class="iconfont icon-youxiang"></i>
					<i class="iconfont icon-gongzhonghao"></i>
				</div>
			</div>
			<div class="copy">{{$t('NewFooter.copy')}}</div>
		</div>
	</div>
</template>

<script>

</script>

<style lang="scss">
	.newFooter {
		background-color: #000000;
		text-align: center;
		padding-bottom: 30px;
		padding-top: 150px;
		line-height: 2;
		width: 100%;

		a {
			color: rgb(78, 78, 78);
		}

		a:hover {
			color: rgb(241, 241, 241);
		}

		i:hover {
			color: white;
		}

		.content {
			max-width: 1750px;
			margin: 0 auto;

			.item {
				display: -webkit-flex; /* Safari */
				display: flex;
				justify-content: center;
				align-items: center;

				.text {
					padding: 1px 10px;
					border: 1px solid gray;
					margin-right: 20px;
				}

				.detail {
					margin: 0 30px;
				}

				.iconfont {
					font-size: 24px;
					margin-left: 20px;
				}
			}

			.copy {
				margin-top: 30px;
				padding-top: 20px;
				border-top: 1px solid rgb(241, 241, 241);
			}
		}
	}
</style>
