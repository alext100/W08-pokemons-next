import { useEffect } from "react";
import { useState } from "react";

const PokemonCSR = () => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
      const { results } = await res.json();
      setPokemonsList(results);
      const urlList = pokemonsList.map((pokemon) => pokemon.url);
      const result = await Promise.all(urlList.map((url) => fetch(url)));
      const pokemons = await Promise.all(result.map((res) => res.json()));
      setPokemon(pokemons);
    })();
  }, [pokemons]);

  return (
    <>
      <h1>PokemonCSR</h1>
      <ul>
        {pokemons &&
          pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              {pokemon.name}
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Pokemon ${pokemon.name} image`}
                style={{ width: "20%" }}
              />
            </li>
          ))}
      </ul>
    </>
  );
};
export default PokemonCSR;
