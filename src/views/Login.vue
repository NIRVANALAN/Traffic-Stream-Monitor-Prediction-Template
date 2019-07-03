<template>
  <div class="login_body">
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
        <img src="../assets/images/avtar.png" alt="">
      </div>
      <form>
        <label for="name"></label><input
          id="name"
          type="text"
          class="text"
          value="Username"
          onfocus="this.value = '';"
          onblur="if (this.value === '') {this.value = 'Username';}"
        >
        <div class="key">
          <label for="password"></label><input
            id="password"
            type="password"
            value="Password"
            onfocus="this.value = '';"
            onblur="if (this.value === '') {this.value = 'Password';}"
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

export default {
  methods: {
    login() {
      let router = this.$router;
      let form_username = window.$("#name").val();
      let form_password = window.$("#password").val();
      Axios.post("http://127.0.0.1:8000/User/obtain_token/", {
        username: form_username,
        password: form_password
      })
        .catch(function(error) {
          alert(error);
        })
        .then(function(response) {
          if (response) {
            let data = response.data;
            const get_profile_url = "http://127.0.0.1:8000/User/get_profile/";
            let user_token = data.access;
            localStorage.setItem("username", form_username);
            localStorage.setItem("token", user_token);
            if (window.localStorage.getItem("token")) {
              Axios.defaults.headers.common["Authorization"] =
                `Bearer ` + window.localStorage.getItem("token");
              Axios.get(get_profile_url, {})
                .then(response => {
                  let user_profile = JSON.stringify(response.data);
                  localStorage.setItem("profile", user_profile);
                  router.replace("/");
                })
                .catch(function(error) {
                  window.console.log(error);
                });
            }
          }
        });
    }
  }
};
</script>

<style scoped src="../assets/css/login_style.css"></style>
