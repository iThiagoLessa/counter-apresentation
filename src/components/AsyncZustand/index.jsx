import { useEffect } from "react";
import {
  StBoxContainer,
  StContainer,
  StPokemonContainer,
} from "../../global/styled";
import ZustandStore from "../../store/StoreZustandConfig";

const AsyncZustand = () => {
  const { pokemons, getZusPokemon } = ZustandStore();

  useEffect(() => {
    getZusPokemon();
  }, [getZusPokemon]);

  return (
    <StBoxContainer>
      <h1>Asynchronous Zustand</h1>
      <StContainer>
        {pokemons.map((pokemon) => (
          <StPokemonContainer key={pokemon.name}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} width={150} alt="Pokemon" />
            <span>Tipo: {pokemon.type}</span>
          </StPokemonContainer>
        ))}
      </StContainer>
    </StBoxContainer>
  );
};

export default AsyncZustand;
