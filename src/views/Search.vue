<template>
  <div>
    <Header title="搜索 "></Header>
    <div class="search">
      <input type="search" placeholder="请输入商家名称"/>
      <button>提交</button>
    </div>
    
  </div>
</template>

<style type="text/css" lang="scss">
.search {
  padding: 20px 10px;
  input {
    padding: 17px 10px;
    background-color: #F2F2F2;
    font-size: 15px;
    font-weight: bold;
    border:none;
    outline: none;
    height: 35px;
    width: 75%;
  }
 button {
   background-color: #02A774;
   border: none;
   color: white;
   font-size: 16px;
   font-weight: bold;
   padding: 7px 15px;
   border-radius: 5%; 
   margin-left: 10px;
 }
}
</style>

<script type="text/javascript">
import Header from '../components/Header';
	// 组件
	export default {
		// 注册组件
		components: { Header }
	}
</script>