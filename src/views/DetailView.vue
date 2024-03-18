<script>
import AnimeDetails from '@/components/detail/AnimeDetails.vue';

export default {
 components: {
    AnimeDetails
 },
 props: {
    animeId: {
      type: String,
      required: true
    }
 },
 mounted() {
    console.log('animeId en DetailView:', this.animeId); 
 }
};
</script>

<template>
 <div>
    <h1>Detalle del Anime</h1>
    <AnimeDetails :animeId="animeId" />
 </div>
</template>

<style>
</style>
