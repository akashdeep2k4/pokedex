import { Link } from "react-router-dom";
import styled from "styled-components";

const PageNotFound = styled.div`
  width: 100%;
  height: 100vh;
  align-content: center;
  text-align: center;
`;
const GotoHome = styled.p`
  margin-top: 40px;
  text-decoration: underline;
`;

const NotFound = () => {
  return (
    <PageNotFound>
      <h2>Page Not Found</h2>
      <GotoHome>
        <Link to={"/"}>Go To Home</Link>
      </GotoHome>
    </PageNotFound>
  );
};

export default NotFound;
