import styled from "styled-components";
import { theme } from "../styles/theme";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const StyledCard = styled.li``;

const CardContent = styled.div`
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: pointer;
  padding-bottom: 20px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const PokemonImage = styled.figure`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  margin-bottom: 16px;
  /* overflow: hidden; */
  background-color: ${theme.colors.gray};
`;

const PokemonName = styled.h1`
  text-transform: capitalize;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.dark};
  font-weight: normal;
`;

const Card = ({ pokemon }) => {
  const [sprite, setSprite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokimonSprite = async () => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setSprite(data.sprites.other.dream_world.front_default);
    };
    fetchPokimonSprite();
  }, [pokemon.url]);

  return (
    <StyledCard>
      <Link to={`/pokemon/${pokemon.name}`}>
        <CardContent>
          <PokemonImage>
            {isLoading && <Loader />}
            <img src={sprite} alt={pokemon.name} onLoad={() => setIsLoading(false)} style={{ display: isLoading ? "none" : "block" }} />
          </PokemonImage>
          <PokemonName>{pokemon.name}</PokemonName>
        </CardContent>
      </Link>
    </StyledCard>

    // <Link to={`/pokemon/${pokemon.name}`}>
    //   <StyledCard>
    //     <PokemonImage>
    //       {isLoading && <img className="loader" src="/images/pokeball.svg" alt="Loading..." />}
    //       <img src={pokemon.image} alt={pokemon.name} onLoad={() => setIsLoading(false)} style={{ display: isLoading ? "none" : "block" }} />
    //     </PokemonImage>

    //     <PokemonName>{pokemon.name}</PokemonName>
    //   </StyledCard>
    // </Link>
  );
};

export default Card;
