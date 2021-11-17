import Image from "next/image";

const PokemonSSGDetails = ({ pokemon }) => {
  return (
    <>
      <h1>{pokemon && pokemon.name}</h1>
      <Image
        src={pokemon.sprites.other.dream_world.front_default}
        alt={`Pokemon ${pokemon.name} image`}
        width="200px"
        height="200px"
        placeholder="empty"
      />
    </>
  );
};

export default PokemonSSGDetails;

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pokemon-api-aleksandr.herokuapp.com/pokemon/"
  );
  const pokemons = await res.json();
  const paths = pokemons.map((pokemon) => ({
    params: { id: `${pokemon.id}` },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://pokemon-api-aleksandr.herokuapp.com/pokemon/"${params.id}`
  );
  const pokemon = await response.json();
  if (!pokemon) {
    return {
      notFound: true,
    };
  }
  return {
    props: { pokemon },
  };
};
