<template>
  <el-carousel
    initial-index="2"
    type="card"
    trigger="click"
    height="75px"
    id="switchcard"
    :loop="false"
    :autoplay="false"
    indicator-position="none"
  >
    <el-carousel-item v-for="item in data" :key="item">
      
      <div class="grid-content">
						<el-col :md="12" :offset="6">
							<div>
								<p class="italictext">{{item.date}}</p>
								<span class="service">{{item.stand}}</span>
							</div>
						</el-col>
					</div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "SwitchCard",
  data(){
            return{
              data:[{
                date:"5月28日",
                stand:"西直门",
              },
              {
                date:"5月29日",
                stand:"西直门",
              },
              {
                date:"5月30日",
                stand:"西直门",
              },
              {
                date:"5月31日",
                stand:"西直门",
              },
              {
                date:"6月1日",
                stand:"西直门",
              }]
     }
}
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
  bottom: 0px;
  right: 0px;
  top: 0px;
  left:0px;
  margin: auto;
  width: 450px;
  height: 75px;
}
</style>