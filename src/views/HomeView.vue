<script setup lang="ts">
  import { useGetPokemon } from "@composables/useGetPokemon";

  const { pokemonImage, pokefy } = useGetPokemon();
</script>

<template>
  <main>
    <div class="wrapper">
      <button @click="pokefy()">Pokéfy</button>
      <div class="poke-sprite">
        <img :src="pokemonImage"
          alt="Image of a random pokemon"
          v-if="pokemonImage" />
      </div>
    </div>
  </main>
</template>

<style scoped>
  .wrapper {
    margin-top: 2rem;
    display: grid;
    justify-content: center;
  }

  .poke-sprite {
    width: auto;
    height: 96px;
  }
</style>