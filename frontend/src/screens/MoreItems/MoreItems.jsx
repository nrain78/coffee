import React from 'react';
import MoreItemsData from "../../data/MoreItemsData/MoreItemsData";
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';

function MoreItems() {
  const dispatch = useDispatch();

  return (
    <div className='bg-gradient-to-r from-slate-100 to bg-amber-950 min-h-screen flex items-center justify-center mt-10'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-4xl font-serif text-center text-black mb-10'>
          Our Menu
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {MoreItemsData.map(item => (
            <div 
              key={item.id}
              className='bg-white rounded-lg shadow-lg p-4 hover:bg-amber-900 hover:text-white transition duration-300 group'
            >
              <img 
                src={item.image}
                alt={item.title}
                className='w-full h-48 object-cover rounded-t-lg mb-4'
              />
              <h3 className='text-xl font-semibold text-gray-800 group-hover:text-white'>
                {item.title}
              </h3>
              <p className='text-gray-600 mt-2 group-hover:text-white'>
                {item.description}
              </p>
              <p className='text-lg font-bold text-amber-800 mt-2 group-hover:text-yellow-300 transition'>
                ${item.price}
              </p>
              <button
                onClick={() => dispatch(addToCart(item))}
                className='group-hover:bg-white group-hover:text-amber-900 mt-4 bg-amber-900 text-white px-4 py-2 rounded-lg transition duration-300'
              >
                Add to Cart
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default MoreItems;
