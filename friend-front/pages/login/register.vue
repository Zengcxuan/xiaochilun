<template>
	<view class="s-page-wrapper is-100vh">
		<view class="avatar_area">
				<image src="../../static/img/login/head.png" mode="aspectFit" class="logoimg"></image>
		</view>
		<view class="registercontent">
			<view class="has-mglr-10 ">
				<view class=" has-mgtb-10 ">
					<input type="number" maxlength="11" placeholder="请输入手机号" class="is-input1 " />
				</view>
				<view class="has-mgtb-10">
					<input type="number" maxlength="6" placeholder="短信验证码" class="code_content " />
					<view class="code_img" @tap="getsmscode">{{smsbtn.text}}</view>
				</view>
				<view class=" has-radius has-mgtb-10">
					<input placeholder="设置登录密码" :password="true" class="is-input1" />
				</view>
				<view class=" has-radius has-mgtb-10">
					<input placeholder="确认登录密码" :password="true" class="is-input1" />
				</view>
				<view class=" registerbtn has-radius has-mgtb-20">
					<button>注 册</button>
				</view>
			</view>
		</view>
		<view class="is-20vh has-mgt-80">
			<navigator url="#" class=" has-radius is-center is-grey " hover-class="">
				<text>注册即表示同意</text><text class="is-blue">《用户协议》</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				smsbtn: {
					text: '获取验证码',
					status: false,
					codeTime: 60
				},
				timerId: null,
			};
		},
		methods: {
			getsmscode: function() {
				if (this.smsbtn.status == true) {
					console.log('message：', "别着急！短信已经发送了~");
					return false;
				}
				this.smsbtn.status = true; // 这段代码其实应该加在你request请求 短信发送成功后 
				this.timerId = setInterval(() => {
						var codeTime = this.smsbtn.codeTime;
						codeTime--;
						this.smsbtn.codeTime = codeTime;
						this.smsbtn.text = codeTime + "S";
						if (codeTime < 1) {
							clearInterval(this.timerId);
							this.smsbtn.text = "重新获取";
							this.smsbtn.codeTime = 60;
							this.smsbtn.status = false;
						}
					},
					1000);
				return false;
			}

		}
	}
</script>

<style>
	page {
		min-height: 100%;
		background-color: #FFFFFF;
	}

	.registercontent {
		width: 85%;
		margin: 0 auto;
	}

	.avatar_area {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	.logoimg {
		width: 200rpx;
		height: 200rpx;
		border-radius: 50%;
	}

	.is-input1 {
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		color: #353535;
		font-size: 32rpx;
		box-sizing: border-box;
		appearance: none;
		border: 2rpx solid #e5e5e5;
		box-shadow: none;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		padding-left: 30rpx;
		margin: 0;
		font-family: inherit;
		background: #fff;
		resize: none;
	}

	.iconfont {
		position: absolute;
		font-size: 40rpx;
		right: 12%;
		z-index: 999;
		width: 105rpx;
		text-align: center;
		color: #353535;
		margin-top: -11%;
		background: #fff;
		border-top-right-radius: 44rpx;
		border-bottom-right-radius: 44rpx;
		height: 80rpx;
		line-height: 80rpx;
	}

	.code_content{
		height: 88rpx;
		width: 70%;
		line-height: 88rpx;
		color: #353535;
		font-size: 32rpx;
		box-sizing: border-box;
		appearance: none;
		border: 2rpx solid #e5e5e5;
		box-shadow: none;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		padding-left: 30rpx;
		margin: 0;
		font-family: inherit;
		background: #fff;
		resize: none;
		float: left;
	}

	.code_img {
		float: right;
		font-size: 28rpx;
		z-index: 999;
		width: 30%;
		text-align: center;
		color: #FFFFFF;
		background-color: #39b54a;
		border-radius: 44rpx;
		height: 88rpx;
		line-height: 88rpx;
	}

	.registerbtn button {
		margin-top: 20rpx;
		height: 88rpx;
		width: 100%;
		line-height: 88rpx;
		color: #ffffff;
		font-size: 32rpx;
		border-radius: 44rpx;
		outline: 0;
		display: block;
		margin: 0;
		font-family: inherit;
		background: #f35;
		opacity: 0.8;
	}

	button:after {
		border: 2rpx solid #f2f2f2;
	}

	.has-mgtb-10 {
		margin-top: 20rpx !important;
		margin-bottom: 20rpx !important;
	}

	.has-mglr-10 {
		margin-left: 20rpx !important;
		margin-right: 20rpx !important;
	}

	.has-mgtb-20 {
		margin-top: 40rpx !important;
		margin-bottom: 40rpx !important;
	}

	.has-radius {
		border-radius: 4px;
	}

	/* 字体居中 */
	.is-center {
		text-align: center !important;
	}

	.is-grey {
		color: #888888 !important;
	}
</style>
