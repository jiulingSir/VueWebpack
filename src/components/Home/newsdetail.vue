<template>
  <div id="Newsdetail">   
    <mt-header title="新闻内容" fixed>
	  <router-link to="/news" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header>  
	<div class="title">
		<p class="title-name">外观大不同，配置再升级，第八代凯美瑞阿斯蒂芬sdfsd</p>
		<p class="title-time">2017年12月12日</p>
	</div>
	<div class="content">
		　《车鲜知》是什么？您可以把它当做一个研究车界动向的烧脑小组。《车鲜知》的任务是为大家带来最“新鲜”的新车信息预测，以及靠谱儿的车圈儿动态分析，让每一位朋友都能成为车坛中的“先知”。在这里您将看到关于新车定价预测、热辣观点PK、车企动向揭秘等等经过我们烧脑后有理有据的内容。

　　《车鲜知》“安利”完毕。接下来请把烧脑的事情交给我们。今天我们将为您带来的是“比亚迪这两年到底在干嘛”。当别人做燃油车时，比亚迪新能源车已经做得“如鱼得水”

 <img src="https://www3.autoimg.cn/newsdfs/g20/M09/FC/96/620x0_0_autohomecar__wKgFWVo2CveAEcPZAAi8NAt0DOI127.jpg">
『比亚迪F3 DM早在2008年便上市销售』
		　《车鲜知》是什么？您可以把它当做一个研究车界动向的烧脑小组。《车鲜知》的任务是为大家带来最“新鲜”的新车信息预测，以及靠谱儿的车圈儿动态分析，让每一位朋友都能成为车坛中的“先知”。在这里您将看到关于新车定价预测、热辣观点PK、车企动向揭秘等等经过我们烧脑后有理有据的内容。

　　《车鲜知》“安利”完毕。接下来请把烧脑的事情交给我们。今天我们将为您带来的是“比亚迪这两年到底在干嘛”。当别人做燃油车时，比亚迪新能源车已经做得“如鱼得水”

 <img src="https://www3.autoimg.cn/newsdfs/g20/M09/FC/96/620x0_0_autohomecar__wKgFWVo2CveAEcPZAAi8NAt0DOI127.jpg">
『比亚迪F3 DM早在2008年便上市销售』
	</div>
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
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  type="text/less"> 
@font-size-width: 75;  
#Newsdetail{
    // min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*/
	    background: #fff; 
	    border-bottom: 1px solid #eee;
	    .mint-header-title,.mint-header-button{
	    	font-size: 17px;/*no*/
	    }
		[data-dpr="2"].mint-header-title,[data-dpr="2"].mint-header-button{
			font-size: 34px;/*no*/
		}
		[data-dpr="3"].mint-header-title,[data-dpr="3"].mint-header-button{
			font-size: 51px;/*no*/
		} 
	}   
	.title{ 
		text-align: center;
		margin-top: 100px;
		background-color: #fff;
		padding: 20px 31px;
		min-height: 90px;
		.title-name{
			font-size: 18px;/*no*/
			text-align: left;
			line-height: 50px;
		}
		[data-dpr="2"].title-name{
			font-size: 36px;/*no*/
		}
		[data-dpr="3"].title-name{
			font-size: 54px;/*no*/
		} 
		.title-time{
			font-size: 13px;/*no*/
			text-align: right;
		}
		[data-dpr="2"].title-time{
			font-size: 26px;/*no*/
		}
		[data-dpr="3"].title-time{
			font-size: 39px;/*no*/
		} 
	}
	.content{
		width: 80%;
		padding: 5% 10%;
		margin: 5px auto;
		background-color: #fff;
		font-size: 15px;/*no*/
		margin-bottom: 99px;
		img{
			width: 100%;
			margin:10px 0;
		}
	}
	[data-dpr="2"].content{
		font-size: 30px;/*no*/
	}
	[data-dpr="3"].content{
		font-size: 45px;/*no*/
	} 
}
</style> 