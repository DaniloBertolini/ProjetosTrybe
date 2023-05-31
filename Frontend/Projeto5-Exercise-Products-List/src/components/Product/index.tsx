import './index.css';

type TipagemProductInfo = {
  productInfo: {
    title: string,
    price: number,
    image: string
  }
};

function Product({ productInfo }: TipagemProductInfo) {
  const { image, price, title } = productInfo;
  return (
    <li className="lista">
      <div className="divLista">
        <p>{title}</p>
        <p>{`R$ ${price}`}</p>
      </div>
      <img src={ image } alt={ title } />
    </li>
  );
}

export default Product;
