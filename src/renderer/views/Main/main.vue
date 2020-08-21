<template>
  <a-layout id="container">
    <side-bar></side-bar>
    <section class="main-content">
      <!-- <closeBar :isMainWindow="true" /> -->
      <router-view></router-view>
    </section>
  </a-layout>
</template>
<script>
import sideBar from "@/components/sideBar/sidebar";
import closeBar from "@/components/closeBar/closeBar";
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components: { sideBar, closeBar },
};
</script>
<style lang="less">
#container {
  width: 100%;
  height: 100%;
  background: transparent;
  flex-direction: row;
  .main-content {
    flex: 1;
  }
}
</style>
