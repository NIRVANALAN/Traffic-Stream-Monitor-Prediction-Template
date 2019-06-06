<template>
  <el-container>
    <el-container>
      <SubwayMap></SubwayMap>

      <SwitchCard></SwitchCard>

      <el-footer height="250px">
        <chart></chart>
      </el-footer>
    </el-container>

    <CardSide></CardSide>
  </el-container>
</template>

<script>
import CardSide from "../components/CardSide.vue";
import SubwayMap from "../components/SubwayMap.vue";
import Chart from "../components/Chart.vue";
import SwitchCard from "../components/SwitchCard.vue";

export default {
  name: "MainContainer",
  components: {
    CardSide,
    SubwayMap,
    Chart,
    SwitchCard
  }
};
</script>

<style scoped>
</style>
