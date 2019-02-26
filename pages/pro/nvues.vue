<template>
	<view class="s-page-wrapper">
		<view class="is-center is-width-60 has-bg-red is-white is-lh-2 has-mgt-20  has-pd-20" @tap="showMask">点击弹出内容</view>
		
		<view class="is-center is-width-60 has-bg-red is-white is-lh-2 has-mgt-20  has-pd-20" @tap="clickLogin">点击登录测试</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad: function() {},
	onBackPress: function() {},
	onNavigationBarButtonTap: function() {},
	methods: {
		showMask: function() {
			plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE,function(addressbook){
				addressbook.find(['displayName','phoneNumbers'],function(contacts){
					var contactsArray = [];
					for (var i = 0; i < contacts.length; i++) {
						var phoneNumbers ="";
						for (var h = 0; h < contacts[i].phoneNumbers.length; h++) {
							phoneNumbers += contacts[i].phoneNumbers[h]['value']+","; 
						}
						phoneNumbers = phoneNumbers.substring(0,phoneNumbers.length-1); 
						contactsArray.push({
							displayName:contacts[i]['displayName'],
							phoneNumbers:phoneNumbers
						})
					}
					console.log( JSON.stringify( contactsArray ) );
				})
			})

		},
		clickLogin:function(){

		},

	}
};
</script>

<style>
</style>
