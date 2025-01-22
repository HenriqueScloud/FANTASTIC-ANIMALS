
import style from "../Modal/style.module.scss";


// eslint-disable-next-line react/prop-types
export const Modal = ( IsModal) => {
  console.log(IsModal);
  return (
    <section className={style.modal_container} >
      <div className={style.modal}>
        <button
          className={style.fechar}
          onClick={() => {
            IsModal= !IsModal;
            console.log(IsModal);
            
          }}
        >
          X
        </button>

        {IsModal ? ( // Renderiza o formulário apenas se showModal for true
          <form>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" autoComplete="off" />
            <button type="submit">Entrar</button>
          </form>
        ) : null }
      </div>
    </section>
  );
};
