<template>
  <el-card>
    <span>{{ warnContent }}</span>
  </el-card>
</template>

<script>
export default {
  name: "WarnCard",
  props: {
    warnContent: String
  }
};
</script>

<style scoped>
@font-face {
  font-family: "webfont";
  font-display: swap;
  src: url("//at.alicdn.com/t/webfont_fn1pzjoxehv.eot"); /* IE9*/
  src: url("//at.alicdn.com/t/webfont_fn1pzjoxehv.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//at.alicdn.com/t/webfont_fn1pzjoxehv.woff")
      format("woff"),
    /* chrome、firefox */ url("//at.alicdn.com/t/webfont_fn1pzjoxehv.ttf")
      format("truetype"),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url("//at.alicdn.com/t/webfont_fn1pzjoxehv.svg#Alibaba-PuHuiTi-Regular")
      format("svg"); /* iOS 4.1- */
}

.web-font {
  font-family: "webfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.web-font >>> el-card {
  padding: 10px;
  margin: 10px;
  width: 100%;
}
</style>

