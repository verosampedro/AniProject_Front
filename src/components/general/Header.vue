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
    justify-content: space-around;

    background-color: #C7C7C7;
    

    .logoContainer {

        display: flex;

        font-family: "Neucha", cursive;
        padding: 15px;

        img {
            width: 20%;
        }

        h2 {
            padding: 8px;
        }
    }

    .homeContainer {

        display: flex;

        padding: 10px;
        font-family: "Newsreader", serif;

        h3 {
            padding: 10px;
        }
    }
}


@media only screen and (min-width: 768px) {

    #headerContainer {

        display: flex;
        justify-content: space-between;

        .logoContainer {

            img {
                width: 10%;
            }

            h2 {
                padding: 15px;
            }
        }

        .homeContainer {

            h3 {
                padding: 25px;
            }
        }
    }
}

</style>