<template>
    <div class="">
         <el-menu :default-active="activeIndex.toString()" class="el-menu-demo"  >
            <el-menu-item :index="index.toString()" v-if='!item.hidden' :key="index" v-for='(item,index) of menu.children'>  
                 <router-link :to="menu.path+'/'+item.path">{{item.name}}</router-link>
            </el-menu-item>
        </el-menu>
    </div>    
</template>
<script>
import pageRouter from '@/router/pageRouter'
export default {
    name:'SideBar',
    data(){
      return {
        activeIndex:0
      }
    },
    computed:{
        menu(){  
            return this.$store.state.app.chidlMenu;
        }
    },
    mounted() {
    },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>


