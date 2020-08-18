<template>
	<div class="S4Hana">
		<div class="contentShow" v-if="contentShow">
			<div class="flex">
				<div class="polygonBox flex">
					<div class="polygo" v-for="(item,index) in $t('productHana.polygonList')" :key="index">
						<div class="Box flex" @mouseenter="showIndex=index,hide=true" @mouseleave="showIndex=null,hide=false">
							<img :src="item.src" alt="">
							<div class="text flex" :class="{'color102':index==3,'color126':index==2,'color184':index==1,'color223':index==0}">
								<div class="textDetail" :class="{'select':index==showIndex&(showIndex==2||showIndex==3)}">{{item.text}}</div>
							</div>
						</div>
						<div class="present" :class="{'hide':(hide&(showIndex==2||showIndex==3)||mainHide)}">
							<div class="detailText" v-for="(item,index) in item.detailList" :key="index">{{item}}</div>
						</div>
					</div>
				</div>
				<div class="polygonBox polygonBoxMain">
					<div class="polygo" @mouseenter="mainHide=true" @mouseleave="mainHide=false" @click="contentShow=!contentShow,contentHide=!contentHide">
						<img src="../../assets/product/s4Hana/polygon5.png" alt="">
						<div class="text">
							<div class="textDetail">{{$t('productHana.polygonMain.text')}}</div>
						</div>
					</div>
					<div class="present" :class="{'hide':(hide&(showIndex==2||showIndex==3)||mainHide)}">
						<div class="detailText" v-for="(item,index) in $t('productHana.polygonMain.detailText')" :key="index">{{item}}</div>
					</div>
				</div>
			</div>
			<div class="timeLine" :class="{'hide':(hide&(showIndex==2||showIndex==3)||mainHide)}">
				<div class="img"><img src="../../assets/product/s4Hana/timeLine.png" alt=""></div>
				<div class="years flex">
					<div class="yearsNum">2011</div>
					<div class="yearsNum">2012</div>
					<div class="yearsNum">2013</div>
					<div class="yearsNum">2014</div>
					<div class="yearsNum blue">2015...</div>
				</div>
			</div>
			<div class="business" :class="{'show':showIndex==2}">
				<div class="box">
					<div class="title">SAP ERP 6.0</div>
					<div class="flex">
						<div class="version bg102">EhP7</div>
						<div class="version bg102">EhP8</div>
					</div>
				</div>
				<div class="box">
					<div class="title">SAP NetWeaver</div>
					<div class="flex">
						<div class="version bg126">7.40</div>
						<div class="version bg126">7.50</div>
					</div>
				</div>
				<div class="box">
					<div class="title">SAP HANA</div>
					<div class="flex">
						<div class="version bg184">1.0</div>
					</div>
				</div>
			</div>
			<div class="finance" :class="{'show':showIndex==3}">
				<div class="box">
					<div class="title">SAP S/4HANA</div>
					<div class="subTitle">Finance</div>
					<div class="flex">
						<div class="version bg102">1503</div>
						<div class="version bg102">1605</div>
					</div>
				</div>
				<div class="box">
					<div class="title">SAP NetWeaver</div>
					<div class="flex">
						<div class="version bg126">7.40</div>
						<div class="version bg126">7.50</div>
					</div>
				</div>
				<div class="box">
					<div class="title">SAP HANA</div>
					<div class="flex">
						<div class="version bg184">1.0</div>
					</div>
				</div>
			</div>
			<div class="hanaMain" :class="{'show':mainHide}">
				<div class="box">
					<div class="title">SAP S/4HANA</div>
					<div class="flex">
						<div class="version bg102">1511</div>
						<div class="version bg102">1610</div>
						<div class="version bg102">1709</div>
						<div class="version bg102">1809+</div>
						<div class="version bg102">...</div>
					</div>
				</div>
				<div class="box">
					<div class="title">SAP NetWeaver</div>
					<div class="flex">
						<div class="version bg126">7.50</div>
						<div class="version bg126">7.51</div>
						<div class="version bg126">7.52</div>
						<div class="version bg126">......</div>
						<div class="version bg126">......</div>
					</div>
				</div>
				<div class="box">
					<div class="title">SAP HANA</div>
					<div class="flex">
						<div class="version bg223">1.0</div>
						<div class="version bg184">2.0</div>
					</div>
				</div>
			</div>
		</div>
		<div class="contentHide" v-if="contentHide">
			<div class="back" @click="contentShow=!contentShow,contentHide=!contentHide,showIndex=null,mainHide=false"><i class="iconfont icon-jiantou_xiangzuo"></i>
				BACK</div>
			<div class="boxOne">
				<div class="title">{{$t('productHana.clickPage.titleTop')}}</div>
				<div class="subTitle">{{$t('productHana.clickPage.titleTopSub')}}</div>
				<div class="item flex">
					<div class="sales">
						<div class="salesTitle">Sales</div>
						<div class="salesSubTitle flex">
							<div class="tag flex"></div>
							<div class="tag flex">Document</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
						</div>
						<div class="tableHeader flex">
							<div class="tag flex">Header</div>
							<div class="tag flex"></div>
							<div class="tag flex">Item</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
						</div>
						<div class="list flex">
							<div class="tag sel flex">VBAK</div>
							<div class="tag flex"></div>
							<div class="tag sel flex">VBAP</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex">LIKP</div>
							<div class="tag flex"></div>
							<div class="tag flex">KIPS</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">VBRK</div>
							<div class="tag flex"></div>
							<div class="tag sel flex">VBRP</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">PRCD_Elements(new)</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">VBFA(Simplified)</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
						</div>
					</div>
					<div class="finance">
						<div class="financeTitle">FINANCE</div>
						<div class="financeSubTitle flex">
							<div class="tag flex">Document</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
						</div>
						<div class="financeTableHeader flex">
							<div class="tag flex">Header</div>
							<div class="tag flex">Item</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
						</div>
						<div class="list flex">
							<div class="tag sel flex">BKPF</div>
							<div class="tag sel flex">BSEG</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">ACDOCA</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">FAAT_DOC_IT</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">FAAT_YODA</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">FAAT_PLAN VALUES</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="boxTwo">
				<div class="title flex">
					<div class="sub">{{$t('productHana.clickPage.titleBottom')}}</div>
					<div class="main">{{$t('productHana.clickPage.titleBottomSub1')}}</div>
					<div class="sub">{{$t('productHana.clickPage.titleBottomSub2')}}</div>
				</div>
				<div class="item flex">
					<div class="values">
						<div class="header flex">
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex">Used for <br>Master <br>Data only</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex">ML<br>Valuation</div>
						</div>
						<div class="list flex">
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">MBEW</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">MLDOC</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">EBEW</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">MLDOCCCS</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">QBEW</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">OBEW</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
						</div>
					</div>
					<div class="quantities">
						<div class="list flex">
							<div class="suspend">Material Document</div>
							<div class="suspend1">Used for Master Data only</div>
							<div class="tag flex noBorder"></div>
							<div class="tag flex noBorder"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">MATDOC</div>
							<div class="tag sel flex">MATDOC_EXTRACT</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex noBorder"></div>
							<div class="tag flex noBorder"></div>
							<div class="tag flex noBorder"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">MCHB</div>
							<div class="tag sel flex">MARC</div>
							<div class="tag sel flex">MARD</div>
							<div class="tag sel flex">MSKU</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag sel flex">MSKA</div>
							<div class="tag sel flex">MKOL</div>
							<div class="tag sel flex">MSPR</div>
							<div class="tag sel flex">MSLB</div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
							<div class="tag flex"></div>
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
				contentHide: false,
				contentShow: true,
				mainHide: false,
				hide: false,
				showIndex: null,
			}
		},
		computed: {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.S4Hana {
		background-color: #000000;
		padding-top: 75px;
		color: white;
		position: relative;

		.flex {
			display: -webkit-flex;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.contentShow {

			.polygonBox {
				margin-top: 35px;

				.polygo {
					position: relative;
					margin-left: -30px;

					.Box {
						height: 225px;
						cursor: pointer;
					}

					img {
						width: 350px;
						height: 150px;
					}

					.text {
						width: 350px;
						height: 93px;
						position: absolute;
						top: 66px;
						font-size: 26px;

						.textDetail {
							width: 205px;
							margin: 0 auto;
						}
					}

					.color102 {
						color: rgb(102, 102, 102);
					}

					.color126 {
						color: rgb(126, 126, 126);
					}

					.color184 {
						color: rgb(184, 184, 184);
					}

					.color223 {
						color: rgb(223, 223, 223);
					}

					.select {
						color: white;
					}
				}

				.present {
					font-size: 20px;
					width: 260px;
					height: 150px;
					margin: 0 auto;
					margin-top: 200px;


					.detailText {
						padding: 5px 0;
					}
				}

			}

			.polygonBoxMain {
				.polygo {
					margin-left: -60px;

					img {
						height: 225px;
						cursor: pointer;
					}

					.text {
						width: 300px;
						cursor: pointer;
						font-size: 52px;
						font-weight: bold;
						top: 52px;
					}
				}

				.polygo:hover {
					.textDetail {
						color: orange;
					}
				}
			}

			.timeLine {
				.img {
					width: 1800px;
					margin: 0 auto;
					margin-top: 100px;

					img {
						width: 100%;
					}
				}

				.years {
					width: 1800px;
					margin: 0 auto;
					font-size: 16px;

					.yearsNum {
						text-align: center;
						width: 340px;
					}

					.blue {
						width: 450px;
						color: rgb(0, 138, 212);
					}
				}

			}

			.business,
			.finance,
			.hanaMain {
				position: absolute;
				top: 380px;
				right: 855px;
				opacity: 0;
				-moz-transition: all .3s;
				-webkit-transition: all .3s;
				-o-transition: all .3s;
				-ms-transition: all .3s;
				transition: all .3s;

				.box {
					text-align: center;
					border: 2px solid orange;
					margin: 20px;
					font-size: 20px;
					padding: 10px 15px;
					border-radius: 15px;

					.title {
						padding: 10px;
						color: rgb(42, 157, 219);
					}

					.flex {
						justify-content: space-between;
					}

					.version {
						padding: 5px 10px;
						margin: 10px;
					}

					.bg102 {
						background-color: rgb(102, 102, 102);
					}

					.bg126 {
						background-color: rgb(126, 126, 126);
					}

					.bg184 {
						background-color: rgb(184, 184, 184);
						width: 100%;
					}

					.bg223 {
						position: absolute;
						bottom: 40px;
						padding: 5px 30px;
						background-color: rgb(223, 223, 223);
						color: rgb(101, 102, 102);
					}
				}
			}

			.finance {
				right: 540px;
				top: 371px;

				.subTitle {
					font-size: 18px;
					color: #999;
				}
			}

			.hanaMain {
				right: 105px;

				.box {
					.bg184 {
						width: 80%;
						margin-left: 50px;
					}
				}

			}

			.hide {
				opacity: 0;
			}

			.show {
				opacity: 1;
			}
		}

		.contentHide {
			max-width: 1750px;
			margin: 0 auto;

			.back {
				text-align: right;
				font-size: 20px;
				margin-top: 50px;
				color: orange;
				cursor: pointer;
				-moz-transition: all .3s;
				-webkit-transition: all .3s;
				-o-transition: all .3s;
				-ms-transition: all .3s;
				transition: all .3s;
			}

			.back:hover {
				transform: translateX(-10px);
			}

			.boxOne {
				.title {
					// text-align: center;
					font-size: 32px;
					margin-top: 50px;
					margin-left: 60px;
					letter-spacing: 4px;
				}

				.subTitle {
					// text-align: center;
					font-size: 16px;
					margin: 5px 0 50px 0;
					color: rgb(223, 223, 223);
					margin-left: 60px;
					letter-spacing: 4px;
				}

				.item {
					justify-content: space-around;

					.sales,
					.finance {
						width: 40%;
						// background-color: red;

						.salesTitle,
						.financeTitle {
							text-align: center;
							font-size: 16px;
							font-weight: bold;
						}

						.salesSubTitle,
						.financeSubTitle,
						.tableHeader,
						.financeTableHeader {
							flex-wrap: wrap;

							.tag {
								width: 15%;
								margin: 5px;
								padding: 0 0.5%;
								border: 1px solid black;
								box-sizing: border-box;
							}

						}

						.financeSubTitle,
						.financeTableHeader {
							.tag {
								width: 10%;
							}
						}

						.salesSubTitle,
						.financeSubTitle {
							font-weight: bold;
						}

						.financeSubTitle {
							flex-wrap: nowrap;
						}

						.list {
							flex-wrap: wrap;
							color: rgb(223, 223, 223);

							.tag {
								width: 15%;
								height: 40px;
								margin: 5px;
								padding: 0 0.5%;
								border: 1px solid rgb(183, 183, 183);
								box-sizing: border-box;
								word-break: break-all;
								overflow: auto;
							}

							.sel {
								border: 1px solid rgb(0, 138, 212);
							}
						}

					}

					.finance {
						width: 55%;

						.list {
							.tag {
								width: 10%;
							}
						}
					}
				}
			}

			.boxTwo {
				.title {
					margin: 120px 0 50px 0;

					.sub {
						margin: 0 20px;
						color: rgb(223, 223, 223);
					}

					.main {
						font-size: 42px;
						font-weight: bold;
					}
				}

				.item {
					justify-content: space-around;

					.list,
					.header {
						flex-wrap: wrap;

						.tag {
							width: 12.8%;
							height: 40px;
							margin: 5px;
							padding: 0 0.5%;
							border: 1px solid rgb(183, 183, 183);
							box-sizing: border-box;
							word-break: break-all;
							overflow: auto;
						}

						.sel {
							border: 1px solid rgb(0, 138, 212);
						}
					}

					.header .tag {
						text-align: center;
						height: 60px;
						border: none;
					}

					.quantities .list .tag {
						width: 8.9%;
					}

					.quantities .list .noBorder {
						border: 0;
					}

					.quantities .list {
						position: relative;
						color: rgb(223, 223, 223);
					}

					.quantities .list .suspend {
						position: absolute;
						top: 20px;
						left: 5%;
					}

					.quantities .list .suspend1 {
						position: absolute;
						top: 117px;
						left: 27%;
					}

					.values {
						width: 40%;
						// height: 300px;
						// background-color: rgb(184, 184, 184);
						// background-color: rgb(102, 102, 102);
					}

					.quantities {
						width: 55%;
						// height: 300px;
						// background-color: rgb(126, 126, 126);
					}
				}
			}
		}
	}
</style>
