<template>
  <div id="Carbind">   
    <mt-header title="我的地址" fixed>
	  <router-link to="/personal" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header>
	<div class="addresslist">
		<p class="addressItem">
	       <router-link to="/childAddress/update"> 
		     <span class="address-logo"><i class="fa fa-check-circle"></i></span>
		     <span class="address-info">
		      <span class="info-type">张程程 12048878781</span>
		     <span class="info-intro">广东省梅州市梅江区xxxxx</span>	
		     </span> 
		     <span class="fa fa-edit"></span> 
		   </router-link>
	     </p>
	</div>
	<mt-button @click="to" size="large" type="primary" class='addAddress'>新增地址 </mt-button>
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
    to(){
    	this.$router.push('/childAddress/add');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  type="text/less"> 
@font-size-width: 75;  
#Carbind{
    min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*/
	    background: #fff;  
	    border-bottom: 1px solid #eee;
	} 
	.addresslist{
		margin-top: 88px;
		background-color: #fff; 
	    .addressItem{
			height: 70px;
			line-height: 70px;
			background-color: #fff;
			padding: 18px 0;
			padding-left: 26px ;
			padding-right: 30px;
			margin-top: 4px;
			a{display: block;height:70px; }
			.address-logo{
				.fa-check-circle{
					float: left;
					line-height: 70px;
					color: #979797;
					font-weight: normal;
				}
			} 
			.fa-edit{
				float: right;
				line-height: 70px;
				margin-top: 2px;
			}
			.fa{
				font-size: 20px;/*no*/
			}
			[data-dpr="2"].fa{
				font-size: 20px;/*no*/
			}
			[data-dpr="3"].fa{
				font-size: 20px;/*no*/
			}
			.address-logo{
				margin-right:36px;
			}
			.address-info{    
				line-height: 40px!important;
				.info-type{
					display: block;
					font-size: 30px;
				}
				.info-intro{
					display: block;
				    color: rgb(151, 151, 151);
				    font-size: 24px;
				}
			}
			.address-logo,.address-info{
				line-height: 70px;
				display: inline-block;
				float: left;
			} 
	    }
	}
	.addAddress{
		height: 98px;
		position: fixed;
		bottom: 0;
		z-index: 100;
		line-height: 88px;
		font-size: 30px;
		color: #333;
		background-color: #fede00;
		a{display: block;}
	}
}  
</style>