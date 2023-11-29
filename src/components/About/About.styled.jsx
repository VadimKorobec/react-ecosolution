import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  color: #173d33;
  padding-bottom: 24px;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  margin-bottom:36px;
`;

export const Img = styled.img`
  @media screen and (max-width: 767.9px) {
    display: none;
  }
`;

export const CardWrapper = styled.div`
  @media screen and (max-width: 767.9px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    margin-bottom:36px;
  }
`;

export const Card = styled.div`
  
  height: 197px;
  padding: 17px 12px 12px 12px;
  background-color: #eaedf1;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 33px;
`;

export const CardTitle = styled.h3`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #173d33;
  text-transform: uppercase;
  
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #97d28b;
  margin-bottom:12px;
  
`;

export const CardText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
  color: #173D33;
`;