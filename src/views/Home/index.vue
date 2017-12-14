<template>
  <div class="wrap_box" v-title="title">  
      <Login></Login>
  </div>
</template>

<script>
import Login from '@/components/Login'
export default {
  name: 'HelloWorld',
  data () {
    return {
      title:"唐古拉-视联网监控监控联网管理调度平台",
 
    }
    
  },
  components: {
     Login
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="less">
.wrap_box{
   width: 100%;
   .contorler{
      width: 20px;
      height: 20px;
      background: blue
   }
}

</style>
