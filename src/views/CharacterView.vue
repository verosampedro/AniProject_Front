<script>
import AnimeCharacters from '@/components/detail/AnimeCharacters.vue';

export default {
 components: {
    AnimeCharacters
 },
 props: {
    animeId: {
      type: String,
      required: true
    }
 },
 mounted() {
    console.log('animeId en ReviewView:', this.animeId); 
 }
};
</script>

<template>
 <div class="charactersContainer">
    <AnimeCharacters :animeId="animeId" />
 </div>
</template>

<style>
.charactersContainer {
    color: white;
}
</style>