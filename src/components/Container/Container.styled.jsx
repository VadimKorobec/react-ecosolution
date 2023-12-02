import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right:20px;
  padding-left:20px;

  @media screen and (min-width: 480px) {
    width: 440px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 708px;
    padding: 0 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 1080px;
    padding: 0 100px;
  }
`;
