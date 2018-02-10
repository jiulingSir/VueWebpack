<template>
  <div id="News">   
    <mt-header title="新闻资讯" fixed>
	  <router-link to="/" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header> 
	 <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false">
  <ul>
    <li v-for="item in list" class="newslist">
    <router-link :to="item.link">
    <span class="news-title" v-text="item.title"></span>
    <span class="news-time" v-text="item.create_time"></span>
    </router-link>
    </li>
  </ul>
</mt-loadmore>
  </div>
</template>

<script type="es6">
import { Loadmore } from 'mint-ui';
export default { 
  name: 'app',
  data(){
  	return{
  	 list:[{"title":"外观大不同，配置再升级，第八代凯美瑞阿斯蒂芬","create_time":"2017年12月12日","link":"/newsdetail"},{"title":"外观大不同，配置再升级，第八代凯美瑞阿斯蒂芬","create_time":"2017年12月12日","link":"/newsdetail"},{"title":"外观大不同，配置再升级，第八代凯美瑞阿斯蒂芬","create_time":"2017年12月12日","link":"/newsdetail"},{"title":"外观大不同，配置再升级，第八代凯美瑞阿斯蒂芬","create_time":"2017年12月12日","link":"/newsdetail"},{"title":"外观大不同，配置再升级，第八代凯美瑞阿斯蒂芬","create_time":"2017年12月12日","link":"/newsdetail"}],
	  allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了  
	  scrollMode:"touch", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动   
  	}
  }, 
  created(){    
  },
  methods: { 
	// 上拉更多
	more(){
      this.loadBottom();
      this.$refs.loadmore.onBottomLoaded();
	},
   loadBottom(){

   }
  },
	components:{
	    'mt-loadmore':Loadmore
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  type="text/less"> 
@font-size-width: 75;  
#News{
    // min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*/
	    background: #fff; 
	    border-bottom: 1px solid #eee;
	}  
	.mint-loadmore{
		margin-top: 108px;
		li.newslist{
			padding:0 30px;
			height: 78px;
			line-height: 78px;
			background-color: #fff;
			border-bottom: 1px solid #eee;
			a{display: block;overflow: hidden;}
			.news-title{
				width: 60%;
				float: left;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				font-size: 26px; 
			}
			.news-time{
				float: right;
				width: 40%;
				text-align: right;
				color: rgb(149, 149, 149);
				font-size: 24px;
			    line-height: 80px;
			}
			// [data-dpr='2'].news-time{
			// 	font-size: 24px;/*no*/
			// }
			// [data-dpr='3'].news-time{
			// 	font-size: 36px;/*no*/
			// }
		}
	}
	.mint-loadmore,.mint-loadmore .mint-loadmore-content,.mint-loadmore .mint-loadmore-content ul{
		min-height: 1050px;
	}
}
</style>