<template>
  <div id="Move">   
    <mt-header title="移车界面" fixed>
	  <router-link to="/moveStatus" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header>
	<div class="sendInfo">
		 <form>
           <mt-field  type="textarea" rows="4" v-model="info"></mt-field>
           <mt-button type="primary" class="sends">发送</mt-button>
		 </form>
	</div>
  </div>
</template>

<script type="es6">
export default { 
  name: 'app',
  data(){
  	return{  
  	  info:"您好，您的车挡住了道路，造成了交通堵塞，请您快来移车。"
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
#Move{
    min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*/
	    background: #fff;  
	} 
	.sendInfo{
		margin-top: 93px;
		background-color: #fff;
		padding-top: 32px;
		height: 302px;
	    textarea{
	    	border: none;
	    	padding: 0 25px;
	    }
	    .mint-cell {
	    	border: none;
	    }
	    .sends{
	    	width: 210px;
	    	height: 59px;
	    	background-color:#fede00;
	    	text-align: center;
	    	margin:0 auto;
	    	color: rgb(31, 31, 31);
	    	display: block;
	    	border-radius: 30px;
	    }
	}
}  
.footer{
	display: none;
}
</style>