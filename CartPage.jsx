import { useState } from 'react';

function CartPage({ cart }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    paymentMethod: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order submitted successfully!');
    // You could also implement payment processing here (like using Stripe or PayPal).
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Shipping Address"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          required
        />
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="credit">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default CartPage;
// This code defines a CartPage component that displays the items in the shopping cart and a checkout form for the user to fill out.
// The component uses the useState hook to manage the form data, including name, address, email, and payment method.    