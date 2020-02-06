<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style type="text/css">
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	html,
	body {
		background-color: #f5f5f5;
	}
</style>

<script type="text/javascript">
	// 引入header,footer
  import Footer from './components/Footer';
	// 组件
	export default {
		// 注册组件
		components: { Footer }
	}
</script>