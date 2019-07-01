<template>
  <div class="reg_body">
    <h1>Unique Login Form</h1>
    <div class="log">
      <div class="content1">
        <h2>登录</h2>
        <form>
          <input
            id="login_name"
            autocomplete="on"
            type="text"
            name="userid"
            value="用户名"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'USERNAME';}"
          >
          <input
            id="login_pw"
            autocomplete="on"
            type="password"
            name="psw"
            value="199882"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'PASSWORD';}"
          >
          <div class="button-row">
            <input type="button" class="sign-in" value="登入" @click="login">
            <input type="reset" class="reset" value="重置">
            <div class="clear"></div>
          </div>
        </form>
      </div>
      <div class="content2">
        <h2>注册</h2>
        <form>
          <input
            id="reg_name"
            autocomplete="on"
            type="text"
            name="userid"
            value="用户名"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'USERNAME';}"
          >
          <!-- <input
            autocomplete="on"
            type="tel"
            name="usrtel"
            value="PHONE"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'PHONE';}"
          >-->
          <!-- <input
            autocomplete="on"
            type="email"
            name="email"
            value="EMAIL ADDRESS"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'EMAIL ADDRESS';}"
          >-->
          <input
            id="reg_pw"
            autocomplete="on"
            type="password"
            name="psw"
            value="PASSWORD"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'PASSWORD';}"
          >
          <!-- <el-form>
            <el-form-item label="活动区域">
              <el-select placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>-->
          <br>
          <select>
            <option value="subway_admin">地铁管理员</option>
            <option value="common_user">地铁出行用户</option>
            <!-- <option value="audi">Audi</option> -->
          </select>
          <br>

          <input type="button" class="register" value="注册&登录" @click="register">
        </form>
      </div>
      <div class="clear"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>


<script>
import Axios from "axios";
export default {
  methods: {
    login() {
      var router = this.$router;
      var form_username = window.$("#login_name").val();
      var form_password = window.$("#login_pw").val();
      Axios.post("http://127.0.0.1:8000/User/obtain_token/", {
        username: form_username,
        password: form_password
      })
        .catch(function(error) {
          alert("Authentication failed");
          window.console.log(error);
        })
        .then(function(response) {
          console.log(response);
          // router.replace("/");
          if (response) {
            var data = response.data;
            var get_profile_url = "http://127.0.0.1:8000/User/get_profile/";
            let user_token = data.access;
            localStorage.setItem("username", form_username);
            localStorage.setItem("token", user_token);
            if (window.localStorage.getItem("token")) {
              Axios.defaults.headers.common["Authorization"] =
                `Bearer ` + window.localStorage.getItem("token");
              Axios.get(get_profile_url, {})
                .then(response => {
                  var user_profile = JSON.stringify(response.data);
                  // console.log(user_profile);
                  localStorage.setItem("profile", user_profile);
                  router.replace("/");
                })
                .catch(function(error) {
                  window.console.log(error);
                });
            }
          }
        });
    },
    register() {
      var router = this.$router;
      var form_username = window.$("#reg_name").val();
      var form_password = window.$("#reg_pw").val();
      Axios.post("http://127.0.0.1:8000/User/register/", {
        username: form_username,
        password: form_password
      })
        .catch(function(error) {
          alert("Register failed");
          window.console.log(error);
        })
        .then(function(response) {
          // console.log(response);
          if (response) {
            console.log(response);
            var data = response.data;
            if (data.username == form_username) {
              console.log(form_username);
              localStorage.setItem("username", form_username);
              localStorage.setItem("token", user_token);
              if (window.localStorage.getItem("token")) {
                Axios.defaults.headers.common["Authorization"] =
                  `Bearer ` + window.localStorage.getItem("token");
                Axios.get(get_profile_url, {})
                  .then(response => {
                    var user_profile = JSON.stringify(response.data);
                    // console.log(user_profile);
                    localStorage.setItem("profile", user_profile);
                    router.replace("/");
                  })
                  .catch(function(error) {
                    window.console.log(error);
                  });
              }
            } else {
              window.alert("Username already exists");
            }
          }
        });
    }
  }
};
</script>


<style scoped src="../assets/css/reg_style.css"></style>




