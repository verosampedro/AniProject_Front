<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/general/Header.vue';
import Footer from './components/general/Footer.vue';
</script>

<template>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>

    <Header />
    <Footer />
  <RouterView />
</template>

<style scoped>

</style>
