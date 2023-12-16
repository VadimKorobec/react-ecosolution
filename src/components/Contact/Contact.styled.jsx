import styled from "styled-components";
import { ReactComponent as call } from "../../assets/icon/call.svg";
import { ReactComponent as sms } from "../../assets/icon/sms.svg";
import { ReactComponent as facebook } from "../../assets/icon/facebook.svg";
import { ReactComponent as instagram } from "../../assets/icon/instagram.svg";

export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  color: #173d33;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 28px;
  }

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 120px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  @media screen and (min-width:1280px) {
    margin-bottom: 120px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 767px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px;
  }
`;

export const SubTitle = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  margin-bottom: 8px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 16px;
  }
`;

export const PhoneWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 188px;

  @media screen and (min-width: 1280px) {
    width: 220px;
  }
`;

export const SmsWrap = styled.div`
  width: 251px;

  @media screen and (min-width: 1280px) {
    width: 296px;
  }
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 265px;

  @media screen and (min-width:1280px) {
    width:466px;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #173d33;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 28.8px;
  }
`;

export const Address = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #173d33;
`;

export const IconWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const Icon = styled.img`
  padding: 12px;
`;

export const Call = styled(call)`
  stroke: #173d33;
  cursor: pointer;

  ${Link}:hover & {
    stroke: #97d28b;
  }
`;

export const Sms = styled(sms)`
  stroke: #173d33;
  cursor: pointer;

  ${Link}:hover & {
    stroke: #97d28b;
  }
`;

export const Facebook = styled(facebook)`
  padding: 12px;
  stroke: #173d33;
  cursor: pointer;

  &:hover {
    stroke: #97d28b;
  }

  @media screen and (min-width:1280px) {
    padding: 0;
  }
`;

export const Instagram = styled(instagram)`
  padding: 12px;
  stroke: #173d33;
  cursor: pointer;

  &:hover {
    stroke: #97d28b;
  }

  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`;
