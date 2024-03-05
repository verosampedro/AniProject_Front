<script setup>

</script>

<template>

    <div id="footerContainer">

        <p>Copyright©</p>

        <div class="rrssContainer">

            <img src="../../assets/img/steam.svg">
            <img src="../../assets/img/ig.svg">
            <img src="../../assets/img/facebook.svg">
            
        </div>

    </div>

</template>

<style lang="scss">

#footerContainer {

    background-color: #C7C7C7;

    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        padding: 10px;
    }

    .rrssContainer {

        display: flex;
        justify-content: flex-end;
        padding: 10px;

        img {

            width: 15%;
            padding: 5px;
        }
    }
}

@media only screen and (min-width: 768px) {

    #footerContainer {

        .rrssContainer {

            img {
                width: 3%;
            }
        }
    }
}

</style>