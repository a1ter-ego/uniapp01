<template>
	<view class="homeLayout">
		<view class="head">
			<home-head></home-head>
		</view>
		<view class="body">
			<view class="swiperOut">
				<swiper vertical circular @change="swiperChange">
					<swiper-item v-for="(item, index) in listData" :key="index">
						<view class="content">
							<view class="soupTabGroup">
								<view class="tab" v-if="true">
									<view class="icon">
										<image src="../../static/images/xin-icon.png" mode="aspectFill"></image>
									</view>
									<view class="text">心灵鸡汤</view>
								</view>
								<view class="tab" v-else>
									<view class="icon">
										<image src="../../static/images/du-icon.png" mode="aspectFill"></image>
									</view>
									<view class="text">毒鸡汤</view>
								</view>

								<text class="main">
									生活就像一杯茶，\n
									不会苦一辈子，\n
									但总会苦一阵子。\n
									无论遇到什么困难，\n
									都要相信自己有能力去克服。\n
								</text>
								<view class="author">
									<view class="line"></view>
									<view class="userInfo">
										<view class="avatar">
											<image src="../../static/images/logo.png" mode="aspectFill"></image>
										</view>
										<view class="name">张三</view>
										<view class="from">摘自：读者</view>
									</view>
								</view>
							</view>
						</view>
						<view class="info">
							<view class="left">
								<view class="item">
									<uni-icons type="redo" size="28" color="#999"> </uni-icons>
									<text class=""></text>
								</view>
							</view>
							<view class="right">
								<view class="item">
									<uni-icons type="heart" size="28" color="#999"> </uni-icons>
									<text class="">12</text>
								</view>
								<view class="item">
									<uni-icons type="star" size="28" color="#999"> </uni-icons>
									<text class="">33</text>
								</view>
								<view class="item">
									<uni-icons type="redo" size="28" color="#999"> </uni-icons>
									<text class=""></text>
								</view>
							</view>
						</view>
					</swiper-item>

					<swiper-item class="ad">
						<view class="message">
							<view class="title">小主，今日鸡汤已干完！</view>
							<text class="des">每日5碗鸡汤，如果想要加餐，\n点击下方看广告按钮，可继续推送5碗，\n每日最多加餐5次。</text>
						</view>
						<view class="btnGroup">
							<view class="btn">看广告刷新</view>
							<view class="text">今日还有5次机会</view>
						</view>
					</swiper-item>

				</swiper>
			</view>
			<view class="progress">
				<view class="line" :style="{width: lineWidth + '%'}"></view>
			</view>
		</view>

		<uni-popup ref="usePopup" type="center" @maskClick="closeUsePopup">
		  <view class="usePopup">
			<image src="../../static/images/arrow.png" mode="heightFix"></image>
		    <image src="../../static/images/upward.png" mode="heightFix" @click="closeUsePopup"></image>
		  </view>
		</uni-popup>


	</view>
</template>

<script setup>
	import {
		computed,
		ref
	} from 'vue';
	import {
		onReady
	} from "@dcloudio/uni-app"

	const usePopup = ref(null)
	onReady(() => {
		// let useState = uni.getStorageSync("useState") || false;
		let useState = false
		if (!useState) usePopup.value.open();
	})
	//点击操作的遮罩层
	const closeUsePopup = () => {
		usePopup.value.close();
		uni.setStorageSync("useState", true);
	}


	const listData = ref([1, 2, 3, 4, 5])
	const currentIndex = ref(0)

	//轮播事件切换
	const swiperChange = (e) => {
		currentIndex.value = e.detail.current
	}

	//进度条宽度计算
	const lineWidth = computed(() => {
		return currentIndex.value / listData.value.length * 100
	})
</script>

