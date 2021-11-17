import Image from "next/image";
import { useEffect, useState } from "react";

const PokemonCSR = () => {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
      const { results } = await res.json();
      const urlList = results.map((pokemon) => pokemon.url);
      const result = await Promise.all(urlList.map((url) => fetch(url)));
      const pokemons = await Promise.all(result.map((res) => res.json()));
      setPokemon(pokemons);
      return null;
    })();
  }, []);

  return (
    <>
      <h1>PokemonCSR</h1>
      <ul>
        {pokemons &&
          pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              {pokemon.name}
              <Image
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Pokemon ${pokemon.name} image`}
                width="200px"
                height="200px"
                placeholder="empty"
              />
            </li>
          ))}
      </ul>
    </>
  );
};
export default PokemonCSR;
