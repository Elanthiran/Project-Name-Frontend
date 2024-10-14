
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "../context/CartContext";

const stripePromise = loadStripe("your-publishable-key-from-stripe");

const StripeButton = () => {
  const { cart } = useCart();

  const handlePayment = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <button onClick={handlePayment} className="btn btn-primary">
      Pay with Stripe
    </button>
  );
};

export default StripeButton;
