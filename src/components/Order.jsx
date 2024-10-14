// src/components/Order.js

import React from 'react';
import { MdOutlineCurrencyRupee } from 'react-icons/md';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Order = () => {
  const { cart } = useCart();

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h2>Your Order Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add items to your cart before proceeding to checkout.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="d-flex justify-content-between mt-3">
              <div>
                <img src={item.image} className="card-img-top size mb-2 image" alt="" />
                <h5>{item.head}</h5>
                <p>Price: <MdOutlineCurrencyRupee />{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: <MdOutlineCurrencyRupee />{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <h4 className="mt-5">
            Total: <MdOutlineCurrencyRupee />
            {totalAmount}
          </h4>
          <Link to="/CheckOut">
            <button className="btn btn-success">CheckOut</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Order;
