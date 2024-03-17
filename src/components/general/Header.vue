<script setup>

</script>

<template>

    <div id="headerContainer">

        <div class="logoContainer">

            <img src="../../assets/img/logo.png">
            <h2>ANIPROJECT</h2>

        </div>

        <div class="homeContainer">

            <h3>HOME</h3>
            <h3>LOG IN</h3>

        </div>

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
        }
    }

    .homeContainer {

        display: flex;

        font-family: "Newsreader", serif;

        h3 {
            margin: 0; 
            padding: 5px 10px; 
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

            h3 {
                padding: 10px 15px; 
            }
        }
    }
}

</style>