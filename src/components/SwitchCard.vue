<template>
  <el-carousel
    :initial-index="2"
    type="card"
    trigger="click"
    height="75px"
    id="switchcard"
    :loop="false"
    :autoplay="false"
    indicator-position="none"
  >
    <el-carousel-item v-for="(item, index) in content" :key="index">
      <div class="grid-content">
        <el-col :md="12" :offset="6">
          <div>
            <p class="italictext">{{ item.stand }}</p>
            <span class="service">
              <i class="el-icon-date"></i>
              {{ item.date }}
            </span>
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
    return {
      content: [
        {
          date: "6月11日",
          stand: "西直门"
        },
        {
          date: "6月12日",
          stand: "西直门"
        },
        {
          date: "6月13日",
          stand: "西直门"
        },
        {
          date: "6月14日",
          stand: "西直门"
        },
        {
          date: "6月15日",
          stand: "西直门"
        }
      ]
    };
  }
};
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
  width: 450px;
  height: 75px;
}
</style>