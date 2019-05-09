<template>
  <el-container style="height: 100%; solid #eee; display: flex">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>数据统计
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">出站量</el-menu-item>
            <el-menu-item index="1-2">换乘量</el-menu-item>
            <el-menu-item index="1-3">客运量</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>功能区域
          </template>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>我的收藏
          </template>
          <el-menu-item-group>
            <template slot="title">路线</template>
            <el-menu-item index="3-1">起点 - 终点</el-menu-item>
            <el-menu-item index="3-2">起点 - 终点</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">站点</template>
            <el-menu-item index="3-3">站点</el-menu-item>
            <el-menu-item index="3-4">站点</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

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
export default {
  name: "app"
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  position: relative;
  height: 100%;
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
