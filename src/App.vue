<template>
  <el-container style="height: 100%; solid #eee; display: flex">
    <Sidebar></Sidebar>

    <el-container>
      <UserHeader></UserHeader>
      <el-main>
        <SubwayMap></SubwayMap>
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
import SubwayMap from "./components/SubwayMap.vue";
import Chart from "./components/Chart.vue";
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    UserHeader,
    SubwayMap,
    Chart,
    Card
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

.el-main {
  padding: 0%;
  position: relative;
}
</style>
