<template>
  <el-header>
    <h1 style="float: left; margin: 0">Metro</h1>
    <el-dropdown>
      <i class="el-icon-view" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>回放</el-dropdown-item>
        <el-dropdown-item divided>线路</el-dropdown-item>
        <el-dropdown-item divided>拥堵</el-dropdown-item>
        <el-dropdown-item divided>收藏</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>退出</el-dropdown-item>
        <el-dropdown-item divided>详细</el-dropdown-item>
        <el-dropdown-item divided>我的</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span v-if="show_login_button">
      <el-button type="success" size="small" @click="login_register">登录 / 注册</el-button>
    </span>
    <span v-else>
      <!-- <i class="el-icon-user-solid"></i> -->
      <el-button size="mini" round type="primary" icon="el-icon-user-solid">{{user_name}}</el-button>
    </span>
  </el-header>
</template>

<script>
export default {
  name: "UserHeader",
  data: function() {
    return {
      user_name: localStorage.getItem("username")
    };
  },
  computed: {
    show_login_button: function() {
      return this.user_name == null;
    }
  },
  methods: {
    login() {
      this.$router.replace("/login");
    },
    login_register() {
      this.$router.replace("/login_register");
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
