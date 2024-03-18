<script>
import { ref, onMounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import GenreFilter from './GenreFilter.vue';

export default {
  components: {
    GenreFilter
  },
  setup() {
    const router = useRouter();
    const animes = ref([]);
    const currentPage = ref(1);
    const pageLimit = 16;
    const searchTerm = ref('');
    const selectedGenre = ref('');

    const fetchAnimes = async () => {
      try {
        let url = `https://kitsu.io/api/edge/anime?page[limit]=${pageLimit}&page[offset]=${(currentPage.value - 1) * pageLimit}`;
        if (searchTerm.value) {
          url += `&filter[text]=${encodeURIComponent(searchTerm.value)}`;
        }
        if (selectedGenre.value) {
          url += `&filter[genres]=${encodeURIComponent(selectedGenre.value)}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        animes.value = data.data;
      } catch (error) {
        console.error('Error fetching animes:', error);
      }
    };

    const nextPage = () => {
      currentPage.value++;
      fetchAnimes();
    };

    const previousPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        fetchAnimes();
      }
    };

    onMounted(fetchAnimes);

    const filteredAnimes = computed(() => {
      return animes.value.filter(anime => {
        return anime.attributes.canonicalTitle.toLowerCase().includes(searchTerm.value.toLowerCase());
      });
    });

    const filterByGenre = (genre) => {
      selectedGenre.value = genre;
      fetchAnimes();
    };

    const showAnimeDetails = (id) => {
    router.push({ name: 'AnimeDetails', params: { animeId: id } });
    };
    watch(searchTerm, () => {
      fetchAnimes();
    });

    return {
      animes,
      nextPage,
      previousPage,
      currentPage,
      searchTerm,
      filteredAnimes,
      filterByGenre,
      showAnimeDetails
    };
  },
};

</script>


<template>

  <div>

    <div class="searchbar">
      <input class="search-input" type="text" v-model="searchTerm" placeholder="¿Qué estás buscando?" />
    </div>

    <GenreFilter @filterByGenre="filterByGenre" />

    <div class="coversContainer">

      <div v-for="anime in filteredAnimes" :key="anime.id" class="cover" @click="showAnimeDetails(anime.id)">

        <img v-if="anime.attributes.posterImage && anime.attributes.posterImage.original" :src="anime.attributes.posterImage.original" alt="Anime Cover" class="coverImg" />
        <img v-else src="../assets/img/download.jpg" alt="Anime Cover" class="coverImg" />

          <div class="overlay">

            <p>TÍTULO: {{ anime.attributes.canonicalTitle }}</p>
            <p>RATING: {{ anime.attributes.averageRating }}</p>
            <p>ESTADO: {{ anime.attributes.status }}</p>
            <p>EPISODIOS: {{ anime.attributes.episodeCount }}</p>
            <p>CLASFICACIÓN POR EDAD: {{ anime.attributes.ageRatingGuide }}</p>

          </div>

      </div>

    </div>

    <div class="pagination">

      <button @click="previousPage" :disabled="currentPage === 1" class="paginationButton">Anterior</button>
      <button @click="nextPage" class="paginationButton">Siguiente</button>

    </div>

  </div>
      
</template>

<style lang="scss">

  .coversContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start; 
    padding-bottom: 20px; 
  }

  .cover {
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    width: 200px; 
    height: auto; 
    margin: 10px; 
  }

  .coverImg {
    width: 100%; 
    height: auto; 
    margin: 0 auto; 
  }

  .cover:hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); 
  }

  .cover .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.7); 
      padding: 10px;
      color: #fff;
      font-size: 14px;
      opacity: 0; 
      transition: opacity 0.3s ease; 
  }

  .cover:hover .overlay {
      opacity: 1;
  }

  .pagination {
    margin-top: 20px;
    margin-bottom: 20px; 
    text-align: center;
  }

  .paginationButton {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 10px;
  }

  .paginationButton:disabled {
      background-color: #ccc;
      cursor: not-allowed;
  }

  .searchbar {
      text-align: center;

      .search-input {
          width: 80%; 
          padding: 10px;
          font-size: 16px;
          border: none;
          background-color: #C7C7C7;
          color: #fff;
          outline: none;
          margin-top: 1rem;
          margin-bottom: 1rem;
      }
  }

</style>