<template>
  <div id="myCar">   
    <mt-header title="我的车辆" fixed>
	  <router-link to="/" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header> 
	 
	<mt-navbar v-model="selected">
	  <mt-tab-item id="1">已绑定车辆</mt-tab-item>
	  <mt-tab-item id="2">审核中车辆</mt-tab-item> 
	</mt-navbar>

	<mt-tab-container v-model="selected">
	  <mt-tab-container-item id="1"> 
		<p class="carItem">
	       <router-link to="/myCarInfo/0">
		     <span class="car-num">1.</span>
		     <span class="car-logo"><img src="../../assets/images/home-myCar01.png"></span>
		     <span class="car-info">
		      <span class="info-type">粤MCC111</span>
		     <span class="info-intro">Model X</span>	
		     </span> 
		     <span class="fa fa-chevron-right"></span> 
		   </router-link>
	     </p>
	  </mt-tab-container-item>
	  <mt-tab-container-item id="2" > 
		<p class="carItem"> 
	       <router-link to="/myCarInfo/1">
		     <span class="car-num">1.</span>
		     <span class="car-logo"><img src="../../assets/images/home-myCar01.png"></span>
		     <span class="car-info">
		      <span class="info-type">粤MCC111</span>
		     <span class="info-intro">Model X</span>	
		     </span> 
		     <span class="car-status">审核中</span> 
		   </router-link> 
	     </p>
	  </mt-tab-container-item> 
	</mt-tab-container>

  </div>
</template>

<script type="es6">
export default { 
  name: 'app',
  data(){
  	return{
  	 selected:"1"
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
#myCar{
    // min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*/
    background: #1b1b1b; 
	} 
	.mint-navbar{
		border-top: rgb(77, 77, 77);
		margin-top: 88px;
		border-top: 1px solid #eee;
		height: 59px;
	    .mint-tab-item:nth-child(1){
	    	border-right: 1px solid #eee;
	    }
		.mint-tab-item.is-selected{
			border-bottom: 3px solid rgb(254, 222, 0);
	        color: #333!important;
		}
	}

    .carItem{
		height: 60px;
		line-height: 60px;
		background-color: #fff;
		padding: 24px 30px;
		margin-top: 4px;
		a{display: block;height:60px; }
		.car-logo{
			line-height: 35px;
				height: 68px;
				margin: 0 18px;
			img{
				width: 68px;
				height: 68px;
			}
		} 
		.fa,.car-status{
			float: right;
			line-height: 60px;
			color: #979797;
		} 
		.car-info{    
			line-height: 35px!important;
			margin-top: 8px;
			.info-type{
				display: block;
				font-size: 30px;
			}
			.info-intro{
				display: block;
				font-size: 24px;
			    color: rgb(151, 151, 151);
			}
		}
		.car-logo,.car-num,.car-info{
			line-height: 60px;
			display: inline-block;
			float: left;
		} 
    }
}
</style>