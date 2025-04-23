import ProductItem from './ProductItem';
import './ProductList.css';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
// This code defines a ProductList component that takes a list of products as props and 
// renders each product using the ProductItem component. 
// The products are displayed in a grid layout, 
// and each product is represented by its own card with an image, name, price, and description.