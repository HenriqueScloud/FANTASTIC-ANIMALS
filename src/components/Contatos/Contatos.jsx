export const Contatos = () =>{

  return (
    <>
      <h1 class="titulo">Contatos</h1>
      <div
        class="mapa"
        data-tooltip
        aria-label="Endereço próximo ao estacionamento."
      >
        <img src="midia/mapa.png" alt="mapa" />
      </div>
      <ul class="dados">
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
    </>
  );
}