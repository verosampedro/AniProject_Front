<script>
export default {
 props: ['animeId'],
 data() {
    return {
      anime: null
    };
 },
 mounted() {
    this.fetchAnimeDetails();
 },
 methods: {
    async fetchAnimeDetails() {
      if (!this.animeId) {
        console.error('ID de anime no válido');
        return;
      }

      try {
        const response = await fetch(`https://kitsu.io/api/edge/anime/${this.animeId}`);
        const data = await response.json();
        console.log('Datos recibidos:', data); 
        console.log('Datos del anime:', data.data); 
        this.anime = data.data;
      } catch (error) {
        console.error('Error fetching anime details:', error);
      }
    }
 }
};
</script>

<template>
 <div v-if="anime">
    <h2>{{ anime.attributes.canonicalTitle }}</h2>
    <p>RATING: {{ anime.attributes.averageRating }}</p>
    <p>ESTADO: {{ anime.attributes.status }}</p>
    <p>EPISODIOS: {{ anime.attributes.episodeCount }}</p>
    <p>CLASFICACIÓN POR EDAD: {{ anime.attributes.ageRatingGuide }}</p>
 </div>
 <div v-else>
    <p>Cargando información del anime...</p>
 </div>
</template>

<style lang="scss">
h1, p {
    color:white
}
</style>