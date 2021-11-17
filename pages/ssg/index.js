import Image from "next/image";
import Link from "next/link";

const PokemonSSG = ({ pokemons }) => {
  return (
    <>
      <h1>Pokemons SSG</h1>
      <ul>
        {pokemons &&
          pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              {pokemon.name}
              <Link href={`/ssg/${pokemon.id}`}>
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
export default PokemonSSG;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://pokemon-api-aleksandr.herokuapp.com/pokemon/"
  );
  const pokemons = await response.json();
  if (!pokemons) {
    return {
      notFound: true,
    };
  }
  return {
    props: { pokemons },
  };
};
