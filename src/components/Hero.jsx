import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[850px] h-screen bg-cream text-navy overflow-hidden font-sans border-b-[4px] border-navy">
      
      {/* 3D Room Lines (Responsive Full Screen SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
         {/* Corner Line */}
         <line x1="20%" y1="0" x2="20%" y2="80%" stroke="#002468" strokeWidth="4" />
         {/* Floor Diagonal */}
         <line x1="20%" y1="80%" x2="0" y2="100%" stroke="#002468" strokeWidth="4" />
         {/* Baseboard */}
         <line x1="20%" y1="80%" x2="100%" y2="80%" stroke="#002468" strokeWidth="4" />
         {/* Lower Floor Line */}
         <line x1="10%" y1="90%" x2="100%" y2="90%" stroke="#002468" strokeWidth="4" />
      </svg>

      {/* Window on the Left Wall */}
      <div className="absolute top-[45%] left-[2%] w-[8%] h-[25%] pointer-events-none z-0 hidden sm:block">
          <svg width="100%" height="100%" viewBox="0 0 100 200" preserveAspectRatio="none" className="stroke-navy fill-none stroke-[4px]">
             {/* Outer Frame (Perspective Distorted) */}
             <path d="M 10,30 L 90,0 L 90,200 L 10,170 Z" strokeLinejoin="round" />
             <path d="M 20,40 L 80,17 L 80,183 L 20,160 Z" strokeLinejoin="round" />
             {/* Panes */}
             <line x1="50" y1="28" x2="50" y2="171" />
             <line x1="15" y1="100" x2="85" y2="100" />
          </svg>
      </div>

      {/* Hanging Lamp - Top Right */}
      <div className="absolute top-[0] right-[5%] w-[80px] h-[250px] pointer-events-none z-10 hidden md:block">
         <svg viewBox="0 0 100 300" className="w-full h-full stroke-navy fill-cream stroke-[3px]">
            {/* Cord */}
            <line x1="50" y1="0" x2="50" y2="230" />
            {/* Lampshade */}
            <path d="M 20,230 L 80,230 L 95,260 L 5,260 Z" strokeLinejoin="round" />
            <path d="M 5,260 C 5,275 95,275 95,260" />
            {/* Bulb Base */}
            <path d="M 40,268 C 40,285 60,285 60,268" />
            {/* Action Lines (Light Rays) */}
            <line x1="30" y1="285" x2="15" y2="310" strokeLinecap="round" />
            <line x1="50" y1="290" x2="50" y2="320" strokeWidth="4" strokeLinecap="round" />
            <line x1="70" y1="285" x2="85" y2="310" strokeLinecap="round" />
         </svg>
      </div>

      {/* Shelf and Gramophone - Mid Right */}
      <div className="absolute top-[50%] right-[3%] w-[200px] h-[160px] pointer-events-none z-10 hidden lg:block">
         <svg viewBox="0 0 250 200" className="w-full h-full stroke-navy stroke-[3px] fill-cream">
            {/* Musical Notes (floating above) */}
            <path d="M 100,20 Q 110,10 115,25 Q 120,40 105,45 Z" fill="#002468" stroke="none" />
            <path d="M 125,40 Q 135,30 140,45 Q 145,60 130,65 Z" fill="#002468" stroke="none" />
            <path d="M 80,60 Q 90,50 95,65 Q 100,80 85,85 Z" fill="#002468" stroke="none" />
            <line x1="110" y1="15" x2="120" y2="5" />
            <line x1="135" y1="35" x2="145" y2="25" />
            <line x1="90" y1="55" x2="100" y2="45" />
            
            {/* Gramophone Horn */}
            <path d="M 130,120 Q 140,40 210,30" fill="none" strokeWidth="5" strokeLinecap="round" />
            <path d="M 210,30 C 220,10 240,30 220,50 C 200,70 190,40 210,30 Z" fill="none" strokeWidth="4" />
            
            {/* Needle Arm */}
            <path d="M 110,120 L 80,100" fill="none" strokeLinecap="round" />
            
            {/* Gramophone Base */}
            <rect x="100" y="120" width="80" height="40" rx="3" strokeLinejoin="round" />
            <rect x="120" y="130" width="40" height="15" />
            <circle cx="170" cy="140" r="5" className="fill-navy" />
            
            {/* Shelf */}
            <rect x="10" y="160" width="230" height="10" strokeLinejoin="round" />
            <path d="M 10,170 L 10,190 C 10,210 20,210 30,180" fill="none" />
            <path d="M 240,170 L 240,190 C 240,210 230,210 220,180" fill="none" />
         </svg>
      </div>

      {/* Table, Chairs & Moka Pot - Bottom Center Left */}
      <div className="absolute bottom-[-2%] left-[10%] w-[400px] h-[280px] pointer-events-none z-10 hidden md:block">
         <svg viewBox="0 0 500 350" className="w-full h-full stroke-navy stroke-[3px] fill-cream">
            {/* Left Chair */}
            <g transform="translate(10, 60)">
               <path d="M 80,120 C 60,80 100,80 80,120 Z" fill="none" strokeWidth="2" />
               <ellipse cx="80" cy="110" rx="18" ry="35" />
               <ellipse cx="80" cy="150" rx="40" ry="15" />
               <line x1="80" y1="135" x2="80" y2="160" fill="none" />
               {/* Legs */}
               <path d="M 50,155 L 40,240" fill="none" strokeLinecap="round" />
               <path d="M 110,155 L 120,220" fill="none" strokeLinecap="round" />
            </g>
            
            {/* Right Chair */}
            <g transform="translate(280, 60)">
               <path d="M 80,120 C 60,80 100,80 80,120 Z" fill="none" strokeWidth="2"/>
               <ellipse cx="80" cy="110" rx="18" ry="35" />
               <ellipse cx="80" cy="150" rx="40" ry="15" />
               <line x1="80" y1="135" x2="80" y2="160" fill="none"/>
               {/* Legs */}
               <path d="M 50,155 L 40,220" fill="none" strokeLinecap="round" />
               <path d="M 110,155 L 120,240" fill="none" strokeLinecap="round" />
            </g>

            {/* Table Base & Leg */}
            <path d="M 270,180 L 270,320" fill="none" strokeWidth="5" />
            <ellipse cx="270" cy="325" rx="45" ry="10" />

            {/* Table Top */}
            <ellipse cx="270" cy="170" rx="100" ry="30" fill="#f4eedd" />

            {/* Moka Pot (Resting on Table) */}
            <g transform="translate(255, 95)">
               {/* Bottom chamber */}
               <polygon points="10,60 35,60 28,30 17,30" strokeLinejoin="round" />
               <line x1="12" y1="30" x2="33" y2="30" strokeWidth="4" strokeLinecap="round" />
               <polygon points="17,30 28,30 35,0 10,0" strokeLinejoin="round" />
               <path d="M 8,0 L 37,0 L 28,-10 L 17,-10 Z" strokeLinejoin="round" />
               <circle cx="22.5" cy="-15" r="3" />
               <path d="M 35,15 C 55,5 55,40 35,35" fill="none" strokeLinecap="round" strokeWidth="4"/>
               <path d="M 10,20 L -5,5 L 14,0" fill="none" strokeLinejoin="round" />
            </g>
         </svg>
      </div>

      {/* Center Typography & Floating "lets brew" Button */}
      <div className="absolute top-[18%] md:top-[15%] left-0 right-0 flex flex-col items-center px-4 z-20 pointer-events-auto">
        <h1 className="max-w-[95%] md:max-w-[70%] text-[3rem] md:text-[5rem] lg:text-[6rem] font-sans font-normal text-navy text-center tracking-tight leading-[1.05]">
          You <span className="font-serif italic font-normal lowercase tracking-normal">deserve</span> more than,<br />
          instant coffee <span className="font-serif italic font-normal lowercase tracking-normal">creativity</span>
        </h1>
        <p className="text-xl md:text-[1.3rem] font-sans text-navy/80 font-medium text-center mt-6 tracking-tight max-w-2xl leading-snug">
          Our process takes a little more time and care, but the results?<br />
          Worth every sip. (And no, we're not talking about coffee.)
        </p>

        {/* Floating Button Assembly - Positioned higher to ensure it sits safely above the table */}
        <div className="mt-8 md:mt-12 relative flex flex-col items-center group cursor-pointer z-30 pointer-events-auto">
           <svg width="40" height="20" viewBox="0 0 40 20" className="absolute top-[-18px] stroke-navy fill-none stroke-[3px] pointer-events-none">
              <path d="M0,20 L20,5 L40,20" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="20" cy="5" r="4" className="fill-cream" />
           </svg>
           <button className="bg-navy text-cream px-10 py-3 rounded-full text-lg md:text-2xl font-bold font-sans tracking-wide hover:-translate-y-[2px] transition-transform shadow-[4px_4px_0_0_rgba(0,36,104,0.1)]">
              lets brew
           </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
