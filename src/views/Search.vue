<template>
  <section class="search">
    <Header title="搜索 "></Header>
    <div class="search_form" @submit.prevent="search">
      <input type="search" placeholder="请输入商家名称" v-model="keyword" />
      <input type="submit" class="search_submit">
    </div>
    <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <!--:to="'/shop?id='+item.id"-->
        <router-link
          :to="{path:'/detail', query:{id:item.id}}"
          tag="li"
          v-for="item in searchShops"
          :key="item.id"
          class="list_li"
        >
          <section class="item_left">
            <img src="/img/nav/12.jpg" class="restaurant_img" />
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.name}}</span>
              </p>
              <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>

    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </section>
</template>

<style type="text/css" lang="scss">
.search_form {
  padding: 20px 10px;
  input {
    padding: 17px 10px;
    background-color: #f2f2f2;
    font-size: 15px;
    font-weight: bold;
    border: none;
    outline: none;
    height: 35px;
    width: 75%;
  }
  .search_submit {
    background-color: #02a774;
    width: 80px;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 7px 15px;
    border-radius: 5%;
    position: absolute;
    top: 70px;
    right: 10px;
  }
}
.list {
  .list_container {
    background-color: #fff;
    .list_li {
      display: flex;
      justify-content: center;
      padding: 10px;
      border-bottom: 1px solid #666;
      .item_left {
        margin-right: 10px;
        .restaurant_img {
          width: 50px;
          height: 50px;
          display: block;
        }
      }
      .item_right {
        font-size: 12px;
        flex: 1;
        .item_right_text {
          p {
            line-height: 12px;
            margin-bottom: 6px;
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}
.search_none {
  margin: 0 auto;
  color: #333;
  background-color: #fff;
  text-align: center;
  margin-top: 0.125rem;
}
</style>

<script type="text/javascript">
import { mapState } from "vuex";
import Header from "../components/Header";
// 组件
export default {
  // 注册组件
  components: { Header },
  data() {
    return {
      keyword: "",
      // imgBaseUrl: "http://cangdu.org:8001/img/",
      noSearchShops: false
    };
  },
  
  computed: {
    ...mapState(["searchShops"])
  },
  methods: {
    search() {
      // 得到搜索关键字
      let keyword = this.keyword.trim();
      console.log(this.keyword)
      // 进行搜索
      if (keyword) {
        this.$store.dispatch("searchShops", keyword);
      }
      console.log(111)
    }
  },
  watch: {
    searchShops(value) {
      if (!value.length) {
        // 没有数据
        this.noSearchShops = true;
      } else {
        // 有数据
        this.noSearchShops = false;
      }
    }
  }
};
</script>