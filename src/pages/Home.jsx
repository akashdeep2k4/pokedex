import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 208px), 1fr));
  gap: clamp(20px, 3.125vw, 40px);
`;

const StyledButton = styled.button`
  margin-top: ${theme.sizes.clamp24};
  border: 4px solid ${theme.colors.red};
  color: ${theme.colors.red};
  font-size: 20px;
  font-weight: bold;
  padding: 16px 32px;
  border-radius: 16px;
  transition: ${theme.transition};
  &:hover {
    color: white;
    background-color: ${theme.colors.red};
  }
`;

const LoadingText = styled.p`
  text-align: center;
`;
const ErrorText = styled.p`
  text-align: center;
  color: ${theme.colors.red};
`;

const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`);
        const data = await response.json();
        setPokemonData(pokemonData.concat(data.results));
        setCount(data.count);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemonData();
  }, [offset]);

  const handleLoadMore = () => {
    if (offset + 50 < count) {
      setOffset(offset + 50);
    }
  };

  return (
    <>
      <Header />

      <section>
        {isLoading && <LoadingText>Loading...</LoadingText>}
        {isError && <ErrorText>Error Fetching Data.</ErrorText>}
        {pokemonData && !isError && !isLoading && (
          <StyledList>
            {pokemonData.map((currentPokemon) => {
              return <Card key={currentPokemon.name} pokemon={currentPokemon} />;
            })}
          </StyledList>
        )}
        {!isLoading && !isError && <StyledButton onClick={handleLoadMore}>Load More</StyledButton>}
      </section>

      <Footer />
    </>
  );
};

export default Home;
