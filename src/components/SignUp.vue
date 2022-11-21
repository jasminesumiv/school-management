<template>
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter name" />
    <input type="text" v-model="email" placeholder="Enter email" />
    <input type="text" v-model="password" placeholder="Enter password" />
    <button v-on:click="signUp">Sign Up</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signUp() {
      console.warn("signup", this.name, this.email, this.password);
      axios
        .post("http://localhost:3000/user", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          if (response.status == 201) {
            localStorage.setItem("user-info", JSON.stringify(response.data));
            this.$router.push({ name: "HomeComp" });
          }
        });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomeComp" });
    }
  },
};
</script>
<style>
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid blue;
}
.register button {
  width: 320px;
  height: 40px;
  border: 1px solid blue;
  color: #fff;
  background-color: blue;
  cursor: pointer;
}
</style>
