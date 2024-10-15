// src/context/CartContext.jsx
import axios from "axios";
import { createContext, useReducer, useContext, useEffect, useState } from "react";


// Create CartContext
const CartContext = createContext();

// Helper functions for localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.find((item) => item.id === action.payload.id);
      let updatedCart;

      if (existingProduct) {
        updatedCart = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state, { ...action.payload, quantity: 1 }];
      }

      saveCartToLocalStorage(updatedCart);
      return updatedCart;

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);

    case "UPDATE_CART_ITEM":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    default:
      return state;
  }
};

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);

// CartProvider component to wrap the app
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], getCartFromLocalStorage);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const[user,setUser]=useState(null)
  
  

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  const addToCart = (items) => {
    if (!isLoggedIn) {
      alert("Please log in to add items to your cart.");
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: items });
  };

  const removeFromCart = (items) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: items });
  };

  const updateCartItem = (items, quantity) => {
    dispatch({ type: "UPDATE_CART_ITEM", payload: { ...items, quantity } });
  };
    useEffect(() => {
    axios
      .get("https://project-name-backend-1-5zgo.onrender.com/getUsers")
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token) => {
    setIsLoggedIn(true);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };


  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartItem, isLoggedIn, login, logout,user }}
    >
      {children}
    </CartContext.Provider>
  );
};
