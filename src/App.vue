<template>
  <el-container style="height: 100%; solid #eee; display: flex">
    <Sidebar></Sidebar>

    <el-container>
      <UserHeader></UserHeader>
      <el-main id="map">
        <iframe src="./map.html" frameborder="0" style="height: 100%; width: 100%"></iframe>
      </el-main>

      <el-footer>
        <chart></chart>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import UserHeader from "./components/UserHeader.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "app",
  components: {
    Sidebar,
    UserHeader
  }
};
</script>

<style>
#map {
  padding: 0%;
  position: relative;
}

body {
  margin: 0;
  display: flex;
  height: 100%;
}

html {
  height: 100%;
}
</style>
