import { IoMenuSharp } from "react-icons/io5";
import { Menu } from "../Menu/Menu";

import "./style.module.scss";
export const Header = ({ cardModal, setCardModal, cardMenu, setCardMenu }) => {

  let viewport = window.innerWidth;

  if (viewport >= 900 ){
    setCardMenu(true);    
  }

  return (
    <header>
      <h1 className="titulo">Animais Fantásticos </h1>
      {cardMenu ? (
        <Menu setCardMenu={setCardMenu} setCardModal={setCardModal} />
      ) : (
        <button>
          <IoMenuSharp
            onClick={() => {
              setCardMenu(true);
            }}
          />
        </button>
      )}
    </header>
  );
};
