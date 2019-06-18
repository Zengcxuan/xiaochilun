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
                       <circle-button class="circle-choice" v-bind:circlename="item" ></circle-button>
				</view>	   
			</scroll-view>
		</view>
        <view class="find-more">
<!--        	<view class="find-type">
        		
        	</view>
			
			<view class="text-detail" v-for="item in message">
				<message-detail class="message-one" v-bind:messageinfo="item"></message-detail>
			</view> -->
			<view id="tab-bar" class="uni-swiper-tab" >
				<view v-for="(tab, index) in tabBars" :key="tab.ref" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
				 :id="tab.ref" :data-current="index" @click="tapTab(index)">{{tab.name}}</view>
			</view>
			
			<scroll-view class="list" v-for="(tabItem, idx) in newsList" :key="idx" v-if="tabIndex === idx" scroll-y
			 @scrolltolower="loadMore(idx)">
				<view  v-for="item in message">
					<message-detail class="message-one" v-bind:messageinfo="item"></message-detail>
				</view>
				<view class="uni-tab-bar-loading">
					<view class="loading-more">{{loadingText}}</view>
				</view>
			</scroll-view>
        </view>
	</view>
</template>

<script>
	import circleButton from '@/components/circle-button.vue';
	import messageDetail from '@/components/message-detail.vue';
	export default {
		data() {
			return {
				title: 'Hello',
				circletype: [
					{ typename: '更多', img: '../../static/more.png' },
					{ typename: '读书', img: '../../static/circles/book.png' },
					{ typename: '运动', img: '../../static/circles/sports.png'  },
					{ typename: '游戏', img: '../../static/circles/game.png'  },
					{ typename: '程序员', img: '../../static/circles/codeman.png'  },
					{ typename: '情感', img: '../../static/circles/feel.png'  },
					{ typename: '电影', img: '../../static/circles/movies.png'  }
				],
				message: [
					{ typename: '读书', detail: `'LTE,
					机制
					与
					流程'`, name: '啊珍'},
					{ typename: '运动', detail: '篮球协会', name: '啊强' },
					{ typename: '游戏', detail: '一起来捉妖', name: '啊强' },
					{ typename: '程序员', detail: 'Vue.js是基于JS的移动端框架', name: '啊强' },
					{ typename: '情感', detail: '无聊', name: '啊强' },
					{ typename: '电影', detail: '哥斯拉2还没看', name: '啊强' }
				],
				loadingText: {
					contentdown: '上拉加载更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				},
				scrollLeft: 0,
				refreshing: false,
				refreshText: '下拉可以刷新',
				newsList: [],
				tabIndex: 0,
				tabBars: [{
					name: '推荐',
					id: 0,
					ref: 'new'
				}, {
					name: '附近',
					id: 23,
					ref: 'company'
				}, ]
			}
		},
		components: {
			circleButton,
			messageDetail
		},
		onLoad: function() {
			// 初始化列表信息
			this.tabBars.forEach((tabBar) => {
				this.newsList.push({
					data: [],
					requestParams: {
						columnId: tabBar.id,
						minId: 0,
						pageSize: 10,
					},
					loadingText: '加载中...'
				});
			});
		},
		methods: {
            showmore: function() {
				alert('点击了更多')
			},
			loadMore() {
				console.log('load more');
				this.getList(2);
			},
			async tapTab(index) { 
				if (this.tabIndex === index) {
					return false;
				} else {
					console.log('ssss')
					this.tabIndex = index;
					// 首次切换后加载数据
					const activeTab = this.newsList[this.tabIndex];
					// if (activeTab.data.length === 0) {
					// 	this.getList();
					// }
				}
			},
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
		font-size: 40upx;
		height: 65upx;
		width: auto;
	}
	.right-icon {
		float: right;
		height: 55upx;
		width:  55upx;
		right: 0;
		margin: 1upx;
		padding: 1upx;
	}
	.scroll-circles {
		height: 180upx;
		width: 180upx;
		display:inline-block
	}
	.scroll-screen {
        height: 180upx;
		width: 100%;
		white-space: nowrap;
	}
	.circle-choice {
		height: 150upx;
		width: 150upx;

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
    .text-detail{
		height: auto;
		margin-bottom: 10upx;
		background: rgb(255, 255, 255);
	}
	.message-one {
		height: auto;
		margin-bottom: 10upx;
	}
	.uni-swiper-tab {
		width: 100%;
		white-space: nowrap;
		line-height: 70upx;
		height: 70upx;
		background: #FFFFFF;
		left: 0;
	}

	.swiper-tab-list {
		font-size: 30upx;
		width: 100upx;
		display: inline-block;
		text-align: center;
		color: #555;
		float: left;

	}
	.active {
		border-bottom: 3px solid #eeee00;	
		color: #000000;
	}
	.uni-tab-bar-loading {
		text-align: center;
		padding: 20upx 0;
		font-size: 14px;
		color: #CCCCCC;
	}
    .list {
		width: 750upx;
		height: auto;
	}
</style>
