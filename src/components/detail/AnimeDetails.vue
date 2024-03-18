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

  <div id="detailContainer">

    <div class="banner">
      
      <img v-if="anime && anime.attributes.coverImage && anime.attributes.coverImage.original" :src="anime.attributes.coverImage.original" alt="Anime Cover" class="bannerImg" />
      <img v-else src="../assets/img/logo.png" alt="Anime Cover" class="bannerImg" />

    </div>

    <div class="infoContainer">

      <div class="left">

        <img v-if="anime && anime.attributes.posterImage && anime.attributes.posterImage.original" :src="anime.attributes.posterImage.original" alt="Anime Cover" class="coverImg" />
        <img v-else src="../assets/img/logo.png" alt="Anime Cover" class="coverImg" />

      </div>
      
      <div class="right">

        <div v-if="anime">

          <h2 class="infoText">{{ anime.attributes.canonicalTitle }}</h2>
          <p class="infoText" v-if="anime.attributes.synopsis">{{ anime.attributes.synopsis }}</p>
          <p class="infoText" v-if="anime.attributes.popularityRank"># {{ anime.attributes.popularityRank }} Popularity Rank</p>
        
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
    </div>

  </div>

</template>

<style lang="scss">

#detailContainer {
  .coverImg {
    width: 100%;
    max-width: 300px; 
    margin-left: 200px;
  }

  .infoContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .left {
    flex: 1; 
  }

  .right {
    flex: 2; 
    padding: 0 20px; 
  }

  .banner {
    width: 100%;
    height: 50vh;
    margin-bottom: 30px;
  }

  .banner .bannerImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(60%);
  }

  h2 {
    color: white;
    font-family: "Newsreader", serif;
    font-weight: bold;
    font-size:xx-large;
    margin-bottom: 20px;
  }
  
  p {
    color: white;
    font-family: "Newsreader", serif;
    margin-bottom: 20px;
    margin-right: 60px;
  }
}

</style>