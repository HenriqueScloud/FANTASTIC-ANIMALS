import { useState } from "react";
import { Contatos } from "./components/Contatos/Contatos";
import { Faq } from "./components/Faq/Faq";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";
import "./styles/globalStyles.scss";
import { Header } from "./components/Header/Header";
import { AnimaisList } from "./components/AnimaisList/AnimaisList";
import { AnimaisDescrition } from "./components/AnimaisDescrition/AnimaisDescrition";
function App() {
  const [cardModal, setCardModal] = useState(false);
  const [cardMenu, setCardMenu] = useState(false);
  return (
    <>
      <div className="grid-container">
        <Header
          cardModal={cardModal}
          setCardModal={setCardModal}
          cardMenu={cardMenu}
          setCardMenu={setCardMenu}
        />


        <AnimaisList/>
        {/* <AnimaisDescrition/> */}
        {/* <Faq /> */}
        {/* <Contatos /> */}
        {/* <Footer /> */}
      </div>

      {cardModal && <Modal cardModal={cardModal} setCardModal={setCardModal} />}
    </>
  );
}

export default App;
