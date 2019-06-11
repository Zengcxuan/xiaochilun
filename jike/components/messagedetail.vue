<template>
	<view>
		<view class="circle-type">
			<image class="circle-img" src="../../static/more.png" mode=""></image>
			<text class="circle-name">{{ messageinfo.typename }}</text>
			<image class="right-icon" src="../../static/rightarrow.png" mode=""></image>
		</view>
		<view class="message-detail">
			{{ messageinfo.detail}}
		</view>
	</view>
</template>

<script>
	export default {
		name: 'messagedetail',
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
</style>
