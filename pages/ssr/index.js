const PokemonSSR = ({ pokemons }) => {
  return (
    <>
      <h1>Pokemons SSR</h1>
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
export default PokemonSSR;

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://pokemon-api-aleksandr.herokuapp.com/pokemon"
  );
  const pokemons = await response.json();
  console.log("pokemons: ", pokemons);
  return {
    props: { pokemons },
  };
};
