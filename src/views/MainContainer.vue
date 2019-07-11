<template>
  <el-container>
    <el-container direction="vertical">
      <subway-map></subway-map>
      <switch-card></switch-card>
      <el-footer height="250px" v-if="current_role">
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
  },
  data() {
    return {
      current_role: 0
    };
  },
  created() {
    this.current_role = localStorage.getItem("role");
  }
};
</script>

<style scoped>
</style>
