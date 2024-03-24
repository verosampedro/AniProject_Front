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
    <AnimeDetails :animeId="animeId" />
 </div>
</template>

<style>
</style>
