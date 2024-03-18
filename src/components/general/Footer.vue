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
    overflow-x: hidden; 

    display: flex;
    justify-content: center; 
    align-items: center; 

    p {
        padding: 10px;
        margin: 0; 
        color: black;
    }

    .rrssContainer {

        display: flex;
        justify-content: center; 
        align-items: center; 
        padding: 10px;

        img {
            width: 40px; 
            height: auto; 
            padding: 5px;

            max-width: 100%; 
            height: auto; 
        }
    }
}

@media only screen and (min-width: 768px) {

    #footerContainer {

        .rrssContainer {
            margin-top: 0; 
        }

        img {
            width: 30px; 
        }
    }
}

</style>