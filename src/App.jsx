import { useState } from "react";
import { Carrossel } from "./components/Carrossel/Carrossel";
import { Contatos } from "./components/Contatos/Contatos";
import { Faq } from "./components/Faq/Faq";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";
// import { modal } from "./components/Modal/Modal";
function App() {
  const [showModal, setshowModal] = useState(false);
  
  return (
    <>
      <div className="grid-container">
        <Carrossel setModal={(showModal, setshowModal)} />
        <Faq />
        <Contatos />
        <Footer />
      </div>
      <Modal setModal={(showModal, setshowModal)} />
    </>
  );
}

export default App;
