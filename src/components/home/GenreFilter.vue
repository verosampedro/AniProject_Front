<script>

export default {
  data() {
    return {
      selectedGenre: '',
      genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Slice of Life', 'Sci-Fi', 'Thriller', 'Mystery', 'Horror', 'Romance', 'Supernatural'] 
    };
  },
  methods: {
    filterByGenre() {
      this.$emit('filterByGenre', this.selectedGenre);
    }
  }
};

</script>

<template>

  <div class="genre-filter">

    <select v-model="selectedGenre" @change="filterByGenre" class="select-genre">

      <option value="">Genres</option>
      <option v-for="genre in genres" :value="genre" :key="genre">{{ genre }}</option>

    </select>

  </div>

</template>


<style lang="scss">

.genre-filter {
  
  text-align: end;
  margin-right: 5.5rem;

.select-genre {
  width: 10%;
  padding: 10px;
  font-size: 16px;
  border: none;
  background-color: #C7C7C7;
  color: gray;
  outline: none;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

}

</style>