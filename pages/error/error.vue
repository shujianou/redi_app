<template>
	<view class="s-page-wrapper">
		<view class="s-page">
			<view class="is-100vh is-flex is-column is-justify-center is-align-center ">
				<image src="../../static/img/error/no.png" style="width: 50%;margin-top: -110px" mode="widthFix"></image>
				<view class="has-title-color is-size-16 has-mgt-30">亲，没有数据</view>
				<view class="s-btn has-mgt-20">
					<navigator open-type="navigateBack" class="is-btn has-bg-red has-btn-radius ">返回首页</navigator>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			};
		}
	}
</script>

<style>

</style>
