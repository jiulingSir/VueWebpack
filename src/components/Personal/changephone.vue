<template>
  <div id="Carbind">   
    <mt-header title="车辆绑定" fixed>
	  <router-link to="/personal" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header>
	<form id="CarForm">
		<mt-field label="手机号" placeholder="请输入手机号码" type="tel"></mt-field> 
        <mt-field label="验证码" placeholder="请输入短信验证码"> 
        	<span v-if="stop" @click="getcode" class="getcode">点击获取</span>
        	<span class="timeout" v-else>重新获取{{time}}</span> 
        </mt-field>  
	     <mt-button class="submit" size="large">确认</mt-button>
	</form>
  </div>
</template>

<script type="es6">
export default { 
  name: 'app',
  data(){
  	return{ 
      stop:true,
      time:60,
      Interval:null
  	}
  }, 
  created(){   
  },
  methods: { 
    getcode(){
       this.stop=false;
       this.Interval=setInterval(this.update,1000);
    },
    update(){
		if (this.time<=0) {
			this.stop=true;
			clearInterval(this.Interval); 
			this.time=60;
		}else{
			this.time--;
		}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  type="text/less"> 
@font-size-width: 75; 
.mint-button--primary{height: .8rem;padding: .2rem!important .16rem;color: #333!important;background-color: #FEDE00}
#Carbind{
    min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*/
	    background: #fff;  
	}
  [data-dpr="2"].mint-header-title{
  font-size: 40px;/*no*/ 
  }
  [data-dpr="3"].mint-header-title{
  font-size: 60px;/*no*/ 
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
		.mint-field:nth-child(5){
			.mint-cell-title{
				width: 170px;
			}
		} 
		.getcode{
			font-size: 12px;/*no*/
			background-color: #fede00;
			padding:12px; 
		}
		.timeout{
			background-color: #FBEC82;
			font-size: 12px;/*no*/
			padding:12px; 
		}
		[data-dpr="2"].getcode,[data-dpr="2"].timeout{
			font-size: 24px;
		}
		[data-dpr="3"].getcode,[data-dpr="3"].timeout{
			font-size: 36px;
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