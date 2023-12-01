import styled from "styled-components";
import { ReactComponent as call } from "../../assets/img/call.svg";
import { ReactComponent as sms } from "../../assets/img/sms.svg";
import { ReactComponent as facebook } from "../../assets/img/facebook.svg";
import { ReactComponent as instagram } from "../../assets/img/instagram.svg";

export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  color: #173d33;
  text-transform: uppercase;
  text-align: center;
`;

export const SubTitle = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #173d33;
  margin-bottom: 8px;
  padding-top: 24px;
`;

export const PhoneWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 188px;
`;

export const SmsWrap = styled.div`
 width:251px ;
`

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width:265px;
`;

export const Link = styled.a`
  display: flex;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #173d33;
  gap: 8px;
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
  margin-bottom: 24px;
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
`;

export const Instagram = styled(instagram)`
  padding: 12px;
  stroke: #173d33;
  cursor: pointer;

  &:hover {
    stroke: #97d28b;
  }
`;
