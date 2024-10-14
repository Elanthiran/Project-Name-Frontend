import "./Cart.css"
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, removeFromCart, updateCartItem } = useCart();

  const handleQuantityChange = (items, quantity) => {
    if (quantity > 0) {
      updateCartItem(items, quantity);
    }
  };

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((items) => (
            <div key={items.id} className="d-flex justify-content-between mt-3">
              <div>
              <img src={items.image}  className="card-img-top size mb-2 image " alt="" />
                <h5>{items.head}</h5>
                <p>Price: <MdOutlineCurrencyRupee />{items.price}</p>
                <input
                  type="number"
                  value={items.quantity}
                  onChange={(e) =>
                    handleQuantityChange(items, Number(e.target.value))
                  }
                  min="1"
                  style={{ width: "70px" }}
                />
              </div>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(items)}
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
          <h4 className="mt-5">
            Total: <MdOutlineCurrencyRupee />
            {cart.reduce((total, items) => total + items.price * items.quantity, 0)}
          </h4>
          <Link to={"/Order"}><button className="btn btn-warning">Continue</button></Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
