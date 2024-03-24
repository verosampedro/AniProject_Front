<script setup>

import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();

</script>

<template>

    <div id="headerLoggedContainer">

        <div class="logoContainer">

            <img src="../../assets/img/logo.png">
            <h2>ANIPROJECT</h2>

        </div>

        <div class="homeLoggedContainer">

            <img src="../../assets/img/home.svg">
            <img src="../../assets/img/wishlist.svg">
            <img src="../../assets/img/requests.svg">
            <img src="../../assets/img/logout.svg">
            <p>{{ authStore.username }}</p>

        </div>

    </div>
</template>

<style lang="scss">
#headerLoggedContainer {

display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center; 

background-color: #C7C7C7;
padding: 10px; 
overflow-x: hidden; 

.logoContainer {

    display: flex;
    align-items: center; 
    font-family: "Neucha", cursive;
    padding: 5px; 

    img {
        width: 80px; 
        margin-right: 5px; 
        max-width: 100%; 
        height: auto; 
    }

    h2 {
        margin: 0; 
        padding: 0; 
        color: black;
    }
}

.homeLoggedContainer {

    display: flex;
    margin-left: 45px;

    img {
        width: 35px;
        padding: 5px;
    }
}
}


@media only screen and (min-width: 768px) {

#headerLoggedContainer {

    .logoContainer {

        img {
            width: 100px; 
        }

        h2 {
            padding: 10px; 
        }
    }

    .homeLoggedContainer {
      margin-left: 1450px;

       img {
        width: 50px;
        padding: 10px;
       }
    }
}
}

</style>