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
        <img class="content-image" :src="list.avatar" alt />
        <div class="shop">
          <h2 class="shop-title">
            <span class="shop-logo">品牌</span>
            <span class="shop-name">{{list.name}}</span>
          </h2>
          <div class="shop-message">
            <span class="shop-message-detail">{{list.score}}</span>
            <span class="shop-message-detail">月售{{list.sellCount}}单</span>
            <span class="shop-message-detail">{{list.description}}&nbsp;约{{list.deliveryTime}}分钟</span>
            <span class="shop-message-detail">距离{{list.distance}}</span>
          </div>
        </div>
      </div>
      <!-- 优惠部分 -->
      <div class="shop-discounts" v-if="list.supports" @click="toggleSupportShow">
        <div class="discounts-left">
          <div class="activity" :class="supportClasses[list.supports[0].type]">
            <span class="content-tag">
              <span class="mini-tag">{{list.supports[0].name}}</span>
            </span>
            <span class="activity-content ellipsis">{{list.supports[0].content}}</span>
          </div>
        </div>
        <div class="discounts-right">{{list.supports.length}}个优惠</div>
      </div>
      <!--展开详情部分  -->
      <transition name="fade">
        <div class="shop-brief-modal" v-show="shopShow">
          <div class="brief-modal-content">
            <h2 class="content-title">
              <span class="content-tag">
                <span class="mini-tag">品牌</span>
              </span>
              <span class="content-name">{{list.name}}</span>
            </h2>
            <ul class="brief-modal-msg">
              <li>
                <h3>{{list.score}}</h3>
                <p>评分</p>
              </li>
              <li>
                <h3>{{list.sellCount}}单</h3>
                <p>月售</p>
              </li>
              <li>
                <h3>{{list.description}}</h3>
                <p>约{{list.deliveryTime}}分钟</p>
              </li>
              <li>
                <h3>{{list.deliveryPrice}}元</h3>
                <p>配送费用</p>
              </li>
              <li>
                <h3>{{list.distance}}</h3>
                <p>距离</p>
              </li>
            </ul>
            <h3 class="brief-modal-title">
              <span>公告</span>
            </h3>
            <div class="brief-modal-notice">{{list.bulletin}}</div>
            <div class="mask-footer" @click="toggleShopShow">
              <span class="iconfont icon-close">X</span>
            </div>
          </div>
          <div class="brief-modal-cover"></div>
        </div>
      </transition>
      <!-- 优惠详情 -->
      <transition name="fade">
        <div class="activity-sheet" v-show="supportShow">
          <div class="activity-sheet-content">
            <h2 class="activity-sheet-title">优惠活动</h2>
            <ul class="list">
              <li
                class="activity-item"
                v-for="(item, index) in list.supports"
                :key="index"
                :class="supportClasses[item.type]"
              >
                <span class="content-tag">
                  <span class="mini-tag">{{item.name}}</span>
                </span>
                <span class="activity-content">{{item.content}}</span>
              </li>
            </ul>
            <div class="activity-sheet-close" @click="toggleSupportShow">
              <span>X</span>
            </div>
          </div>
          <div class="activity-sheet-cover"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style type="text/css" lang="scss">
