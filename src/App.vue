<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/general/Header.vue';
import Footer from './components/general/Footer.vue';
</script>

<template>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/anime/:id">Detail</RouterLink>
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

</style>
