<template>
  <div id="contact">   
    <mt-header title="联系我们" fixed>
	  <router-link to="/" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header> 
	<mt-cell title="联系方式：" value="xxxx-xxx-xxx"></mt-cell>
    <mt-field class="remark" label="公司简介：" type="textarea" rows="4" disabled></mt-field> 
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
#contact{
    // min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*/
        background: #1b1b1b; 
	} 
	.mint-cell:nth-child(2){
		margin-top:108px;
		height: 88px; 
		.mint-cell-wrapper{
			height: 100%;
		}
		.mint-cell-value{
			flex:3;
		}
	}
	textarea{
		background-color: #fff;
	}
	.mint-cell:nth-child(3){
		height: 319px;
	}
	.remark{
		.mint-cell-title{
			width: 180px;
		}
	}
}
</style>