<template >
  <el-carousel
    :initial-index="2"
    type="card"
    height="75px"
    id="switchcard"
    :loop="false"
    :autoplay="false"
    indicator-position="none"
    @change="carouselChange($event)"
  >
    <el-carousel-item v-for="(item, index) in content" :key="index">
      <div class="grid-content">
        <el-col :md="12" :offset="6">
          <div>
            <div align="center" id="stand">
              <el-button type="text">{{ stand_name }}</el-button>
            </div>
            <div align="center">
              <span class="service">
                <i class="el-icon-date"></i>
                {{ item.date_day }}
              </span>
            </div>
          </div>
        </el-col>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "SwitchCard",
  data() {
    var Dates_1 = func_date(-2);
    var Dates_2 = func_date(-1);
    var Dates_3 = func_date(0);
    var Dates_4 = func_date(1);
    var Dates_5 = func_date(2);
    return {
      stand_name: "火车东站",
      content: [
        {
          date_day: Dates_1
        },
        {
          date_day: Dates_2
        },
        {
          date_day: Dates_3
        },
        {
          date_day: Dates_4
        },
        {
          date_day: Dates_5
        }
      ]
    };
  },
  mounted() {
    let app = {};
    app.count = 11;
    var that = this;
    window.addEventListener("message", function(e) {
      if (e.source === window.frames[0]) {
        that.stand_name = e.data;
      }
    });
  },
  methods: {
    carouselChange: function($event) {
      window.parent.postMessage($event);
    }
  }
};
//获取当前时间的函数
function func_date(aa) {
  var date1 = new Date();
  var date2 = new Date(date1);
  date2.setDate(date1.getDate() + aa);
  var time2 = date2.getMonth() + 1 + "月" + date2.getDate() + "日";
  return time2;
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 75px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
#switchcard {
  position: relative;
  padding: 0;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  margin: auto;
  width: 600px;
  height: 75px;
}
</style>