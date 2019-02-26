<template>
	<view>
		<view class="s-page  e24-bg">
			<view class="s-row has-space-mg-3">

				<view class="e25-title has-mg-15 ">
					<view class="has-pdl-15 has-title-color is-bold is-size-14 ">热销商品</view>
				</view>

				<view class="is-flex is-justify-center is-align-center has-mg-15 ">
					<text class="e28-shape"></text>
					<text class="has-title-color is-bold is-size-14 has-mglr-10">热销产品</text>
					<text class="e28-shape"></text>
				</view>
		
				<view class="e26-title has-mg-15 ">
					<view class="has-pdl-20 has-title-color is-bold is-size-14 ">热销商品</view>
				</view>
		
				<view class="s-col is-col-12 has-space-pd-3 has-mgtb-3"  v-for="(item,index) in product" :key="index" @tap="toDetail(item.id)">
					<view class="is-block has-bg-white  has-pdt-10  is-center" href="javascript:;">
						<view class="has-pdlr-30 ">
							<image src="../../static/img/error/33.jpg" mode="widthFix" class="is-response"></image>
						</view>
						<view class="has-pdlr-30 has-pdb-20">
							<view class="has-title-color has-mgt-5 has-mgb-2 is-size-14">魅族 EP2X耳机</view>
							<view class="has-desc-color   is-size-12 has-mgb-5 ">契合声音流动之美</view>
							<view class=" is-size-14  "><span class="is-red">￥158</span> <del class="is-size-12 has-mgl-3 has-desc-color">￥78</del></view>
						</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				product:[
					{"id":1},
					{"id":1},
					{"id":1},
					{"id":1},
					{"id":1},
					{"id":1},
					{"id":1},
					{"id":1},
					{"id":1},
				]
			};
		},
		methods:{
			toDetail:function(id){
				console.log(id)
			}
		}
	}
</script>

<style>
.e24-bg{
        background-color: #f9f9f9;
    }


    .e28-shape {
        background: rgb(9,187,7);
        width: 10px;
        height: 5px;
    }


    .e28-shape-lg {
        background: rgb(9,187,7);
        width: 10px;
        height: 5px;
    }

    .e26-title {
        position: relative;
    }

    .e26-title::before {
        content: '';
        display: block;
        position: absolute;
        top: 2px;
        left: -2px;
        width: 14px;
        height: 14px;
        border: 3px solid rgb(9,187,7);
        border-radius: 50%;
    }


    .e26-title-lg {
        position: relative;
    }

    .e26-title-lg::before {
        content: '';
        display: block;
        position: absolute;
        top: 4px;
        left: -2px;
        width:  16px;
        height: 16px;
        border: 3px solid rgb(9,187,7);
        border-radius: 50%;
    }


    .e25-title {
        position: relative;
    }

    .e25-title::before {
        content: '';
        display: block;
        position: absolute;
        top: 2px;
        left: 0;
        height: 14px;
        border-left: 5px solid rgb(9,187,7);
    }


    .e25-title-lg {
        position: relative;
    }

    .e25-title-lg::before {
        content: '';
        display: block;
        position: absolute;
        top: 4px;
        left: 0;
        height: 16px;
        border-left: 5px solid rgb(9,187,7);
    }




</style>
