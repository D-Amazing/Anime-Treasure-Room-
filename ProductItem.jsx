import './ProductItem.css';

import React from 'react';
import './ProductItem.css';

function ProductItem({ product, onAddToCart }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-img" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">{product.price}</p>
      <p className="product-desc">{product.description}</p>
      <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
}

// This code defines a ProductItem component that takes a product object as a prop and displays its image, name, price, and description.
export default ProductItem;
// This code defines a ProductItem component that takes a product object as a prop and displays its image, name, price, and description.
// The component is styled using CSS classes defined in the ProductItem.css file.