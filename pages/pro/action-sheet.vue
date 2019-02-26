<template>
	<view class="s-page-wrapper">
		<view class="has-pd-18 has-badge-border is-center" @tap="showAction">弹出菜单</view>
		<simpleActionSheet :show="sAction.show" :actions="sAction.actions" @close="showAction" @cancel="showAction" @select="onSelectImage"></simpleActionSheet>
	</view>
</template>

<script>
	import simpleActionSheet from '@/components/simple-pro/action-sheet.vue';
	export default {
		data() {
			return {
				sAction:{
					actions:[
						{name:"拍摄照片",value:"camera"},
						{name:"选择照片",value:"album",}
					],
					show:false,
				}
			};
		},
		components: {
			simpleActionSheet
		},
		methods:{
			showAction:function(){
				console.log("1111");
				this.sAction.show = !this.sAction.show; 
			},
			onSelectImage:function(e){
				console.log(e); 
			}
		}
	}
</script>

<style>

</style>
