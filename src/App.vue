<template>
  <el-container style="height: 100%; solid #eee; display: flex">
    <Sidebar></Sidebar>

    <el-container>
      <UserHeader></UserHeader>
      <SubwayMap></SubwayMap>

      <el-footer>
        <chart></chart>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import UserHeader from "./components/UserHeader.vue";
import Sidebar from "./components/Sidebar.vue";
import SubwayMap from "./components/SubwayMap.vue";
import Chart from "./components/Chart.vue";

export default {
  name: "app",
  components: {
    Sidebar,
    UserHeader,
    SubwayMap,
    Chart
  }
};
</script>

<style>
body {
  margin: 0;
  display: flex;
  height: 100%;
}

html {
  height: 100%;
}
</style>
