<template>
    <div class="main-child">
      <el-row :gutter="20">
        <el-col :span="4">
            <side-bar />
        </el-col>
        <el-col :span="20" class='content'>   
           <app-main />
        </el-col>
      </el-row>
    </div>    
</template>
<script>

import { AppMain,SideBar } from './index.js'
export default {
    name:'ChildMenu',
    data(){
      return {}
    },
    components:{
      AppMain,
      SideBar
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.content{
  padding: 20px;
}
</style>


