<template>
  <div id="Apply">   
    <mt-header title="二维码申请详情" fixed>
	  <router-link to="/apply" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header> 
	<mt-cell><span class="detail-status">状态：</span><span class="status-name">受理中</span></mt-cell>
	<mt-cell class="address"><span class="detail-address">地址：</span>
	<span class="address-name">
       <span class="name-title">张程程 12048878781</span>
       <span class="name-add">广东省梅州市梅江区xxxxx</span>
	</span>
	</mt-cell>
	<mt-cell><span class="detail-status">车辆：</span><span class="status-name">Model X</span></mt-cell>
    <mt-field class="remark" label="备注：" type="textarea" rows="4"></mt-field>
	  <p class="get-status">
	    <mt-button class="recive" size="normal">已收到二维码</mt-button>
	  	<mt-button class="noreceive" size="normal">未收到二维码</mt-button>
	  </p>  
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
	    font-size: 20px;/*no*/
	    background: #fff; 
	    border-bottom: 1px solid #ddd;
	}
	.mint-cell:nth-child(2){
		margin-top:  88px;
	}
	.mint-cell{
		padding: 0 10px;
		height: 88px;
		.mint-cell-title{
			flex:0;
		}
		.detail-status,.status-name,.detail-address,.address-name{ 
		color: rgb(31, 31, 31);
		}
		.detail-status,.detail-address{
			margin-right: 21px;
		} 
            .address-name{
			.name-title,.name-add{
              display: block;
			}
			.name-title{
				font-size: 14px;/*no*/
				margin-bottom: 14px;
			}
			[data-dpr="2"].name-title{
				font-size: 28px;/*no*/
			}
			[data-dpr="3"].name-title{
				font-size: 42px;/*no*/
			}
			.name-add{
				font-size: 12px;/*no*/
				color: rgb(77, 77, 77)
			}
			[data-dpr="2"].name-add{
				font-size: 24px;/*no*/
			}
			[data-dpr="3"].name-add{
				font-size: 36px;/*no*/
			}
		} 
	}
    .address{
		height: 110px!important;	
		.mint-cell-wrapper{
			height: 100%;
		}
	}
	.remark{
		.mint-cell-title{
			flex:.2;
		}
	}
	.get-status{
        padding: 0 65px;
		margin-top: 61px;
		.recive,.noreceive{
			color: rgb(31, 31, 31);
			background:rgb(255, 222, 0);
			width: 238px;
			height: 75px;
			font-size: 15px;/*no*/
		}
		[data-dpr="2"].recive,[data-dpr="2"].noreceive{
			font-size: 30px;/*no*/
		}
		[data-dpr="3"].recive,[data-dpr="3"].noreceive{
			font-size: 45px;/*no*/
		}
		.noreceive{
			float: right;
		}
	}
}
</style>