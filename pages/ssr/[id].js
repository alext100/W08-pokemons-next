import Image from "next/image";

const PokemonSSRDetails = ({ pokemon }) => {
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

export default PokemonSSRDetails;

export const getServerSideProps = async ({ params: { id } }) => {
  const response = await fetch(
    "https://pokemon-api-aleksandr.herokuapp.com/pokemon/" + id
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
