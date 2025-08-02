import React from 'react'
import './index.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import MoreItems from './screens/MoreItems/MoreItems';
import Cart from './screens/Cart/Cart';  
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Footer from './components/Footer/Footer';

function App() {
  return (
  <>
  <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/more-items" element={<MoreItems />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/contact" element={<Contact />} />  */}
        
         <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
  </Router>


  </>
  )
}

export default App