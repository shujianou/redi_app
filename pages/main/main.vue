<template>
	<view class="s-page">
		<view class="s-row">
			<view class="s-col is-col-24">
				<view class="s-list has-mgt-0">

					<navigator class="is-item " v-for="(item,index) in pageData" :key="index" :url="item.url">
						<view class="is-item-bd is-block is-oneline" >
							<view>{{item.title}}</view>
						</view>
					</navigator>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageData:[
					{
						title:"九宫格",
						url :"/pages/goods/grids",
					},
					{
						title:"提示页面",
						url :"/pages/error/error",
					},
					{
						title:"提示页面带描述",
						url :"/pages/error/errordesc",
					},
					{
						title:"企业页介绍",
						url :"/pages/error/info",
					},
					{
						title:"选择单页",
						url :"/pages/error/select",
					},
					{
						title:"文章详情",
						url :"/pages/content/content",
					},
					{
						title:"会员中心",
						url :"/pages/ucenter/index",
					},
					{
						title:"登录页面",
						url :"/pages/ucenter/login",
					},
					{
						title:"注册页面",
						url :"/pages/ucenter/register",
					},
					{
						title:"组件#上拉菜单",
						url:"/pages/pro/action-sheet",
					},
					{
						title:"组件#弹出窗口",
						url:"/pages/pro/alert",
					}
				]
			};
		}
	}
</script>

<style>
 
</style>
