<template>
  <div>
    <div class="goods">
      <!-- 左侧菜单栏 -->
      <div class="menu">
        <ul>
          <li
            class="menu-item"
            v-for="(item, index) in goods"
            :key="index"
            :class="{current: index===currentIndex}"
            @click="clickMenuItem(index)"
          >
            <span class="text bottom-border-1px">
              <img class="icon" :src="item.icon" v-if="item.icon" />
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <!-- 右侧食物栏 -->
      <div class="foods">
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(item, index) in goods" :key="index">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li
                class="food-item bottom-border-1px"
                v-for="(food, index) in item.foods"
                :key="index"
                @click="showFood(food)"
              >
                <div class="icon">
                  <img width="57" height="57" :src="food.icon" />
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style type="text/css" lang="scss">
.goods {
  display: flex;
  position: absolute;
  top: 207px;
  bottom: 46px;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  .menu {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    .menu-item {
      display: table;
      height: 54px;
      width: 56px;
      padding: 0 12px;
      line-height: 14px;
      &.current {
        position: relative;
        z-index: 10;
        margin-top: -1px;
        background: #fff;
        color: green;
        font-weight: 700;
        .text {
          border: none;
        }
      }
      .icon {
        display: inline-block;
        vertical-align: top;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        margin-top: 2px;
      }
      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        border-bottom: 1px solid (rgba(7, 17, 27, 0.1));
        font-size: 12px;
      }
    }
  }
}
</style>

<script type="text/javascript">
// 组件
export default {
  // 接收数据
  props: ["goods"],
  computed: {
    // 计算得到当前分类的下标
    currentIndex(index) {
      return index;
    }
  },
  // 点击方法
  methods: {
    // 点击menu显示显示相关商品，切换位置
    clickMenuItem() {},
    showFood() {}
  }
};
</script>