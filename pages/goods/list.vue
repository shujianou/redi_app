<template>
	<view>
		<!-- 状态栏 -->
		<view class="status" :style="{position:headerPosition}"></view>
		<!-- 漂浮头部 -->
		<view class="header" :style="{position:headerPosition}">
			<view class="menu">
				<image mode="widthFix" src="../../static/img/index/location.png"></image>
			</view>
			<view class="input">
				<view class="icon search"></view>
				<input placeholder="仙女棒" @tap="toSearch()" />
			</view>
			<view class="scan">
				<view class="icon scan" @tap="scan"></view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>

		<!-- 商品列表 -->
		<view class="goods-list">
			<!-- glance 滑动导航栏组件 -->
			<topBar topfixedval='0px' :topfixed=true @clickitem="barClick" :data="[{textcontent:'爆款'},
			{textcontent:'包邮'},
			{textcontent:'3折'},
			{textcontent:'2人团'},
			{textcontent:'3人团'},
			{textcontent:'4人团'},
			{textcontent:'5人团'},
			{textcontent:'6人团'}]">
			</topBar>
			<view class="product-list">
				<view class="product" v-for="product in productList" :key="product.goods_id" @tap="toGoods(product)">
					<image mode="widthFix" :src="product.img"></image>
					<view class="name">{{product.name}}</view>
					<view class="info">
						<view class="price">{{product.price}}</view>
						<view class="slogan">{{product.slogan}}</view>
					</view>
				</view>
			</view>
			<view class="loading-text">{{loadingText}}</view>
		</view>
	</view>
