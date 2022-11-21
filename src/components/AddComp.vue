<template>
  <div class="add">
    <input type="text" v-model="name" placeholder="Enter name" />
    <input type="text" v-model="address" placeholder="Enter address" />
    <input type="text" v-model="contact" placeholder="Enter contact" />
    <button v-on:click="add">Add</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AddComp",
   data() {
    return {
      name: "",
      address: "",
      contact: "",
    };
  },
  methods: {
    add() {
      axios
        .post("http://localhost:3000/school", {
          name: this.name,
          address: this.address,
          contact: this.contact,
        })
        .then((response) => {
          console.log(response);
          if (response.status == 201) {
            alert("Added");
          }
        });
    },
  }
};
</script>
<style>
.add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid blue;
}
.add button {
  width: 320px;
  height: 40px;
  border: 1px solid blue;
  color: #fff;
  background-color: blue;
  cursor: pointer;
}
</style>