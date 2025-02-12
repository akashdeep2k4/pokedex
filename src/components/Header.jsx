import styled from "styled-components";
import { theme } from "../styles/theme";

const StyledHeader = styled.header`
  text-align: center;
  background-color: ${theme.colors.dark};
`;

const Logo = styled.div`
  background-color: ${theme.colors.red};
`;

const LogoText = styled.h1`
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: ${theme.sizes.clamp24};
  padding-bottom: clamp(12px, 1.78vw, 28px);
  color: ${theme.colors.yellow};
  font-family: ${theme.fonts.logo};
  font-size: clamp(2rem, 5vw, 4rem);
  letter-spacing: 2px;
  text-shadow: -4px -4px 0px #434a54, 4px -4px 0px #434a54, -4px 4px 0px #434a54, 4px 4px 0px #434a54, 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const TaglineText = styled.p`
  max-width: 1280px;
  margin: 0 auto;
  padding-inline: ${theme.sizes.clamp24};
  font-size: clamp(1rem, 3vw, 2rem);
  padding-block: ${theme.sizes.small};
  font-family: ${theme.fonts.heading};
  color: white;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <LogoText>PoKeDeX</LogoText>
      </Logo>
      <TaglineText>Your Ultimate Pokemon Explorer</TaglineText>
    </StyledHeader>
  );
};

export default Header;
