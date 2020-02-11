<template>
<!-- 商品详情页 -->
  <div class="detail-page">
    <!-- 详情页头部 -->
    <div class="detail-header">
      <!-- 顶部背景图 -->
      <div class="bg-top">
        <img :src="list.bgImg" alt />
        <a class="back" @click="$router.back()">&lt;</a>
      </div>
      <!-- 店铺内容部分 -->
      <div class="top-content" @click="toggleShopShow">
		<img class="content-image" :src="list.avatar" alt="">
		<div class="shop">
			<h2 class="shop-title"><span class="shop-logo">品牌</span><span class="shop-name">{{list.name}}</span></h2>
			<div class="shop-message">
				<span class="shop-message-detail">{{list.score}}</span>
				<span class="shop-message-detail">月售{{list.sellCount}}单</span>
				<span class="shop-message-detail">{{list.description}}&nbsp;约{{list.deliveryTime}}分钟</span>
				<span class="shop-message-detail">距离{{list.distance}}</span>
			</div>
		</div>
      </div>
    </div>
    <!-- 购物车部分 -->
    <div class="buyCar">
      <h1>另需配送费</h1>
    </div>
  </div>
</template>
7
<style type="text/css" lang="scss">
// 引入样式
@import '../base.scss';
.detail-page {
  .detail-header {
	margin-top: -5px;
	// 背景图
    .bg-top {
      img {
        width: 100%;
      }
      .back {
        color: #fff;
        font-size: 30px;
        position: relative;
        top: -125px;
        left: 5px;
      }
	}
	// 店铺内容部分
	.top-content {
		padding: 30px 20px 5px 20px;
		position: relative;
		top: -120px;
     	display: flex;
		text-align: center;
		background-color: #fff;
		.content-image {
        	position: absolute;
        	top: 0;
        	left: 50%;
        	width: 66px;
        	height: 66px;
        	border-radius: 2px;
        	margin-left: -33px;
        	margin-top: -30px;
		}
		.shop {
			flex: 1;
			width: 70%;
			margin: 5px 10px;
			text-align: center;
			.shop-title {
				line-height: 24px;
				position:relative;
				.shop-logo {
					position: absolute;
					width: 26px;
					height:18px;
					left: 58px;
					top: 5px;
					font-size: 10px;
                    padding: 0px 3px;
                    background-color:gold;
					border-radius: 10%;
					text-align: center;
					line-height: 21px;
				}
				.shop-name {
					font-size: 20px;
					&:after {
					@include arrow(8px, #545454);
					content: '';
					position: absolute;
					top: 7px;
					right: 60px;
				}
				}
			}
			.shop-message {
				color: #333;
				font-size: 12px;
				margin-top: 5px;
				.shop-message-detail {
					margin-right: 8px;
				}
			}
		}
	}
  }
	//购物车   
  .buyCar {
    z-index: 100;
    background-color: #141d27;
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>

<script type="text/javascript">
// 组件
export default {
  // 数据
  data() {
    return {
      list: {},
      data: {}
    };
  },
  methods: {
	 toggleShopShow() {

	 },
    // 获取数据方法
    getData() {
      let { params } = this.$route;
      this.$http.get("/data/data.json", { params }).then(({ data }) => {
        console.log(data);
        // 存储数据
        this.list = data.info;
        this.data = data.goods;
        // console.log(this.list)
      });
    }
  },
  // 组件创建完成
  created() {
    // 获取数据
    this.getData();
  },
  // 监听器
  watch: {
    // 路由
    $route() {
      // 获取数据
      this.getData();
    }
  }
};
</script>