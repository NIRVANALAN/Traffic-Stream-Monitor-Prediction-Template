<template>
  <el-container style="width: 100%; height: 100%; solid: #eee; display: flex; right:0;">
    <sidebar></sidebar>
    <el-container style="width: 100%" direction="vertical">
      <user-header></user-header>
      <router-view id="container-router"></router-view>
    </el-container>
  </el-container>
</template>

<script>
import UserHeader from "../components/UserHeader.vue";

import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Index",
  components: {
    UserHeader,
    Sidebar
  }
};
</script>

<style>
body,
html {
  margin: 0;
  display: flex;
  height: 100%;
}
</style>
