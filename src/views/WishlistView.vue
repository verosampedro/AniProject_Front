<script>
import WishlistDashboard from '@/components/detail/WishlistDashboard.vue';
import AnimeDetails from '@/components/detail/AnimeDetails.vue';

export default {
 components: {
    AnimeDetails,
    WishlistDashboard
 },
 props: ['animeId'],
 data() {
    return {
      wishlistAnimeIds: []
    };
 },
 methods: {
    handleAddToWishlist(animeId) {
      this.wishlistAnimeIds.push(animeId);
    }
 }
};
</script>

<template>

<div>
    <AnimeDetails :animeId="animeId" @add-to-wishlist="handleAddToWishlist" />
    <WishlistDashboard :wishlistAnimeIds="wishlistAnimeIds" />
 </div>

</template>

<style lang="scss">

</style>