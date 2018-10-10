<template>
  <div  class="app-wrapper">
    <!-- 顶部菜单 -->
    <nav-bar />
    <child-menu />
  
  </div>
</template>

<script>
import { NavBar, ChildMenu} from './components'

export default {
  name: 'Layout',
  data(){
    return {
    }
  },
  components: {
    NavBar,
    ChildMenu
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
