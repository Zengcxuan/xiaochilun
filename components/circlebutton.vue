<template>
	<view class="ccl" v-on:click="showmore">
		<image class="circle-icon " :src="circlename.img"></image></br>
		<text class="circle-text">{{ circlename.typename }}</text>
	</view>
</template>

<script>
	export default {
		name: 'circlebutton',
		props: ['circlename'],
		data() {
			return {
				data: '',

			};
		},
		methods: {
			showmore: function() {
				alert('点击了圈子')
			}
		}
	}
</script>

<style>
	.ccl {
		width: 170upx;
		height: 170upx;
		float: left;
	}
	.circle-icon {
		width: 100%;
		height: 85%;
	}
	.circle-text {
		margin-top: 0;
		font-size: 5upx;
		text-align: center;
		width: 100%;
		height: 15%;
	}
</style>
