import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom"
import Icecream from "./components/pages/Icecream"
import Juice from "./components/pages/Juice"
import Cake from "./components/pages/Cake"
import All from "./components/pages/All"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart"
import OrderConfirmationPage from "./components/pages/OrderConfirmationPage"
import CheckoutPage from "./components/pages/CheckoutPage"
import Register from './components/Register';
import Login from './components/Login';
import  { useEffect, useState} from 'react';
import axios from "axios"
import Create from "./components/Admin.jsx/Create"

import Order from "./components/Order"
import UserDashboard from "./components/Admin.jsx/UserDashboard"
import Crud from "./components/Admin.jsx/Crud";














const App = () => {
  


const[users,setUsers]=useState([])
const[user,setUser]=useState([])
  const [token, setToken] = useState(localStorage.getItem('token'));

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const isAuthenticated = () => {
    if (!token) return false;

    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  }
  useEffect(()=>
  { axios.get("http://localhost:4002/getItem").then(users=>setUsers(users.data)).catch(err=>console.log(err)
   
    )
  },[])

  
      useEffect(()=>
        { 
          axios.get("http://localhost:4002/getUsers").then((user)=>setUser(user.data)).catch(err=>console.log(err)
          )
        },[])
     
      

  return (
    <div className="container">
      
      
       <Navbar />
       
<Routes>
  <Route path="/" element={<All  users={users} />} />
  <Route path="Icecream" element={<Icecream users={users} />} />
  <Route path="Cake" element={<Cake users={users}/>} />
  <Route path="Juice" element={<Juice users={users} />} />
  <Route path="cart" element={<Cart />} />
  <Route path="checkout" element={<CheckoutPage />} />
  <Route path="order-confirmation" element={<OrderConfirmationPage/>} />
  <Route path="Create" element={<Create />}/>
  
  <Route path="Crud" element={<Crud />}/>
  <Route path="order" element={<Order />} />
  
  <Route path="/user" element={<UserDashboard user={user}/>} />
  
  
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />}/>
  {/* <Route path="/searchbar" element={<SearchBar users={users} />} /> */}
   

</Routes>
     
        
      
    </div>
  )
}



export default App