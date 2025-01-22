import { Modal } from "../Modal/Modal";

export const Carrossel = ({ setIsModal, IsModal }) => {
  console.log(IsModal);
  
  return (
    <>
      <nav class="menu" data-menu="suave">
        <ul>
          <li>
            <a href="#animais">Animais</a>
          </li>
          <li>
            <a href="#faq" class="">
              Faq
            </a>
          </li>
          <li data-dropdown>
            <a href="#contatos">Contatos</a>
            <ul class="dropdown-menu">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5521969221346&text='Olá! quero encomendar meu site 💻🚀 !!'"
                  target="_blanc"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://github.com/HenriqueScloud" target="'_blanc">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/henrique_silvahsm/"
                  target="'_blanc"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/henrique-silva-mendes/"
                  target="'_blanc"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </li>
          <li data-dropdown>
            <a href="#animais">Sobre</a>
            <ul class="dropdown-menu">
              <li>
                <a href="empresa.html">A Empresa </a>
              </li>
              <li>
                <a href="equipe.html">Equipe </a>
              </li>
              <li>
                <a href="sócios.html">Sócios </a>
              </li>
              <li>
                <a href="investidores.html">investidores</a>
              </li>
            </ul>
          </li>
          <li data-dropdown>
            <a href="https://github.com/HenriqueScloud/" target="_blan">
              Dev
            </a>
            <ul class="dropdown-menu">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5521969221346&text='Olá! quero encomendar meu site 💻🚀 !!'"
                  target="_blanc"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://github.com/HenriqueScloud" target="'_blanc">
                  Portifólio
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/henrique_silvahsm/"
                  target="'_blanc"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/henrique-silva-mendes/"
                  target="'_blanc"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href=""
              data-modal="abrir"
              onClick={() => {
                setIsModal(true);
                console.log(IsModal);
                
              }}
            >
              Login ➙
            </a>
          </li>
        </ul>
      </nav>

      <h1 class="titulo">Animais Fantásticos </h1>

      <ul class="animais-lista" data-tab="menu">
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

      <div class="animais-descricao" data-tab="content">
        <section class="ativo show-right" data-anime="show-right">
          <h2>Urso</h2>
          <p>
            As raposas São animais mamíferos e onívoros pertencentes à família
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda.
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
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda.
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
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda.
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
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda.
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
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda.
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
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda.
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
    </>
  );
};