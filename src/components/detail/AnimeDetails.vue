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

        <div class="libraryContainer">

          <p class="library">Your library</p>
          <button class="completed">Completed</button>
          <button class="wishlist">Wishlist</button>
          <button class="watching">Watching</button>

        </div>

      </div>
      
      <div class="right">

        <div v-if="anime">

          <h2 class="infoText">{{ anime.attributes.canonicalTitle }}</h2>
          <p class="infoText" v-if="anime.attributes.synopsis">{{ anime.attributes.synopsis }}</p>
          <p class="popularityRank" v-if="anime.attributes.popularityRank">♥️ # {{ anime.attributes.popularityRank }} Popularity Rank</p>

          </div>

          <div v-else>
          <p>Loading...</p>
          </div>

          <div class="detailsOfAnime" v-if="anime">

          <h2>Details of the Anime</h2>
          <p v-if="anime.attributes.titles && anime.attributes.titles.en">English Title: {{ anime.attributes.titles.en }}</p>
          <p v-if="anime.attributes.titles && anime.attributes.titles.ja_jp">Japanese Title: {{ anime.attributes.titles.ja_jp }}</p>
          <p v-if="anime.attributes.subtype && anime.attributes.subtype">Type: {{ anime.attributes.subtype }}</p>
          <p v-if="anime.attributes.status && anime.attributes.status">Status: {{ anime.attributes.status }}</p>
          <p v-if="anime.attributes.ageRatingGuide && anime.attributes.ageRatingGuide">Age Rating Guide: {{ anime.attributes.ageRatingGuide }}</p>
          <p v-if="anime.attributes.episodeCount && anime.attributes.episodeCount">Number of episodes: {{ anime.attributes.episodeCount }}</p>
          <p v-if="anime.attributes.episodeLength && anime.attributes.episodeLength">Episode length: {{ anime.attributes.episodeLength }}'</p>
          <p v-if="anime.attributes.totalLength && anime.attributes.totalLength">Total length: {{ anime.attributes.totalLength }}'</p>

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

    .libraryContainer {
      border: 1px solid white;
      padding: 15px;
      width: 47.8%;
      margin-left: 12.5rem;
      margin-top: 1rem;
      margin-bottom: 2rem;

      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    .library {
      margin-left: 60px;
    }

    .completed {
      background-color: #7BA670;
      color: white;
      font-weight: bold;
      font-size: large;
      font-family: "Newsreader", serif;
      padding: 8px;
      border-radius: 10px;
      width: 90%;
      margin-bottom: 10px;
    }

    .wishlist {
      background-color: #5F9FA7;
      color: white;
      font-weight: bold;
      font-size: large;
      font-family: "Newsreader", serif;
      padding: 8px;
      border-radius: 10px;
      width: 90%;
      margin-bottom: 10px;
    }

    .watching {
      background-color: #56355E;
      color: white;
      font-weight: bold;
      font-size: large;
      font-family: "Newsreader", serif;
      padding: 8px;
      border-radius: 10px;
      width: 90%;
      margin-bottom: 10px;
    }
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

  .detailsOfAnime {
    border: 1px solid white; 
    padding: 15px; 
    width: 90%;
    margin-bottom: 30px;
    text-align: center;
  }

  .popularityRank {
    border: 1px solid white; 
    padding: 15px;
    width: 90%;
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