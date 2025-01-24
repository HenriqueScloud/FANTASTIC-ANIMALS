import { useState } from "react";
import { Carrossel } from "./components/Carrossel/Carrossel";
import { Contatos } from "./components/Contatos/Contatos";
import { Faq } from "./components/Faq/Faq";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [cardModal, setCardModal] = useState(true);
  return (
    <>
      <div className="grid-container">
        <Carrossel cardModal={cardModal} setCardModal={setCardModal} />
        <Faq />
        <Contatos />
        <Footer />
      </div>

      {
        cardModal && < Modal cardModal={cardModal} setCardModal={setCardModal}/>
      }
    </>
  );
}

export default App;
