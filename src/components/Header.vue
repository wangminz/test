<template>
  <div class="header">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="title">
      <h1>{{title}}</h1>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<style type="text/css" lang="scss">
    /* 引入样式 */
  @import '../base.scss';
  .header {
		background-color: $navColor;
		color:#fff;
		display:flex;
		height:50px;
		line-height: 50px;
		text-align: center;
		.left,
		.right {
      width: 80px;
      margin-right:10px;
      line-height: 50px;
		}
		.title {
			flex: 1;
			h1 {
				font-size: 24px;
				font-weight: normal;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				text-indent: -5px;
			}
		}
	}
</style>

<script type="text/javascript">
	// 组件
	export default {
		// 接收属性
		props: ['title']
	}
</script>