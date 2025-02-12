import styled from "styled-components";
import { theme } from "../styles/theme";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${theme.colors.dark};
`;

const FooterText = styled.p`
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: ${theme.sizes.clamp24};
  color: white;
  height: 70px;
  text-align: center;
  align-content: center;
`;

const PokeLink = styled.a`
  text-decoration: underline;
  transition: all 0.3s ease;
  &:hover {
    color: ${theme.colors.red};
  }
`;
const GithubLink = styled.a`
  text-decoration: underline;
  transition: all 0.3s ease;
  &:hover {
    color: ${theme.colors.red};
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterText>
        Pokedex Powered by&nbsp;
        <PokeLink href="https://pokeapi.co/" target="_blank">
          PokeAPI
        </PokeLink>
        . Made with 🤍 by&nbsp;
        <GithubLink href="https://github.com/akashdeep2k4" target="_blank">
          Akashdeep
        </GithubLink>
        .
      </FooterText>
    </StyledFooter>
  );
}
