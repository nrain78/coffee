import React from 'react';
import bg from '../../../public/coffee-footer.jpg'; // apna background image path daalo
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const footerStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  
};

export default function Footer() {
  return (
    <footer style={footerStyle} className="text-white py-11 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-3xl font-bold text-amber-400 mb-4">Coffee Craze</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            At Coffee Craze, we serve love in every cup. Freshly brewed coffee crafted from the finest beans, made just for you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-amber-300 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-100">
            <li><a href="/" className="hover:text-amber-400">Home</a></li>
            <li><a href="/about" className="hover:text-amber-400">About</a></li>
            <li><a href="/menu" className="hover:text-amber-400">Menu</a></li>
            {/* <li><a href="/contact" className="hover:text-amber-400">Contact</a></li> */}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-amber-300 mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-amber-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-400"><FaInstagram /></a>
            <a href="#" className="hover:text-amber-400"><FaTwitter /></a>
            <a href="#" className="hover:text-amber-400"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Coffee Craze. All rights reserved.
      </div>
    </footer>
  );
}
