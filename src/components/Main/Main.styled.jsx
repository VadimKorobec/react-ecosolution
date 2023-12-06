import styled from "styled-components";

export const TitleWrapper = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: space-between;
    padding-top: 128px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    margin-right: 96px;
    padding-top: 176px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: #173d33;
  padding-bottom: 24px;
  width: 320px;

  @media screen and (max-width: 767px) {
    padding-top: 110px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 48px;
    line-height: 48px;
    width: 300px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
    width: 485px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  margin-bottom: 24px;
  word-spacing: 10px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 365px;
    word-spacing: normal;
    margin-bottom: 43px;
  }

  @media screen and (min-width: 1280px) {
    width: 365px;
    word-spacing: normal;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  width: 141px;
  height: 39px;
  padding: 4px 4px 4px 16px;
  display: flex;
  border: 1px solid #97d28b;
  border-radius: 500px;
  align-items: center;
  color: #173d33;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  background-color: #f3f5fa;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: #173d33;
    border: 1px solid #173d33;
    color: #97d28b;
  }

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    margin-bottom: 24px;
  }
`;

export const Icon = styled.img`
  background-color: #97d28b;
  border-radius: 50%;
  padding: 8px 8px;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #97d28b;

  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
  }
`;

export const AddressWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 36px;
  }
`;

export const Adress = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  text-align: center;
  color: #173d33;
  margin-bottom: 8px;

  @media screen and (min-width: 1280px) {
    margin-right: 320px;
  }
`;

export const Link = styled.a`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  text-align: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 36px;
  }
`;

export const Unicode = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;

  @media screen and (max-width: 767.9px) {
    display: none;
  }
`;


export const Img = styled.img`
  margin-bottom: 36px;
  background-image: url(../);

  
`;
