<template>
    <div class="" id="" >
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
</template>
<script>
export default {
  name: 'Tree',
    data() {
      return {
        url:'../../static/data.json',
        data:[],
        defaultProps: {
          children: 'treeinfo',
          label: 'name'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    },
    created(){
      //使用axios
      this.axios.get(this.url).then(res =>{ 
         console.log(res.data.data)
         this.data = res.data.data
      },err =>{
          console.log(err)
      })
  },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 

</style>
