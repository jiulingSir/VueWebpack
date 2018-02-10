<template>
  <div id="Subuser">   
    <mt-header title="注册成为子用户" fixed>
	  <router-link to="/personal" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header>
	<div class="userimg">
		<img src="../../assets/images/personal02.png">
		<p class="userTip">扫码申请成为子用户</p>
	</div>
  </div>
</template>

<script type="es6">
export default { 
  name: 'app',
  data(){
  	return{  
  	}
  }, 
  created(){   
  },
  methods: {  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  type="text/less"> 
@font-size-width: 75;  
#Subuser{
    min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*/
	    background: #fff;  
	} 
	.userimg{
		margin-top: 93px;
		background-color: #fff;
			padding-top: 85px;
		height: 700px;
		img{
			width: 470px;
			height: 470px;
			display: block;
			margin:0 auto;
			margin-bottom: 40px;
		}
		p{
			text-align: center;
		}
		.userTip{
			font-size: 14px;/*no*/
		}
	}
}  
</style>