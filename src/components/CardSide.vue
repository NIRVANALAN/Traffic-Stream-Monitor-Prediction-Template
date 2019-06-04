<template>
  <el-aside id="card-side">
    <WarnCard v-for="(warnContent, index) in warnCardContents" :key="index" :content="warnContent"></WarnCard>
    <InfoCard v-for="(infoCard, index) in infoCards" :infoCard="infoCard" :key="index"></InfoCard>
  </el-aside>
</template>

<script>
import WarnCard from "./WarnCard.vue";
import InfoCard from "./InfoCard.vue";
import axios from "axios";

export default {
  name: "CardSide",
  components: { WarnCard, InfoCard },
  props: {},
  data() {
    return {
      infoCards: [],
      warnCardContents: []
    };
  },
  mounted() {
    axios
      .get("//demo.mhtt1123.cn/infoCards")
      .then(response => (this.infoCards = response.data));
    axios
      .get("//demo.mhtt1123.cn/warnCardContent")
      .then(response => (this.warnCardContent = response.data));
  }
};
</script>

<style scoped>
#card-side {
  float: right;
}
</style>


