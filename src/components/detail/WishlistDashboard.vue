<template>
    <div>
      <button @click="toggleWishlist">{{ isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist' }}</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['animeId'],
    data() {
      return {
        isInWishlist: false
      };
    },
    mounted() {
      this.checkIfInWishlist();
    },
    methods: {
      checkIfInWishlist() {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        this.isInWishlist = wishlist.includes(this.animeId);
      },
      toggleWishlist() {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (this.isInWishlist) {
          const index = wishlist.indexOf(this.animeId);
          if (index !== -1) {
            wishlist.splice(index, 1);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            this.isInWishlist = false;
          }
        } else {
          wishlist.push(this.animeId);
          localStorage.setItem('wishlist', JSON.stringify(wishlist));
          this.isInWishlist = true;
        }
      }
    }
  };
  </script>
  


<style lang="scss">


.wishlistDashboard {
 max-width: 900px;
 height: 500px;
 margin: 0 auto;
 padding: 50px;
 background-color: #C7C7C7;
 margin-top: 120px;
 margin-bottom: 120px;

 h2 {
    font-family: 'Newsreader', serif;
    font-weight: bold;
    font-size: 2rem;
 }

}

</style>