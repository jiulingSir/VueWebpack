<template>
  <div id="app">  
    <keep-alive><router-view></router-view></keep-alive> 
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
      userid:""
  	}
  }, 
  created(){   
  },
  methods:{   
    shows(num,link){
      this.show=num; 
      this.$router.push(link);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  type="text/less">  
.mintui,.mint-cell-wrapper,.mint-cell-allow-right{font-size: 16px;/*no*/height: 100%;}
.mint-cell{border-bottom: 1px solid #ddd}
.mint-tab-item-label{font-size: 12px;/*no*/}
.mint-button-icon{vertical-align: top;}
.mint-header{ background: #1b1b1b!important; }
.mint-msgbox{border-radius: 3px;/*no*/font-size: 16px;/*no*/}
.mint-msgbox-header {padding: 15px 0 0;/*no*/}
.mint-msgbox-message{line-height: 36px;/*no*/}
.mint-msgbox-title{font-size: 16px;/*no*/}  
.mint-msgbox-btns {  height: 40px;/*no*/line-height: 40px;/*no*/}
.mint-msgbox-btn{line-height: 35px;/*no*/font-size: 16px;/*no*/} 
     
    .footer{
      bottom: 0;
      height: 99px;    
      border-top: 1px solid #eee;
      position: fixed;
      background: #fff;  
      .mint-tab-item-label{ 
        span{
          font-size: 14px;/*no*/
          overflow: hidden;
          display: block;
        .fa {
          display:block;
          font-size: 45px; 
          margin-bottom: 9px;
          color: #c4c3cb;
        }
        }
        [data-dpr="2"]span{
        font-size: 28px; /*no*/
        }
        [data-dpr="3"]span{
        font-size: 42px; /*no*/
        }
      }
    }
		 
.carlist{
  position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    background-color: #fff;
    width: 55%;
    border-radius: 3px; 
    padding: 15px ;
    -webkit-user-select: none;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: .2s;
    transition: .2s;
    font-size: 16px;/*no*/
    position: absolute; 
    z-index: 2009;
    .cicle{
      color: #fede00;
    }
}
</style>