<template>
    <div class="page" id="login_page" v-bind:style="{height:height+'px'}">
         <div class="container">
             <div class="logo">
                <img src="../static/image/logo.png" alt="">
             </div>
             <div class="loginarea">
                <form class = 'form' action="" autocomplete='off'>
                  <div class = 'row'>
                    <input type="text" id = 'text_account'  placeholder = '用户名' autocomplete='off' name='text_account'>
                    <i class = 'fa fa-user'></i>
                    <div class = 'input_close text_account_close'></div>
                  </div>
                  <div class = 'row'>
                    <input type="password" id = 'text_password' placeholder = '密码' autocomplete='off' name='text_password'>
                    <i class = 'fa fa-key'></i>
                    <div class = 'input_close text_account_password'></div>
                  </div>
                  <div class = 'row'>
                    <button id='login_button' type='button'>
                      <span>
                        <router-link to='/Monitor'>
                          <img src="../static/image/login.png" alt="">
                        </router-link>
                      </span>
                    </button>
                  </div>
                </form>
             </div>
         </div> 
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      height: 300
    }
  },
  computed: {
     
  },
  methods: {
      getHeight() {   
         var _this = this
         this.height =  window.innerHeight;
         window.onresize = function(){
            _this.height =  window.innerHeight;
         }             
      }
  },
  created (){
      this.getHeight() 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .page{
    width: 100%;
    height: 100%;
    background: url(../static/image/bg-denglu.png) center center;
    background-size: 100% 100%;
    padding-top:1rem;
   }
  input,button{
    border-radius: 5px;
   }
  .container{
    margin: 0 auto;
    text-align: center;
    overflow: auto;
    padding-bottom: 0.28rem;
    max-width: 80%;
    .logo{
      /* margin-top:1rem; */
      overflow: hidden;
      padding-bottom: 0.01rem;
      float: left;
      width: 5.25rem;
      img{
        /* width: 5.25rem; */
        width:100%;
        display: block;
      }
    }
  }
  .container{
    .loginarea{
      /* margin-top: 1rem; */
      float: right;
      .form{
        z-index: 2;
        text-align: left;
        .row{
          position: relative;
          overflow: hidden;
          input{
            font-size: 0.22rem;
            height: 0.52rem;
            border: 1px solid #9deffb;
            background-color: transparent;
            width: 3.48rem;
            margin-bottom: 0.48rem;
            text-align: left;
            padding-left: 0.5rem;
            font-weight: 500;
          }
          ::-webkit-input-placeholder{
            color: #c6f6fd;;
          }
          .fa{
            display: inline-block;
            margin-top: 1px;
            /*line-height: 14px;*/
            /*color: #cbcbcb;*/
            left: 0.1rem;
            z-index: 99;
            position: absolute;
            top:0.11rem;
            width: 0.28rem;
            height: 0.28rem;
            /*text-align: center;*/
            /*font-size: 18px!important;*/
          }
          .fa-user{
            background:url(../static/image/icon2.png) -412px -95px; 
          }
          .fa-key{
            background:url(../static/image/icon2.png) -411px -138px; 
          }
          .input_close{
            position: absolute;
            right:0px;
            top:0.12rem;
            width: 0.24rem;
            height: 0.24rem;
            background:url(../static/image/icon2.png) -1054px -9px no-repeat; 
            display: block;
          }
          button{
            height: 0.52rem;
            background: #79ebfc;
            border: none;
            padding: 0.15rem 0.15rem 0.13rem 0.15rem ;
            /*color: #000;*/
            width: 3.48rem;
            cursor: pointer;
          }
        }
      }
      
    }
   }

</style>
