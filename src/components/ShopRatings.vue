<template>
  <!-- 用户评价 -->
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <!-- 上部分 -->
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{info.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家99%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <!-- <Star :score="info.serviceScore" :size="36" /> -->
            <span class="score">{{info.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <!-- <Star :score="info.foodScore" :size="36" /> -->
            <span class="score">{{info.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{info.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <!-- 分隔栏 -->
      <div class="split"></div>
      <!-- 下部分 -->
      <div class="ratingselect">
        <div class="rating-type">
          <span class="block positive" :class="{active: selectType===2}" @click="setSelectType(2)">
            全部
            <span class="count">{{ratings.length}}</span>
          </span>
          <span class="block positive" :class="{active: selectType===0}" @click="setSelectType(0)">
            满意
            <span class="count">{{positiveSize}}</span>
          </span>
          <span class="block negative" :class="{active: selectType===1}" @click="setSelectType(1)">
            不满意
            <span class="count">{{ratings.length-positiveSize}}</span>
          </span>
        </div>
        <div class="switch" :class="{on: onlyShowText}" @click="toggleOnlyShowText">
          <img src="/img/duihao.png" class="icon-check_circle" />
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <!-- 评价内容 -->
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(rating, index) in filter" :key="index">
            <div class="avatar">
              <img :src="rating.avatar" />
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <span class="delivery">购买量 : {{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend">
                <img
                  src="/img/good.png"
                  class="iconfont"
                  :class="rating.rateType===0 ? 'icon-thumb_up' : 'icon-thumb_down'"
                />
                <span class="item" v-for="(item, index) in rating.recommend" :key="index">{{item}}</span>
              </div>
              <div class="time">{{rating.rateTime | formatDate }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template> 

<style lang="scss">
.ratings {
  position: absolute;
  top: 208px;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  // 上部分
  .overview {
    display: flex;
    padding: 18px 0;
    .overview-left {
      flex: 0 0 137px;
      padding: 6px 0;
      width: 137px;
      border-right: 1px solid rgba(7, 17, 27, 0.1);
      text-align: center;
      .score {
        margin-bottom: 6px;
        line-height: 28px;
        font-size: 24px;
        color: rgb(255, 153, 0);
      }
      .title {
        margin-bottom: 8px;
        line-height: 12px;
        font-size: 12px;
        color: rgb(7, 17, 27);
      }
      .rank {
        line-height: 10px;
        font-size: 10px;
        color: rgb(147, 153, 159);
      }
    }
    .overview-right {
      flex: 1;
      padding: 6px 0 6px 24px;
      .score-wrapper {
        margin-bottom: 8px;
        font-size: 0;
        .title {
          display: inline-block;
          line-height: 18px;
          vertical-align: top;
          font-size: 12px;
          color: rgb(7, 17, 27);
        }
        .star {
          display: inline-block;
          margin: 0 12px;
          vertical-align: top;
        }
        .score {
          display: inline-block;
          line-height: 18px;
          vertical-align: top;
          font-size: 12px;
          color: rgb(255, 153, 0);
        }
      }
      .delivery-wrapper {
        font-size: 0;
        .title {
          line-height: 18px;
          font-size: 12px;
          color: rgb(7, 17, 27);
        }
        .delivery {
          margin-left: 12px;
          font-size: 12px;
          color: rgb(147, 153, 159);
        }
      }
    }
  }
  // 分隔栏
  .split {
    width: 100%;
    height: 16px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    background: #f3f5f7;
  }
  .ratingselect {
    .rating-type {
      padding: 18px 0;
      margin: 0 18px;
      border: 1p rgba(7, 17, 27, 0.1);
      font-size: 0;
      .block {
        display: inline-block;
        padding: 8px 12px;
        margin-right: 8px;
        line-height: 16px;
        border-radius: 1px;
        font-size: 12px;
        color: rgb(77, 85, 93);
        background: rgba(77, 85, 93, 0.2);
        &.active {
          background: #02a774;
          color: #fff;
        }
        .count {
          margin-left: 2px;
          font-size: 8px;
        }
      }
    }
    .switch {
      padding: 12px 18px;
      line-height: 24px;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      color: rgb(147, 153, 159);
      font-size: 0;
      &.on {
        .icon-check_circle {
          color: #02a774;
        }
      }
      .icon-check_circle {
        display: inline-block;
        vertical-align: middle;
        margin-right: 4px;
        width: 20px;
        margin-top: 2px;
      }
      .text {
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
      }
    }
  }
  // 评价内容
  .rating-wrapper {
    padding: 0 18px;
    .rating-item {
      display: flex;
      padding: 18px 0;
      border-bottom: 1px rgba(7, 17, 27, 0.1);
      .avatar {
        flex: 0 0 28px;
        width: 28px;
        height: 28px;
        margin-right: 12px;
        img {
          border-radius: 50%;
        }
      }
      .content {
        position: relative;
        flex: 1;
        margin-left: 10px;
        .name {
          margin-bottom: 4px;
          line-height: 12px;
          font-size: 10px;
          color: rgb(7, 17, 27);
        }
        .star-wrapper {
          margin-bottom: 6px;
          font-size: 0;
          .delivery {
            display: inline-block;
            vertical-align: top;
            line-height: 12px;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }
        .text {
          margin-bottom: 8px;
          line-height: 18px;
          color: rgb(7, 17, 27);
          font-size: 12px;
        }
        .recommend {
          line-height: 16px;
          font-size: 0;
          .icon-thumb_up,
          .icon-thumb_down,
          .item {
            display: inline-block;
            margin: 0 8px 4px 0;
            font-size: 9px;
          }
          .icon-thumb_up {
            width: 15px;
            vertical-align: middle;
          }
          .icon-thumb_down {
            width: 15px;
          }
          .item {
            padding: 0 6px;
            border: 1px solid rgba(7, 17, 27, 0.1);
            border-radius: 1px;
            color: rgb(147, 153, 159);
            background: #fff;
          }
        }
        .time {
          position: absolute;
          top: 0;
          right: 0;
          line-height: 12px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
      }
    }
  }
}
</style>
<script>
//引入BScroll
import BScroll from "better-scroll";
import { mapState, mapGetters } from "vuex";
// 引入封装的过滤器方法
import { formatDate  } from "../filters/index.js";
// 组件
export default {
  // 接收数据--info
  props: ["info"],
   
  data() {
    return {
      // 是否只显示有文本的
      onlyShowText: true,
      // 选择的评价类型: 0满意, 1不满意, 2全部
      selectType: 2
    };
  },
  // 设置过滤器-调用封装的方法
  filters: {
    formatDate(time) {
    var date = new Date(time);
    return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  },
  mounted() {
    this.$store.dispatch("getShopRatings", () => {
      this.$nextTick(() => {
        new BScroll(this.$refs.ratings, {
          click: true
        });
      });
    });
  },
  computed: {
    // 这里接收数据
    ...mapState(["ratings"]),
    ...mapGetters(["positiveSize"]),
    // 过滤数据
    filter() {
      // 解构数据
      let { ratings, onlyShowText, selectType } = this;
      // 产生一个过滤新数组
      return ratings.filter(rating => {
        // 解构数据
        let { rateType, text } = rating;
        /*
            条件1:
                selectType: 0/1/2---评价类型
                rateType: 0/1
                selectType===2 || selectType===rateType
            条件2
                onlyShowText: true/false
                text: 有值/没值
                !onlyShowText || text.length>0
           */
        return (
          (selectType === 2 || selectType === rateType) &&
          (!onlyShowText || text.length > 0)
        );
      });
    },
    
  },
  // 方法
  methods: {
    // 根据评价类型
    setSelectType(selectType) {
      this.selectType = selectType;
    },
    // 显示相关评价
    toggleOnlyShowText() {
      this.onlyShowText = !this.onlyShowText;
    },
  }
};
</script>