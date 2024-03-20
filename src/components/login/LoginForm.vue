<script>

</script>

<template>

    <div class="login-form">

      <h2>Login</h2>

      <form @submit.prevent="login">

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