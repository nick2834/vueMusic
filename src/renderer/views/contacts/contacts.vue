<template>
  <a-layout class="content">
    <a-layout-sider class="side_container">
      <search-bar />
    </a-layout-sider>
    <a-layout>
      <a-layout-content>
        <closeBar :isMainWindow="true" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import closeBar from "@/components/closeBar/closeBar";
import searchBar from "@/components/searchBar/searchBar";
export default {
  components: { closeBar, searchBar },
};
</script>

<style lang="less" scoped></style>
