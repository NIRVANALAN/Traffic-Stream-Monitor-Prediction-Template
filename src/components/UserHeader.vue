<template>
  <el-header>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
        <el-dropdown>
          <span class="el-dropdown-link">
            功能列表
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" style="background-color: #6699CC">
            <el-dropdown-item>回放</el-dropdown-item>
            <el-dropdown-item>线路</el-dropdown-item>
            <el-dropdown-item>拥堵</el-dropdown-item>
            <el-dropdown-item>收藏</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>

      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
        <el-dropdown>
          <span class="el-dropdown-link">
            王小虎
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" style="background-color: #6699CC">
            <el-dropdown-item>退出</el-dropdown-item>
            <el-dropdown-item>详细</el-dropdown-item>
            <el-dropdown-item>我的</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: "UserHeader",
  methods: {
    login() {
      this.$router.replace("/login");
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  text-align: right;
  font-size: 12px;
}
</style>
