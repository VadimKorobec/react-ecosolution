import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: #173d33;
  padding-bottom: 24px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  margin-bottom: 24px;
  word-spacing:10px;
`;

export const Button = styled.button`
  width: 141px;
  height: 39px;
  padding: 4px 4px 4px 16px;
  display: flex;
  border: 1px solid #97d28b;
  border-radius: 500px;
  margin: 0 auto;
  align-items: center;
  color: #173d33;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  background-color: #f3f5fa;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Icon = styled.img`
  background-color: #97d28b;
  border-radius: 50%;
  padding: 8px 8px;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #97d28b;
  margin-bottom: 24px;
`;

export const Adress = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  text-align: center;
  color: #173d33;
  margin-bottom: 8px;
`;

export const Link = styled.a`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  text-align: center;
  margin-bottom:36px;
`;

export const Unicode = styled.p`
  @media screen and (max-width:767.9px) {
    display:none;
  }
` 
export const Img = styled.img`
  margin-bottom:36px;
`