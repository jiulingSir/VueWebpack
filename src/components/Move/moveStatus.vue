<template>
  <div id="MoveStatus">   
    <mt-header title="移车界面" fixed> 
	</mt-header>
	<div class="statusinfo">
		 <div class="electric">
		 	<p class="eleNum">
		 		<span class="eleNum-img"><img src="../../assets/images/move-MoveStatus01.png"></span>
		 		<!-- <span><img src="../../assets/images/move-MoveStatus02.png"></span> -->
		 		<span class="eleNum-num">100%</span>
		 	</p>
		 	<p class="status">充电完成</p>
		 	<p class="time" v-if="eletime">剩余1小时30分</p>
		 </div>
		 <div class="moveRemark">
		 	<img src="../../assets/images/move-MoveStatus03.png">
		 </div>
		 <div class="tips" v-if="elestatus">
		 	<img src="../../assets/images/move-status01.png">
		 	<span class="tips-content">汽车充电中暂时无法通知车主移车</span>
		 </div>
		 <div class="tips1" v-else> 
		 	<router-link to="/move">通知车主移车</router-link>
		 </div>
	</div>
  </div>
</template>

<script type="es6">
export default { 
  name: 'app',
  data(){
  	return{  
  		elestatus:false,
  		eletime:false
  	}
  }, 
  created(){   
  },
  methods: {  
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  type="text/less"> 
@font-size-width: 75;  
#MoveStatus{
    min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*/
	    background: #fff;  
	} 
	.statusinfo{
		margin-top: 93px;
		background-color: #fff;
			padding-top: 85px;
		height: 700px;
	    .electric{
	    	.eleNum{
	    		margin-bottom: 51px;
	    		.eleNum-img{
	    				width: 177px;
	    				height: 92px;
	    				margin-right: 32px;
	    				display: inline-block;
	    				float: left;
	    				margin-left: 192px;
	    			img{
	    				width: 100%;
	    			}
	    		}
	    		.eleNum-num{
	    			font-size: 35px;/*no*/
	    			height: 92px;
	    			line-height: 92px;
	    			display: inline-block;
                    color: rgb(31, 31, 31); 
	    		}
	    		[data-dpr="2"].eleNum-num{
	    			font-size: 70px;
	    		}
	    		[data-dpr="3"].eleNum-num{
	    			font-size: 140px;
	    		}
	    	} 
	    	.status{
	    		margin-bottom: 11px;
	    	}
	    	.status,.time{
	    		font-size:30px;
	    		text-align: center;
	    	}
	    }
	    .moveRemark{
	    	height: 693px;
	    	padding: 25px;
	    	img{
	    		width: 100%;
	    	}
	    }
	    .tips{
	    	margin-top: 40px;
	    	width: 70%;
	    	background-color: rgb(151, 151, 151);
	    	border-radius:40px;
	    	margin:0 auto;
	    	height: 86px;
	    	line-height: 86px;
	    	padding: 0 86px;
	    	img{
	    		display: inline-block;
	    		width: 50px;
	    		height: 50px;
	    		color: #333; 
	    		position: relative;
	    		top: 15px;
	    		margin-right: 19px;
	    	}
	    	.tips-content{
	    		display: inline-block;
	    	    font-size: 30px;
	    	    color: rgb(31, 31, 31);
	    	}
	    }
	    .tips1{
	    	text-align: center;
	    	margin-top: 40px;
	    	width: 70%;
	    	background-color: #fede00;
	    	border-radius:40px;
	    	margin:0 auto;
	    	height: 86px;
	    	line-height: 86px;
	    	padding: 0 86px;
	    	font-size: 30px;
	    }
	}
}  
.footer{
	display: none;
}
</style>