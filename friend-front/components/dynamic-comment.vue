<template>
	<view class="">
       <view class="dynamic-comment-left">
             <image style="height: 80upx; width: 80upx; margin: 10upx;" src="/static/img/home/head/woman.png" mode="">{{ commentMsg.image_url }}</image>
       </view>		
	   <view class="dunamic-comment-right">
	   	    <view class="dynamic-comment-right-user">
	   	    	<text style="color: #666666;">{{commentMsg.source}}</text>
	   	    </view>
			<view class="dynamic-comment-right-content">
				<text>{{commentMsg.detail}}</text>
			</view>
			<view class="dynamic-comment-right-comment">
				<text style="margin-left: 10upx;">{{ commentMsg.sub_comment_username }}: {{ commentMsg.sub_comment }}</text>
			</view>
			<view class="dynamic-comment-right-modify">
				<text style="color: #999999; position: absolute; left: 0; margin: 10upx;">{{ commentMsg.when }}</text>
				<view class="dynamic-comment-right-modify-icon">
					<image class="dynamic-comment-right-modify_icon" src="/static/img/home/msg/good.png" >{{ commentMsg.good_count }}</image>
					<image class="dynamic-comment-right-modify_icon" src="/static/img/home/msg/comment.png" >{{ commentMsg.comments_count }}</image>
					<image class="dynamic-comment-right-modify_icon" src="/static/img/home/msg/forward.png">{{ commentMsg.forward_count }}</image>
				</view>
			</view>
	   </view>
	</view>
</template>

<script>
	export default {
		name: 'dynamic-comment',
		props: {
		    commentMsg: {
		        type: Object,
		        default: function(e) {
		            return {}
		        }
		    }
		}
	}
</script>

<style>
	.dynamic-comment-left{
		position: absolute;
		left: 0;
		width: 20%;
		
	}
	.dunamic-comment-right{
		position: absolute;
        right: 0;
		width: 80%;
	}
	.dynamic-comment-right-user{
		
	}
	.dynamic-comment-right-content{
		
	}
	.dynamic-comment-right-comment{
		background: #AAAAAA;
	}
	.dynamic-comment-right-modify{
		width: 100%;
	}
	.dynamic-comment-right-modify-icon{
		position: absolute;
        right: 10upx;
		margin-right: 10upx;
	}
	.dynamic-comment-right-modify_icon{
		height: 30upx;
		width: 30upx;
		margin: 10upx;
	}
</style>