<style lang="scss">
	.homeLayout {
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: #bde1fb;

		.head {}

		.body {
			flex: 1;
			background: #fff;
			border-radius: 50rpx 50rpx 0 0;
			overflow: hidden;

			.swiperOut {
				height: calc(100% - 8rpx);

				swiper {
					height: 100%;

					&-item {
						.content {
							height: calc(100% - 130rpx);
							// border: 1px solid red;
							display: flex;
							justify-content: center;
							padding: 0 30rpx;
							flex-direction: column;

							.soupTabGroup {
								.tab {
									height: 56rpx;
									width: fit-content;
									background: #aaa;
									display: flex;
									align-items: center;
									font-size: 26rpx;
									font-weight: 400;
									letter-spacing: normal;
									padding: 0 20rpx;
									border-radius: 56rpx;

									.icon {

										display: flex;
										align-items: center;
										justify-content: center;
										width: 36rpx;
										height: 36rpx;
										border-radius: 50%;

										image {
											width: 80%;
											height: 80%;
										}
									}

									.text {
										padding-left: 10rpx;
									}

								}

								.tab:nth-child(1) {
									background: #fff3f7;

									.icon {
										background: linear-gradient(to right, #f83162, #ff7795);
									}
								}

								.tab:nth-child(2) {
									background: #edfdf0;

									.icon {
										background: linear-gradient(to right, #4f9153, #4bbb8b);
									}
								}
							}

							.main {
								font-size: 50rpx;
								font-weight: lighter;
								width: 100%;
								letter-spacing: 0.05em;
								line-height: 1.8em;
								margin: 10rpx 0 60rpx 0;
								@include maxline(5)
							}

							.author {
								.line {
									width: 70rpx;
									height: 5rpx;
									background: #f0f0f0;
								}

								.userInfo {
									display: flex;
									align-items: center;
									font-size: 26rpx;
									color: #888;
									padding-top: 30rpx;
								}

								.avatar {
									width: 40rpx;
									height: 40rpx;

									image {
										width: 100%;
										height: 100%;
									}
								}

								.name {
									padding-left: 12rpx;
								}

								.from {
									padding-left: 12rpx;
								}
							}

						}

						.info {
							height: 130rpx;
							display: flex;
							justify-content: space-between;
							align-items: center;
							padding: 0 30rpx;

							.item {
								display: flex;
								align-items: center;
								padding: 10rpx 15rpx;

							}

							.left {
								.item {
									padding-left: 0;
								}
							}

							.right {
								display: flex;


							}
						}

					}

					.ad {
						background: #F8F8F8;

						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: center;
						text-align: center;

						.message {
							margin-top: 80rpx;
							background: #fff;
							border-radius: 30rpx;
							padding: 40rpx;

							.title {
								font-size: 46rpx;
								padding-bottom: 20rpx;
								border-bottom: 1px solid #eee;
								margin-bottom: 20rpx;
							}

							.des {
								font-size: 32rpx;
								color: #555;
								line-height: 1.8em;
							}
						}

						.btnGroup {
							font-size: 30rpx;
							margin-bottom: 40rpx;

							.btn {
								width: 400rpx;
								height: 100rpx;
								border-radius: 100rpx;
								background: linear-gradient(to top, #93c4ff, #b1e1ff);
								display: flex;
								justify-content: center;
								align-items: center;
								font-size: 38rpx;
								color: #203e5f;
								margin-bottom: 10rpx;
							}

							.text {
								padding: 20rpx 0;
							}
						}
					}
				}
			}

			.progress {
				height: 8rpx;
				width: 100%;
				background: #eee;

				.line {
					height: 100%;
					background: linear-gradient(to right, #bce0fd, #74dbef);
				}
			}
		}
	}


	.usePopup {
	  padding-top: 15vh;
	  display: flex;
	  flex-direction: column;
	  image {
	    height: 150rpx;
	    transform: translateY(100rpx);
	    opacity: 0;
	    animation: useAnimate 2s infinite;
	  }
	 
	}
	
	@keyframes useAnimate {
	  0% {
	    transform: translateY(100rpx);
	    opacity: 0;
	  }
	  100% {
	    transform: translateY(-100rpx);
	    opacity: 1;
	  }
	}
	


	
	
</style>