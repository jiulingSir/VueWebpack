<template>
  <div id="MySub">   
    <mt-header title="我的子用户" fixed>
	  <router-link to="/personal" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header> 
	 
	<mt-navbar v-model="selected">
	  <mt-tab-item id="1">子用户审核</mt-tab-item>
	  <mt-tab-item id="2">子用户列表</mt-tab-item> 
	</mt-navbar>

	<mt-tab-container v-model="selected">
	  <mt-tab-container-item id="1"> 
		<p class="subuserItem">
	       <router-link to="/MySubInfo"> 
		     <span class="subuser-logo"><img src="../../assets/images/personal-mysubuser01.png"></span>
		     <span class="subuser-info">
		      <span class="info-type">张长春</span>
		     <span class="info-intro">15486245889</span>	
		     </span> 
		     <span class="aggree">同意</span> 
		   </router-link>
	     </p>
	  </mt-tab-container-item>
	  <mt-tab-container-item id="2" > 
		<p class="subuserItem">  
		     <span class="subuser-logo"><img src="../../assets/images/personal-mysubuser01.png"></span>
		     <span class="subuser-info">
		      <span class="info-type">张长春</span>
		     <span class="info-intro">15486245889</span>	
		     </span> 
		     <span class="subuser-car" v-text="carname"></span>
		     <mt-switch v-model="value" @change="touch"></mt-switch>
		     <span class="subuser-status">使用中</span>  
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
  	 selected:"1",
  	 value:true ,
  	 cicle:"",
  	 showStatus:false,
  	 carname:""
  	}
  }, 
  created(){    
  },
  methods: { 
   touch(){ 
   	if (this.value) {
      this.showStatus=true
   	}else{
   	  this.showStatus=false
   	}
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
#MySub{
    min-height: 1200px;
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
    .subuserItem{
		height: 60px;
		line-height: 60px;
		background-color: #fff;
		padding: 24px 30px;
		margin-top: 4px;
		a{display: block;height:60px; }
		.subuser-logo{
			img{
				width: 68px;
				height: 68px;
			}
		} 
		.subuser-car{
			margin-left: 10%;
		}
		.aggree,.subuser-status,.mint-switch{
			float: right;
			line-height: 60px;
		}
		.mint-switch{
			margin-top: .18rem;
			margin-left: 10px;
		}
		.mint-switch-input:checked + .mint-switch-core{
			border-color:#fede00;
            background-color: #fede00;
		}
		.aggree{
			font-size: 12px;/*no*/
			padding: 0 15px;
			color: rgb(77, 77, 77);
			border-radius: 5px;
			background-color: #fede00;
		}
		[data-dpr="2"].aggree{
			font-size: 24px;
		}
		[data-dpr="3"].aggree{
			font-size: 36px;
		}
		.subuser-logo{ 
			margin-right: 21px;
		}
		.subuser-info{    
			line-height: 40px!important;
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
		.subuser-logo,.subuser-num,.subuser-info{
			line-height: 60px;
			display: inline-block;
			float: left;
		} 
    }
}
</style>