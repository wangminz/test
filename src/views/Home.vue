<template>
<!-- 首页头部 -->
  <Header title="外卖团购">
    <router-link slot="left" to="/search">
        <img src="../../public/img/search.png" alt="">
    </router-link>
    <router-link slot="right" to="/" class="header_right" tag="h1">登录|注册</router-link>
  </Header>

</template>

<style type="text/css" lang="scss">
  img {
    width:40px;
    margin-top:5px;
  }
  .header_right {
      font-size: 16px;
      font-weight: normal;
      line-height: 50px;
      color:#f3f3f3
  }
</style>

<script type="text/javascript">
// 引入Header
  import Header from '../components/Header';
  // 组件
	export default {
		// 注册组件
		components: { Header }
	}
</script>