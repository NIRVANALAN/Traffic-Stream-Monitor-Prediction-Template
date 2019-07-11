<template>
  <el-main>
    <iframe src="./map.html" frameborder="0" id="map-frame"></iframe>
  </el-main>
</template>

<script>
import { setInterval } from "timers";

export default {
  name: "SubwayMap",
  created: function() {
    setInterval(this.timer, 10000);
  },
  methods: {
    timer: function() {
      const h = this.$createElement;
      this.$notify({
        title: "拥挤警示",
        message: h("i", { style: "color: teal" }, "⚠️此时乘车体验可能会下降⚠️")
      });
    }
  }
};
</script>

<style scoped>
#map-frame {
  height: 99%;
  width: 100%;
}

.el-main {
  margin: 0;
  padding: 0;
}
</style>
