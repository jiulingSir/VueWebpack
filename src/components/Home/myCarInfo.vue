<template>
  <div id="CarInfo">   
    <mt-header title="车辆信息" fixed>
	  <router-link to="/mycar" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header>
	<form id="CarForm">
		<mt-field label="Tesla品牌" v-model="username" disabled ></mt-field>
		<mt-field label="Tesla账号" disabled></mt-field>
        <mt-field label="Tesla密码" disabled></mt-field>
        <mt-field label="车牌号码" disabled></mt-field>
        <mt-field label="车辆型号" disabled></mt-field>
        <mt-field label="登记人姓名" disabled></mt-field>
        <mt-field label="状态" disabled v-if="status"></mt-field>
	     <div class="fileinfos">
	       <p class="file-title">车辆登记文件</p>
	       <span class="filespan">
	        <img src="../../assets/images/home-myCarInfo01.png" class="addimg">  
	      </span>   
	     </div>  
	</form>
  </div>
</template>

<script type="es6">
export default { 
  name: 'app',
  data(){
  	return{ 
  		username:"特斯拉",
  		status:""
  	}
  }, 
  created(){  
  	this.$destroy(); 
  	if(this.$route.params.id=="1"){
  		this.status=true
  	}else{
  		this.status=false
  	}
  },
  methods: {    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  type="text/less"> 
@font-size-width: 75; 
#CarInfo{
    // min-height: 1100px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*//*no*/ 
	}
  [data-dpr="2"].mint-header-title{
  font-size: 40px; /*no*//*no*/
  }
  [data-dpr="3"].mint-header-title{
  font-size: 60px; /*no*//*no*/
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
				  font-size: 15px;	/*no*/
				}
				.mint-field-core{
					margin-left: 19px;
					margin-top: 10px;
					background-color: #fff;
				}
			  [data-dpr="2"].mint-cell-text,[data-dpr="2"].mint-field-core{
			  font-size: 30px; /*no*/
			  }
			  [data-dpr="3"].mint-cell-text,[data-dpr="2"].mint-field-core{
			  font-size: 45px; /*no*/
			  }
			} 
		}
		.mint-field:nth-child(6){
			.mint-cell-title{
				width: 170px;
			}
		}
	    .fileinfos{
	      overflow: hidden; 
	      min-height: 262px;
	      background-color: #fff;
	      border-top: 1px solid #ddd; 
	      padding: 30px;
	      .file-title{
	      	margin-bottom: 42px;
	      	font-size: 30px;
	      }
	      .filespan{
	        position: relative;
	        float: left;
	        width: 99px;
	        margin: 0 .3rem;
	        .addimg{
	          width: 272px;
	          display: block;
	          height: 178px;
	        }
	        input{
	          position:absolute;
	          bottom:0;
	          width: 99px;
	          height: 99px;
	          opacity:0;
	        }  
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
		  font-size: 30px; /*no*/
		  }
		  [data-dpr="3"].mint-button-text{
		  font-size: 45px; /*no*/
		  }
	    } 
	}
}  
</style>