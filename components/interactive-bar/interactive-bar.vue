<template>
	<view class="interactiveBar">
		<view class="info">
			<view class="left" >
				<view class="item" v-if="type===0">
					<uni-icons type="redo" size="28" color="#999"> </uni-icons>
					<text class=""></text>
				</view>
				
				<view class="item" v-if="type===1">
					<view class="input">
						评价一下...
					</view>
				</view>
			</view>
			<view class="right">
				<view class="item" @click="clickLike">
					<uni-icons type="heart" size="28" color="#999"> </uni-icons>
					<text class="">12</text>
				</view>
				<view class="item" @click="clickCollect">
					<uni-icons type="star" size="28" color="#999"> </uni-icons>
					<text class="">33</text>
				</view>
				
				<view class="item">
					<uni-icons type="chatbubble" size="28" color="#999"> </uni-icons>
					<text class=""></text>
				</view>
				
				<view class="item" v-if="type===1">
					<uni-icons type="redo" size="28" color="#999"> </uni-icons>
					<text class=""></text>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script setup>
defineProps({
	type:{
		type:Number,
		default: 0
	}
})

//点赞
const clickLike = () => {
	console.log('点赞')
}
//收藏
const clickCollect = () => {
	console.log('收藏')
}
</script>

<style lang="scss" scoped>
	.interactiveBar {
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
				flex:1;
				margin-right: 15rpx;
				.item {
					padding-left: 0;
				}
				.input{
					width: 100%;
					height: 70rpx;
					color: #bfbfbf;
					background: #f7f7f7;
					border-radius: 70rpx;
					display: flex;
					align-items: center;
					padding:0 30rpx;
				}
			}

			.right {
				display: flex;


			}
		}
	}
</style>