import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="w-full h-screen bg-darkBlue relative overflow-hidden">
      <Link to="/" className="logo fixed top-4 left-4 md:left-8 z-50">
        <img src="/logo.svg" alt="Logo" className="w-12 md:w-16 bg-bg bg-opacity-75 p-1" />
      </Link>

      <div className="inner hidden md:block absolute top-2 right-8 z-50 bg-green-alt rounded-lg max-w-[250px] p-8 clip-circle-sm hover:clip-circle-lg transition-all duration-500">
        <h1 className="text-white pb-3 mb-3">Hello 👋</h1>
        <p className="text-white text-sm leading-relaxed font-light">
          Thanks for visiting my Portfolio! If you like what you see, send me a{' '}
          <a href="#contact" className="text-white text-xs border-b-2 border-dotted border-mainColor">message</a>
        </p>
      </div>

      <ThemeToggle />

      <div className="landing-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full z-10 select-none">
        <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-['the_historia_demoregular',sans-serif] p-4 bg-gradient-to-t from-mainColor to-secondColor bg-clip-text text-transparent tracking-widest">
          Phong Le
        </h1>
        <p className="text-xs md:text-base px-4 mt-2 md:mt-0">
          My approach to frontend engineering is simple:
          <i> create with purpose, empathy, and attention to detail.</i>
        </p>
      </div>
    </header>
  );
};

export default Header;
