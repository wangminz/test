<template>
  <div class="add">
    <transition name="fade">
      <div class="iconfont icon-remove" v-if="food.count" @click.stop="updateFoodCount(false)">-</div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add" @click.stop="updateFoodCount(true)">+</div>
  </div>
</template>
<style type="text/css" lang="scss">
.add {
  display: flex;
  color: #fff;
  .cart-count {
    color:#02A774;
  }
  .iconfont {
    font-size: 20px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
    &.icon-remove {
      background-color: #02A774;
      margin-right: 8px;
    }
    &.icon-add {
      background-color: #02A774;
      margin-left: 8px;
    }
    // 设置过程
    &.fade-enter-active,
    &.fade-leave-active {
      transition: all .3s;
    }
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
      transform: translateX(15px) rotate(180deg);
    }
  }
}
</style>
<script type="text/javascript">
export default {
  // 接收数据
  props: {
      food: Object
    },
  methods: {
    updateFoodCount(isAdd) {
      //  当点击的时候发送请求 向state中添加count
      this.$store.dispatch("updateFoodCount", { isAdd, food: this.food });
      console.log(this.food);
    }
  }
};
</script>