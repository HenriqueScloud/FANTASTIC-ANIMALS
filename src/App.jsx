import { useState } from "react";
import { Contatos } from "./components/Contatos/Contatos";
import { Faq } from "./components/Faq/Faq";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";
import "./styles/globalStyles.scss";
import { Header } from "./components/Header/Header";
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


        <ul className="animais-lista" data-tab="menu">
          <li>
            <img
              src="midia/urso.jpg"
              alt="img 1"
              data-tooltip
              aria-label="Fatos incríveis do Urso Pardo."
            />
          </li>
          <li>
            <img
              src="midia/coruja.jpg"
              alt="img 2"
              data-tooltip
              aria-label="Fatos incríveis da Coruja."
            />
          </li>
          <li>
            <img
              src="midia/leao.jpg"
              alt="img 3"
              data-tooltip
              aria-label="Fatos incríveis do Leão."
            />
          </li>
          <li>
            <img
              src="midia/raposa.jpg"
              alt="img 4"
              data-tooltip
              aria-label="Fatos incríveis da Raposa."
            />
          </li>
          <li>
            <img
              src="midia/lobo.jpg"
              alt="img 5"
              data-tooltip
              aria-label="Fatos incríveis do Lobo."
            />
          </li>
          <li>
            <img
              src="midia/micoLeaoDourado.jpg"
              alt="img 6"
              data-tooltip
              aria-label="Fatos incríveis do Mico-Leão-Dourado."
            />
          </li>
        </ul>

        <div className="animais-descricao" data-tab="content">
          <section className="ativo show-right" data-anime="show-right">
            <h2>Urso</h2>
            <p>
              As raposas São animais mamíferos e onívoros pertencentes à família
              Canidae. São vulpídeos de porte médio, caracterizados por um
              focinho comprido e uma cauda longa e peluda.
            </p>
            <p>
              Também apresentam como particularidade suas pupilas ovais,
              semelhante às pupilas verticais dos Felídeos.
            </p>
            <p>
              De cerca de 40 espécies reconhecidas como raposas, Somente 12
              pertencem ao gênero Vulpes das "raposas verdadeiras", Do qual a
              raposa vermelha é a mais comum.
            </p>
            <p>
              Também apresentam como particularidade suas pupilas ovais
              semelhantes às pupilas verticais dos Felíideos
            </p>
          </section>
          <section data-anime="show-down">
            <h2>Coruja</h2>
            <p>
              As raposas São animais mamíferos e onívoros pertencentes à família
              Canidae. São vulpídeos de porte médio, caracterizados por um
              focinho comprido e uma cauda longa e peluda.
            </p>
            <p>
              Também apresentam como particularidade suas pupilas ovais,
              semelhante às pupilas verticais dos Felídeos.
            </p>
            <p>
              De cerca de 40 espécies reconhecidas como raposas, Somente 12
              pertencem ao gênero Vulpes das "raposas verdadeiras", Do qual a
              raposa vermelha é a mais comum.
            </p>
            <p>
              Também apresentam como particularidade suas pupilas ovais
              semelhantes às pupilas verticais dos Felíideos
            </p>
          </section>
          <section data-anime="show-right">
            <h2>Leão</h2>
            <p>
              As raposas São animais mamíferos e onívoros pertencentes à família
              Canidae. São vulpídeos de porte médio, caracterizados por um
              focinho comprido e uma cauda longa e peluda.
            </p>
            <p>
              Também apresentam como particularidade suas pupilas ovais,
              semelhante às pupilas verticais dos Felídeos.
            </p>
            <p>
              De cerca de 40 espécies reconhecidas como raposas, Somente 12
              pertencem ao gênero Vulpes das "raposas verdadeiras", Do qual a
              raposa vermelha é a mais comum.
            </p>
            <p>
              Também apresentam como particularidade suas pupilas ovais
              semelhantes às pupilas verticais dos Felíideos
            </p>
          </section>
          <section data-anime="show-down">
            <h2>Raposa</h2>
            <p>
              As raposas São animais mamíferos e onívoros pertencentes à família
              Canidae. São vulpídeos de porte médio, caracterizados por um
              focinho comprido e uma cauda longa e peluda.
            </p>
            <p>
              Também apresentam como particularidade suas pupilas ovais,
              semelhante às pupilas verticais dos Felídeos.
            </p>
            <p>
              De cerca de 40 espécies reconhecidas como raposas, Somente 12
              pertencem ao gênero Vulpes das "raposas verdadeiras", Do qual a
              raposa vermelha é a mais comum.
            </p>
            <p>
              Também apresentam como particularidade suas pupilas ovais
              semelhantes às pupilas verticais dos Felíideos
            </p>
          </section>
          <section data-anime="show-right">
            <h2>Lobo</h2>
            <p>
              As raposas São animais mamíferos e onívoros pertencentes à família
              Canidae. São vulpídeos de porte médio, caracterizados por um
              focinho comprido e uma cauda longa e peluda.
            </p>
            <p>
              Também apresentam como particularidade suas pupilas ovais,
              semelhante às pupilas verticais dos Felídeos.
            </p>
            <p>
              De cerca de 40 espécies reconhecidas como raposas, Somente 12
              pertencem ao gênero Vulpes das "raposas verdadeiras", Do qual a
              raposa vermelha é a mais comum.
            </p>
            <p>
              Também apresentam como particularidade suas pupilas ovais
              semelhantes às pupilas verticais dos Felíideos
            </p>
          </section>
          <section data-anime="show-down">
            <h2>MIco-Leão-Dourado</h2>
            <p>
              As raposas São animais mamíferos e onívoros pertencentes à família
              Canidae. São vulpídeos de porte médio, caracterizados por um
              focinho comprido e uma cauda longa e peluda.
            </p>
            <p>
              Também apresentam como particularidade suas pupilas ovais,
              semelhante às pupilas verticais dos Felídeos.
            </p>
            <p>
              De cerca de 40 espécies reconhecidas como raposas, Somente 12
              pertencem ao gênero Vulpes das "raposas verdadeiras", Do qual a
              raposa vermelha é a mais comum.
            </p>
          </section>
        </div>

        <Faq />
        <Contatos />
        <Footer />
      </div>

      {cardModal && <Modal cardModal={cardModal} setCardModal={setCardModal} />}
    </>
  );
}

export default App;
