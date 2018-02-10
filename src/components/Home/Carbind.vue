<template>
  <div id="Carbind">   
    <mt-header title="车辆绑定" fixed>
	  <router-link to="/" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header>
	<form id="CarForm">
		<mt-field label="Tesla账号" placeholder="请输入Tesla账号"  ></mt-field>
        <mt-field label="Tesla密码" placeholder="请输入Tesla密码" type="password"></mt-field>
        <mt-field label="车牌号码" placeholder="请输入Tesla车牌号码" type="tel"></mt-field>
        <mt-field label="车辆型号" placeholder="请输入Tesla车型"></mt-field>
        <mt-field label="登记人姓名" placeholder="请输入登记人姓名"></mt-field>
	     <div class="fileinfos">
	       <p class="file-title">上传车辆登记文件</p>
	       <span class="filespan">
	        <img src="../../assets/images/bind-file.png" class="addimg"> 
	        <input type="file" @change="Upload" name="file">
	      </span>  
	       <span class="filespan">
	        <img src="../../assets/images/bind-picture.png" class="addimg"> 
	        <input type="file" @change="Upload" name="file">
	      </span>  
	     </div> 
	     <mt-button class="submit" size="large">确认</mt-button>
	</form>
  </div>
</template>

<script type="es6">
export default { 
  name: 'app',
  data(){
  	return{
  		show:0,
      bottom:true,
      navItem:[{"name":"车辆绑定","link":"/"},{"name":"二维码申请","link":"/"},{"name":"我的车辆","link":"/"},{"name":"联系我们","link":"/"},{"name":"新闻资讯","link":"/"} ],
      service:[{"name":"保险报案","link":"/","intro":"发生交通事故，拨打客服电话4552-000-010","img":"../assets/images/home-service01.png"},{"name":"爱车保养","link":"/","intro":"请前往车辆认证的品牌4S门店保养","img":"../assets/images/home-service02.png"}],
      userid:"",
      i:0
  	}
  }, 
  created(){   
  },
  methods: { 
  	Upload(e){  
         // this.files.push(e.target.files[0]);
         var url=this.getObjectURL(e.target.files[0]);
         console.log(url)
         $(".filespan").eq(this.i).find("img").attr('src',url);
         $(".filespan").eq(this.i).find("input").css("visibility","hidden"); 
         this.i++;  
  	},
    getObjectURL:function(file) {
      var url = null ;
      if (window.createObjectURL!=undefined) { // basic
      url = window.createObjectURL(file) ;
      } else if (window.URL!=undefined) { // mozilla(firefox)
      url = window.URL.createObjectURL(file) ;
      } else if (window.webkitURL!=undefined) { // webkit or chrome
      url = window.webkitURL.createObjectURL(file) ;
      }
      return url ;
      }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  type="text/less"> 
@font-size-width: 75; 
#Carbind{
    // min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*/
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
	    .fileinfos{
	      overflow: hidden; 
	      min-height: 262px;
	      background-color: #fff; 
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
	          width: 99px;
	          display: block;
	          height: 99px;
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
		  font-size: 30px;/*no*/ 
		  }
		  [data-dpr="3"].mint-button-text{
		  font-size: 45px;/*no*/ 
		  }
	    } 
	}
}  
</style>