import svgOpen from "../../assets/icon/maximize-circle.svg";
import svgResp from "../../assets/icon/global-edit.svg";
import svgCharge from "../../assets/icon/cpu-charge.svg";
import svgRank from "../../assets/icon/ranking.svg";
import { Container } from "../Container/Container";
import {
  Title,
  Text,
  Card,
  TitleWrapper,
  CardTitle,
  Line,
  CardText,
  CardWrapper,
  Wrapper,
  LineVertical,
  TextWrapper,
  ImgRight,
  ImgLeft,
  Icon,
} from "./About.styled";

export const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <Title>Main values of our company</Title>
        <TextWrapper>
          <LineVertical/>
          <Text>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </Text>
        </TextWrapper>
      </Wrapper>
      <CardWrapper>
        <Card>
          <TitleWrapper>
            <Icon src={svgOpen} alt="icon" />
            <CardTitle>Openness</CardTitle>
          </TitleWrapper>
          <Line/>
          <CardText>
            to the world, people, new ideas and <br /> projects
          </CardText>
        </Card>
        <Card>
          <TitleWrapper>
            <Icon src={svgResp} alt="icon" />
            <CardTitle>Responsibility</CardTitle>
          </TitleWrapper>
          <Line/>
          <CardText>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </CardText>
        </Card>
        <ImgRight />
        <ImgLeft />
        <Card>
          <TitleWrapper>
            <Icon src={svgCharge} alt="icon" />
            <CardTitle>Innovation</CardTitle>
          </TitleWrapper>
          <Line/>
          <CardText>
            we use the latest technology to implement non-standard solutions
          </CardText>
        </Card>
        <Card>
          <TitleWrapper>
            <Icon src={svgRank} alt="icon" />
            <CardTitle>Quality</CardTitle>
          </TitleWrapper>
          <Line/>
          <CardText>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </CardText>
        </Card>
      </CardWrapper>
    </Container>
  );
};
