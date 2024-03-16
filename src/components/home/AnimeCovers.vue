<script>
import { ref, onMounted, computed } from 'vue';

export default {
  setup() {
    const animes = ref([]);
    const currentPage = ref(1);
    const pageLimit = 16;
    const searchTerm = ref('');

    const fetchAnimes = async () => {
      try {
        let url = `https://kitsu.io/api/edge/anime?page[limit]=${pageLimit}&page[offset]=${(currentPage.value - 1) * pageLimit}`;
        if (searchTerm.value) {
          url += `&filter[text]=${encodeURIComponent(searchTerm.value)}`;
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

    return {
      animes,
      nextPage,
      previousPage,
      currentPage,
      searchTerm,
      filteredAnimes
    };
  },
};
</script>


<template>
    <div>
      <input type="text" v-model="searchTerm" placeholder="Buscar anime..." @input="fetchAnimes" />
  
      <div class="coversContainer">
        <div v-for="anime in filteredAnimes" :key="anime.id" class="cover">
          <img v-if="anime.attributes.posterImage && anime.attributes.posterImage.original" :src="anime.attributes.posterImage.original" alt="Anime Cover" class="coverImg" />
          <img v-else src="../assets/img/download.jpg" alt="Anime Cover" class="coverImg" />
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
    justify-content: flex-start;
    flex-wrap: wrap;
    }

    .cover {
    margin: 5px;
    }

    .coverImg {
    width: 200px;
    }

    .pagination {
    margin-top: 20px;
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

</style>