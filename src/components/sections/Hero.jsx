import React from 'react';
import windowSvg from '../../assets/images/Window.svg';
import bulbSvg from '../../assets/images/Bulb.svg';
import chairSvg from '../../assets/images/Chair.svg';
import burgerImg from '../../assets/images/burger.png';
import musicVideo from '../../assets/videos/Music.mp4';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[740px] h-[100svh] bg-cream text-navy overflow-hidden font-sans border-b-[4px] border-navy">
      
      {/* 3D Room Lines (Responsive Full Screen SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
         {/* Corner Line */}
         <line x1="18%" y1="0" x2="18%" y2="80%" stroke="rgb(0, 36, 104)" strokeWidth="4" />
         {/* Floor Diagonal */}
         <line x1="18%" y1="80%" x2="0" y2="100%" stroke="rgb(0, 36, 104)" strokeWidth="4" />
         {/* Baseboard */}
         <line x1="18%" y1="80%" x2="100%" y2="80%" stroke="rgb(0, 36, 104)" strokeWidth="4" />
         {/* Lower Floor Line */}
         <line x1="9%" y1="90%" x2="100%" y2="90%" stroke="rgb(0, 36, 104)" strokeWidth="4" />
      </svg>

      {/* Window on the Left Wall */}
      <div className="absolute top-[2%] left-[-4%] w-[22%] h-[95%] md:top-[2%] md:left-[-4%] md:w-[22%] md:h-[95%] pointer-events-none z-0 block">
          <img src={windowSvg} alt="Window" className="w-full h-full object-fill" />
      </div>

      {/* Hanging Lamp - Top Right */}
      <div className="absolute top-0 right-[5%] w-[120px] h-[280px] md:top-0 md:right-[4%] md:w-[220px] md:h-[480px] pointer-events-none z-10 block">
         <img src={bulbSvg} alt="Bulb Lamp" className="w-full h-full object-contain object-top" />
      </div>

      {/* Shelf and Gramophone - Mid Right */}
      {/* MOBILE FIX: 
          top-[56%] keeps it at the height of your green mark.
          right-[2%] moves it far to the right.
      */}
      <div className="absolute top-[56%] right-[2%] w-[200px] h-[160px] sm:top-[38%] sm:right-[0%] sm:w-[280px] sm:h-[220px] lg:top-[35%] lg:right-[0%] lg:w-[500px] lg:h-[380px] pointer-events-none z-10 block mix-blend-multiply">
         <video 
           src={musicVideo} 
           autoPlay 
           loop 
           muted 
           playsInline 
           className="w-full h-full object-contain contrast-[1.2] brightness-[1.1]" 
         />
      </div>

      {/* Table, Chairs & Moka Pot - Bottom Center Left */}
      <div className="absolute bottom-[8%] left-[12%] w-[280px] h-[200px] sm:bottom-[9%] sm:left-[15%] sm:w-[420px] sm:h-[300px] md:bottom-[10%] md:left-[18%] md:w-[580px] md:h-[400px] pointer-events-none z-10 block">
         <img src={chairSvg} alt="Table and Chairs" className="w-full h-full object-contain object-bottom" />
      </div>

      {/* Center Typography & Floating "lets brew" Button */}
      <div className="absolute top-[18%] md:top-[15%] left-0 right-0 flex flex-col items-center px-4 z-20 pointer-events-auto">
        <h1 className="max-w-[95%] md:max-w-[74%] text-[1.95rem] md:text-[3.3rem] lg:text-[4.2rem] font-sans font-normal text-navy text-center tracking-tight leading-[1.08]">
          Smash Into <span className="font-serif italic font-normal lowercase tracking-normal">real</span> Flavor <img src={burgerImg} alt="Burger" className="inline-block w-[1.1em] h-[1.1em] -translate-y-[0.1em] ml-1 drop-shadow-sm" />
        </h1>
        <p className="text-[0.98rem] md:text-[1.15rem] font-sans text-navy/80 font-medium text-center mt-4 tracking-tight max-w-xl leading-snug">
          Juicy, messy, unforgettable smash burgers made fresh daily with locally sourced ingredients.
        </p>

        {/* Floating Button Assembly */}
        <div className="mt-6 md:mt-8 relative flex flex-col items-center group cursor-pointer z-30 pointer-events-auto">
           <svg width="40" height="20" viewBox="0 0 40 20" className="absolute top-[-18px] stroke-navy fill-none stroke-[3px] pointer-events-none">
              <path d="M0,20 L20,5 L40,20" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="20" cy="5" r="4" className="fill-cream" />
           </svg>
           <a
             href="#order"
             className="bg-navy text-cream px-6 py-2 rounded-full text-sm md:text-lg font-bold font-sans tracking-wide hover:-translate-y-[2px] transition-transform shadow-[4px_4px_0_0_rgba(0,36,104,0.1)]"
           >
             Order Now
           </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;