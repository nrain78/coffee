import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import bg from '../../../public/Bg.png';
import coffee from '../../../public/coffee.json';

const bgImage = {
  backgroundImage: `url(${bg})`,
  backgroundColor: "#1a0e08",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

function About() {
  return (
    <div
      style={bgImage}
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-12 text-center drop-shadow-md">
        About Our Coffee Story
      </h1>

      {/* Content */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        {/* Left Side - Coffee Animation */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Lottie animationData={coffee} className="max-w-xs md:max-w-md w-full" />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-5 text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-2xl text-black leading-relaxed">
            Welcome to <span className="text-amber-400 font-semibold">Coffee Craze</span>, where passion meets the perfect brew.
          </p>
          <p className="text-lg md:text-2xl text-black leading-relaxed">
            We carefully handpick every bean and roast it to perfection to serve you a cup full of joy. Whether it’s a chill morning or a cozy evening — your favorite coffee is always here.
          </p>
          <p className="text-lg md:text-2xl text-black  leading-relaxed">
            Be part of our story — sip by sip.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
