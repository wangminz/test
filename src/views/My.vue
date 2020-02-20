<template>
  <div class="my">
    <Header title="我的"></Header>
     <div class="top">
       <img class="image" src="/img/my.png" alt="">
       <ul>
         <router-link tag="li" to="/login" class="login">登录/注册</router-link>
         <li class="number"><img src="/img/phone.png" alt=""><p>暂无绑定手机号</p></li>
       </ul>
       <span class="left">></span>
     </div>
     <div class="point">
       <div>
         <h1>0.00<span>元</span></h1>
         <p>我的余额</p>
       </div>
       <div class="my-sale">
         <h1 class="sale">0<span>个</span></h1>
         <p>我的优惠</p>
       </div>
       <div>
         <h1 class="star">0<span>分</span></h1>
         <p>我的积分</p>
       </div>
     </div>
     <ul class="list">
         <li>我的订单</li>
         <li>积分商城</li>
         <li>外卖会员卡</li>
         <li>服务中心</li>
     </ul>
  </div>
</template>

<style type="text/css" lang="scss">
.my {
  .top {
    border-top: 1px solid #fff;
    background-color: #02A774;
    display: flex;
    padding: 10px;
   .image {
     width: 20%;
     border-radius: 50%;
     background-color: #999;
   }
   ul {
     color: #fff;
     margin-top: 10px;
     margin-left:15px;
     .login {
       font-size: 18px;
       font-weight: bold;
     }
     .number {
       font-size: 15px;
       margin-top: 5px;
       margin-left: -4px;
       height: 25px;
       display:flex;
       img {
         width: 20px;
         vertical-align: middle;
       }
       p {
         margin-left:2px;
         padding: 2px 0;
         line-height: 25px;
       }
     }
   }
   .left {
     color: #fff;
     font-size: 18px;
     margin-top: 28px;
     margin-left: 115px;
   }
  }
}
.point {
  display: flex;
  justify-content: space-evenly;
  border-bottom:1px solid #F1F1F1;
  div {
    width:33%;
    text-align: center;
    padding: 10px 3px;
  }
  .my-sale {
    border-left:1px solid #F1F1F1;
    border-right:1px solid #F1F1F1;
  }
  h1 {
    color:#FF9900;
    span {
      color: black;
      font-weight: normal;
      font-size: 15px;
    }
  }
  p {
    color: #666;
    
  }
  .sale {
    color:#FF5F3E;
  }
  .star {
    color:#6AC20B;
  }
}
.list {
  margin-top: 10px;
  border-top:1px solid #F1F1F1;
  li {
    padding: 10px 20px;
    border-bottom:1px solid #F1F1F1;
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