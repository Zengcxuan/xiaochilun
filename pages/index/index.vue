<template>
	<view class="content">
		<view class="my-circles">
			<view class="all-circles">
				<text class="show-all">我的圈子</text>
<!-- 				<button class="show-all" type="large" plain="true" @click="showmore">我的圈子</button> -->
				<image class="right-icon" src="../../static/rightarrow.png" mode=""></image>
			</view>

			<scroll-view class="scroll-screen" scroll-x="true" >
				<view class="scroll-circles" v-for="item in circletype" >
                       <circlebutton class="circle-choice" v-bind:circlename="item"></circlebutton>
				</view>	   
			</scroll-view>
		</view>
        <view class="find-more">
        	<view class="find-type">
        		
        	</view>
			
			<view class="text-detail" v-for="item in message">
				<messagedetail class="message-one" v-bind:messageinfo="item"></messagedetail>
			</view>
        </view>
	</view>
</template>

<script>
	import circlebutton from '@/components/circlebutton.vue';
	import messagedetail from '@/components/messagedetail.vue';
	export default {
		data() {
			return {
				title: 'Hello',
				circletype: [
					{ typename: '读书', img: '../../static/more.png' },
					{ typename: '运动', img: '../../static/more.png'  },
					{ typename: '游戏', img: '../../static/more.png'  },
					{ typename: '程序员', img: '../../static/more.png'  },
					{ typename: '情感', img: '../../static/more.png'  },
					{ typename: '电影', img: '../../static/more.png'  }
				],
				message: [
					{ typename: '读书', detail: 'LTE机制与流程'},
					{ typename: '运动', detail: '篮球协会'},
					{ typename: '游戏', detail: '一起来捉妖'},
					{ typename: '程序员', detail: '软件开发'},
					{ typename: '情感', detail: '无聊'},
					{ typename: '电影', detail: '哥斯拉2'}
				]
			}
		},
		components: {
			circlebutton,
			messagedetail
		},
		onLoad() {

		},
		methods: {
            showmore: function() {
				alert('点击了更多')
			}
		},
		onNavigationBarSearchInputChanged() {
		    plus.nativeUI.alert('TBD')
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: auto;
		background: rgb(230,230,230);
	}
/* 	我的圈子部分 */
    .my-circles {
		height: 280upx;
		width: 100%;
		background: #ffffffff;
	}
	.all-circles {
		height: 70upx;
		width: 100%;
	}	
	.show-all {
/* 		border: hidden; */
/* 		text-align: left; */
		padding: 5upx;
		float: left;
		font-size: 45upx;
		height: 65upx;
		width: auto;
	}
	.right-icon {
		float: right;
		height: 65upx;
		width:  65upx;
		right: 0;
		margin: 1upx;
		padding: 1upx;
	}
	.scroll-circles {
		height: 200upx;
		width: 200upx;
		display:inline-block
	}
	.scroll-screen {
        height: 200upx;
		width: 100%;
		white-space: nowrap;
	}
	.circle-choice {
		height: 170upx;
		width: 170upx;

	}

/* 	推荐部分 */
	.find-more {
		margin-top: 20upx;
		width: 100%;
		height: auto;
		background: rgb(240,240,240);
	}
	.find-type {
		height: 70upx;
		background-color: #FFFFFF;
	}
    .circle-text {
		height: 50upx;
		width: 100%;
		background: rgb(230,230,230);
	}
    .text-detail{
		height: 200upx;
		margin-bottom: 10upx;
	}
	.message-one {

		height: 500upx;
	}

</style>
