<template>
	<view>
		<uni-list>
			<uni-list-item title="通用"></uni-list-item>
			<uni-list-item title="账号安全" @click="toSecurity()"></uni-list-item>
			<uni-list-item title="问题反馈" ></uni-list-item>
			<uni-list-item title="关于娃娃到家"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniList,
			uniListItem
		},
		methods:{
			toSecurity:function(){
				var user=uni.getStorageSync('user').user;
				if (user==null) {
					uni.showToast({
						icon:'none',
						title:'请先登录再操作'
					})
					return;
				}
				uni.navigateTo({
					url:'/pages/settings/security-setting'
				})
			}
		}
	}
</script>

<style>
</style>
