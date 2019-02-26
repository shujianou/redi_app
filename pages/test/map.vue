<template>
	<view>
		<!-- <page-head :title="title"></page-head> -->
		<view class="uni-common-mt">
			<view>
				<map :latitude="latitude" :longitude="longitude" :markers="markers" :polyline="polyline">
					<cover-view class="test">我是测试的</cover-view>
				</map>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				markers: [{
					title: '我在哪，我在哪',
					latitude: 39.9085,
					longitude: 116.39747,
					iconPath: '../../static/img/index/location.png',
					label: {
						content: '文本1',
						color: '#F76350',
						bgColor: '#fff',
						padding: 5,
						borderRadius: 4
					},
					callout: {
						content: '广州啊',
						color: '#F76350',
						fontSize: 12
					}
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../static/img/index/location.png',
					title: '故宫',
					label: {
						content: '文本2',
						color: '#F76350',
						bgColor: '#fff',
						padding: 5,
						borderRadius: 4
					},
					callout: {
						content: '北京啊',
						color: '#F76350',
						fontSize: 12
					}
				}],
				polyline: [{
					'points': [{
						latitude: 39.9085,
						longitude: 116.39747
					}, {
						latitude: 39.90,
						longitude: 116.39
					}],
					color: '#000000 ',
					width: 3
				}],
			}
		},
		methods: {

		}
	}
</script>
<style>
	map {
		width: 100%;
		height: 800upx;
	}

	.test {
		background: #fff;
		height: 100upx;
		text-align: center;
		display: flex;
		margin: 30upx;
	}
</style>
