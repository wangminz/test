<template>
<!-- footer部分 -->
  <div class="footer" v-show="$route.meta.show">
    <a :class="{on: '/home'===$route.path}" @click="goTo('/home')">
      <span>外卖</span>
    </a>
    <a href="javascript:;" :class="{on: '/search'===$route.path}" @click="goTo('/search')">
       <span>搜索</span>
    </a>
    <a href="javascript:;" :class="{on: '/order'===$route.path}" @click="goTo('/order')">
     <span>订单</span>
    </a>
    <a href="javascript:;" :class="{on: '/my'===$route.path}" @click="goTo('/my')">
      <span>我的</span>
    </a>
  </div>
</template>

<style type="text/css" lang="scss">
  @import '../base.scss';
  .footer {
    background-color: $navColor;
    display:flex;
    justify-content: space-around;
    height:50px;
    width: 100px;  
    line-height: 50px;
    position: fixed;
    left:0;
    bottom:0;
    right:0;
    width:100%;
    a {
      &.on {
        span {
          color: #666;
        }
      }
      text-decoration: none;
      span {
        color:#fff;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        show: true
      }
    },
    methods: {
      // 页面切换
      goTo (path) {
        this.$router.replace(path);
      }
    }
  }
</script>