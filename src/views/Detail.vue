<template>
  <div class="detail-page">
    <div>
      <img :src="list.bgImg" alt="">
      <h1>{{list.name}}</h1>
    </div>
      <div class="buyCar">
          <h1>另需配送费</h1>
      </div>
  </div>
</template>

<style type="text/css" lang="scss">
  .buyCar {
    z-index: 100;
    background-color: #141D27;
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>

<script type="text/javascript">
	// 组件
	export default {
    
    // 数据
    data() {
      return {
        list : {},
        data: {}
      }
    },
    methods: {
      // 获取数据方法
      getData() {
        let { params } =this.$route;
        this.$http
            .get('/data/data.json', { params })
            .then(({ data }) => {
              console.log(data);
              // 存储数据
              this.list = data.info;
              this.data = data.goods;
              // console.log(this.list)
              
            })
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
	}
</script>