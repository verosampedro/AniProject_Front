<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from "../../stores/authStore.js";
import { useRouter } from 'vue-router';

const uri = 'http://localhost:8080/api/v1';

const username = ref('');
const password = ref('');

const authStore = useAuthStore();
const router = useRouter(); 

const login = async () => {
  try {
    const response = await axios.get(`${uri}/login`, {
      auth: {
            username: username.value,
            password: password.value
          },
          withCredentials: true
        },
        );
        const data = response.data;
        const userRole = data.roles;

        authStore.userRole = userRole;

        authStore.isAuthenticated = true;

        console.log(authStore.userRole)
        console.log(authStore.isAuthenticated)

        router.push('/requests');

      } catch (error) {
        console.error(error);
      }
};

</script>

<template>
  <div class="login-form">
     <h2>Login</h2>
     <form @submit.prevent="login()">
       <div class="form-group">
         <input type="text" id="username" v-model="username" placeholder="Username" required>
       </div>
       <div class="form-group">
         <input type="password" id="password" v-model="password" placeholder="Password" required>
       </div>
       <button type="submit">LOGIN</button>
     </form>
  </div>
 </template>

<style lang="scss" scoped>

.login-form {
  max-width: 900px;
  height: 500px;
  margin: 0 auto;
  padding: 50px;
  background-color: #C7C7C7;
  margin-top: 120px;
  margin-bottom: 120px;

  h2 {
    font-family: 'Newsreader', serif;
    font-weight: bold;
    font-size: 4rem;
    margin-bottom: 90px;
  }


.form-group {
  margin-bottom: 15px;
}


input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-family: 'Newsreader', serif;
}

button {
  padding: 10px 20px;
  background-color: black;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  width: 100%;
}

button:hover {
  background-color: gray;
}
}
</style>