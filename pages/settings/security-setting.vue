<template>
	<view>
		<uni-list>
			<uni-list-item title="会员名" show-arrow="false" show-text="true" :text="account"></uni-list-item>
			<uni-list-item title="修改手机号" show-text="true" :text="phone"></uni-list-item>
			<uni-list-item title="修改登录密码"></uni-list-item>
			<uni-list-item title="注销账号" ></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list/uni-list-item/uni-list-item.vue'
	export default {
		data(){
			return {
				account:'',
				phone:''
			};
		},
		components: {
			uniList,
			uniListItem
		},
		onLoad() {
			this.init();
		},
		methods:{
			init(){
				var user=uni.getStorageSync('user').user;
				this.account=user.account;
				this.phone=user.phone.replace(/^(\d{3})\d{4}(\d+)/,"$1****$2");
			}
		}
		
	}
</script>

<style>
</style>
