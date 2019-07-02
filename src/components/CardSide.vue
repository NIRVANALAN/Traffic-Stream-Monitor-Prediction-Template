<template>
  <el-aside id="card-side">
    <!-- <info-card v-for="(infoCard, index) in infoCards" :infoCard="infoCard" :key="index"></info-card> -->
    <info-card v-for="(userCard, index) in userCards" :infoCard="userCard" :key="index"></info-card>
  </el-aside>
</template>

<script>
import InfoCard from "./InfoCard.vue";

export default {
  name: "CardSide",
  components: { InfoCard },
  props: {},
  data() {
    return {
      infoCards: [
        {
          title: "当前流量",
          number: "78%",
          name: "CurrentDensity",
          height: "300px",
          option: {
            // title: {
            //   text: "动态数据",
            //   subtext: "纯属虚构"
            // },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross",
                label: {
                  backgroundColor: "#283b56"
                }
              }
            },
            legend: {
              data: ["出站流量", "入站流量"]
            },
            toolbox: {
              show: false,
              feature: {
                // dataView: { readOnly: false },
                // restore: {},
                // saveAsImage: {}
              }
            },
            dataZoom: {
              show: false,
              start: 0,
              end: 100
            },
            xAxis: [
              {
                type: "category",
                boundaryGap: true,
                data: (function() {
                  var now = new Date();
                  var res = [];
                  var len = 10;
                  while (len--) {
                    res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
                    now = new Date(now - 2000);
                  }
                  return res;
                })()
              },
              {
                type: "category",
                boundaryGap: true,
                data: (function() {
                  var res = [];
                  var len = 10;
                  while (len--) {
                    res.push(10 - len - 1);
                  }
                  return res;
                })()
              }
            ],
            yAxis: [
              {
                type: "value",
                scale: true,
                name: "",
                max: 30,
                min: 0,
                boundaryGap: [0.2, 0.2]
              },
              {
                type: "value",
                scale: true,
                name: "",
                max: 1200,
                min: 0,
                boundaryGap: [0.2, 0.2]
              }
            ],
            series: [
              {
                name: "入站流量",
                type: "bar",
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: (function() {
                  var res = [];
                  var len = 10;
                  while (len--) {
                    res.push(Math.round(Math.random() * 1000));
                  }
                  return res;
                })()
              },
              {
                name: "出站流量",
                type: "line",
                data: (function() {
                  var res = [];
                  var len = 0;
                  while (len < 10) {
                    res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                    len++;
                  }
                  return res;
                })()
              }
            ],
            grid: {
              x: 30,
              y: 50,
              x2: 40,
              y2: 20
            }
          }
        },

        {
          title: "平均站点运量",
          number: "1056",
          name: "averageFlow",
          height: "300px",
          option: {
            tooltip: {
              trigger: "axis"
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
            ],
            grid: {
              x: 20,
              y: 10,
              x2: 20,
              y2: 20
            }
          }
        },
        {
          title: "总客运量",
          number: "8846",
          name: "passengerFlow",
          height: "200px",
          option: {
            tooltip: {
              trigger: "axis"
            },
            calculable: true,
            xAxis: {
              type: "category",
              boundaryGap: false,
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            },
            yAxis: {
              type: "value",
              axisLabel: {
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
            ],
            grid: {
              x: 20,
              y: 20,
              x2: 20,
              y2: 20
            }
          }
        }
      ],
      userCards: [
        {
          title: "候车舒适度",
          number: "⭐⭐⭐",
          name: "WaitingComfortDegree",
          option: {
            tooltip: {
              formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
              feature: {
                // restore: {},
                // saveAsImage: {}
              }
            },
            series: [
              {
                name: "候车舒适度",
                type: "gauge",
                // center: ["50%", "45%"], // 默认全局居中
                radius: "100%", //仪表大小
                // detail: { formatter: "{value}%" },
                detail: {
                  formatter: "{score|{value}%}",
                  offsetCenter: [0, "70%"],
                  backgroundColor: "#FFEC45",
                  height: 15,
                  rich: {
                    score: {
                      color: "white",
                      fontFamily: "微软雅黑",
                      fontSize: 25
                    }
                  }
                },
                data: [
                  {
                    value: 50,
                    label: {
                      textStyle: {
                        fontSize: 5
                      }
                    },
                    name: "舒适度"
                  }
                ]
              }
            ],
            grid: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 0
            }
          }
        },
        {
          title: "乘车舒适度",
          number: "⭐⭐⭐⭐",
          name: "CongestionDegree",
          height: "300px",
          option: {
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
              }
            },
            series: [
              {
                name: "拥挤度",
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
                      show: false,
                      position: "center",
                      textStyle: {
                        fontSize: "10",
                        fontWeight: "bold"
                      }
                    }
                  }
                },
                data: [
                  { value: 84, name: "满载车次" },
                  { value: 46, name: "有座车次" }
                ]
              }
            ],
            grid: {
              x: 20,
              y: 20,
              x2: 20,
              y2: 20
            }
          }
        }
      ]
    };
  },
  mounted() {}
};
</script>

<style scoped>
#card-side {
  float: right;
  right: 0%;
  width: 300px;
}
</style>
