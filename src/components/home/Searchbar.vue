<script setup>


</script>

<template>

    <div class="searchbar">
        <input type="text" class="search-input" id="search" placeholder="¿Qué estás buscando?" required>
    </div>

</template>

<style lang="scss">

.searchbar {

    text-align: center;

    .search-input {
        width: 80%; 
        padding: 10px;
        font-size: 16px;
        border: none;
        background-color: #C7C7C7;
        color: #fff;
        outline: none;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
}

</style>