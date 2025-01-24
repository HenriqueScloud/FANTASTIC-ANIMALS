
import style from "../Modal/style.module.scss";


export const Modal = ({showModal, setshowModal}) => {
  return (
    <>
      <section className={style.modal_container}>
        {showModal ? (
          <p>eu sou um </p>
          // <div className={style.modal}>
          //   <button
          //     className={style.fechar}
          //     onClick={() => {
          //       console.log("ola mundo");
          //     }}
          //   >
          //     X
          //   </button>
          //   <form>
          //     <label htmlFor="email">E-mail</label>
          //     <input type="email" id="email" />
          //     <label htmlFor="senha">Senha</label>
          //     <input
          //       type="password"
          //       name="senha"
          //       id="senha"
          //       autoComplete="off"
          //     />
          //     <button type="submit">Entrar</button>
          //   </form>
          // </div>
        ) : null}
      </section>
    </>
  );




















  // console.log(Modal);
  

    
    // <section className={style.modal_container} >
    // { Modal ? 
    //   <div className={style.modal}>
    //     <button
    //       className={style.fechar}
    //       onClick={() => {
    //         console.log('ola mundo');
            
    //       }}
    //     >
    //       X
    //     </button>
    //       <form>
    //         <label htmlFor="email">E-mail</label>
    //         <input type="email" id="email" />
    //         <label htmlFor="senha">Senha</label>
    //         <input type="password" name="senha" id="senha" autoComplete="off" />
    //         <button type="submit">Entrar</button>
    //       </form>
    //   </div>
    //   : null }
    //   </section>
  
};
