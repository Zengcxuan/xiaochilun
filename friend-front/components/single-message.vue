<template>
	<view class="msg-content" @click="bindClick">
		<view class="circle-type" @click="goCirecle(msg)">
			<image class="circle-img" :src="msg.image_url" ></image>
			<text class="circle-name">{{ msg.post_id }}</text>
			<view class="circle-client">
				<image src="/static/img/home/head/man.png" class="user-head" style="height: 50upx; width: 50upx; z-index: 3; position: absolute; right: 70upx; border: #ffffff;"></image>
				<image src="/static/img/home/head/woman.png" class="user-head" style="height: 50upx; width: 50upx; z-index: 2; position: absolute; right: 110upx; border: #ffffff;"></image>
				<image src="/static/img/home/head/man.png" class="user-head" style="height: 50upx; width: 50upx; z-index: 1; position: absolute; right: 150upx; border: #ffffff;"></image>
			    <image class="right-icon" src="/static/img/home/rightarrow.png" ></image>
			</view>
			
		</view>
		<view class="message-detail" @click="goDetail(msg)">
			<text class="message-text">{{ msg.title }}</text>
            <!-- 			加一个view放图片 -->
		</view>
		<view class="message-belong" @click="goUser(msg)">
			<image class="head" src="/static/img/home/head/man.png" ></image>
			<view style="width: auto; height: 60upx; position: relative; left:70upx; margin-top: 25upx; white-space: nowrap; display: flex; flex: 1; flex-direction: row;">
				<text class="name"> {{ msg.source }} </text>
				<text class="send"> 发布 </text>	
			</view>
		</view>
		<view class="message-modify">
			<view class="message-modify-module" @click="clickGood(msg)">
				<image class="modify-icon" src="/static/img/home/msg/good.png" ></image>
				<text class="comments-count">999</text>
			</view>
			<view class="message-modify-module" @click="clickComment(msg)">
				<image class="modify-icon" src="/static/img/home/msg/comment.png"></image>
				<text class="comments-count">{{msg.comments_count}}</text>
			</view>
			<view class="message-modify-module" @click="clickForward(msg)">
				<image class="modify-icon" src="/static/img/home/msg/forward.png"></image>
				<text class="comments-count">999</text>
			</view>			
			<image src="/static/img/home/msg/more.png" style="position: absolute; right: 5upx; height: 40upx; width: 40upx;" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'message-detail',
		// props: ['messageinfo'],
        props: {
            msg: {
                type: Object,
                default: function(e) {
                    return {}
                }
            }
        },
		methods: {
		    close(e) {
		        this.$emit('close');
		    },			// 查看详情
			goDetail(detail) {
				console.log('go detail');
				uni.navigateTo({
					url: '/pages/home/detail/message-detail?query=' + encodeURIComponent(JSON.stringify(detail))
				});
			},
			goCirecle(detail) {
				console.log('go circle');
			},
			goUser(detail) {
				console.log('go user');
			},
			clickGood(detail) {
				console.log('click good');
			},
			clickComment(detail) {
				console.log('click comment');
			},
			clickForward(detail) {
				console.log('click forward');
			},
		    bindClick() {
		        this.$emit('click');
		    }
		}
	}
</script>

<style lang="scss" scoped>
	.msg-content {
		background: rgb(255,255,255);
		border-bottom: solid 15upx rgb(230, 230, 230);
	}
	.circle-type {
		height: 100upx;
		width: 100%;
        background: rgb(245, 245, 245);
		white-space: nowrap;
		display: flex;
		flex: 1;
		flex-direction: row;
	}
	.circle-img {
		height: 70upx;
		width: 70upx;
		position:relative;
		margin: 15upx;
	}
	.circle-name {
		width: auto;
		position: relative;
		text-align: center;
		margin-top: 15upx;
	}
	.circle-client {
		position: absolute;
		right: 10upx;
		height: 50upx;
		width:  200upx;
		margin-top: 25upx;	
		margin-right: 10upx;
	}
	.right-icon {
		height: 50upx;
		width:  50upx;
		position: absolute; 
		right: 10upx;
	}
	.message-detail {
		width: 100%;
		height: auto;
		overflow: auto;
	}
	.message-text {
		width: auto;
		height: auto;
		margin: 20upx;
	}
	.message-belong {
		width: auto;
		height: 90upx;
		margin-left: 15upx;
		margin-right: 15upx;
		display: flex;
		flex-direction: row;
		border-bottom: solid 3upx rgb(200, 200, 200);
	}
	.head {
		height: 50upx;
		width: 50upx;
		position: absolute;
		margin-top: 20upx;
	}
	.name {
		width: auto;
		display: inline-block;
		font-size: 20upx;
	}
	.send {
		position: relative;
		left:10upx;
		display: inline-block;
		color: rgb(200, 200, 200); 
		font-size: 20upx; 
	}
	.message-modify {
		width: 100%;
		height: auto;
		white-space: nowrap;
		display: flex;
		flex: 1;
		flex-direction: row;
		padding: 15upx;
	}
	.message-modify-module {
		width: 200upx;
		height: auto;
		display:inline-block;
		display: flex;
		flex: 1;
		flex-direction: row;
	}
	.modify-icon {
		height: 30upx;
		width: 30upx;
	}
	.comments-count {
		height: 30upx;
		width: auto;
		text-emphasis-color: #000000;
	}
</style>
