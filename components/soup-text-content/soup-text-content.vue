<template>
	<text class="soupTextContent" :style="{'-webkit-line-clamp':maxline}">
		生活就像一杯茶，\n
		不会苦一辈子，\n
		但总会苦一阵子。\n
		无论遇到什么困难，\n
		都要相信自己有能力去克服。\n
		都要相信自己有能力去克服。\n
		都要相信自己有能力去克服。\n
	</text>
	<view class="author">
		<view class="line"></view>
		<view class="outer">
		<view class="userInfo">
			<view class="avatar">
				<image src="../../static/images/logo.png" mode="aspectFill"></image>
			</view>
			<view class="name">张三</view>
			<view class="from">摘自：读者</view>
		</view>
		
		<view class="number" v-show="lookState">
			共33人看过
		</view>
		</view>
		
	</view>
</template>

<script setup>
defineProps({
	maxline:{
		type:[String, Number],
		default:'none'
	},
	lookState:{
		type:Boolean,
		default:false
	}
})

</script>

<style lang="scss" scoped>
	.soupTextContent {
		font-size: 50rpx;
		font-weight: lighter;
		width: 100%;
		letter-spacing: 0.05em;
		line-height: 1.8em;
		margin: 10rpx 0 60rpx 0;
		@include maxline()
	}
	
	.author {
		.line {
			width: 70rpx;
			height: 5rpx;
			background: #f0f0f0;
			margin-bottom: 30rpx;
		}
		
		.outer{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.number{
				font-size: 26rpx;
				
			}
		}
	
		.userInfo {
			display: flex;
			align-items: center;
			font-size: 26rpx;
			color: #888;
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
</style>