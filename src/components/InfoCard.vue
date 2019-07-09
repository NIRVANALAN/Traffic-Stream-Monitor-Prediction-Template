<template>
  <el-card class="info-card" :body-style="{padding: '0px'}">
    <div class="info-card-head web-font">{{ infoCard.title }}</div>
    <div class="info-card-item web-font">{{ number }}</div>
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
    update_average_density_number() {
      this.infoCard.number = String(Math.round(Math.random() * 1000)) + "人/时";
    }
  },
  mounted() {
    let app = {};
    app.count = 11;
    var that = this;
    window.addEventListener("message", function(e) {
      if (e.source === window.frames[0]) {
        // console.log("testsssss");
        let name = that.infoCard.name;
        switch (name) {
          case "averageFlow":
            that.infoCard.title = e.data + that.infoCard.title.slice(-6);
            that.update_average_density_number();
            break;
          case "CurrentDensity":
            that.infoCard.title = e.data + that.infoCard.title.slice(-5);
            break;
          case "passengerFlow":
            that.infoCard.title = e.data + that.infoCard.title.slice(-5);
            let overall_number = Math.round(Math.random() * 10000);
            that.infoCard.number = overall_number;
            that.infoCard.option.series[0].data = Array.from(
              { length: 7 },
              () => Math.floor(Math.random() * 1000 + 500)
            );
            chart.setOption(that.infoCard.option, true);
            break;
          case "WaitingComfortDegree":
            let number = Math.round(Math.random() * 100).toFixed(0);
            that.infoCard.number = String(number) + "%";
            that.infoCard.option.series[0].data[0].value = number - 0;
            // console.log(that.infoCard.option);
            chart.setOption(that.infoCard.option, true);
            break;
          case "CongestionDegree":
            // let station_id_map = JSON.parse(
            //   localStorage.getItem("station_id_map")
            // );
            // let id = station_id_map[e.data];
            // console.log("id:" + String(id));
            let busy_number = Math.round(Math.random() * 100);
            let free_number = Math.round(Math.random() * 100);
            that.infoCard.option.series[0].data[0].value = free_number;
            that.infoCard.option.series[0].data[1].value = busy_number;
            that.infoCard.number = "⭐".repeat(
              Math.floor((free_number / (free_number + busy_number)) * 5) + 1
            );
            // console.log(that.infoCard.option);
            chart.setOption(that.infoCard.option, true);
            break;
        }
      }
    });
    let chart = echarts.init(
      document.getElementById(this.infoCard.name),
      "macarons"
    );
    if (this.infoCard.name === "CurrentDensity") {
      chart.setOption(this.infoCard.option);
      setInterval(this.update_option, 3000, chart, app);
      // var that = this;
      // window.addEventListener("message", function(e) {
      //   if (e.source === window.frames[0]) {
      // let station_id_map = JSON.parse(
      //   localStorage.getItem("station_id_map")
      // );
      // let id = station_id_map[e.data];
      // console.log("test" + e.data);

      // let busy_number = Math.round(Math.random() * 100);
      // let free_number = Math.round(Math.random() * 100);

      // that.infoCard.title = e.data + that.infoCard.title.slice(-5);
      // that.infoCard.option.series[0].data[1].value = busy_number;
      // that.infoCard.number = "⭐".repeat(
      //   Math.floor((free_number / (free_number + busy_number)) * 5) + 1
      // );
      // console.log(that.infoCard.option);
      //   chart.setOption(that.infoCard.option, true);
      // }
      // });
    } else if (this.infoCard.name === "QueueNumber") {
      chart.setOption(this.infoCard.option);
      setInterval(
        this.update_queued_option,
        3000,
        chart,
        this.infoCard.maxData
      );
    } else {
      chart.setOption(this.infoCard.option);
    }
  },
  computed: {
    number: function() {
      return this.infoCard.number;
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
