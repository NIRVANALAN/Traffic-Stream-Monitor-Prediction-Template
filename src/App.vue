<template>
  <div id="app">
    <SubwayMap></SubwayMap>
  </div>
</template>

<script>
import SubwayMap from "./components/SubwayMap.vue";

export default {
  name: "app",
  components: {
    SubwayMap
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
