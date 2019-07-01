<template>
  <el-card class="info-card" :body-style="{padding: '0px'}">
    <div class="info-card-head web-font">{{ infoCard.title }}</div>
    <div class="info-card-item web-font">{{ infoCard.number }}</div>
    <div :id="infoCard.name" class="info-card-chart"></div>
  </el-card>
</template>

<script>
import echarts from "echarts";

export default {
  name: "InfoCard",
  props: {
    infoCard: Object
  },
  data() {
    return {};
  },
  methods: {
    update_option(chart, app) {
      // console.log(this.infoCard);
      let axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");
      var data0 = this.infoCard.option.series[0].data;
      var data1 = this.infoCard.option.series[1].data;
      data0.shift();
      data0.push(Math.round(Math.random() * 1000));
      data1.shift();
      data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

      this.infoCard.option.xAxis[0].data.shift();
      this.infoCard.option.xAxis[0].data.push(axisData);
      this.infoCard.option.xAxis[1].data.shift();
      this.infoCard.option.xAxis[1].data.push(app.count++);
      chart.setOption(this.infoCard.option);
    }
  },
  mounted() {
    var app = {};
    app.count = 11;
    var chart = echarts.init(document.getElementById(this.infoCard.name));
    if (this.infoCard.name == "CurrentDensity") {
      setInterval(this.update_option, 2100, chart, app);
    } else {
      chart.setOption(this.infoCard.option);
    }
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
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.info-card {
  width: 99%;
  padding: 0;
  padding-bottom: 25px;
  margin: 0;
  position: relative;
}

.info-card-head {
  margin: 15px;
  font-size: 20px;
}

.info-card-item {
  margin: 10px;
  font-size: 25px;
}

.info-card-chart {
  width: 99%;
  height: 150px;
}
</style>
