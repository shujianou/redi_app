<template>
	<view>
		<view class="has-pd-10">
			卡片轮播图
		</view>
<swiper class="simple-card-swiper" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500" bindchange="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
  <swiper-item v-for="item in banner" :key="item">
    <view class='bg-img shadow-blur' v-bind:style="'background-image:url('+item['image']+')'"></view>
  </swiper-item>
</swiper>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner:[
					{
						image:'https://image.weilanwl.com/img/4x3-1.jpg',
					},
					{
						image:'https://image.weilanwl.com/img/4x3-2.jpg',
					},
					{
						image:'https://image.weilanwl.com/img/4x3-3.jpg',
					},
					{
						image:'https://image.weilanwl.com/img/4x3-4.jpg',
					}
				]
			};
		}
	}
</script>

<style>

</style>
