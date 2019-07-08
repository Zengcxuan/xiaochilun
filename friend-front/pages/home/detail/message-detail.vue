<template>
    <view>
    	<view class="msg-detail-belong">
    		<image class="msg-detail-head" :src="msg.image_url" ></image>
			<text class="msg-detail-src"> {{ msg.source}} </text>
	 		<button class="msg-follow-button" size="mini" :class="computedIsActive" @click="changeFollow"> {{ followText }} </button>
    	    <image class="msg-detail-collect" :src="computedIsCollect" @click="changeCollect"></image>
		</view>
		<view class="msg-detail-content">
			
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
				isCollect: false
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
				} else {
					this.followText = '已关注';
				}
				this.isFollow = !(this.isFollow);
				//isFollow改变需要传给后台
			},
			changeCollect() {
                this.isCollect = !(this.isCollect);
			}
		}
	}
</script>

<style lang="scss" scoped>
    page {
		background: rgb(230, 230, 230);
		height: 100%;
	}
	.msg-detail-belong {
		height: 100upx;
		width: 100%;
		background: white;
		white-space: nowrap;
		display: flex;
		flex: 1;
		flex-direction: row;
		border: solid 1upx black;
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
		font-size: 30upx;
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
</style>
