import React from 'react';
import image from "../assets/image.webp";
const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img 
          src={image}
          alt="Gym interior" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="container mx-auto text-center relative z-10 text-white">
        <h2 className="text-5xl font-bold mb-4">Welcome to FitZone Gym</h2>
        <p className="text-xl mb-8">Transform your body, elevate your mind</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 text-lg font-semibold">
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;
