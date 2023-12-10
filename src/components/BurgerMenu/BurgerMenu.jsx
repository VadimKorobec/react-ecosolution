import titles from "../../assets/titlesMenu.json";

import { Button, ContainerMenu, IconClose, MenuLink, Overlay } from "./BurgerMenu.styled";

export const BurgerMenu = ({ onClick }) => {
  return (
    <Overlay>
      <ContainerMenu>
        <IconClose>
          
        </IconClose>
        <Button onClick={() => onClick()}>close</Button>
        {titles.map((item) => (
          <li key={item.id}>
            <MenuLink
              to={item.href}
              spy={true}
              smooth={true}
              offset={-90}
              duration={1000}
              onClick={() => onClick()}
            >
              {item.label}
            </MenuLink>
          </li>
        ))}
      </ContainerMenu>
    </Overlay>
  );
};
