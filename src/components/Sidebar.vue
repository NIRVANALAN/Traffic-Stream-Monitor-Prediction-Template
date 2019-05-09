<template>
  <el-aside>
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
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style>
.el-aside {
  color: #333;
  position: relative;
  height: 100%;
  background-color: rgb(238, 241, 246);
  width: "200px";
}
</style>
