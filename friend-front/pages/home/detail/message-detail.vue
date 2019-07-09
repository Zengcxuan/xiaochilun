<template>
    <view class="msg-detail-top">
    	<view class="msg-detail-belong">
    		<image class="msg-detail-head" :src="msg.image_url" ></image>
			<text class="msg-detail-src"> {{ msg.source }} </text>
	 		<button class="msg-follow-button" size="mini" :class="computedIsActive" @click="changeFollow"> {{ followText }} </button>
    	    <image class="msg-detail-collect" :src="computedIsCollect" @click="changeCollect"></image>
		</view>
		<view class="msg-detail-content">
			<text class="msg-detail-text"> {{ msg.title }} </text>
		</view>
		<view class="msg-detail-circle">
			<image class="msg-circle-img" :src="msg.image_url"></image>
			<text class="msg-circle-text"> {{ msg.source }} </text>
			<button class="msg-circle-join" size="mini" @click="changeJoin"> {{ joinText }} </button>
		</view>
		<view class="msg-detail-modify">
			
		</view>
    </view>
<!-- 		<view class="article-content">
			<rich-text :nodes="content"></rich-text>
		</view> -->
</template>

<script>
	const FAIL_CONTENT = '<p>获取信息失败</p>';
	export default {
		data() {
			return {
				msg: {},
				content: '',
				isFollow: false,
				followText: '关注',
				isCollect: false,
				joinText: '加入'
			}
		},
		computed: {
			computedIsActive() {
				return this.isFollow ? 'followed' : ''
			},
			computedIsCollect() {
				if(this.isCollect){
					return '/static/img/home/msg-detail/collected.png'
				} else {
					return '/static/img/home/msg-detail/uncollect.png'
				}
			}
		},
		onShareAppMessage() {
			return {
				title: this.msg.title,
				path: '/pages/home/detail/detail?query=' + JSON.stringify(this.msg)
			}
		},
		onLoad(event) {
			// 目前在某些平台参数会被主动 decode，暂时这样处理。
			try {
				this.msg = JSON.parse(decodeURIComponent(event.query));
			} catch (error) {
				this.msg = JSON.parse(event.query);
			}

			this.getDetail();
			uni.setNavigationBarTitle({
				title: '动态详情'
			});
		},
		methods: {
			getDetail() {
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + this.msg.post_id,
					success: (result) => {
						if (result.statusCode == 200) {
							this.content = result.data.content;
						} else {
							this.content = FAIL_CONTENT;
						}
					}
				});
			},
			changeFollow() {
				if (this.isFollow){
					this.followText = '关注';
					console.log('unfollow');
				} else {
					this.followText = '已关注';
					console.log('follow');
				}
				this.isFollow = !(this.isFollow);
				//isFollow改变需要传给后台
			},
			changeCollect() {
				if (this.isCollect) {
					//需要加一个弹框确定取消收藏
					console.log('cancel collect');
				} else {
					console.log('collect');
				}
                this.isCollect = !(this.isCollect);
			},
			changeJoin() {
				console.log('click Join in');
			}
		}
	}
</script>

<style lang="scss" scoped>
    page {
		background: rgb(230, 230, 230);
		height: 100%;
	}
	.msg-detail-top {
		background: rgb(255, 255, 255);
	}
	//belong部分
	.msg-detail-belong {
		height: 100upx;
		width: 100%;
		background: white;
		white-space: nowrap;
		display: flex;
		flex: 1;
		flex-direction: row;
	}
	.msg-detail-head {
		height: 70upx;
		width: 70upx;
		position:relative;
		margin: 15upx;
	}
	.msg-detail-src {
		width: auto;
		display: inline-block;
		font-size: 30upx;
		margin-top: 15upx;
	}
	.msg-follow-button {
		height: 60upx;
		width: 130upx;
		position: absolute;
		top: 20upx;
		right: 100upx;
		font-size: 28upx;
		text-align: center;
		color: white;
		padding: 0;
		background-color: cornflowerblue;
		border-radius: 50upx;
	}
	.followed {
		background-color: grey;
	}
	.msg-detail-collect {
		height: 60upx;
		width: 60upx;
		position: absolute;
		top: 20upx;
		right: 20upx;
	}
	//content部分
	.msg-detail-content {
		width: 100%;
		height: auto;
		overflow: auto;
	}
	.msg-detail-text {
		width: auto;
		height: auto;
		float: left;
		margin: 20upx;
	}
	//circle部分
	.msg-detail-circle {
		height: 100upx;
		width: calc(100%-40upx);
		margin: 20upx;
		background: white;
		white-space: nowrap;
		display: flex;
		flex: 1;
		flex-direction: row;
		background: rgb(245, 245, 245);
	}
	.msg-circle-img {
		height: 70upx;
		width: 70upx;
		position:relative;
		margin: 15upx;	
	}
	.msg-circle-text {
		width: auto;
		display: inline-block;
		font-size: 30upx;
		margin-top: 15upx;
	}
	.msg-circle-join {
		height: 60upx;
		width: 130upx;
		position:relative;
		top: 20upx;
        margin-right: 10upx;
		font-size: 28upx;
		text-align: center;
		color: cornflowerblue;
		padding: 0;
		background-color: white;
		border-radius: 50upx;	
		border: solid 1upx cornflowerblue;
	}
</style>
