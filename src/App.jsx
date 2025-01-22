import { useState } from "react";
import { Carrossel } from "./components/Carrossel/Carrossel";
import { Contatos } from "./components/Contatos/Contatos";
import { Faq } from "./components/Faq/Faq";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";
function App() {
  var IsModal = false;
  
  return (
    <>
      <div className="grid-container">
        <Carrossel setModal={IsModal} />
        <Faq />
        <Contatos />
        <Footer />
      </div>

      <Modal setModal={IsModal} />
    </>
  );
}

export default App;
