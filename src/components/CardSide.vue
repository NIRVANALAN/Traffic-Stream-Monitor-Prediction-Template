<template>
  <el-aside id="card-side">
    <info-card v-for="(infoCard, index) in infoCards" :infoCard="infoCard" :key="index"></info-card>
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
              y: 20,
              x2: 20,
              y2: 20
            }
          }
        },
        {
          title: "拥挤程度",
          number: "1056",
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
                name: "拥挤程度",
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
                  { value: 135, name: "空载率" },
                  { value: 158, name: "满载率" }
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
