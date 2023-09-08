import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StBoxContainer,
  StContainer,
  StPokemonContainer,
} from "../../global/styled";
import { fetchPokemons } from "../../store/slices/requestSlice";

const AsyncRedux = () => {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state.requestSlice);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <StBoxContainer>
      <h1>Asynchronous Redux</h1>
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

export default AsyncRedux;
