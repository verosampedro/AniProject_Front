<script>
export default {
 props: ['animeId'],
 data() {
    return {
      characters: [],
    };
 },
 async mounted() {
    await this.fetchCharacters();
 },
 methods: {
    async fetchCharacters() {
      const animeId = this.animeId;
      const url = `https://kitsu.io/api/edge/anime/${animeId}/characters`;
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/vnd.api+json',
            Accept: 'application/vnd.api+json',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { data } = await response.json();
        console.log('Characters:', data); 
        if (data && data.length > 0) {
          this.characters = data.map(edge => edge.node);
        }
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    },
 },
};
</script>

<template>
    <div>
       <h2>Characters</h2>
       <div v-for="character in characters" :key="character.id" v-if="character && character.id">
        <div v-for="character in characters" :key="character.id">
  <h3>{{ character.attributes.names }}</h3>
  <p>Role: {{ character.attributes.role }}</p>
           </div>
       </div>
       <div v-else>
           <p>No characters available</p>
       </div>
    </div>
</template>

<style scoped>
.reviews-container {
 width: 100%;
 max-width: 800px;
 margin: 0 auto;
 padding: 20px;
 box-sizing: border-box;
}

.reviews-title {
 font-size: 24px;
 color: #333;
 margin-bottom: 20px;
}

.review-item {
 border-bottom: 1px solid #eee;
 padding: 10px 0;
}

.review-content {
 font-size: 16px;
 color: #666;
 margin-bottom: 5px;
}

.review-rating {
 font-size: 14px;
 color: #999;
}
</style>