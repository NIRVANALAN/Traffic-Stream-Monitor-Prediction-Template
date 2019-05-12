<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>总客运量</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <div class="item">8846</div>
    <div id="passengerFlow" style="height:200px;"></div>
  </el-card>
</template>
<script>
import echarts from "echarts";

export default {
  name: "Card",
  mounted() {
    var passengerFLowChart = echarts.init(
      document.getElementById("passengerFlow")
    );

    var option = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          areaStyle: {}
        }
      ]
    };

    passengerFLowChart.setOption(option);
  }
};
</script>
<style scoped>
#passengerFLow {
  position: relative;
  height: 100%;
  width: 100%;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 410px;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0;
}

.image {
  width: 100%;
  display: block;
}
</style>
