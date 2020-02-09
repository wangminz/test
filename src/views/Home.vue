<template>
  <div>
    <!-- 首页头部 -->
    <Header title="外卖团购">
      <router-link slot="left" to="/search">
        <img src="../../public/img/search.png" alt />
      </router-link>
      <router-link slot="right" to="/" class="header_right" tag="h1">登录|注册</router-link>
    </Header>
    <!-- 首页导航 -->
    <ul class=types>
      <li v-for="item in types" :key="item.id">
        <img :src="'/img/nav/' + item.img" alt="" class="image">
        <p>{{item.text}}</p>
      </li>
    </ul>
    <!-- 附近商家 -->
    <div class="shop-list">
      <img src="/img/home.png" alt="">
      <h2>附近商家</h2>
    </div>
    <Product v-for="item in list" :key="item.id" :data="item"></Product>
  </div>
</template>

<style type="text/css" lang="scss">
img {
  width: 40px;
  margin-top: 5px;
}
.header_right {
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
  color: #f3f3f3;
}
.types {
  background-color: #fff;
  padding: 10px 0 20px;
  display: flex;
	flex-wrap: wrap;
  border-bottom:1px solid #f3f3f3;
  li {
    width: (100%/4);
		text-align: center;
    margin-bottom: 10px;
    .image {
      width: 60%;
    }
    p {
      font-size: 13px;
      color:#888;
    }
  }
}
.shop-list {
  background-color: #fff;
  border-bottom:1px solid #f3f3f3;
  display: flex;
  img {
    width: 22px;
    height: 22px;
    margin-left: 10px;
    vertical-align: middle;
  }
  h2 {
    font-size: 15px;
    font-weight: normal;
    color:#999;
    height: 30px;
    line-height: 30px;
    margin-left: 5px;
  }
}
</style>

<script type="text/javascript">
// 引入Header
import Header from "../components/Header";
import Product from "../components/Product";
// 组件
export default {
  // 注册组件
  components: { Header, Product },
  data() {
    return {
      types: [
        { id: "1", img: "1.jpg", text: "甜品饮品" },
        { id: "2", img: "2.jpg", text: "商超便利" },
        { id: "3", img: "3.jpg", text: "美食" },
        { id: "4", img: "4.jpg", text: "简餐" },
        { id: "5", img: "5.jpg", text: "新店特惠" },
        { id: "6", img: "6.jpg", text: "准时达" },
        { id: "7", img: "7.jpg", text: "预定早餐" },
        { id: "8", img: "8.jpg", text: "土豪推荐" }
      ],
      // 初始化商品列表
      list: []
    }
  },
  // 组件创建完成
  created() {
    // 获取数据
    this.$http
      .get('/data/list.json')
      // 监听数据返回
      .then(({ data }) => {
        // 存储数据
        this.list = data.data;
        console.log(this.list)
      })
  }
};
</script>