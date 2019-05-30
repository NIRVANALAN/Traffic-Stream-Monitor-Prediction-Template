<template>
  <el-container id="cards" direction="vertical">
    <el-card class="warning-card" :body-style="{padding: '0px'}">
      <span>xxx 拥堵</span>
    </el-card>
    <el-card class="box-card" :body-style="{padding: '0px'}">
      <div class="card_head">总客运量</div>
      <div class="item">8846</div>
      <div id="passengerFlow" style="height:200px; width:280px;padding:0px;overflow:hidden;"></div>
    </el-card>
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div class="card_head">平均站点运量</div>
      <div class="item">1056</div>
      <div id="averageFlow" style="height:200px; width=280px; padding:10px;overflow:hidden"></div>
    </el-card>
    <el-card
      class="box-card"
      :body-style="{ padding: '0px' }"
      style="overflow:hidden; height: 220px; "
    >
      <div class="card_head">拥挤程度</div>
      <div class="item">1056</div>
      <div id="CongestionDegree" style="height:160px; padding:5px; margin-bottom:5px"></div>
    </el-card>
  </el-container>
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
      tooltip: {
        trigger: "axis"
      },
      grid: {
        left: "10%",
        right: "10%",
        top: "5%",
        bottom: "20%",
        containLabel: true
      },
      calculable: true,
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisTick: {
          show: false
        },
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value",
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
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
      tooltip: {
        trigger: "axis"
      },
      grid: {
        left: "5%",
        right: "5%",
        top: "5%",
        bottom: "20%",
        containLabel: true
      },
      toolbox: {
        show: false,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] }
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
          type: "value",
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          }
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
        }
      ]
    };

    var congestionFLowOption = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      toolbox: {
        show: false,
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
          }
          // restore: { show: true },
          // saveAsImage: { show: true }
        }
      },
      // calculable: true,
      series: [
        {
          name: "拥挤程度",
          type: "pie",
          radius: ["0%", "65%"],
          center: [140, 65],
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
                show: false,
                position: "center",
                textStyle: {
                  fontSize: "10",
                  fontWeight: "bold"
                }
              }
            }
          },
          data: [{ value: 137, name: "空载率" }, { value: 66, name: "满载率" }]
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
  margin-left: 10px;
  font-size: 30px;
  font-family: "Sans-serif", Times, serif;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

#title {
  padding: 0;
}

#cards {
  position: relative;
  top: 5px;
  right: 5px;
  left: 5px;
  padding: 5px;
}

#warnings {
  width: 300px;
  height: 120px;
}

.warning-card {
  width: 280px;
  height: 100px;
  position: relative;
  top: 10px;
  bottom: 10px;
  right: 10px;
  padding: 0px;
}
.card_head {
  margin-left: 10px;
  margin-top: 10px;
}

.box-card {
  width: 280px;
  height: 270px;
  position: relative;
  top: 10px;
  bottom: 10px;
  right: 10px;
  padding: 0px;
}

.image {
  width: 100%;
  display: block;
}

.passengerFlow .averageFlow .CongestionDegree {
  padding: 0;
}
</style>
