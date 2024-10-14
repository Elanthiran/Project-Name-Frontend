import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext';
import { IoIosLogOut } from "react-icons/io";
import './Navbar.css'; // Ensure this is included for styles
import { useThisContext } from "../context/usercontext";
import { useState } from "react";


const Navbar = () => {
  const { logout, isLoggedIn,user } = useCart();
  const {data,search,setSearch}=useThisContext();
  const navigate = useNavigate();
  
  console.log(search)

  const handleLogout = () => {
    if (isLoggedIn) {
      logout(); // Call the logout function from CartContext
      alert('You have been logged out.');
      navigate("/login"); // Redirect to login page after logout
    } else {
      alert("You are already logged out.");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand me-4 mt-3" href="#">HAVEMORE</a>
        <div className="collapse navbar-collapse show" id="navbarSupportedContent">
          <ul className="navbar-nav me-4 mt-3 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">All</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Icecream">ICE-CREAM</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Juice">JUICE</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cake">Cake</Link>
            </li>
          </ul>
          <form className="d-flex me-4 mt-3" role="search">
            <input
              className="form-control"
              type="text"
              placeholder="Search for products..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              aria-label="Search"
            />
              
            <button className="btn btn-outline-success" type="submit">
              <FaSearch />
            </button>
          </form>
          <form className="d-flex me-4 mt-3" role="cart">
            <Link className="nav-link" to="/cart">
              <button className="btn btn-outline-success" type="button">
                <FaShoppingCart />
              </button>
              <span className="mt-2">Cart</span>
            </Link>
          </form>
          <form className="d-flex me-4 mt-3" role="login">
            <Link className="nav-link" to="/Login">
              <button className="btn btn-outline-success" type="button">
                <CgProfile />
              </button>
              <span className="mt-2">Login</span>
            </Link>
          </form>
          <form className="d-flex me-4 mt-3" role="logout">
            <button className="btn btn-outline-success" type="button" onClick={handleLogout}>
              <IoIosLogOut />
            </button>
            <span className="mt-2">Logout</span>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
