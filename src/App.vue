<template>
  <el-container style="height: 100%; solid #eee; display: flex">
    <Sidebar></Sidebar>
    <el-container style="width:70%" direction="verticle">
      <el-main direction="verticle">
        <UserHeader></UserHeader>
        <SubwayMap></SubwayMap>
      </el-main>
      <el-footer height="250px">
        <SwitchCard></SwitchCard>
        <chart></chart>
      </el-footer>
    </el-container>
    <el-container>
      <Card></Card>
    </el-container>
  </el-container>
</template>

<script>
import UserHeader from "./components/UserHeader.vue";
import Sidebar from "./components/Sidebar.vue";
import SubwayMap from "./components/SubwayMap.vue";
import Chart from "./components/Chart.vue";
import Card from "./components/Card.vue";
import SwitchCard from "./components/SwitchCard.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    UserHeader,
    SubwayMap,
    Chart,
    Card,
    SwitchCard
  },
  mounted() {
    window.addEventListener('message', function(e) {
      if (e.source == window.frames[0]) console.log(e)
    })
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
