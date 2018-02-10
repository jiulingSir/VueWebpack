<template>
  <div id="contact">   
    <mt-header :title="title" fixed>
	  <router-link to="/myAddress" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header> 
	<form id="AddressForm">
		<mt-field label="联络人" placeholder="请输入联系人姓名"></mt-field>
		<mt-field label="联络电话" placeholder="请输入联系电话"></mt-field>
		<mt-field label="地址" placeholder="请输入地址"></mt-field>
	    <mt-field class="addressdetail" label="详细地址" type="textarea" rows="3"></mt-field> 	 
	    <mt-button v-if="show" class="submit" size="large">确认</mt-button>  
		<p class="get-status" v-else>
			<mt-button class="recive" size="normal">删除</mt-button>
			<mt-button class="noreceive" size="normal">确认</mt-button>
		</p> 
	</form> 
  </div>
</template>

<script type="es6">
export default { 
  name: 'app',
  data(){
  	return{
  	  show:true,
  	  title:""
  	}
  }, 
  created(){    
  	this.$destroy();
     this.showStatus(); 
  },
  methods: { 
    showStatus(){
		if (this.$route.params.id=="add") {
			this.show=true;
			this.title="新增地址";
		}else{
			this.show=false;
			this.title="修改地址";
		}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  type="text/less"> 
@font-size-width: 75;  
#contact{
    min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*/
	    background: #fff; 
	} 

	form{
		margin-top: 108px;
		.mint-field{
			height: 88px;
			.mint-cell-wrapper{
				padding-left: 20px;
				.mint-cell-title{
					width: 140px;
				}
				.mint-cell-text,.mint-field-core{
				  font-size: 15px;/*no*/	
				}
			  [data-dpr="2"].mint-cell-text,[data-dpr="2"].mint-field-core{
			  font-size: 30px;/*no*/ 
			  }
			  [data-dpr="3"].mint-cell-text,[data-dpr="2"].mint-field-core{
			  font-size: 45px;/*no*/ 
			  }
			} 
		} 
		.addressdetail{
			height: 144px;
		}
		.get-status{
	        padding: 0 65px;
			margin-top: 61px;
			.recive,.noreceive{
				color: rgb(31, 31, 31);
				background:rgb(255, 222, 0);
				width: 238px;
				height: 75px;
				font-size: 15px;/*no*/
			}
			[data-dpr="2"].recive,[data-dpr="2"].noreceive{
				font-size: 30px;/*no*/
			}
			[data-dpr="3"].recive,[data-dpr="3"].noreceive{
				font-size: 45px;/*no*/
			}
			.noreceive{
				float: right;
			}
		}
	    .submit{
	    	width: 80%;
	    	color:#333;
	    	height: 88px;
	    	background-color: rgb(254, 222, 0);
	    	border-radius: 44px;
	    	margin: 0 auto;
	    	margin-top: 39px;
	    	.mint-button-text{
	    		font-size: 15px;/*no*/
	    	}
		  [data-dpr="2"].mint-button-text{
		  font-size: 30px;/*no*/ 
		  }
		  [data-dpr="3"].mint-button-text{
		  font-size: 45px;/*no*/ 
		  }
	    } 
	}
}
</style>