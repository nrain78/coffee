import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-slate-100 to-amber-950 h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center relative gap-10">

        {/* Text Section */}
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="text-amber-900 text-lg md:text-xl font-cursive"
          >
            Welcome to Coffee Shop
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-2 leading-tight"
          >
            Discover the best <span className="text-amber-800 font-mono">Coffee</span> in town
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 mt-4 max-w-md"
          >
            Experience the rich aroma and flavor of our freshly brewed coffee. One cup at a time.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-6 px-6 py-3 bg-amber-700 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all duration-300"
          >
            Order Now
          </motion.button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            src="/coffee5.png"
            alt="coffee"
            className="w-60 sm:w-80 md:w-[400px] lg:w-[480px]"
          />
        </div>

        {/* Decorative Beans (Don't Touch These Motions) */}
        <motion.img
          initial={{ opacity: 0, x: 8, y: 100, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.8 }}
          src="/bean2.png"
          className="absolute hidden md:block bottom-20 left-36 w-16 rotate-45"
          alt="bean"
        />

        <motion.img
          initial={{ opacity: 0, x: 600, y: 200, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.8 }}
          src="/bean1.png"
          className="absolute hidden md:block top-14 left-0 w-16"
          alt="bean"
        />

        <motion.img
          initial={{ opacity: 0, x: -200, y: 100, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 45 }}
          transition={{ duration: 1.8, delay: 0.8 }}
          src="/bean2.png"
          className="absolute hidden md:block top-7 right-0 w-16 -rotate-45"
          alt="bean"
        />
      </div>
    </div>
  )
}
