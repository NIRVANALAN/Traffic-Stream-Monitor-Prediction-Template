<template>
  <div id="chart"></div>
</template>

<script>
import echarts from "echarts";
import Axios from "axios";
import { Minimatch } from "minimatch";

export default {
  name: "Chart",
  mounted() {
    var chart = echarts.init(document.getElementById("chart"));
    var option = {
      title: {
        text: "入站量和出站量",
        subtext: "火车东站"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["入站量", "出站量"]
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true }
          // saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          data: [
            // TODO
            // TODO 换成真实的时间，左右各6个时间片
            "16:30",
            "16:40",
            "16:50",
            "17:00",
            "17:10",
            "17:20",
            "17:30",
            "17:40",
            "17:50",
            "18:00",
            "18:10",
            "18:20"
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
            // TODO 换成真实数据
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
          ],
          markPoint: {
            data: [
              { type: "max", name: "最大值" }
              // { type: "min", name: "最小值" }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          }
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
          ],
          markPoint: {
            data: []
          }
        }
      ]
    };
    chart.setOption(option);
    window.addEventListener("message", function(e) {
      if (e.source == window.frames[0]) {
        var get_station_url = "http://127.0.0.1:8000/Flow/show_flow/";
        const now = new Date();
        let date = now.getDate();
        let hour = now.getHours();
        let minutes = now.getMinutes();
        Axios.post(get_station_url, {
          year: 2019,
          month: 5,
          dates: [date - 1],
          stations: [2]
        })
          .then(response => {
            var data = response.data;
            var station_info = JSON.parse(localStorage.getItem("stationInfo"));
            if (station_info != null) {
              // add response data to localStorage
              let station_id = Object.keys(data)[0]; // request one station_id a time
              // let station_date = Object.keys(station_info[station_id]);
              if (station_info[station_id] == undefined) {
                station_info[station_id] = data[station_id]; // add to global storage
              } else {
                // merge station dates info
                let dates = Object.keys(data[station_id]);
                for (let index = 0; index < dates.length; index++) {
                  const element = dates[index];
                  if (station_info[station_id][dates[index]] == undefined) {
                    station_info[station_id][dates[index]] =
                      data[station_id][dates[index]];
                  }
                }
              }
              localStorage.setItem("stationInfo", JSON.stringify(station_info));
              // console.log(station_info[station_id]);
              // change charts options
              let station_name = e.data;
              if (!station_name.endsWith("站")) {
                var new_station_name = station_name.concat("站");
              }
              option.title.subtext = new_station_name;
              // use get method to get data predicted by model
              // option.xAxis// TODO
              // get time
              let time_slide_now = hour * 6 + Math.floor(minutes / 10);
              time_slide_now = time_slide_now < 7 ? 7 : time_slide_now;
              // console.log(time_slide_now);
              for (let index = 0; index < 12; index++) {
                // 入站量
                // console.log(station_info[station_id]["date_".concat(date)]);
                option.series[0].data[index] =
                  station_info[station_id]["date_".concat(date)][
                    time_slide_now - 6 + index
                  ]["in"];
                // 出站量
                option.series[1].data[index] =
                  station_info[station_id]["date_".concat(date)][
                    time_slide_now - 6 + index
                  ]["out"];
                let hour_now = Math.floor((time_slide_now - 6 + index) / 6);
                let time_now = (time_slide_now - 6 + index) % 6;
                // console.log(option.xAxis);
                option.xAxis[0].data[index] = String(hour_now)
                  .concat(":")
                  .concat(String(time_now).concat("0"));
                // console.log(option.xAxis[0].data);
              }
              // option.series[0].data.reverse(); // test
              // option.series[1].data.reverse();
              // console.log(option.series);
              chart.setOption(option);
              // var profile = JSON.parse(localStorage.getItem("profile"));
              // console.log(profile);
            } else {
              localStorage.setItem("stationInfo", JSON.stringify(data));
            }
          })
          .catch(error => console.log(error));
      }
    });
  }
};
</script>
<style>
#chart {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
