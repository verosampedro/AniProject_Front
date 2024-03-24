<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/general/Header.vue';
import Footer from './components/general/Footer.vue';
</script>

<template>

    <div class="wrapper">

      <nav>
        <RouterLink class="routerLink" to="/">Home</RouterLink>
        <RouterLink class="routerLink" to="/anime/:id">Detail</RouterLink>
        <RouterLink class="routerLink" to="/login">Login</RouterLink>
        <RouterLink class="routerLink" to="/requests">Requests</RouterLink>
        <RouterLink class="routerLink" to="/wishlist">Wishlist</RouterLink>
      </nav>

    </div>

    <Header />

    <RouterView />

    <Footer />

</template>

<style lang="scss">

body {
  background-color: black;
}

.routerLink {
  color: white;
  padding: 5px;
}

</style>
