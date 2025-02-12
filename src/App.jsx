import styled from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import { theme } from "./styles/theme";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

const Main = styled.main`
  min-width: 100%;
  width: 100%;
`;

const Section = styled.section`
  max-width: 1280px;
  min-height: 80dvh;
  margin: 0 auto;
  background-color: white;
  padding: ${theme.sizes.clamp24};
`;

const App = () => {
  return (
    <Router>
      <Main>
        <GlobalStyle />
        <Header />

        <Section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:name" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Section>

        <Footer />
      </Main>
    </Router>
  );
};

export default App;
