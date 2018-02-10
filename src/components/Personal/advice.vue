<template>
  <div id="Carbind">   
    <mt-header title="意见与反馈" fixed>
	  <router-link to="/personal" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link> 
	</mt-header>
	<div class="cateAdvice">
	 <!--  <p class="advice-title">问题分类</p>
	  <p class="advice-cate"> 
	   <span>功能建议</span>
	   <span>体验优化</span>
	   <span>性能问题</span>
	   <span>其他</span>
	  </p> -->
	  <p class="advice-desc">问题描述</p>
	  <p class="desc-question">
	  	<textarea rows="7" cols="100%"></textarea>
	  	<!-- <span class="fileinfos">
	       <span class="filespan">
	        <img src="../../assets/images/bind-file.png" class="addimg"> 
	        <input type="file" @change="Upload" name="file">
	      </span>  
	     </span>  -->
	  </p>
	<mt-button size="large" type="primary" class='advice-update'>确认提交 </mt-button>
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
  	Upload(e){

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
	.cateAdvice{
		margin-top: 93px;
		// background-color: #fff; 
		height: 700px; 
		.advice-title,.advice-desc{
			padding: 0 30px;
			font-size: 30px;
			height: 88px;
			line-height: 88px; 
			color: rgb(51, 51, 51);    
			background-color: #F8F8F8;
		} 
		.advice-cate{
			height: 200px;
			padding: 50px 40px;
			span{
				height: 33px;
				padding: 20px;
				font-size: 26px;
				border: 1px solid rgb(102, 102, 102);
				border-radius: 5px;
				margin-right: 71px;
				margin-bottom: 46px;    
				display: inline-block;
			}
		}
		.desc-question{
			height: 414px;
			background-color: #fff;
			textarea{
				border: none;
				width: 92%;
				padding: 30px;
			}
			.fileinfos{
			  display: block;
		      overflow: hidden; 
		      .filespan{
		        position: relative;
		        float: left;
		        width: 95px;
		          height: 95px;
		        margin: 0 .3rem;
		        .addimg{
		          width: 95px;
		          display: block;
		          height: 95px;
		        }
		        input{
		          position:absolute;
		          bottom:0; 
		          width: 95px; 
		          height: 95px;
		          opacity:0;
		        }  
		      }  
		    }
		} 
		.advice-update{
			height: 98px;
			position: fixed;
			bottom: 0;
			z-index: 100;
			line-height: 88px;
			font-size: 30px;
			color: #333;
			background-color: #fede00;
			a{display: block;}
		}
	}
}  
</style>