<template>
  <h1>Hello {{ name }}</h1>
  <router-link to="add-comp">Add</router-link>
</template>
<script>
export default {
  name: "HomeComp",
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
<style>
.buttonStyle {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  background-color: skyblue;
  cursor: pointer;
}
</style>
