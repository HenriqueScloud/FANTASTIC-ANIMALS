import style from "./style.module.scss";

export const Menu = ({ setCardModal, setCardMenu }) => {
  return (
    <>
      <nav className={style.menu} data-menu="suave">
        <button onClick={()=>{setCardMenu(false)}}>x</button>
        <ul>
          <li>
            <a href="#animais">Animais</a>
          </li>
          <li>
            <a href="#faq" className="">
              Faq
            </a>
          </li>
          <li className="data-dropdown">
            <a href="#contatos">Contatos</a>
            <ul>
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
          <li className="data-dropdown">
            <a href="#animais">Sobre</a>
            <ul className="dropdown-menu">
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
          <li className="data-dropdown">
            <a href="https://github.com/HenriqueScloud/" target="_blan">
              Dev
            </a>
            <ul className="dropdown-menu">
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
            <span
              onClick={() => {
                setCardModal(true);
              }}
            >
              Login ➙
            </span>
          </li>
        </ul>
      </nav>


    </>
  );
};
