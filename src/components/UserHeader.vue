<template>
  <el-header>
    <el-dropdown>
      <i class="el-icon-view" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><el-button type="text" align="center">回放</el-button></el-dropdown-item>
        <el-dropdown-item divided><el-button type="text" align="center">线路</el-button></el-dropdown-item>
        <el-dropdown-item divided><el-button type="text" align="center">拥堵</el-button></el-dropdown-item>
        <el-dropdown-item divided><el-button type="text" align="center" @click="collect">收藏</el-button></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><el-button type="text" align="center">退出</el-button></el-dropdown-item>
        <el-dropdown-item divided><el-button type="text" align="center">详细</el-button></el-dropdown-item>
        <el-dropdown-item divided><el-button type="text" align="center">我的</el-button></el-dropdown-item>
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
    collect(){
      alert("收藏成功");
    },
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