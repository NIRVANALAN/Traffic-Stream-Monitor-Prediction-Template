<template>
  <el-main>
    <iframe src="./map.html" frameborder="0" id="map-frame"></iframe>
  </el-main>
</template>

<script>
export default {
  name: "SubwayMap"
};
</script>

<style scoped>
.el-main {
  padding: 0%;
  position: relative;
}
#map-frame {
  height: 100%;
  width: 100%;
}
</style>
