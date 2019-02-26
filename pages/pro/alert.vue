<template>
	<view class="s-page-wrapper">
		<view class="has-pd-18 has-borderb is-center has-mgb-10" @tap="showAlert">顶部弹出消息</view>
		<simpleAlert :show="sAlert.show" :msg="sAlert.msg" :icon="sAlert.icon"></simpleAlert>
		
		<view class="has-pd-18 has-borderb is-center has-mgb-10" @tap="showDialog">弹出框消息</view>
		
		<simpleDialog ref="simpleDialog" :title="sDialog.title" :message="sDialog.message" @confirmButton="confirmButton"></simpleDialog>

		<view class="has-pd-18 has-borderb is-center has-mgb-10" @tap="showDialog2">弹出框消息（带确定取消）</view>
		<simpleDialog ref="simpleDialog2" :title="sDialog.title" :message="sDialog.message" @confirmButton="confirmButton" @cancelButton="cancelButton"></simpleDialog>
		
		<view class="has-pd-18 has-borderb is-center has-mgb-10" @tap="showDialog3">图片窗口</view>
		<simpleModal ref="simpleModal">
			<view class="bg-img">
				<image src="../../static/img/demo/pexels-photo-26180.jpg" style="height: 200px;" class="is-response"></image>
			</view>
		</simpleModal>
		
		<view class="has-pd-18 has-borderb is-center has-mgb-10" @tap="showDialogButtom">底部弹窗</view>
		<simpleModal ref="showDialogButtom" :buttom="true" contentClass="has-bg-f8" @maskClose="buttomMaskClose" @cancelButton="buttomCancelButton">
			<view class="has-pd-20">
				Modal 内容 
			</view>
		</simpleModal>
		
		<view class="has-pd-18 has-borderb is-center has-mgb-10" @tap="showLoading">弹窗加载</view>
		<simpleLoading ref="simpleLoading"></simpleLoading>
	</view>
</template>

<script>
import simpleAlert from '@/components/simple-pro/alert.vue'; // 具体可参考：http://ext.dcloud.net.cn/plugin?id=41
import simpleDialog from '@/components/simple-pro/dialog.vue';
import simpleModal from '@/components/simple-pro/customModal.vue';
import simpleLoading from '@/components/simple-pro/dialog-loading.vue';
export default {
	data() {
		return {
			sAlert: {
				show: false,
				msg: '',
				icon: 'msg'
			},
			sDialog: {
				message: '您输入的金额有误'
			}
		};
	},
	components: {
		simpleAlert,
		simpleDialog,
		simpleModal,
		simpleLoading
	},
	methods: {
		showAlert: function() {
			this.sAlert.msg = '你好啊！欢迎你使用！';
			this.sAlert.icon = 'msg';
			this.sAlert.show = true;
			setTimeout(() => {
				this.sAlert.show = false;
			}, 1500); // 延时关闭
		},
		showDialog: function() {
			this.$refs.simpleDialog.alert(); // 弹出
		},
		showDialog2: function() {
			// 带确定取消按钮 类似询问  支持传入object快速修改
			this.$refs.simpleDialog2.confirm({
				title: '你好啊！',
				message: '欢迎你使用本插件~'
			});
		},
		confirmButton: function() {
			console.log('Dialog 确定按钮点击');
		},
		cancelButton: function() {
			console.log('Dialog 取消按钮点击');
		},
		showDialog3: function() {
			this.$refs.simpleModal.show({
				showCancelButton:true,
				cancelButtonText:"我知道了",
				showConfirmButton:false 
			});
		},
		showDialogButtom:function(){
			this.$refs.showDialogButtom.show({
				showCancelButton:true,
			});
		},
		buttomMaskClose:function(){
			// 有坑 点击内容的时候也会关闭， 
			this.$refs.showDialogButtom.hide(); 
		},
		buttomCancelButton:function(){
			console.log("啊哈哈哈哈哈");
		},
		showLoading:function(){
			// 弹出加载中... 
			this.$refs.simpleLoading.show({
				image:"../../static/img/common/logo.png"
			}); 
			setTimeout(()=>{
				this.$refs.simpleLoading.hide();
			},1500)
		}
	}
};
</script>

<style>
	.has-bg-f8{
		background: #f2f2f2;
	}
</style>
