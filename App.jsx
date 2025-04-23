import { useState } from 'react';
import ProductList from './productlist';
import ProductItem from './ProductItem';
import './ProductItem.css';
import './ProductList.css';
import './App.css';
// This code imports the necessary dependencies and components for the e-commerce product app.
// It uses React's useState hook to manage the state of the product list.
// The ProductList component is responsible for rendering the list of products,
// while the ProductItem component is used to display individual product details.
// The CSS files are imported to style the components.
// The app displays a list of anime-themed products, each with an image, name, price, and description.
// The products are stored in the state and passed to the ProductList component for rendering.
// The App component serves as the main entry point for the application,
// and it initializes the product data and renders the ProductList component.
// The app is styled with CSS to create a visually appealing layout for the product cards.
// The app is designed to be a simple e-commerce platform for anime merchandise,
// showcasing various products such as plushies, figures, and apparel.
// The app is built using React, a popular JavaScript library for building user interfaces.
// The app is structured into components, with each component responsible for a specific part of the UI.
// The app is designed to be responsive and user-friendly,
// allowing users to easily browse and view product details.
// The app is a great starting point for anyone looking to create an e-commerce platform using React.



function App() {
  const [products] = useState([
    {
      id: 1,
      name: 'Nezuko Kamado Plush',
      price: '$25',
      description: 'Adorable and soft, straight from Demon Slayer!',
      image: '/images/nezuko-plush.jpg',
      category: 'Plushies'
    },
    {
      id: 2,
      name: 'Gojo Satoru Figure',
      price: '$40',
      description: 'High-quality Jujutsu Kaisen figure with blindfold accessory.',
      image: '/images/gojo-figure.jpg',
      category: 'Figures'
    },
    {
      id: 3,
      name: 'Naruto Shippuden Hoodie',
      price: '$35',
      description: 'Cozy, stylish, and ninja-approved.',
      image: '/images/naruto-hoodie.jpg',
      category: 'Apparel'
    },
    // — New Anime Products —
    {
      id: 4,
      name: 'Monkey D. Luffy (Gear 5) Figure',
      price: '$150',
      description: 'Dynamic Gear 5 action figure with herculean pose and translucent red aura.',
      image: '/images/luffy-gear5.jpg',
      category: 'Figures'
    },
    {
      id: 5,
      name: 'Jin‑Woo Statue',
      price: '$40.56',
      description: 'Elite Assassin statue from Solo Leveling, featuring his signature glowing shadow armor.',
      image: '/images/jinwoo-sololeveling.jpg',
      category: 'Figures'
    },
    {
      id: 6,
      name: 'Goku Mini Figure',
      price: '$60',
      description: 'Compact Dragon Ball Z collectible, perfect for any shelf or desk.',
      image: '/images/goku-mini.jpg',
      category: 'Figures'
    },
  ]);
  
  return (
    <div className="app-container">
      <h1 className="app-title">🎮📦Anime-Teasurse-Room </h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;

