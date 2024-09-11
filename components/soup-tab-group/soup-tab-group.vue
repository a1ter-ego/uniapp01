<template>
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
	</view>
</template>

<script setup>

</script>

<style lang="scss">
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


</style>