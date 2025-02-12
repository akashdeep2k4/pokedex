import styled, { keyframes } from "styled-components";

const StyledLoader = styled.figure`
  /* width: 100%; */
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderImage = styled.img`
  width: clamp(40px, 3.125vw, 80px);
  animation: ${spin} 2s linear infinite;
`;

const Loader = () => {
  return (
    <StyledLoader>
      <LoaderImage src="../src/assets/images/pokeball.svg" />
    </StyledLoader>
  );
};

export default Loader;
