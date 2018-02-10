<template>
  <div id="personal">   
    <mt-header title="个人" fixed> 
	</mt-header>  
   <div class="avabg">
      <p class="litavator" > <img src="../../assets/images/personal01.png" class="avatorimg"> </p>
      <p class="avatorname">
        <span class ='name-slogen'>TGPSA123</span>
        <span class ='name-phone'>18814383345</span>
      </p> 
   </div> 
   <mt-cell title="手机号码" class="remark" to="/ChangePhone"><i class="fa fa-angle-right"></i></mt-cell>  
   <mt-cell title="注册成为子用户" to="/subuser"><i class="fa fa-angle-right"></i></mt-cell>  
   <mt-cell title="我的地址" to="/myAddress"><i class="fa fa-angle-right"></i></mt-cell>  
   <mt-cell title="我的子用户" to="/mysub"><i class="fa fa-angle-right"></i></mt-cell>  
   <mt-cell title="意见反馈" class="addvice" to="/advice"><i class="fa fa-angle-right"></i></mt-cell>  
   <mt-cell title="帮助与支持" to="/suggest"><i class="fa fa-angle-right"></i></mt-cell>  
    
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
      show:3,
      bottom:true,
      num:"",
  	 
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
#personal{
    min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*/
	    background: #fff; 
	    border-bottom: 1px solid #eee;
	}  
	.avabg{
	  display:flex;
	  margin-top: 88px;
	  height:200px;
	  align-items:center;
	  background:#fff;
	  color:#fff;
	  padding: 0 30px;
	  .litavator{
	    padding-right: 21px;
	    img{
	      width: 120px;
	      border-radius: 50%;
	      height: 120px;
	    }
	  }
	  .avatorname{
	    flex:6; 
	    span.name-slogen{
	    	font-size: 17px;/*no*/
	    	color: rgb(14, 14, 14);
	    	display: block;
	    	margin-bottom: 3px;
	    }
	    span.name-phone{
	    	font-size: 12px;/*no*/
	    	color: rgb(151, 151, 151);
	    	display: block;
	    }
	  }
	}
	.mint-cell{
		border-bottom: 1px solid #F7F6F6;
		height: 66px; 
		padding: 0 30px;
		.mint-cell-text{
			font-size: 30px;
			color: rgb(14, 14, 14)
		}
		[data-dpr="2"].mint-cell-text{
			font-size: 30px;
		}
		[data-dpr="3"].mint-cell-text{
			font-size: 45px;
		}
	}
	.remark,.addvice{
		margin-top: 21px;
	}
  .personal a, .personal .fa{
    color:rgb(254, 222, 0);
  }
}
</style>