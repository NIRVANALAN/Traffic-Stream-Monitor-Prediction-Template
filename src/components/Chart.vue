<template>
  <div id="chart"></div>
</template>

<script>
  import echarts from "echarts";
  import Axios from "axios";

  export default {
  name: "Chart",
  mounted() {
    let chart = echarts.init(document.getElementById("chart"));
    let option = {
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
          mark: {show: true},
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ["line", "bar"]},
          restore: {show: true}
        }
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          data: [
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
            data: [{type: "max", name: "最大值"}]
          },
          markLine: {
            data: [{type: "average", name: "平均值"}]
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
      if (e.source === window.frames[0]) {
        const get_station_url = "http://127.0.0.1:8000/Flow/show_flow/";
        const now = new Date();
        let date = now.getDate();
        let hour = now.getHours();
        let minutes = now.getMinutes();
        let station_id_map = JSON.parse(localStorage.getItem("station_id_map"));
        let id = station_id_map[e.data];
        // console.log(id)
        Axios.post(get_station_url, {
          year: 2019,
          month: 5,
          dates: [date],
          stations: [id]
        })
          .then(response => {
            const data = response.data;
            let station_info = JSON.parse(localStorage.getItem("stationInfo"));
            if (station_info != null) {
              let station_id = Object.keys(data)[0];
              if (station_info[station_id] === undefined) {
                station_info[station_id] = data[station_id];
              } else {
                // merge station dates info
                let dates = Object.keys(data[station_id]);
                for (let index = 0; index < dates.length; index++) {
                  if (station_info[station_id][dates[index]] === undefined) {
                    station_info[station_id][dates[index]] =
                      data[station_id][dates[index]];
                  }
                }
              }
              localStorage.setItem("stationInfo", JSON.stringify(station_info));
              let station_name = e.data;
              if (!station_name.endsWith("站")) {
                option.title.subtext = station_name.concat("站");
              }
              let time_slide_now = hour * 6 + Math.floor(minutes / 10);
              time_slide_now = time_slide_now < 7 ? 7 : time_slide_now;
              // console.log(time_slide_now);
              for (let index = 0; index < 12; index++) {
                  // console.log(date);
                // console.log(station_info)
                option.series[0].data[index] =
                  station_info[station_id]["date_".concat(date.toString())][
                    time_slide_now - 6 + index
                  ]["in"];
                option.series[1].data[index] =
                  station_info[station_id]["date_".concat(date.toString())][
                    time_slide_now - 6 + index
                  ]["out"];
                let hour_now = Math.floor((time_slide_now - 6 + index) / 6);
                let time_now = (time_slide_now - 6 + index) % 6;
                // console.log(option.xAxis);
                option.xAxis[0].data[index] = String(hour_now)
                  .concat(":")
                  .concat(String(time_now).concat("0"));
              }
              chart.setOption(option);
            } else {
              localStorage.setItem("stationInfo", JSON.stringify(data));
            }
          })
          .catch(error => window.console.log(error));
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
