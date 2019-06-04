<template>
  <div id="top-div">
    <router-view id="router"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
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

#router {
  height: 100%;
  width: 100%;
}

#top-div {
  width: 100%;
  height: 100%;
}
</style>
