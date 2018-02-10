<template>
  <div id="myCar">   
    <mt-header title="消息" fixed>  
	</mt-header> 
	 
	<mt-navbar v-model="selected">
	  <mt-tab-item id="1">移车消息</mt-tab-item>
	  <mt-tab-item id="2">系统消息</mt-tab-item> 
	</mt-navbar>

	<mt-tab-container v-model="selected">
	  <mt-tab-container-item id="1"> 
		<p class="messageItem">
	       <router-link to="/myCarInfo"> 
		     <!-- <span class="message-logo"><img src="../../assets/images/message01.png"></span> -->
		     <span class="message-info">
		      <span class="info-type">大众关途</span>
		     <span class="info-intro">广州_消费的唯一认证的大师兄：1000块是我们的优惠。</span>	
		     </span> 
		     <span class="timenum">下午3:00
		     	<!-- <span class="time"></span>
		     	<span class="num">99+</span> -->
		     </span> 
		   </router-link>
	     </p>
	  </mt-tab-container-item>
	  <mt-tab-container-item id="2" >  
		<!-- <p class="messageItem">
	       <router-link to="/myCarInfo"> 
		     <span class="message-logo"><img src="../../assets/images/message01.png"></span>
		     <span class="message-info">
		      <span class="info-type">系统</span>
		     <span class="info-intro">本次使用的信息</span>	
		     </span>  
		     <span class="timenum">
		     	<span class="time">下午3:00</span>
		     	<span class="num">99+</span>
		     </span>
		   </router-link>
	     </p> -->
	  </mt-tab-container-item> 
	</mt-tab-container>

     <mt-tabbar v-if="bottom" class="footer" fixed>
    <mt-tab-item id="首页" class="home"> 
    <router-link to="/"> <span><i class="fa fa-home" aria-hidden="true"></i>
     首页</span>  </router-link>
    </mt-tab-item> 
    <mt-tab-item id="消息" class="message"> 
     <router-link to="/message">   <span><i v-text="num" v-if="num!=0" class="msgNum"></i><i class="fa fa-commenting" aria-hidden="true"></i> 消息</span> </router-link>
    </mt-tab-item> 
    </mt-tab-item>
    <mt-tab-item id="我的" class="personal">  
      <router-link to="/personal">   <span> <i class="fa fa-user" aria-hidden="true"></i>
        我的</span> </router-link>
    </mt-tab-item>
  </mt-tabbar>

  </div>
</template>

<script type="es6">
export default { 
  name: 'app',
  data(){
  	return{
  	 selected:"1",
      show:3,
      bottom:true,
      num:"",
  	 value:true
  	}
  }, 
  created(){    
  },
  methods: { 
    shows(num,link){
      this.show=num; 
      this.$router.push(link);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  type="text/less"> 
@font-size-width: 75;  
#myCar{
    // min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*/
	    background: #fff; 
	} 
	.mint-navbar{
		border-top: rgb(77, 77, 77);
		margin-top: 88px;
		border-top: 1px solid #eee;
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

    .messageItem{
		height: 77px;
		// line-height: 77px;
		background-color: #fff;
		padding: 24px 30px;
		margin-top: 4px;
		a{display: block;height:77px; }
		.message-logo{
			margin-right: 21px;
			img{
				width: 68px;
				height: 68px;
			}
		}  	 
		.timenum{  
			float: right; 
			height: 77px;
			line-height: 77px;
			.time{
				color: rgb(151, 151, 151);
				font-size: 20px;
				display: block; 
				margin-bottom: 10px;
			}
			.num{
				padding: 5px 18px;
				background-color: rgb(252, 46, 46);
				color: #fff;
				border-radius: 10px;
				margin-left: 10px;
			}
		}
		[data-dpr="2"].timenum{
			font-size: 24px;
		}
		[data-dpr="3"].timenum{
			font-size: 36px;
		}
		.message-logo{ 
			 
		}
		.message-info{    
			line-height: 40px!important;
			width: 70%;
			.info-type{
				display: block;
				font-size: 16px;/*no*/
				margin-bottom: 9px;
			}
			.info-intro{
				white-space: nowrap;
				overflow: hidden;
				text-overflow:ellipsis;
				display: block;
			    color: rgb(151, 151, 151);
			    font-size: 14px;/*no*/
			}
		}
		.message-logo,.message-num,.message-info{
			line-height: 77px;
			display: inline-block;
			float: left;
		} 
    }
  .message a, .message .fa{
    color:rgb(254, 222, 0);
  }
}
</style>