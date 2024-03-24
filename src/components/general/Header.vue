<script setup>
import { useAuthStore } from '@/stores/authStore';
import HeaderLogged from './HeaderLogged.vue';

const authStore = useAuthStore();
</script>

<template>

    <div id="headerContainer">

        <div v-if="!authStore.isAuthenticated" class="logoContainer">

            <img src="../../assets/img/logo.png">
            <h2>ANIPROJECT</h2>

        </div>

        <div v-if="!authStore.isAuthenticated" class="homeContainer">

            <img src="../../assets/img/home.svg">
            <img src="../../assets/img/login.svg">

        </div>

    
        <HeaderLogged v-if="authStore.isAuthenticated"/>

    </div>
</template>

<style lang="scss">

#headerContainer {

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

    .homeContainer {

        display: flex;
        align-items: center;

        img {
            width: 50px;
            padding: 10px;
        }
    }
}


@media only screen and (min-width: 768px) {

    #headerContainer {

        .logoContainer {

            img {
                width: 100px; 
            }

            h2 {
                padding: 10px; 
            }
        }

        .homeContainer {

           img {
            width: 55px;
           }
        }
    }
}

</style>