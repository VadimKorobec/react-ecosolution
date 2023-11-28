import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 360px) and (max-width: 480px) {
    margin: 0 auto;
    padding: 0 20px;
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 0 30px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 auto;
    padding: 0 100px;
  }
`;
