import styled from "styled-components";

export const LogoWrap = styled.div`
  display: flex;
  gap: 4px;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #97d28b;
  margin-bottom: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Icon = styled.img`
  padding: 8px;
  border-radius: 50%;
  background-color: #97d28b;
  cursor: pointer;

  &:hover {
    background-color: #173d33;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Address = styled.address`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  font-style: normal;
  color: #173d33;
  text-align: center;
  margin-bottom: 16px;
`;

export const Link = styled.a`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  text-align: center;
  margin-bottom: 16px;
`;

export const Unicode = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  text-align: center;
  margin-bottom:24px;
`;
