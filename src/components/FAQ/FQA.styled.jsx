import styled from "styled-components";

export const ContentWrapper = styled.div`
  @media screen and (min-width: 768px) {
    /* display: flex;
    flex-direction: row-reverse;
    justify-content: space-between; */

    display: grid;
    grid-template-columns: 342px 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 0px;
  }
`;



export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  color: #173d33;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid #97d28b;

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width:768px) and (max-width:1279px)  {
    width: 342px;
  }
`;

export const CardsWrapper = styled.div`
  @media screen and (min-width:768px) {
    /* display: flex;
    flex-direction:column;
    width:342px; */
  }
`

export const Card = styled.div`
  padding: 16px 0 16px 0;
`;

export const TitleWrap = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 8px;
`;

export const CardTitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  color: #173d33;
`;

export const CardText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
  color: #173d33;
`;

export const ButtonWrapper = styled.div`
  @media screen and (min-width: 768px) {
    /* display: flex;
    flex-direction: column;
    width: 330px; */
    
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  color: #173d33;

  @media screen and (max-width: 767px) {
    padding: 20px 0 12px 0;
    text-align: center;
  }

  @media screen and (min-width:768px) {
    padding-bottom: 12px;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 10px 12px 10px 16px;
  border-radius: 500px;
  border: none;
  background-color: #97d28b;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  align-items: center;
  gap: 12px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    margin-bottom: 36px;
  }
`;
