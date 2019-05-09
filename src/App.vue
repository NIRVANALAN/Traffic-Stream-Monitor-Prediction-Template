<template>
  <el-container style="height: 100%; solid #eee; display: flex">
    <sidebar></sidebar>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
            <el-dropdown-item>详细</el-dropdown-item>
            <el-dropdown-item>我的</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main id="map">
        <iframe src="./map.html" frameborder="0" style="height: 100%; width: 100%"></iframe>
      </el-main>

      <el-footer>
        <chart></chart>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import sidebar from "./components/Sidebar.vue";

export default {
  name: "app",
  components: {
    sidebar
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

#map {
  padding: 0%;
  position: relative;
}

body {
  margin: 0;
  display: flex;
  height: 100%;
}

html {
  height: 100%;
}
</style>
