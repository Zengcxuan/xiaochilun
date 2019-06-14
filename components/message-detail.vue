<template>
	<view>
		<view class="circle-type">
			<image class="circle-img" src="../../static/more.png" mode=""></image>
			<text class="circle-name">{{ messageinfo.typename }}</text>
			<image class="right-icon" src="../../static/rightarrow.png" mode=""></image>
		</view>
		<view class="message-detail">
			<text class="message-text">{{ messageinfo.detail }}</text>
            <!-- 			加一个view放图片 -->
		</view>
		<view class="message-belong">
			<image class="head" src="../../static/head/man.png" mode=""></image>
			<view style="padding-top: 20upx; padding-bottom: 20upx; width: auto; height: auto; float: left;">
				<text class="name"> {{messageinfo.name }} </text>
				<text style="color: rgb(200, 200, 200); font-size: 25upx; font-family: 'Avenir', Helvetica, Arial, sans-serif; padding-left: 10upx;">发布</text>	
			</view>
		</view>
		<view class="message-modify">
			<view class="message-modify-module">
				<image class="modify-icon" src="../../static/msg/good.png" mode=""></image>
			</view>
			<view class="message-modify-module">
				<image class="modify-icon" src="../../static/msg/word.png" mode=""></image>
			</view>
			<view class="message-modify-module">
				<image class="modify-icon" src="../../static/msg/out.png" mode=""></image>
			</view>			
			<image src="../../static/msg/more.png" style="float: right; padding: 5upx; height: 40upx; width: 40upx;" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'message-detail',
		props: ['messageinfo'],
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.circle-type {
		height: 100upx;
		width: 100%;
		background: rgb(250,250,250);
	}
	.circle-img {
		height: 80upx;
		width: 80upx;
		padding: 10upx;
		float: left;
	}
	.circle-name {
		float: left;
	}
	.right-icon {
		float: right;
		height: 70upx;
		width:  70upx;
		padding: 15upx;
	}
	.message-detail {
		width: 95%;
		height: auto;
		padding: 20upx;
		overflow: auto;
	}
	.message-text {
		width: auto;
		height: auto;
		float: left;
	}
	.message-belong {
		width: 100%;
		height: 90upx;
		border-bottom: solid 3upx rgb(200, 200, 200);
	}
	.head {
		height: 70upx;
		width: 70upx;
		float: left;
		padding: 10upx;
	}
	.name {
		width: auto;
		font-size: 20upx;
	}
	.message-modify {
		width: 95%;
		height: 50upx;
		white-space: nowrap;
	}
	.message-modify-module {
		float: left;
		width: 200upx;
        padding-left: 15upx;
		height: inherit;
		display:inline-block
	}
	.modify-icon {
		float: left;
		height: 40upx;
		padding: 5upx;
		width: 40upx;
	}
</style>
