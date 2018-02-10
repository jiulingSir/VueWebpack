<template>
  <div id="Apply">   
    <mt-header title="二维码申请" fixed>
	  <router-link to="/" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header>
	<mt-navbar v-model="selected">
	  <mt-tab-item id="1">二维码申请</mt-tab-item>
	  <mt-tab-item id="2">申请列表</mt-tab-item> 
	</mt-navbar>

	<mt-tab-container v-model="selected">
	  <mt-tab-container-item id="1"> 
		<form id="ApplyForm">
			 <p><router-link to="/">
			   <img class="apply-icon" src="../../assets/images/home-apply01.png"> 
			 	<span class="apply-info">
			 		<span class="info-user">张程程 12048878781</span>
			 		<span class="info-address">广东省梅州市梅江区xxxxx</span>
			 	</span>
			 	<span class="fa fa-chevron-right"></span>
			 </router-link></p>
			 <p class="choose" @click="touch"><span class="choose-type">车辆选择</span><span class="choose-info">Model X</span>
			 	<span class="fa fa-chevron-down"></span></p>
             <mt-field label="备注" type="textarea" rows="4"></mt-field>
		     <mt-button class="submit" size="large">确认</mt-button>
		</form> 
	  </mt-tab-container-item>
	  <mt-tab-container-item id="2" class="applist">
	     <p class="listItem">
	       <router-link to="/applyListDetail">
		     <span class="list-num">1.</span>
		     <span class="list-type">Model X</span>
		     <span class="list-info">车辆二维码申请</span>
		     <span class="fa fa-angle-right"></span>
		     <span class="list-status">申请成功</span>
		   </router-link>
	     </p>
	  </mt-tab-container-item> 
	</mt-tab-container>

    <div class="carlist" v-if="showStatus">
    	<ul>
    		<li @click="touchCar('Model X')"><span :class="cicle"><i class="fa fa-circle-o"></i></span> Model X</li>
    	</ul>
    </div>
    <div class="v-modal" style="z-index: 2008;" v-if="showStatus"></div>

  </div>
</template>

<script type="es6">
export default { 
  name: 'app',
  data(){
  	return{
  	 showStatus:false,
  	 cicle:"",
  	 selected:"1"
  	}
  }, 
  created(){    
  },
  methods: { 
   touch(){  
      this.showStatus=true 
   },
   touchCar(){
      this.cicle="cicle";
   	  this.showStatus=false;
   	  this.carname= 'Model X'
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  type="text/less"> 
@font-size-width: 75; 
 #Apply{ 
    // min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px; 
	    font-size: 17px;/*no*/ 
	    background: #fff; 
	} 
	  [data-dpr="2"].mint-header-title{
	  font-size: 34px;/*no*/ 
	  }
	  [data-dpr="3"].mint-header-title{
	  font-size: 51px;/*no*/ 
	  }
	.mint-tab-container{
		border-top: 2px solid #eee;
	}
	.mint-navbar{
		border-top: rgb(77, 77, 77);
		margin-top: 88px;
		border-top: 1px solid #eee;
		margin-bottom: 2px;
	    .mint-tab-item:nth-child(1){
	    	border-right: 1px solid #eee;
	    }
		.mint-tab-item.is-selected{
			border-bottom: 3px solid rgb(254, 222, 0);
	        color: #333!important;
		}
		.mint-tab-item-label{
			font-size: 14px;/*no*/
		}
	}
	form{
		p{
			height: 60px;
			line-height: 60px;
			background-color: #fff;
			padding: 24px 30px;    
			border-bottom: 1px solid #eee;
			a{overflow: hidden; display: block;}
			.apply-icon{
				width: 35px;
                margin-right: 30px; 
                float: left;
               margin-top: 10px;
			}
			.apply-info{
				width: 80%;
				float: left;
				.info-user,.info-address{
					display:  block;
					height: 40px;
					line-height: 40px; 
				}
				.info-user{
					font-size: 15px;/*no*/
				}
				.info-address{
					color: rgb(77, 77, 77);
				}
			}
			.fa{
				font-size: 15px;/*no*/
				float: right;
				color: #C5BFBF;
				line-height: 65px;
			}
		}
		.choose{
			height: 60px;
			line-height: 60px;
			background-color: #fff;
			padding: 24px 30px;
			.mint-cell-title{ 
				color: rgb(98, 98, 98); 
				flex:0;  
			}
			.choose-type{
                font-size: 13px;/*no*/
			}
			.choose-info{
                font-size: 15px;/*no*/
			}
			[data-dpr="2"].choose-type{
				font-size: 26px;/*no*/ 
			}
			[data-dpr="2"].choose-info{
				font-size: 30px;/*no*/ 
			}
			[data-dpr="3"].choose-type {
				font-size: 39px;/*no*/ 
			}	
			[data-dpr="3"].choose-info{
				font-size: 45px;/*no*/ 
			}	
			.choose-info{
				color: rgb(27, 27, 27);
				margin-left: 20px;
			}
		}
		.mint-cell-wrapper{    
			padding-left: 30px;
			padding-left: 30px;
		}
		 .submit{
	    	width: 80%;
	    	color:#333;
	    	height: 88px;
	    	background-color: rgb(254, 222, 0);
	    	border-radius: 44px;
	    	margin: 0 auto;
	    	margin-top: 168px;
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
	.applist{
        .listItem{
			height: 60px;
			line-height: 60px;
			background-color: #fff;
			padding: 24px 30px;
			a{display: block;}
			.list-type{
				margin-right: 20px;
				margin-left: 10px;
				font-size: 30px;
			}
			.list-info{
				color: rgb(151, 151, 151);
				font-size: 24px;
			}
			.list-status{
				margin-right: 5px;
				font-size: 24px;
			}
			.fa,.list-status{
				float: right;
				line-height: 60px;
			}
        }
	}
 }
</style>