</template>
<script>
	import topBar from '@/components/top-bar/top-bar.vue';
	export default {
		data() {
			return {
				//轮播
				swiperList: [{
						id: 0,
						src: '自定义src0',
						url: '../../static/shophome/swiper-img/0.jpg'
					},
					{
						id: 1,
						src: '自定义src1',
						url: '../../static/shophome/swiper-img/1.jpg'
					},
					{
						id: 2,
						src: '自定义src2',
						url: '../../static/shophome/swiper-img/2.jpg'
					},
					{
						id: 3,
						src: '自定义src3',
						url: '../../static/shophome/swiper-img/3.jpg'
					}
					//this.init()
				],
				//分类
				categoryList: [
					[ //第一页
						{
							id: 0,
							img: '../../static/shophome/category-img/0.png',
							title: '吹风机'
						},
						{
							id: 1,
							img: '../../static/shophome/category-img/1.png',
							title: '发箍'
						},
						{
							id: 2,
							img: '../../static/shophome/category-img/2.png',
							title: '肥皂'
						},
						{
							id: 3,
							img: '../../static/shophome/category-img/3.png',
							title: '粉饼'
						},
						{
							id: 4,
							img: '../../static/shophome/category-img/4.png',
							title: '化妆镜'
						},
						{
							id: 5,
							img: '../../static/shophome/category-img/5.png',
							title: '睫毛膏'
						},
						{
							id: 6,
							img: '../../static/shophome/category-img/6.png',
							title: '睫毛夹'
						},
						{
							id: 7,
							img: '../../static/shophome/category-img/7.png',
							title: '精华'
						},
						{
							id: 8,
							img: '../../static/shophome/category-img/8.png',
							title: '口红'
						},
						{
							id: 9,
							img: '../../static/shophome/category-img/9.png',
							title: '面膜'
						}
					],
					[ //第二页
						{
							id: 10,
							img: '../../static/shophome/category-img/10.png',
							title: '面霜'
						},
						{
							id: 11,
							img: '../../static/shophome/category-img/11.png',
							title: '乳液'
						},
						{
							id: 12,
							img: '../../static/shophome/category-img/12.png',
							title: '梳子'
						},
						{
							id: 13,
							img: '../../static/shophome/category-img/13.png',
							title: '刷子'
						},
						{
							id: 14,
							img: '../../static/shophome/category-img/14.png',
							title: '洗脸仪'
						},
						{
							id: 15,
							img: '../../static/shophome/category-img/15.png',
							title: '洗面奶'
						},
						{
							id: 16,
							img: '../../static/shophome/category-img/16.png',
							title: '香水'
						}
					]
				],
				//推荐商品 3个
				pickList: [{
						goods_id: 0,
						img: '../../static/shophome/pick-img/p1.jpg',
						price: '￥168',
						slogan: '限时抢购'
					},
					{
						goods_id: 1,
						img: '../../static/shophome/pick-img/p2.jpg',
						price: '￥168',
						slogan: '精选商品'
					},
					{
						goods_id: 2,
						img: '../../static/shophome/pick-img/p3.jpg',
						price: '￥168',
						slogan: '今日疯抢'
					}
				],
				//猜你喜欢列表
				productList: [{
						goods_id: 0,
						img: '../../static/shophome/img/p1.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 1,
						img: '../../static/shophome/img/p2.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 2,
						img: '../../static/shophome/img/p3.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 3,
						img: '../../static/shophome/img/p4.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 4,
						img: '../../static/shophome/img/p5.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 5,
						img: '../../static/shophome/img/p6.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 6,
						img: '../../static/shophome/img/p7.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 7,
						img: '../../static/shophome/img/p8.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 8,
						img: '../../static/shophome/img/p9.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 9,
						img: '../../static/shophome/img/p10.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					}
				],
				categoryHeight: '0px',
				currentPageindex: 0,
				headerPosition: "fixed",
				loadingText: "正在加载..."

			};
		},
		components: {
			topBar
		},
		onReady() {},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				this.headerPosition = "fixed";
			} else {
				this.headerPosition = "absolute";
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			uni.showToast({
				title: '触发上拉加载'
			});
			let len = this.productList.length;
			if (len >= 40) {
				this.loadingText = "到底了";
				return false;
			}
			let end_goods_id = this.productList[len - 1].goods_id;
			for (let i = 1; i <= 10; i++) {
				let goods_id = end_goods_id + i;
				let p = {
					goods_id: goods_id,
					img: '../../static/shophome/img/p' + (goods_id % 10 == 0 ? 10 : goods_id % 10) + '.jpg',
					name: '商品名称商品名称商品名称商品名称商品名称',
					price: '￥168',
					slogan: '1235人付款'
				};
				this.productList.push(p);
			}
		},
		onLoad() {
			this.init();
		},
		methods: {
			//初始化
			init() {
				var _this = this;
				this.apihttp.ajax({
					url: '/app/main/data',
					method: 'POST',
					success: function(res) {
						var data = res.data;
						if (data.code === 200) {
							//初始化轮播图
							_this.swiperList = data.data.banners;
							//初始化商品分类
							var dataCategoryList = data.data.itemCategoryList;
							//最终分类List
							var categoryList = [];
							var tmpCategoryList = [];
							for (var i = 0; i < dataCategoryList.length; i++) {
								tmpCategoryList.push(dataCategoryList[i]);
								if (tmpCategoryList.length >= 10 || i == dataCategoryList.length - 1) {
									categoryList.push(tmpCategoryList);
									tmpCategoryList = [];
								}
							}
							_this.categoryList = categoryList;

						} else {
							uni.showToast({
								icon: 'none',
								title: '网络错误'
							})
						}
					}
				})
			},
			barClick(){
				console.log('点击了bar');
			},
			//扫一扫
			scan() {
				uni.scanCode({
					success: (res) => {
						uni.showToast({
							title: '条码内容：' + res.result
						});
					}
				});
			},
			//搜索跳转
			toSearch() {
				uni.showToast({
					title: "建议跳转到新页面做搜索功能"
				});
			}
		}
	};
