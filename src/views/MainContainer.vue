<template>
  <el-container>
    <el-container>
      <subway-map></subway-map>

      <switch-card></switch-card>

      <el-footer height="250px">
        <chart></chart>
      </el-footer>
    </el-container>

    <card-side></card-side>
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
