import Image from "next/image";
import Link from "next/link";

const PokemonSSR = ({ pokemons }) => {
  return (
    <>
      <h1>Pokemons SSR</h1>
      <ul>
        {pokemons &&
          pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              {pokemon.name}
              <Link href={`/ssr/${pokemon.id}`}>
                <a>
                  <Image
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={`Pokemon ${pokemon.name} image`}
                    width="200px"
                    height="200px"
                    placeholder="empty"
                  />
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default PokemonSSR;

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://pokemon-api-aleksandr.herokuapp.com/pokemon"
  );
  const pokemons = await response.json();
  return {
    props: { pokemons },
  };
};
