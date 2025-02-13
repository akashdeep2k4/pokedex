import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { theme } from "../styles/theme";

const StyledDetails = styled.div`
  max-width: 512px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.sizes.clamp24};
  text-transform: capitalize;
`;

const PokemonPicture = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  background-color: ${theme.colors.gray};
  width: 87.5vw;
  max-width: 360px;
  height: 87.5vw;
  max-height: 360px;
  padding: 20px;
  border-radius: 16px;
`;

const StyledName = styled.div`
  display: flex;
  color: ${theme.colors.dark};
  gap: 10px;
`;

const Name = styled.span`
  font-family: ${theme.fonts.heading};
  font-weight: normal;
  font-size: 32px;
`;

const Id = styled.span`
  font-size: 14px;
`;

const Gif = styled.figure`
  width: 32px;
`;

const Types = styled.ul`
  display: flex;
  gap: 20px;
`;

const Type = styled.li`
  /* font-size: 20px;
  font-weight: bold;
  padding: 8px 24px;
  background-color: ${theme.colors.gray};
  border-radius: 50px; */
`;

const About = styled.ul`
  display: flex;
  gap: 20px;
`;

const AboutData = styled.li`
  display: grid;
  grid-auto-flow: row;
  text-align: center;
`;

const Abilities = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Ability = styled.li``;

const Stats = styled.ul`
  display: flex;
  gap: 20px;
`;

const Stat = styled.li`
  display: grid;
  grid-auto-flow: row;
  text-align: center;
`;

const LoadingText = styled.p`
  text-align: center;
  margin-top: 128px;
`;

const ErrorText = styled.p`
  text-align: center;
  color: ${theme.colors.red};
`;

const Details = () => {
  const { querry } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${querry}`);
        if (!response.ok) {
          throw new Error("Failed to fetch Pokemon Details");
        }
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [querry]);

  return (
    <>
      <Header />

      <section>
        {isLoading && <LoadingText>Loading...</LoadingText>}
        {isError && <ErrorText>Error fetching data.</ErrorText>}

        {pokemonDetails && !isLoading && !isError && (
          <StyledDetails>
            <PokemonPicture>{pokemonDetails.sprites.other.dream_world.front_default && <img src={pokemonDetails.sprites.other.dream_world.front_default} alt="Sprite" />}</PokemonPicture>

            <StyledName>
              <Gif>
                <img src={pokemonDetails.sprites?.other?.showdown?.front_default} alt="" />
              </Gif>

              <h1>
                <Name>{pokemonDetails.name}</Name> <Id>#{pokemonDetails.id}</Id>
              </h1>
            </StyledName>

            <About>
              <AboutData>
                <span>{pokemonDetails.height}</span>
                <span>Height</span>
              </AboutData>
              <AboutData>
                <span>{pokemonDetails.weight}</span>
                <span>Weight</span>
              </AboutData>
              <AboutData>
                <span>{pokemonDetails.base_experience}</span>
                <span>Experience</span>
              </AboutData>
            </About>

            <h3>Types</h3>
            <Types>
              {pokemonDetails.types?.map((type, index) => (
                <Type key={index}>{type.type.name}</Type>
              ))}
            </Types>

            <h3>Abilities</h3>
            <Abilities>
              {pokemonDetails.abilities?.map((ability, index) => (
                <Ability key={index}>{ability.ability.name.replace("-", " ")}</Ability>
              ))}
            </Abilities>

            <h3>Stats</h3>
            <Stats>
              {pokemonDetails.stats
                ?.filter((stat) => !stat.stat.name.includes("special"))
                .map((stat) => (
                  <Stat key={stat.stat.name}>
                    <span>{stat.base_stat}</span>
                    <span>{stat.stat.name}</span>
                  </Stat>
                ))}
            </Stats>
          </StyledDetails>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Details;
