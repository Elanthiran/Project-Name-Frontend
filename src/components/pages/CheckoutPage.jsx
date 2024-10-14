import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";


const CheckoutPage = () => {
  const { cart } = useCart(); // Get the cart from the CartContext
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const navigate = useNavigate();

  // Calculate total price
  const totalAmount = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleCheckout = (e) => {
    e.preventDefault();

    if (paymentMethod === "stripe") {
      // Handle payment method with Stripe
      alert("Proceeding to payment via Stripe...");
      navigate("/order-confirmation");
    } else {
      alert("Please select a valid payment method");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <form onSubmit={handleCheckout}>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Shipping Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="paymentMethod" className="form-label">
              Payment Method
            </label>
            <select
              className="form-select"
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="stripe">Stripe</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <div>
            <h4>Total Amount: ${totalAmount}</h4>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Proceed to Pay
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutPage;
