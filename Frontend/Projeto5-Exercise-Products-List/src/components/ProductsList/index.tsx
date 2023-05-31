import './index.css';

type ChildrenTipagem = {
  children: React.ReactNode;
};

function ProductsList({ children }: ChildrenTipagem) {
  return (
    <div>
      <h1 className="titulo">Lista de produtos</h1>
      <ul>{ children }</ul>
    </div>
  );
}

export default ProductsList;
