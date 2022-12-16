interface PokeAPIResponse {
  sprites: { front_default: string },
}

export const useGetPokemon = () => {
  const pokemonImage = ref<string>("");

  const getPokemonImage = async () => {
    const randomPokemonNumber = Math.floor(Math.random() * (600 - 1) + 1);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}`);
    if (!response.ok) {
      return;
    }
    const data: PokeAPIResponse = await response.json();
    pokemonImage.value = data.sprites.front_default;
  };

  const pokefy = () => {
    getPokemonImage().catch(() => {
      console.log("Error getting Pokemon");
    });
  };

  return { pokemonImage, pokefy };
};