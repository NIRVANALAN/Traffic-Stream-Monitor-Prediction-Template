<template>
  <div class="cards">
    <!-- <el-row> -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>总客运量</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div class="item">8846</div>
      <div id="passengerFlow" style="height:180px;"></div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>平均站点运量</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div class="item">1056</div>
      <div id="averageFlow" style="height:220px;"></div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>拥挤程度</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div class="item">1056</div>
      <div id="CongestionDegree" style="height:180px;"></div>
    </el-card>
  </div>
</template>
<script>
import echarts from "echarts";

export default {
  name: "Card",
  mounted() {
    var passengerFLowChart = echarts.init(
      document.getElementById("passengerFlow")
    );
    var averageFLowChart = echarts.init(document.getElementById("averageFlow"));

    var congestionFLowChart = echarts.init(
      document.getElementById("CongestionDegree")
    );

    var passengerFlowOption = {
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

    var averageFlowOption = {
      // title: {
      //   text: "平均站点流量"
      //   // subtext: "纯属虚构"
      // },
      tooltip: {
        trigger: "axis"
      },
      // legend: {
      //   data: ["入站量", "出战量"]
      // },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] }
          // restore: { show: true },
          // saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          data: [
            "0:00",
            "2:00",
            "4:00",
            "6:00",
            "8:00",
            "10:00",
            "12:00",
            "14:00",
            "16:00",
            "18:00",
            "20:00",
            "22:00"
          ]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "入站量",
          type: "bar",
          data: [
            2.0,
            4.9,
            7.0,
            23.2,
            25.6,
            76.7,
            135.6,
            162.2,
            32.6,
            20.0,
            6.4,
            3.3
          ]
          // markPoint: {
          //   data: [
          //     { type: "max", name: "最大值" },
          //     { type: "min", name: "最小值" }
          //   ]
          // },
          // markLine: {
          //   data: [{ type: "average", name: "平均值" }]
          // }
        },
        {
          name: "出站量",
          type: "bar",
          data: [
            2.6,
            5.9,
            9.0,
            26.4,
            28.7,
            70.7,
            175.6,
            182.2,
            48.7,
            18.8,
            6.0,
            2.3
          ]
          // markPoint: {
          //   data: [
          //     {
          //       name: "年最高",
          //       value: 182.2,
          //       xAxis: 7,
          //       yAxis: 183,
          //       symbolSize: 18
          //     },
          //     { name: "当天最低", value: 2.3, xAxis: 11, yAxis: 3 }
          //   ]
          // }
          // markLine: {
          //   data: [{ type: "average", name: "平均值" }]
          // }
        }
      ]
    };

    var congestionFLowOption = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      // legend: {
      //   orient: "vertical",
      //   x: "left",
      //   data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
      // },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: {
            show: true,
            type: ["pie", "funnel"],
            option: {
              funnel: {
                x: "25%",
                width: "50%",
                funnelAlign: "center",
                max: 1548
              }
            }
          },
          // restore: { show: true },
          // saveAsImage: { show: true }
        }
      },
      calculable: true,
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["50%", "70%"],
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            emphasis: {
              label: {
                show: true,
                position: "center",
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            }
          },
          data: [
            { value: 135, name: "空载率" },
            { value: 1548, name: "满载率" }
          ]
        }
      ]
    };

    passengerFLowChart.setOption(passengerFlowOption);
    averageFLowChart.setOption(averageFlowOption);
    congestionFLowChart.setOption(congestionFLowOption);
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

.cards {
  position: absolute;
  top: 10px;
  right: 10px;
}

.box-card {
  width: 410px;
  position: relative;
  top: 10px;
  bottom: 10px;
  right: 10px;
  padding: 0;
}

.image {
  width: 100%;
  display: block;
}
</style>
