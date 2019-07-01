<template>
  <div class="reg_body">
    <h1>Unique Login Form</h1>
    <div class="log">
      <div class="content1">
        <h2>Sign In Form</h2>
        <form>
          <input
            type="text"
            name="userid"
            value="USERNAME"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'USERNAME';}"
          >
          <input
            type="password"
            name="psw"
            value="PASSWORD"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'PASSWORD';}"
          >
          <div class="button-row">
            <input type="submit" class="sign-in" value="Sign In">
            <input type="reset" class="reset" value="Reset">
            <div class="clear"></div>
          </div>
        </form>
      </div>
      <div class="content2">
        <h2>Sign Up Form</h2>
        <form>
          <input
            type="text"
            name="userid"
            value="USERNAME"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'NAME AND SURNAME';}"
          >
          <input
            type="tel"
            name="usrtel"
            value="PHONE"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'PHONE';}"
          >
          <input
            type="email"
            name="email"
            value="EMAIL ADDRESS"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'EMAIL ADDRESS';}"
          >
          <input
            type="password"
            name="psw"
            value="PASSWORD"
            onfocus="this.value = '';"
            onblur="if (this.value == '') {this.value = 'PASSWORD';}"
          >
          <input type="submit" class="register" value="Register">
        </form>
      </div>
      <div class="clear"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style scoped src="../assets/css/reg_style.css"></style>