</script>
<style lang="scss">
	@font-face {
		font-family: "HMfont-home";
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAP8AAsAAAAACFwAAAOwAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqEEINSATYCJAMQCwoABCAFhG0HTxtLBxHVmzvJfhS4scOeC1v4zNNRK/hO5b0IHqg/8838ye5XsIDanmAkhZ1NSZygm4SsbYYkp17ICsOUxIP/ZZm9xejtQAD8zzX10geY387mEtXapUd7A5xF6oAi2pJoE8YNY1dexGkIwCSZQoiq1es2RUdhTBKA6N2jWwf0lAlVky3QEYSUrFSIOTjQ5VR5GZjt/168obDQQeLQMGY27FqtMxWf5z5fpgWCgdYugng8B8DWgQYUAhSI7qWujmhhqBAaptJfURzQ0ZEwVkfB58uCQSTZi0o3//JAItBAhGBk2gAURUrtxMQ2BQnPC1IQ8HyZmpvE1XgdMIDtwHVEJt4qkThsZwFPVHiEFTHKtWBBYGGUe/HmsZu6TluCStw+fXGMY9GyUb4b133Xrze9etV77VqzxcuXbYq8bF6/7rtxo5lY6A1cLcuCQJS3oXHswOYKUSaI71xkXr3ayZy2SIix0YumRS6AwEnLmr58WS9z2pKlYcJCCGzcXOU81Xuhp1osIWbBiUQWehda7lTvaNeCJX0WbYgksMA0hdlLo6zDp1PEomIdVu7YE4wN7nH7uGPdHXz2R3uHnX68tcP6SPE5ZSdObNpN/9dybtfmr6tHoy6+rN+DqdvnW9lUbkHTdcUWfKp1yzVr5Ag5HCqGU0Hca3jpAt2GiWFRwxYvdpYFo2b3tN/HvLeFd+BAr5Bu7CXnzKFlJb8dtP3ucx1djc+589Pep+W7X706stfvml+7i8fsWunxp7/f/uzsrgzj9Sv3p+6T7yqwvrfdy3nk/J6eZ84fnHp2lSvf/m/7H7569dDvuY/fTX+Mwdog+QVAGyB/IHmGyK8/exQrX13Maucu+y23rrbi5tQ1T3yTor3oj4kV8a8VtyxSqtQwKyXLbJF2kaI5DgAkYGICPzQG4dwfQxPVOhMEOlExSEJJAg2dTFSRhcCBRVEIQacCmBSkxnqLCAaiIZQBFGAiAIGH3SBxcRo0PFxBFXkPHETzDkLwCA1MfCJiR4tswStWxeEccIPlAbXSxS1rYEH2G0U8ZpeU+sw/Oq+80JR1NjrghW6MOT6JNgQO3NEJPTgPj4PAONK4hlKGYLqq4mVvKlc6M0YVh3PADZYH1EoXd8sHlvv+G0U8ZldDq/D+0XnVPTRl3QIdVFcr2rX090m0IXA8jjs6oYcOPMwQgSkfpnENpewRMF2FSvG2qnJ+zfmE6wATY6YSUmhCCQehg9V8advwun0+nHuJ0VP0kYrcz/Qox5hl') format('woff2');
	}

	.icon {
		font-family: "HMfont-home" !important;
		font-size: 60upx;
		font-style: normal;
		color: #ffffff;

		&.scan {
			&:before {
				content: "\e69a";
			}
		}

		&.menu {
			&:before {
				content: "\e62b";
			}
		}

		&.search {
			&:before {
				content: "\e628";
			}
		}
	}

	page {
		background-color: #fff;
	}

	.status {
		width: 100%;
		height: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);
		/*  #endif  */
		background-color: #FFBD27;
		position: fixed;
		top: 0;
		z-index: 999;
	}

	.header {
		width: 100%;
		height: 100upx;
		background-color: #FFBD27;
		display: flex;
		position: fixed;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */

		z-index: 996;

		.scan {
			width: 100upx;
			height: 100upx;
			flex-shrink: 1;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.input {
			width: calc(100% - 200upx);
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;

			input {
				width: calc(100% - 60upx);
				height: 60upx;
				background-color: #ffffff;
				border-radius: 60upx;
				padding-left: 60upx;
				font-size: 30upx;

			}

			.icon {
				width: 60upx;
				height: 60upx;
				position: absolute;
				color: #a18090;
				z-index: 996;
				top: 20upx;
				left: 0;
				font-size: 40upx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.menu {
			width: 100upx;
			height: 100upx;
			flex-shrink: 1;
			display: flex;
			justify-content: center;
			align-items: center;

			image {
				width: 60upx;
				height: 60upx;
				/* border-radius: 60upx; */
			}
		}
	}

	.place {
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
		background-color: #FFBD27;
		height: 100upx;
	}

	.swiper-view {
		.swiper {
			width: 100%;
			height: 280upx;

			image {
				width: 100%;
				height: 280upx;
			}
		}

		.keep-out {
			width: 100%;
			height: 30upx;
			border-radius: 100% 100% 0 0;
			background-color: #FFBD27;
			margin-top: -15upx;
			position: absolute;
		}
	}

	.category {
		width: 95%;
		padding: 2.5vw 2.5vw;
		background-color: #FFBD27;

		.box {
			width: 100%;
			border-radius: 20upx;
			background-color: #ffffff;

			.dots {
				display: flex;
				justify-content: center;
				height: 15upx;
				width: 100%;

				view {
					width: 30upx;
					height: 5upx;
					background-color: rgba(0, 0, 0, 0.2);

					&.active {
						background-color: #FFBD27;
					}
				}
			}

			.swiper {
				width: 100%;
				min-height: 100upx;
				padding: 10upx 0;

				.uni-swiper-dot {
					width: 20upx;
				}

				.category-list {
					width: 100%;
					height: auto;
					display: flex;
					justify-content: flex-start;
					padding: 10upx 0;
					flex-flow: wrap;

					.icon {
						width: 20%;
						display: flex;
						flex-flow: wrap;
						justify-content: center;
						font-size: 22upx;
						color: #666;

						image {
							width: 70%;
							height: 13.3vw;
						}

						view {
							width: 100%;
							display: flex;
							justify-content: center;
						}
					}
				}
			}
		}
	}

	.pick {
		padding: 0 2.5vw 2.5vw 2.5vw;
		background: linear-gradient(to bottom, #FFBD27 0%, #ffffff 105%);

		.box {
			width: 100%;
			border-radius: 20upx;
			background-color: #ffffff;

			.title {
				display: flex;
				justify-content: flex-start;
				align-items: flex-end;
				height: 60upx;
				border-bottom: solid 1upx #eee;
				padding-bottom: 10upx;

				.big {
					font-size: 34upx;
					padding-left: 20upx;
					color: #46434f;
				}

				.small {
					font-size: 24upx;
					padding-left: 20upx;
					color: #827f8b;
				}
			}

			.product-list {
				padding: 15upx 20upx 15upx 20upx;
				column-count: 2;
				column-width: 50%;
				column-gap: 10upx;

				>view {
					display: flex;
					background-color: #f8f8f8;
					position: relative;

					&:nth-child(1) {
						.price {
							color: #e65339;
							font-size: 30upx;
							position: absolute;
							bottom: 8upx;
							left: 8upx;
						}

						.slogan {
							color: #807c87;
							font-size: 30upx;
							position: absolute;
							bottom: 8upx;
							right: 8upx;
						}

						image {
							width: 100%;
							height: 0;
						}
					}

					&:nth-child(2),
					&:nth-child(3) {
						image {
							width: calc(50% - 5upx);
							height: 0;
						}

						.price {
							position: absolute;
							top: 25%;
							left: 55%;
							color: #e65339;
							font-size: 30upx;
						}

						.slogan {
							position: absolute;
							top: 60%;
							left: 55%;
							color: #807c87;
							font-size: 20upx;
						}
					}

					&:nth-child(2) {
						margin-bottom: 10upx;
					}
				}
			}
		}
	}

	.banner {
		image {
			width: 100%;
		}
	}

	.goods-list {
		background-color: #f4f4f4;

		.title {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}

		.loading-text {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}

		.product-list {
			width: 95%;
			padding: 0 2.5% 2.5vw 2.5%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.product {
				width: 48.75%;
				border-radius: 20upx;
				background-color: #fff;
				margin: 0 0 15upx 0;

				image {
					width: 100%;
					border-radius: 20upx 20upx 0 0;
				}

				.name {
					width: 92%;
					padding: 10upx 4%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-align: justify;
					overflow: hidden;
					font-size: 30upx;
				}

				.info {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 92%;
					padding: 10upx 4% 10upx 4%;

					.price {
						color: #e65339;
						font-size: 30upx;
						font-weight: 600;
					}

					.slogan {
						color: #807c87;
						font-size: 24upx;
					}
				}
			}

		}
	}
</style>
