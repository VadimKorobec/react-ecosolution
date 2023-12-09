import titles from "../../assets/titlesMenu.json";

import { ContainerMenu, Overlay } from "./BurgerMenu.styled";

export const BurgerMenu = ({ onClick }) => {
  return (
    <Overlay>
      <ContainerMenu>
        <button onClick={() => onClick()}>close</button>
        {titles.map((item) => (
          <li key={item.id}>
            <a href ={item.href} onClick={() => onClick()}>{item.label}</a>
          </li>
        ))}
      </ContainerMenu>
    </Overlay>
  );
};
