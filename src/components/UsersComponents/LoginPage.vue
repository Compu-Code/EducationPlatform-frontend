<template>
  <div class="body">
    <div class="center">
      <div class="container">
        <div class="text">Login Form</div>
        <form @submit.prevent="submitLogin">
          <div class="data">
            <label>Email</label>
            <input type="text" required v-model="email" />
          </div>
          <div class="data">
            <label>Password</label>
            <input type="password" required v-model="password" />
          </div>

          <!-- loading and message to user -->
          <div
            v-if="AuthStore.loginLoading"
            class="text-light-text-color text-xl"
          >
            <p>Loading ...</p>
          </div>
          <div
            v-else-if="!AuthStore.loginLoading && AuthStore.userToken"
            class="text-green-700 text-xl"
          >
            <p>{{ AuthStore.loginMessage }}</p>
          </div>
          <!-- end loading and message to user -->

          <div class="btn">
            <div class="inner"></div>
            <button type="submit">login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../../stores/AuthStore";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  setup() {
    const AuthStore = useAuthStore();
    return { AuthStore };
  },
  methods: {
    submitLogin() {
      this.AuthStore.login({
        email: this.email,
        password: this.password,
      });
      this.email = "";
      this.password = "";
      this.$router.push("/dashboard/admin");
    },
  },
};
</script>

<style scoped>
.body {
  height: 100vh;
  width: 100%;
  background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
input[type="checkbox"] {
  display: none;
}
.container {
  background: #fff;
  width: 410px;
  padding: 30px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
#show:checked ~ .container {
  display: block;
}
.container .close-btn {
  position: absolute;
  right: 20px;
  top: 15px;
  font-size: 18px;
  cursor: pointer;
}
.container .close-btn:hover {
  color: #3498db;
}
.container .text {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
}
.container form {
  margin-top: -20px;
}
.container form .data {
  height: 45px;
  width: 100%;
  margin: 40px 0;
}
form .data label {
  font-size: 18px;
}
form .data input {
  height: 100%;
  width: 100%;
  padding-left: 10px;
  font-size: 17px;
  border: 1px solid silver;
}
form .data input:focus {
  border-color: #3498db;
  border-bottom-width: 2px;
}
form .forgot-pass {
  margin-top: -8px;
}
form .forgot-pass a {
  color: #3498db;
  text-decoration: none;
}
form .forgot-pass a:hover {
  text-decoration: underline;
}
form .btn {
  margin: 30px 0;
  height: 45px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
form .btn .inner {
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  z-index: -1;
  background: -webkit-linear-gradient(
    right,
    #56d8e4,
    #9f01ea,
    #56d8e4,
    #9f01ea
  );
  transition: all 0.4s;
}
form .btn:hover .inner {
  left: 0;
}
form .btn button {
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
}
form .signup-link {
  text-align: center;
}
form .signup-link a {
  color: #3498db;
  text-decoration: none;
}
form .signup-link a:hover {
  text-decoration: underline;
}
</style>
