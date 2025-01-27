export const AnimaisList = () =>{

  return (
    <>
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
            src="./"
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
    </>
  );
}