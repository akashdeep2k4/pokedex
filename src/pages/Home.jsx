import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";

const StyledHome = styled.div``;
const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 208px), 1fr));
  gap: clamp(20px, 3.125vw, 40px);
`;

const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`);
      const data = await response.json();
      setPokemonData(data.results);
    };
    fetchPokemonData();
  }, [offset]);

  return (
    <StyledHome>
      <StyledList>
        {pokemonData.map((currentPokemon) => {
          return <Card key={currentPokemon.name} pokemon={currentPokemon} />;
        })}
      </StyledList>
    </StyledHome>
  );
};

export default Home;
