<template>
  <div id="app">
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style type="text/css">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html,
body {
  background-color: #fff;
}
</style>

<script type="text/javascript">
// 引入mock数据
import './mock/mockServer.js'
// 引入footer
import Footer from "./components/Footer";
// 组件
export default {
  // 注册组件
  components: { Footer },
};
</script>