// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-black p-6 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="SID Labs Logo" className="w-32" />
        </div>
        <nav className="space-x-6">
          <a href="#mission" className="nav-link">About Us</a>
          <a href="#projects" className="nav-link">Flagship Projects</a>
          <a href="#contact" className="nav-link">Contact Now</a>
          <a href="#testimonial" className="nav-link">Testimonial</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
