// src/components/Card.jsx
import { useCart } from "../../context/CartContext";
import "./Card.css";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Card = ({ items }) => {
    const { addToCart, isLoggedIn } = useCart();

    const handleAddToCart = () => {
        if (isLoggedIn) {
            addToCart(items);
            alert("Product added to cart!");
        } else {
            alert("Please log in to add items to your cart.");
        }
    };


    return (
        <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
            <div className="card h-100 ">
             <img src={items.image} className="card-img-top size mb-2"  alt="items.title" />
                <div className="card-body my-3">
                    <h5 className="card-title">{items.head}</h5>
                    <h5 className="card-title">{items.title}</h5>
                    <p className="card-text"><MdOutlineCurrencyRupee />{items.price}</p>
                    <button type="button" className="btn btn-primary" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
