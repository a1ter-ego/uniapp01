<template>
	<view class="homeHead">
		<view class="statusBar" :style="{height:getStatusBarHeight()+'px'}"></view>
		<view class="titleBar" :style="{height:getTitleBarHeight()+'px'}">今日份的鸡汤送达喽~~</view>
		<view class="content">
			<view class="time">
				<view class="left">
					<uni-dateformat :date="Date.now()" format="dd"></uni-dateformat>
				</view>
				<view class="right">
					<view class="year">
						<uni-dateformat :date="Date.now()" format="yyyy年MM月"></uni-dateformat>
					</view>
					<view class="week">{{getCurrentDayOfWeek()}}</view>
				</view>
			</view>
			<view class="pic">
				<image src="../../static/images/headPic.png" mode="heightFix"></image>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onMounted } from "vue";
import {getNavBarHeight, getStatusBarHeight, getTitleBarHeight} from "@/utils/system.js"
import {getCurrentDayOfWeek} from "@/utils/tools.js"
import {getLunar} from "@/utils/lunar.js"

//获得农历
const lunarYear = getLunar(2024,9,1,1,1)
onMounted(()=>{
	console.log('123',lunarYear)
})


</script>

<style lang="scss">
.homeHead{
	background: 
		radial-gradient(50% 200px at left top, #d3f7fc, transparent),
		radial-gradient(50% 200px at right top, #d0cef8, transparent);
	.titleBar{
		display: flex;
		text-align: center;
		align-items: center;
		padding-left: 50rpx;
	}
	.content{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 50rpx;
		height: 15vh;
		.time{
			display: flex;
			align-items: center;
			.left{
				font-size: 110rpx;
				font-weight: bold;
			}
			.right{
				padding-left: 15rpx;
				.year{
					font-size: 30rpx;
				}
				.week{
					font-size:40rpx;
					font-weight: bold;
				}
			}
		}
		.pic{
			height: 100%;
			padding-right: 50rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
	}
}
</style>