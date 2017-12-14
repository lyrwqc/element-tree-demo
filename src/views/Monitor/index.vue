<template>
  <div class="wrap_box" v-title="title">  
      <Tree class="tree"></Tree>
  </div>
</template>

<script>
import Tree from '@/components/Tree'
export default {
  name: 'Monitor',
  data () {
    return {
      title:"资源列表-视联网监控监控联网管理调度平台",
 
    }
    
  },
  components: {
    Tree
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="less">
.wrap_box{

}

</style>
