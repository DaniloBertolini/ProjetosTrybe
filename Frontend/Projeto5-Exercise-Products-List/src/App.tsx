import Product from './components/Product';
import products from './data';
import ProductsList from './components/ProductsList';

import './App.css';

function App() {
  return (
    <div className="cent">
      <div className="container">
        <ProductsList>
          {products.map((produto) => (
            <Product productInfo={ produto } key={ produto.id } />
          ))}
        </ProductsList>
      </div>
    </div>
  );
}

export default App;
