<script setup lang="ts">
  import axios from "axios";

  interface PokeAPIResponse {
    data: { sprites: { front_default: string } },
  }

  async function getPokemon(): Promise<string> {
    const randomPokemonNumber = Math.floor(Math.random() * (600 - 1) + 1);
    try {
      const getPokemon = axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}`);
      const pokeman = await getPokemon;
      console.log(pokeman);
      // Causes TS error I can't seem to fix despite my best attempts
      return pokeman.data.sprites.front_default;
    } catch (error) {
      console.log(error);
      return "error";
    }
  }

  async function pokefy() {
    const spriteElement = document.querySelector(".poke-sprite")! as HTMLDivElement;
    const pokemonUri = await getPokemon();
    if (pokemonUri && spriteElement.children.length > 0) {
      // Causes TS error I can't seem to fix despite my best attempts
      for (let child of spriteElement.children) {
        spriteElement.removeChild(child);
      }
    }
    attachSprite(pokemonUri, spriteElement);
  }

  function attachSprite(pokemonUri: string, spriteElement: HTMLDivElement) {
    const imageElement = document.createElement("img");
    imageElement.src = pokemonUri;
    spriteElement.appendChild(imageElement);
  }
</script>

<template>
  <main>
    <div class="wrapper">
      <button @click="pokefy()">Pokéfy</button>
      <div class="poke-sprite"></div>

    </div>
  </main>
</template>

<style scoped>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
  }
</style>