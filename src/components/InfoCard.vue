<template>
  <el-card class="info-card" :body-style="{padding: '0px'}">
    <div class="info-card-head web-font">{{ infoCard.title }}</div>
    <div class="info-card-item web-font">{{ infoCard.number }}</div>
    <div :id="infoCard.name" class="info-card-chart"></div>
  </el-card>
</template>

<script>
import echarts from "echarts";
import { setInterval } from "timers";

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
      let data0 = this.infoCard.option.series[0].data;
      let data1 = this.infoCard.option.series[1].data;
      data0.shift();
      let new_input = Math.round(Math.random() * 1000);
      data0.push(new_input);
      data1.shift();
      data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

      this.infoCard.option.xAxis[0].data.shift();
      this.infoCard.option.xAxis[0].data.push(axisData);
      this.infoCard.option.xAxis[1].data.shift();
      this.infoCard.option.xAxis[1].data.push(app.count++);
      chart.setOption(this.infoCard.option);
      this.infoCard.number = String(new_input / 10) + "%";
    },
    update_user_option(chart) {
      this.infoCard.option.series[0].data[0].value =
        (Math.random() * 100).toFixed(2) - 0;
      chart.setOption(this.infoCard.option, true);
    },
    random(maxData) {
      return +(Math.random() * (maxData - 10)).toFixed(1);
    },
    update_queued_option(chart, maxData) {
      let dynamicData = [
        this.random(maxData),
        this.random(maxData),
        this.random(maxData),
        this.random(maxData)
      ];
      this.infoCard.option.series[0].data = dynamicData.slice();
      this.infoCard.option.series[1].data = dynamicData.slice();
      chart.setOption(this.infoCard.option);
    },
    update_average_density_number(chart) {
      this.infoCard.number = String(Math.round(Math.random() * 1000)) + "人/时";
    }
  },
  mounted() {
    let app = {};
    app.count = 11;
    let chart = echarts.init(
      document.getElementById(this.infoCard.name),
      "macarons"
    );
    if (this.infoCard.name === "CurrentDensity") {
      chart.setOption(this.infoCard.option);
      setInterval(this.update_option, 1000, chart, app);
    } else if (this.infoCard.name === "WaitingComfortDegree") {
      chart.setOption(this.infoCard.option);
      setInterval(this.update_user_option, 2000, chart);
    } else if (this.infoCard.name === "QueueNumber") {
      chart.setOption(this.infoCard.option);
      setInterval(
        this.update_queued_option,
        3000,
        chart,
        this.infoCard.maxData
      );
    } else if (this.infoCard.name == "averageFlow") {
      chart.setOption(this.infoCard.option);
      setInterval(this.update_average_density_number, 10000, chart);
    }
    // else if (this.infoCard.name == "")
    else {
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
  font-family: "webfont", sans-serif !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.info-card {
  width: 99%;
  padding: 0 0 15px;
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
  height: 200px;
}
</style>
