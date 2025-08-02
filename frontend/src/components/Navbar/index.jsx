import React, { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCart3 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (err) {
        console.error("Invalid token:", err);
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
  alert("logout")
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-amber-950 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-around">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto object-contain" />
          <h1 className="text-white text-2xl font-bold">Coffee Shop</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-white font-semibold">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
          <li><Link to="/menu" className="hover:text-yellow-300">Menu</Link></li>
          <li>
            {user ? (
              <div className="flex items-center gap-3">
                <FaUserCircle className="text-xl" />
                <span>{user.username}</span>
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="bg-amber-800 hover:bg-amber-700 px-3 py-1 rounded text-white">Login</Link>
            )}
          </li>
        </ul>
        {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <BsCart3 size={24} className="text-white" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1 rounded-full">
              {totalItems}
            </span>
          </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          {/* Cart Icon */}
          {/* <Link to="/cart" className="relative">
            <BsCart3 size={24} className="text-white" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1 rounded-full">
              {totalItems}
            </span>
          </Link> */}

          {isOpen ? (
            <RxCross1 size={26} className="text-white cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <CiMenuFries size={26} className="text-white cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-amber-900 text-white transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 py-4" : "max-h-0"}`}>
        <ul className="flex flex-col items-center gap-4 font-medium">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">About</Link></li>
          <li><Link to="/menu" onClick={() => setIsOpen(false)} className="hover:text-yellow-300">Menu</Link></li>
          <li>
            {user ? (
              <div className="flex  items-center gap-2">
                <FaUserCircle className="text-xl" />
                <span>{user.username}</span>
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded">Logout</button>
              </div>
            ) : (
              <Link to="/login" onClick={() => setIsOpen(false)} className="bg-amber-800 hover:bg-amber-700 px-3 py-1 rounded">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
