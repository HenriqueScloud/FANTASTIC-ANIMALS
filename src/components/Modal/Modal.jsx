import style from "../Modal/style.module.scss";

export const Modal = ({ cardModal, setCardModal }) => {
  return (
    <section className={style.modal_container}>
      <div className={style.modal}>
        <button
          className={style.fechar}
          onClick={() => {
            console.log(cardModal);
            setCardModal(false);
          }}
        >
          X
        </button>
        <form>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" />
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha" autoComplete="off" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </section>
  );
};
