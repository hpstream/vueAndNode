<template>
    <div style='position: relative;'>
        <el-menu :default-active="activeIndex.toString()" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item :index="index.toString()" v-if='!item.hidden' :key="index" v-for='(item,index) of roles'>  
                 <router-link :to="item.path" >{{item.name}}</router-link>
            </el-menu-item>
        </el-menu>
        <el-button type="text" class='logout' @click='logout'>退出</el-button> 

    </div>
</template>
<script>
export default {
  name: "topMenu",
  data() {
    return {
      activeIndex: 0
    };
  },
  computed:{
    roles(){
      return  this.$store.getters.roles;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$store.commit("SET_CHILDMENU", this.roles[key]);
    },
    logout() {
      this.$store.dispatch("FedLogOut");
      location.reload();
    }
  },
  mounted() {
    // 找到当前路由对应的子路由。
    var currntIndex = "0";
    var menu = this.roles.find((v, index) => {
      if (this.$route.path.indexOf(v.path) != -1) {
        currntIndex = index;
        return true;
      }
    });
    this.activeIndex = currntIndex;
    this.$store.commit("SET_CHILDMENU", this.roles[currntIndex]);
  }
};
</script>
<style scoped>
.logout {
  position: absolute;
  right: 30px;
  top: 10px;
}
</style>

