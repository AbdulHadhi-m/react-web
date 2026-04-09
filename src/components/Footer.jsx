import React from 'react';


const Footer = () => {
  return (
    <footer className="w-full bg-cream text-navy mt-24 pb-12 px-4 md:px-8 relative font-sans">
      <div className="max-w-7xl mx-auto relative border-[3px] border-navy border-t-0 rounded-b-3xl flex flex-col items-center">
        
        {/* Zig-Zag SVG Top Border */}
        <div className="absolute top-[-24px] left-[-3px] right-[-3px] h-[24px]">
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <defs>
              <pattern id="zigzag" x="0" y="0" width="30" height="24" patternUnits="userSpaceOnUse">
                {/* 30x24 zig zag wave to precisely match the thick stroke outline */}
                <path d="M0,24 L15,0 L30,24" fill="none" className="stroke-navy" strokeWidth="3" strokeLinecap="round" strokeLinejoin="miter" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#zigzag)" />
          </svg>
        </div>

        {/* Top-Left Hanging Sign */}
        <div className="absolute top-[-60px] left-[5%] hidden md:flex flex-col items-center">
          {/* Ropes / Wires */}
          <div className="flex justify-between w-[80%] absolute top-[-30px] z-[-1]">
             <div className="h-[60px] w-[3px] bg-navy"></div>
             <div className="h-[60px] w-[3px] bg-navy"></div>
          </div>
          <div className="border-[3px] border-navy bg-cream px-4 py-2 font-black text-2xl tracking-tighter">
            seventy two<span className="font-serif italic font-normal ml-1">mg.</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-20 md:mt-16 w-full flex flex-col items-center z-10 px-4">
          <h3 className="text-4xl md:text-5xl font-serif italic text-navy font-thin">visit us again</h3>
          
          {/* Big Name with Dashed Lines */}
          <div className="flex flex-col items-center mt-12 w-full max-w-4xl px-4 md:px-12">
             <div className="w-full border-t-[4px] border-dashed border-navy h-0"></div>
             <h2 className="my-8 text-[3.5rem] md:text-[5.5rem] font-black text-navy tracking-tighter leading-none text-center">
                seventy two <span className="font-serif italic font-medium -ml-3 md:-ml-5 text-[2.5rem] md:text-[4.5rem]">mg.</span>
             </h2>
             <div className="w-full border-t-[4px] border-dashed border-navy h-0"></div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 md:gap-10 mt-12 text-xl md:text-2xl font-light">
            <a href="#menu" className="hover:underline underline-offset-4 decoration-2">Services</a>
            <a href="#works" className="hover:underline underline-offset-4 decoration-2">Works</a>
            <a href="#order" className="hover:underline underline-offset-4 decoration-2">Contact Us</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-16 items-center">
             <a href="https://behance.net/" target="_blank" rel="noreferrer" className="w-[4.5rem] h-[3.5rem] bg-navy text-cream flex items-center justify-center rounded-[12px] hover:scale-105 transition-transform">
                <span className="font-bold text-3xl font-serif tracking-tighter">Bē</span>
             </a>
             <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="w-[4.5rem] h-[3.5rem] bg-navy text-cream flex items-center justify-center rounded-[12px] hover:scale-105 transition-transform">
                <span className="font-bold text-4xl block leading-none font-sans tracking-tight mb-1">in</span>
             </a>
             <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="w-[4.5rem] h-[3.5rem] border-[3px] border-navy text-navy bg-cream flex items-center justify-center rounded-[12px] hover:scale-105 transition-transform">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
             </a>
          </div>

          {/* Asterisks */}
          <div className="mt-16 mb-16 text-3xl md:text-5xl font-black tracking-[0.2em] md:tracking-[0.5em] text-navy overflow-hidden whitespace-nowrap opacity-90">
             *******************
          </div>
        </div>

        {/* Decorative elements - Hand drawn coffee cup equivalent */}
        <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-0 hidden md:flex flex-col items-center">
            {/* Minimalist drawn coffee cup over wheels */}
            <svg width="80" height="90" viewBox="0 0 100 120" className="text-navy fill-cream stroke-navy overflow-visible">
               {/* Steam */}
               <path d="M40,20 Q35,10 45,0" fill="none" strokeWidth="3" strokeLinecap="round" />
               <path d="M55,18 Q50,8 60,-2" fill="none" strokeWidth="3" strokeLinecap="round" />
               <path d="M70,22 Q65,12 75,2" fill="none" strokeWidth="3" strokeLinecap="round" />
               {/* Cup Body */}
               <path d="M20,30 L80,30 C80,70 70,80 50,80 C30,80 20,70 20,30 Z" fill="#f4eedd" strokeWidth="3" strokeLinejoin="round" />
               {/* Handle */}
               <path d="M80,45 C95,45 95,65 75,70" fill="none" strokeWidth="3" strokeLinecap="round" />
               {/* Cute face */}
               <ellipse cx="40" cy="55" rx="3" ry="5" fill="#002468" className="stroke-none" />
               <ellipse cx="60" cy="55" rx="3" ry="5" fill="#002468" className="stroke-none" />
               <path d="M47,65 Q50,70 53,65" fill="none" strokeWidth="2" strokeLinecap="round" />
               {/* Skateboard / Wheels below */}
               <path d="M10,95 L90,95" fill="none" strokeWidth="3" strokeLinecap="round" />
               <circle cx="25" cy="105" r="4" fill="#002468" className="stroke-none" />
               <circle cx="75" cy="105" r="4" fill="#002468" className="stroke-none" />
            </svg>
        </div>

        {/* Wavy side/bottom line accent (Right corner curve) */}
        <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none z-[-1] overflow-hidden rounded-br-3xl">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,100 C30,70 70,90 100,50" fill="none" className="stroke-navy" strokeWidth="3" />
          </svg>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

