<template>
  <div id="Home">   
    <mt-header fixed title="CarCarTalk">
    </mt-header>
      <img src="../../assets/images/saoma.png" class="saoma">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../../assets/images/banner01.png"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/images/banner01.png"></mt-swipe-item>
      <mt-swipe-item><img src="../../assets/images/banner01.png"></mt-swipe-item>
    </mt-swipe>
    <nav>
      <ul>
        <li v-for="i in navItem"><router-link :to="i.link"><span class="name" v-text="i.name"></span><span class="fa fa-angle-right"></span></router-link></li>
      </ul>
    </nav>
    <div class="remark">
      <div class="remark-title">车主服务</div>
      <ul>
        <li v-for="i in service" @click="MsgBox"><img :src="i.img"><span class="title" v-text="i.name"></span><span class="intro" v-text="i.intro"></span></li>
      </ul>
    </div>
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
import {MessageBox} from 'mint-ui' 
export default { 
  name: 'app',
  data(){
  	return{
  		show:0,
      bottom:true,
      navItem:[{"name":"车辆绑定","link":"/Carbind"},{"name":"二维码申请","link":"/Apply"},{"name":"我的车辆","link":"/myCar"},{"name":"联系我们","link":"/contact"},{"name":"新闻资讯","link":"/news"} ],
      service:[{"name":"保险报案","link":"/","intro":"发生交通事故，拨打客服电话4552-000-010","img":"../assets/images/home-service01.png"},{"name":"爱车保养","link":"/","intro":"请前往车辆认证的品牌4S门店保养","img":"../assets/images/home-service02.png"}],
      show:3,
      bottom:true,
      num:"",
      userid:""
  	}
  }, 
  created(){    
  },
  methods: {   
    MsgBox(){
      MessageBox('提示', '功能正在升级中');
    }, 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  type="text/less"> 
@font-size-width: 75;  
.saoma{
    float: right;
    position: fixed;
    top: 20px;
    z-index: 1000;
    width: 20px;/*no*/
    right: 20px;
}
#Home{
  // min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px; 
    font-size: 17px; /*no*/ 
    background: #1b1b1b; 
	} 
  [data-dpr="2"].mint-header-title{
  font-size: 34px; /*no*/ 
  }
  [data-dpr="3"].mint-header-title{
  font-size: 51px; /*no*/ 
  }
  .mint-swipe{
    margin-top: 88px;
    height: 403px;
    img{
      width: 100%;
    }
    .mint-swipe-indicator{
    width: 10px;
    height: 10px;
    }
  }
  nav{
    height: 260px;
    padding: 38px 21px;
    padding-bottom: 0;
    ul{
      li{
        width: 200px;
        height: 56px;
        line-height: 56px;
        float: left;
        border-radius: 10px;
        // margin-right: 41px;
        background: #fff;
        border: 1px solid #1b1b1b;
        margin-bottom: 32px;    
        text-align: center; 
        a{display: block;}
        .name,.fa-angle-right{
        font-size: 14px; /*no*/
        color: #1b1b1b; 
        display: inline-block;
        }
        [data-dpr="2"].name,[data-dpr="2"].fa-angle-right{
        font-size: 28px; /*no*/ 
        }
        [data-dpr="3"].name,[data-dpr="3"].fa-angle-right{
        font-size: 42px; /*no*/ 
        } 
        .fa-angle-right{
          float: right; 
          margin-top: 13px; 
          margin-right: 20px;
        }
      }
      li:nth-child(3){
        margin-right: 0;
      }
      li:nth-child(2),li:nth-child(5){
        margin: 0 41px;
      }
    }
  }
  .remark{
    margin-bottom: 108px;
    .remark-title{
      font-size: 17px; /*no*/
      color:rgb(31,31,31); 
      padding: 0 21px;
    }
    [data-dpr="2"].mint-header-title{
    font-size: 34px; /*no*/ 
    }
    [data-dpr="3"].mint-header-title{
    font-size: 51px; /*no*/ 
    }
    ul{
        padding: 0 21px;
      li{
        margin-top: 32px;
        padding: 38px 21px;
        height: 74px;
        background-color: #fff; 
        img{
          float: left;
          width: 44px;
          width: 56px;
        }
        .title{
          margin-left: 90px;
          display: block;
          font-size: 15px; /*no*/
          margin-bottom: 22px;
        }
        [data-dpr="2"].mint-header-title{
        font-size: 30px; /*no*/ 
        }
        [data-dpr="3"].mint-header-title{
        font-size: 45px; /*no*/ 
        }
        .intro{
          margin-left: 90px;
          display: block;
          color: rgb(151, 151, 151);
          font-size: 12px; /*no*/
        }
        [data-dpr="2"].mint-header-title{
        font-size: 24px; /*no*/ 
        }
        [data-dpr="3"].mint-header-title{
        font-size: 36px; /*no*/ 
        } 
      }
    }
  }
  .home a, .home .fa{
    color:rgb(254, 222, 0);
  }
}
</style>