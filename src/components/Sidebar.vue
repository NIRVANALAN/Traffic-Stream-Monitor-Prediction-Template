<template>
  <el-aside width="200px">
    <el-menu unique-opened>
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
          <el-menu-item
            index="3-1"
            onclick="window.frames[0].postMessage({'type': 'collection_line', 'content': {'start': '文新', 'end': '下沙西'}})"
          >文新 - 下沙西</el-menu-item>
          <el-menu-item
            index="3-1"
            onclick="window.frames[0].postMessage({'type': 'collection_line', 'content': {'start': '打铁关', 'end': '复兴路'}})"
          >打铁关 - 复兴路</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">站点</template>
          <el-menu-item
            index="3-3"
            onclick="window.frames[0].postMessage({'type': 'collection_station', 'content': {'station': '钱江路'}})"
          >钱江路</el-menu-item>
          <el-menu-item
            index="3-4"
            onclick="window.frames[0].postMessage({'type': 'collection_station', 'content': {'station': '七堡'}})"
          >七堡</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-info"></i>我的消息
        </template>
        <el-menu-item index="4-1" title="火车东站有拥堵状况">路况信息</el-menu-item>
        <el-menu-item index="4-2" title="今天下午有小到中雨">天气信息</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>设置
        </template>
        <el-menu-item index="5-1">
          路况通知
          <el-switch @change="switch_button_1" on-value="1" off-value="0" v-model="value_switch_1"></el-switch>
        </el-menu-item>
        <el-menu-item index="5-2">
          天气通知
          <el-switch @change="switch_button_2" on-value="1" off-value="0" v-model="value_switch_2"></el-switch>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-edit"></i>我的反馈
        </template>
        <el-menu-item index="6-1">
          <textarea style="width:120px; height:50px">请在这里提交您的反馈</textarea>
        </el-menu-item>
        <div align="center">
          <el-button type="success" plain @click="submit">提交</el-button>
        </div>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>


<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      value_switch_1: "1",
      value_switch_2: "1",
      me_checked: this.value
    };
  },
  watch: {
    me_checked(val) {
      this.$emit("input", val);
    }
  },
  methods: {
    switch_button_1(val) {
      //console.log(val)
    },
    switch_button_2(val) {
      //console.log(val)
    },
    toggle() {
      this.me_checked = !this.me_checked;
    },
    submit() {
      alert("提交成功，感谢您的反馈");
    }
  }
};
</script>

<style>
.el-aside {
  color: #333;
  position: relative;
  height: 100%;
  background-color: rgb(238, 241, 246);
  width: "210px";
}
</style>