import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">FitZone Gym</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-200 transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-blue-200 transition duration-300">About</a></li>
            <li><a href="#classes" className="hover:text-blue-200 transition duration-300">Classes</a></li>
            <li><a href="#contact" className="hover:text-blue-200 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
