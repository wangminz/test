<template>
  <!-- 购物车组件 -->
  <div>
    <div class="shoppingCar">
      <div class="content">
        <div class="content-left" @click="toggleShow">
          <div class="logo-wrapper">
            <div class="logo" :class="{highlight: totalCount}">
              <img src="/img/car.png" class="car" alt />
              <i class="icon-shopping_cart" :class="{highlight: totalCount}"></i>
            </div>
            <div class="num" v-if="totalCount">{{totalCount}}</div>
          </div>
          <div class="price" :class="{highlight: totalCount}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥5元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">{{payText}}</div>
        </div>
      </div>
      <!-- 购买清单 -->
      <transition name="move">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="clearCart">清空</span>
          </div>
          <div class="list-content">
            <ul>
              <li class="food" v-for="(food, index) in cartFoods" :key="index">
                <span class="name">{{food.name}}</span>
                <div class="price">
                  <span>￥{{food.price}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <Add :food="food" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <div class="list-mask" v-show="listShow" @click="toggleShow"></div>
  </div>
</template>>

<style type="text/css" lang="scss">
.shoppingCar {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;
  .content {
    display: flex;
    background: #141d27;
    font-size: 0;
    color: rgba(255, 255, 255, 0.4);
    // 购物车左侧内容
    .content-left {
      flex: 1;
      .logo-wrapper {
        display: inline-block;
        vertical-align: top;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        border-radius: 50%;
        background: #141d27;
        .logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          text-align: center;
          background: #2b343c;
          &.highlight {
            background: #02a774;
          }
          .car {
            width: 22px;
          }
          .icon-shopping_cart {
            line-height: 44px;
            font-size: 24px;
            color: #80858a;
            &.highlight {
              color: #fff;
            }
          }
        }
        .num {
          position: absolute;
          top: 0;
          right: 0;
          width: 24px;
          height: 16px;
          text-align: center;
          border-radius: 16px;
          font-size: 9px;
          font-weight: 700;
          color: #fff;
          background: rgb(240, 20, 20);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        }
      }
      .price {
        display: inline-block;
        vertical-align: top;
        margin-top: 5px;
        line-height: 24px;
        padding-right: 12px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 700;
        color: #fff;
        &.highlight {
          color: #fff;
        }
      }
      .desc {
        display: inline-block;
        vertical-align: bottom;
        margin-bottom: 15px;
        margin-left: -45px;
        font-size: 10px;
      }
    }
    // 购物车右侧内容
    .content-right {
      flex: 0 0 105px;
      width: 105px;
      .pay {
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        // 总价不满足起送价
        &.not-enough {
          background: #2b333b;
        }
        // 总价满足起送价
        &.enough {
          background: #00b43c;
          color: #fff;
        }
      }
    }
  }
  .ball-container {
    .ball {
      position: fixed;
      left: 32px;
      bottom: 32px;
      z-index: 200;
      transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
      .inner {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: green;
        transition: all 0.4s linear;
      }
    }
  }
  // 购物清单
  .shopcart-list {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    transform: translateY(-100%);
    // 显隐过程状态
    &.move-enter-active,
    &.move-leave-active {
      transition: transform 0.3s;
    }
    &.move-enter,
    &.move-leave-to {
      transform: translateY(0);
    }
    .list-header {
      height: 40px;
      line-height: 40px;
      padding: 0 18px;
      background: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .title {
        float: left;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }
      .empty {
        float: right;
        font-size: 12px;
        color: rgb(0, 160, 220);
      }
    }
    .list-content {
      padding: 0 18px;
      max-height: 217px;
      overflow: hidden;
      background: #fff;
      .food {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;
        border-bottom: 1px (rgba(7, 17, 27, 0.1));
        .name {
          line-height: 24px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .price {
          position: absolute;
          right: 90px;
          bottom: 5px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(240, 20, 20);
        }
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 6px;
        }
      }
    }
  }
}
.list-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  backdrop-filter: blur(10px);
  opacity: 1;
  background: rgba(7, 17, 27, 0.6);
  &.fade-enter-active,
  &.fade-leave-active {
    transition: all 0.5s;
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
    background: rgba(7, 17, 27, 0);
  }
}
</style>

<script type="text/javascript">
// 引入组件
import Add from "./Add";
// 引入mapState
import { mapState, mapGetters } from "vuex";
import BScroll from "better-scroll";
import { MessageBox } from 'mint-ui'
// 组件
export default {
  // 注册组件
  components: { Add },
  data() {
    return {
      isShow: false
    };
  },
  computed: {
    //  获取getters中数据
    ...mapState(["cartFoods"]),
    // 购买数量，购买价格
    ...mapGetters(["totalCount", "totalPrice"]),
    //购买价格不低于起送价
    payClass() {
      let { totalPrice } = this;
      // 假设起送价为20
      let minPrice = 20;
      //根据价格显示不同背景色
      return totalPrice >= minPrice ? "enough" : "not-enough";
    },
    // 根据购买价格显示内容
    payText() {
      let { totalPrice } = this;
      // 假设起送价为20
      let minPrice = 20;
      // 如果购买价格为0
      if (totalPrice === 0) {
        return `￥${minPrice}元起送`;
        // 如果购买价格少于起送价
      } else if (totalPrice < minPrice) {
        return `还差￥${minPrice - totalPrice}元起送`;
      } else {
        // 如果购买价格满足起送价
        return "结算";
      }
    },
    // 显示购物列表条件
    listShow() {
      //  如果购物车没有食物则不显示
      if (this.totalCount === 0) {
        this.isShow = false;
        return false;
      }
      //
      if (this.isShow) {
        this.$nextTick(() => {
          // 实现BScroll的实例是一个单例
          if (!this.scroll) {
            // 保存
            this.scroll = new BScroll(".list-content", {
              click: true
            });
          } else {
            //重新统计内容的高度
            this.scroll.refresh();
          }
        });
      }
      return this.isShow;
    }
  },
  // 方法
  methods: {
    // 切换显隐
    toggleShow() {
      // 总数大于0
      if (this.totalCount > 0) {
        this.isShow = !this.isShow;
      }
    },
    // 清空购物车
    clearCart() {
      MessageBox.confirm('确定清空购物车吗?').then(action => {
          this.$store.dispatch('clearCart')
        }, () => {});
    }
  }
};
</script>