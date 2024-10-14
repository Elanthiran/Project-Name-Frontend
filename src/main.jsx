import { BrowserRouter as Router } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from "./context/CartContext";
import { UserContextProvider } from "./context/usercontext.jsx";



createRoot(document.getElementById('root')).render(
  <CartProvider>
    
    <Router>
    <UserContextProvider>
    <App/>
    </UserContextProvider>
  </Router>
    
  
  </CartProvider>
)
