import titles from "../../assets/titlesMenu.json";

import {
  Arrow,
  BtnWrapp,
  Button,
  ContainerMenu,
  Facebook,
  IconClose,
  IconWrap,
  Instagram,
  Item,
  Line,
  MenuLink,
  Overlay,
} from "./BurgerMenu.styled";

export const BurgerMenu = ({ onClick }) => {
  return (
    <Overlay>
      <ContainerMenu>
        <BtnWrapp>
          <IconClose />
          <Button onClick={() => onClick()}>close</Button>
        </BtnWrapp>
        <Line />
        {titles.map((item) => (
          <Item key={item.id}>
            <MenuLink
              to={item.href}
              spy={true}
              smooth={true}
              offset={-115}
              duration={1000}
              onClick={() => onClick()}
            >
              {item.label}
              <Arrow />
            </MenuLink>
          </Item>
        ))}
        <IconWrap>
          <a href="https://www.facebook.com/">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/">
            <Instagram />
          </a>
        </IconWrap>
      </ContainerMenu>
    </Overlay>
  );
};
