<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/general/Header.vue';
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>

    <Header />
    
  </header>

  <RouterView />
</template>

<style scoped>

</style>
