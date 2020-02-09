<template>
  <div class="product-page">
    <div class="product-item">
      <img src="/img/nav/12.jpg" alt />
      <div class="product-middle">
        <router-link tag="h1" :to="'/detail/' + data.id" class="product-logo"><span class="logo">品牌</span>&nbsp;<span>{{data.name}}</span></router-link>
        <ul>
          <li class="first">评分 {{data.rating}}</li>
          <li class="second">月售{{data.recent_order_num}}单</li>
        </ul>
         <p class="three">{{data.float_minimum_order_amount}}￥起送 / 配送费约￥{{data.float_delivery_fee}}</p>
      </div>
      <div class="four">
          <p class="waimai">{{data.delivery_mode.text}}</p>
      </div>
    </div>
  </div>
</template>

<style type="text/css" lang="scss">
.product-page {
   background-color: #fff; 
   .product-item {
       position: relative;
       height: 100px;
       border-bottom:1px solid #f3f3f3;
       padding: 10px 0;
       display: flex;
    //    justify-content: space-around;
       img {
           width: 25%;
           height: 100%;
       }
       .product-middle {
           margin: 20px 5px;
           h1 {
               font-size: 15px;
               .logo {
                    font-size: 11px;
                    padding: 0px 3px;
                    background-color:gold;
                    border-radius: 10%;
               }
           }
           ul {
               display: flex;
               margin-top: 10px;
               .first {
                   color: #FF9900;
                   font-size: 12px;
                   font-weight: bold;
               }
               .second {
                   color: #666;
                   font-size: 10px;
                   margin-left: 5px;
                   margin-top: 2px;
               }
           }
       }
       .three {
           color: #666;
           font-size: 12px;
           margin-top: 10px;
       }
       .four {
           width: 30%;
            .waimai {
                color: #02A774;
                font-size: 12px;
                border: solid 1px #02A774;
                width: 50px;
                margin-top: 50px;
                position: absolute;
                right: 15px;
            }
       }
   }
}
</style>

<script type="text/javascript">
// 组件
export default {
  // 接收数据
  props: ["data"]
};
</script>
