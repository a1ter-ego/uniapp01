<template>
	<view class="detailLayout">
		<view class="soupDetail">
			<soup-tab-group></soup-tab-group>
			<soup-text-content lookState="true"></soup-text-content>
		</view>
		
		<view class="comment">
			<view class="list">
				<view class="row">
					<comment-item></comment-item>
				</view>
			</view>
		</view>
		
		<view class="interactive">
			<interactive-bar :type="1"></interactive-bar>
			<view class="safe-area-bottom">
				
			</view>
		</view>
		
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.detailLayout{
	.soupDetail{
		padding: 50rpx 30rpx;
		border-bottom: 10rpx solid #f7f7f7;
	}
	.comment{
		
	}
	.interactive{
		position:fixed;
		width: 100%;
		bottom:0;
		left: 0;
		background: #fff;
		border-top: 1px solid #e4e4e4;
	}
}
</style>