// 引入样式
@import "../base.scss";
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
          position: relative;
          .shop-logo {
            position: absolute;
            width: 26px;
            height: 18px;
            left: 58px;
            top: 5px;
            font-size: 10px;
            padding: 0px 3px;
            background-color: gold;
            border-radius: 10%;
            text-align: center;
            line-height: 21px;
          }
          .shop-name {
            font-size: 20px;
            &:after {
              @include arrow(8px, #545454);
              content: "";
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
    // 优惠部分
    .shop-discounts {
      display: flex;
      border-radius: 1px;
      border: 1px solid #eee;
      align-items: center;
      font-size: 11px;
      padding: 5px 7px;
      color: #666;
      margin: -120px 30px;
      .discounts-left {
        flex: 1;
        .activity {
          display: flex;
          align-items: center;
          .content-tag {
            border-radius: 1px;
            width: 25px;
            height: 13px;
            margin-right: 5px;
            color: #fff;
            font-weight: 700;
            position: relative;
            background-color: rgb(112, 188, 70);
            .mini-tag {
              position: absolute;
              top: 0;
              left: 0;
              right: -100%;
              bottom: -100%;
              font-size: 18px;
              font-weight: 600;
              transform: scale(0.5);
              transform-origin: 0 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
      .discounts-right {
        width: 50px;
        &:after {
          @include arrow(5px, #6e6e6e, top);
          content: "";
          position: absolute;
          top: 153px;
          right: 36px;
        }
      }
    }
    // 展开详情部分
    .shop-brief-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 52;
      flex-direction: column;
      color: #333;
      &.fade-enter-active,
      &.fade-leave-active {
        transition: opacity 0.5s;
      }
      &.fade-enter,
      &.fade-leave-to {
        opacity: 0;
      }
      .brief-modal-cover {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
      }
      .brief-modal-content {
        position: relative;
        width: 80%;
        padding: 25px 20px;
        border-radius: 5px;
        background-color: #fff;
        z-index: 99;
        display: flex;
        flex-direction: column;
        .content-title {
          font-size: 20px;
          line-height: 24px;
          font-weight: 700;
          white-space: nowrap;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          .content-tag {
            border-radius: 2px;
            background-image: linear-gradient(90deg, #fff100, #ffe339);
            width: 36px;
            height: 18px;
            margin-right: 10px;
            color: #6a3709;
            font-style: normal;
            position: relative;
            .mini-tag {
              position: absolute;
              left: 0;
              top: 0;
              right: -100%;
              bottom: -100%;
              font-size: 24px;
              transform: scale(0.5);
              transform-origin: 0 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
        .brief-modal-msg {
          display: flex;
          margin: 20px -10px 0;
          li {
            flex: 1;
            text-align: center;
            h3 {
              font-size: 15px;
              font-weight: 600;
              color: #333;
              margin-bottom: 8px;
            }
            p {
              font-size: 12px;
              color: #999;
            }
          }
        }
        .brief-modal-title {
          position: relative;
          text-align: center;
          margin: 15px auto 15px;
          width: 85px;
          background-image: linear-gradient(90deg, #fff, #333 50%, #fff);
          background-size: 100% 1px;
          background-position: 50%;
          background-repeat: no-repeat;
          span {
            font-size: 12px;
            padding: 0 6px;
            color: #999;
            font-weight: normal;
            background-color: #fff;
            overflow-y: auto;
          }
        }
        .brief-modal-notice {
          font-size: 13px;
          line-height: 1.54;
          color: #333;
        }
        .mask-footer {
          position: absolute;
          bottom: -60px;
          left: 50%;
          padding: 6px;
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          transform: translateX(-50%);
          width: 15px;
          height: 15px;
          text-align: center;
          line-height: 15px;
          span {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
    }
	// 优惠详情部分
	.activity-sheet {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 99; 
		.activity-sheet-content {
			position: absolute;
			background-color: #f5f5f5;
			box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, .4);
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 100;
			padding: 20px 30px;
			box-sizing: border-box;
			transition: transform .2s;
			will-change: transform;
			color: #333;
			.activity-sheet-title {
				text-align: center;
				font-size: 20px;
				font-weight: 600;
				margin-bottom: 20px;
			}
			.list {
				font-size: 16px;
				height: 160px;
				overflow-y: auto;
				.activity-item {
					margin-bottom: 12px;
					display: flex;
					font-size: 13px;
					align-items: center;
					&.activity-green {
						.content-tag {
							background-color: rgb(112, 188, 70);
						}
					}
					&.activity-red {
						.content-tag {
							background-color: rgb(240, 115, 115);
						}
					}
					&.activity-orange {
						.content-tag {
							background-color: rgb(241, 136, 79);
						}
					}
					.content-tag {
						display: inline-block;
						border-radius: 2px;
						width: 36px;
						height: 18px;
						margin-right: 10px;
						color: #fff;
						font-style: normal;
						position: relative;
						.mini-tag {
							position: absolute;
							left: 0;
							top: 0;
							right: -100%;
							bottom: -100%;
							font-size: 24px;
							transform: scale(.5);
							transform-origin: 0 0;
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
				}
			}
			.activity-sheet-close {
				position: absolute;
				right: 6px;
				top: 10px;
				width: 25px;
				height: 25px;
				span {
					font-size: 20px;
				}
			}
		}
		.activity-sheet-cover {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-color: rgba(0, 0, 0, .5);
		}
	}
  }
  //购物车
  .buyCar {
    z-index: 90;
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
  // 接收数据
  props: ["list"],
  // 数据
  data() {
    return {
      supportClasses: ["activity-green", "activity-red", "activity-orange"],
      shopShow: false,
      supportShow: false
    };
  },
  methods: {
    // 点击显示的方法
    toggleShopShow() {
      this.shopShow = !this.shopShow;
    },
    toggleSupportShow() { this.supportShow = !this.supportShow },
  },
};
</script>