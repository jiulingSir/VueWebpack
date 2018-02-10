<template>
  <div id="Carbind">   
    <mt-header title="帮助与支持" fixed>
	  <router-link to="/personal" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header>
	<div class="hotquestion">
	  <p class="question-title">热门问题</p>
	  <div class="Item" @click="showItem(1)">
		  <p class="questionItem"> 
		     <span class="question-logo"></span>
		     <span class="question-info">
		      <span class="info-type">移车使用流程是怎样的？</span> 
		     </span> 
		     <span class="fa fa-chevron-down"></span>  
		  </p>
		  <p class="question-save item1">xxxxxxxxxxxxx</p>
	  </div>
	  
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
  	showItem(num){
  		$('.question-save').css('display','none');
  		$('.item'+num).css('display','block');
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  type="text/less"> 
@font-size-width: 75;  
#Carbind{
    min-height: 1200px;
	.mint-header{
		color: rgb(254, 222, 0);
		height: 88px;
	    font-size: 20px;/*no*/
	    background: #fff;  
	} 
	.hotquestion{
		margin-top: 93px;
		background-color: #fff; 
		height: 700px; 
		.question-title{
			padding: 0 30px;
			font-size: 30px;
			height: 88px;
			line-height: 88px;
			border-bottom: 1px solid #e6e6e6;
			color: rgb(51, 51, 51);
		}
		.question-save{
			font-size: 28px;
			display: none;
		}
	    .questionItem,.question-save{
			height: 40px;
			line-height: 40px;
			background-color: #fff;
			padding: 24px 30px;
			margin-top: 4px;
			border-bottom: 1px solid #eee;
			a{display: block;height:40px; }
			.question-logo{
				width: 10px;
				height: 10px;
				background-color: #fede00;
				display: inline-block;
				float: left;  
				margin:12px 8px 0 0;
				border-radius: 50%;
			} 
			.fa {
				float: right;
				line-height: 40px;
				font-size: 30px;
				color: #999;
			} 
			.question-info{    
				line-height: 40px!important;
				width: 88%;
				white-space: nowrap;
				text-overflow:ellipsis;
				overflow: hidden;
				.info-type{
					display: block;
					font-size: 30px;
				} 
			}
			 .question-num,.question-info{
				line-height: 40px;
				display: inline-block;
				float: left;
			} 
	    }
	}
}  
</style>