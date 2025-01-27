export const ProductCard = ({ Product }) => {
  // console.log(Product);

  return (
    <li>
      <img src="#" alt="ola" />
      <h2>{Product.name}</h2>
      <p>{Product.description}</p>
      <p>{Product.price}</p>
      <button>Comprar</button>
    </li>
  );
};
