import React from 'react';
import { Link } from 'react-router-dom';
import fillmoreLogo from '../../assets/images/Fillmore logo.png';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-[100] top-0 left-0 pointer-events-none">
      {/* Hanging Sign - Top Left (Global Nav Logo) */}
      <Link to="/" className="absolute top-[0] left-[8%] md:left-[10%] flex flex-col items-center pointer-events-auto cursor-pointer transition-transform hover:-translate-y-1">
        <div className="flex justify-between w-[70%] h-[26px] md:h-[34px] xl:h-[42px]">
           <div className="w-[4px] h-full bg-navy"></div>
           <div className="w-[4px] h-full bg-navy"></div>
        </div>
        <div className="relative flex items-center justify-end border-[4px] pr-4 md:pr-6 py-1.5 md:py-2 w-[160px] md:w-[200px] font-black text-lg md:text-2xl tracking-tighter shadow-sm font-sans border-navy bg-cream text-navy">
           <img 
             src={fillmoreLogo} 
             alt="Fillmore Logo" 
             className="absolute -left-6 md:-left-8 -top-4 md:-top-8 w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-md" 
           />
           <span>Fillmore</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
