<template>
	<view class="s-page-wrapper">
		<view class="s-grids has-bg-white">
			<view class="is-grid is-col-8 is-a is-center has-pd-10" v-if="navlist.length > 0" v-for="(nav,index) in navlist" :key="index">
				<view class="has-pd-20">
					<view class="is-size-14">{{nav['title']}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navlist:[
					{"title":"宫格1"},
					{"title":"宫格2"},
					{"title":"宫格3"},
					{"title":"宫格4"},
					{"title":"宫格5"},
					{"title":"宫格6"},
					{"title":"宫格7"},
					{"title":"宫格8"},
					{"title":"宫格9"},
				]
			};
		}
	}
</script>

<style>

</style>
