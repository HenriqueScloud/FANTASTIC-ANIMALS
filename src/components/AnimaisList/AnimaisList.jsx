import { DBInfoProduct } from "../../dataBase/InfoProducts";
import { ProductCard } from "./ProductCard/ProductCard";
import style from"./style.module.scss"
export const AnimaisList = () => {
  return (
      <ul className={style.animais_lista} data-tab="menu">
        {DBInfoProduct.map((Product) => {
          return <ProductCard Product={Product} key={Product.id} />;
        })}
      </ul>
  );
};
