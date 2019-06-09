<template>
  <!-- <div id="login">
    <h1>登录界面</h1>用户名：
    <Input/>
    <br>密码：
    <Input/>
    <br>
    <button @click="login">登录</button>
  </div>-->
  <div class="login_body">
    <!-- <script>
  $(document).ready(function(c) {
    $(".close").on("click", function(c) {
      $(".login-form").fadeOut("slow", function(c) {
        $(".login-form").remove();
      });
    });
  });
    </script>-->
    <!--SIGN UP-->
    <h1>Login</h1>
    <div class="login-form">
      <div class="close"></div>
      <div class="head-info">
        <label class="lbl-1"></label>
        <label class="lbl-2"></label>
        <label class="lbl-3"></label>
      </div>
      <div class="clear"></div>
      <div class="avtar">
        <img src="../assets/images/avtar.png">
      </div>
      <form>
        <input
          id="name"
          type="text"
          class="text"
          value="Username"
          onfocus="this.value = '';"
          onblur="if (this.value == '') {this.value = 'Username';}"
        >
        <div class="key">
          <input
            id="password"
            type="password"
            value="Password"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'Password';}"
          >
        </div>
      </form>
      <div class="signin">
        <input type="submit" value="Login" @click="login">
      </div>
    </div>
    <div class="copy-rights"></div>
  </div>
</template>


<script>
import Axios from "axios";
import { EROFS } from "constants";
export default {
  methods: {
    login() {
      var router = this.$router;
      // router.replace("/");
      // for test
      // Axios.get("http://127.0.0.1:8000/Station/get_station/").then(response =>
      //   console.log(response.data)
      // );
      var form_username = $("#name").val();
      var form_password = $("#password").val();
      // console.log(form_username);
      // console.log(form_password);
      Axios.post("http://127.0.0.1:8000/User/obtain_token/", {
        // username: "JayDHi",
        // password: "199882"
        username: form_username,
        password: form_password
      })
        .catch(function(error) {
          alert("Authentication failed");
          console.log(error);
          // router.replace("/login");
        })
        .then(function(response) {
          if (response) {
            var data = response.data;
            router.replace("/");
            var get_profile_url = "http://127.0.0.1:8000/User/get_profile/";
            // get token
            let token = data.access;
            console.log(data);
            Axios.get(get_profile_url, {
              headers: {
                Authorization: "Bearer " + token
              }
            })
              .then(response => console.log(response.data))
              .catch(function(error) {
                console.log(error);
              });
          }
        });
    }
  }
};
</script>

<style scoped src="../assets/css/login_style.css">
