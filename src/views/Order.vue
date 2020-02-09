<template>
  <div class="order">
    <Header title="订单列表"></Header>
    <img src="/img/person.png" alt="">
    <p>登录后查看外卖订单</p>
    <button>立即登录</button>
  </div>
</template>

<style type="text/css" lang="scss">
.order {
  position: relative;
  img {
    width: 60%;
    position: absolute;
    top: 150px;
    left: 80px;
  }
  p {
    color: #666;
    font-size: 18px;
    position: absolute;
    top: 375px;
    left: 110px;
  }
  button {
   padding: 10px 20px;
   background-color: #02A774;
   border: none;
   color: white;
   font-size: 15px;
   border-radius: 5%;
   text-align: center;position: absolute;
   top: 404px;
   left: 145px;
  }
}
</style>
<script type="text/javascript">
	// 引入header
  import Header from '../components/Header';
	// 组件
	export default {
		// 注册组件
		components: { Header }
	}
</script>