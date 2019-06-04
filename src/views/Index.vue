<template>
  <el-container style="width: 100%; height: 100%; solid #eee; display: flex">
    <Sidebar></Sidebar>
    <el-container style="width: 100%" direction="verticle">
      <el-main direction="verticle">
        <UserHeader></UserHeader>
        <SubwayMap></SubwayMap>
      </el-main>
      <el-footer height="250px">
        <SwitchCard></SwitchCard>
        <chart></chart>
      </el-footer>
    </el-container>
    <CardSide></CardSide>
  </el-container>
</template>

<script>
import UserHeader from "../components/UserHeader";
import CardSide from "../components/CardSide";
import Sidebar from "../components/Sidebar.vue";
import SubwayMap from "../components/SubwayMap.vue";
import Chart from "../components/Chart.vue";
import SwitchCard from "../components/SwitchCard.vue";

export default {
  name: "Index",
  components: {
    Sidebar,
    UserHeader,
    SubwayMap,
    Chart,
    CardSide,
    SwitchCard
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
