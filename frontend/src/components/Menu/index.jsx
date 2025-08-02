import React from 'react';
import MenuData from '../../data/MenuData/Menudata';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';
import { motion } from 'framer-motion';

function Menu() {
  const dispatch = useDispatch();

  return (
    <div className="bg-gradient-to-r from-slate-100 to-amber-950 min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-serif text-center text-black mb-12"
        >
          Best coffee for you
        </motion.h2>

        {/* Responsive Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {MenuData.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg shadow-lg p-5 hover:bg-amber-900 transition duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 group-hover:text-gray-200 transition">
                {item.description}
              </p>
              <p className="text-lg font-bold text-amber-800 mt-2 group-hover:text-yellow-300 transition">
                ${item.price}
              </p>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="mt-4 bg-amber-900 text-white px-4 py-2 rounded-lg group-hover:bg-white group-hover:text-amber-900 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </motion.div>

        {/* More Items Button */}
        <div className="text-center mt-12">
          <Link to="/more-items">
            <button className="bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition duration-500 font-semibold text-lg">
              More Items
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
