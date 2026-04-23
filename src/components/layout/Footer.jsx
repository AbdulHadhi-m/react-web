import React from 'react';

const Footer = () => {
  // Custom Dashed Line Component for reuse
  const CustomDashedLine = () => (
  <div className="w-full h-1 flex items-center"> {/* Height reduced to h-1 */}
    <svg width="100%" height="4" className="overflow-visible">
      <line
        x1="0"
        y1="2"
        x2="100%"
        y2="2"
        stroke="#002468"
        strokeWidth="3"      // Decreased from 6 to 3 for a thinner line
        strokeDasharray="18 12" // Adjusted dash/gap ratio for the thinner width
        strokeLinecap="round"   // Keeps the ends rounded
      />
    </svg>
  </div>
);
  

  return (
    <footer className="w-full bg-[#f4eedd] text-[#002468] pt-24 pb-12 px-4 md:px-8 relative font-sans">
      <div className="max-w-6xl mx-auto relative border-[5px] border-[#002468] border-t-0 rounded-b-[40px] flex flex-col items-center min-h-[650px]">
        
        {/* Zig-Zag Top Border */}
        <div className="absolute top-[-26px] left-[-5px] right-[-5px] h-[30px] overflow-hidden">
          <svg width="100%" height="30" preserveAspectRatio="none" viewBox="0 0 100 24" className="fill-none stroke-[#002468]">
             <path 
                d="M0,24 L2,0 L4,24 L6,0 L8,24 L10,0 L12,24 L14,0 L16,24 L18,0 L20,24 L22,0 L24,24 L26,0 L28,24 L30,0 L32,24 L34,0 L36,24 L38,0 L40,24 L42,0 L44,24 L46,0 L48,24 L50,0 L52,24 L54,0 L56,24 L58,0 L60,24 L62,0 L64,24 L66,0 L68,24 L70,0 L72,24 L74,0 L76,24 L78,0 L80,24 L82,0 L84,24 L86,0 L88,24 L90,0 L92,24 L94,0 L96,24 L98,0 L100,24" 
                vectorEffect="non-scaling-stroke" 
                strokeWidth="5"
             />
          </svg>
        </div>

        <div className="mt-20 flex flex-col items-center w-full px-4">
          <h3 className="text-4xl md:text-5xl font-serif italic mb-12">visit us again</h3>
          
          {/* Logo Section with Custom Dashed Lines */}
          <div className="w-full max-w-lg flex flex-col items-center">
            <CustomDashedLine />
            
            <h1 className="py-8 text-5xl md:text-7xl font-[900] tracking-[-0.05em] flex items-baseline leading-none font-sans">
              Fillmore
              <span className="inline-block w-3 h-3 bg-[#002468] ml-2 mb-1"></span>
            </h1>
            
            <CustomDashedLine />
          </div>

          {/* Navigation */}
          <nav className="flex gap-8 md:gap-10 mt-16 text-xl md:text-2xl ">
            <a href="#" className="hover:opacity-70 transition-opacity">Services</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Works</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Contact Us</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-5 mt-16">
            <div className="w-16 h-12 bg-[#002468] text-[#f4eedd] flex items-center justify-center rounded-xl font-black text-2xl">Bē</div>
            <div className="w-16 h-12 bg-[#002468] text-[#f4eedd] flex items-center justify-center rounded-xl font-black text-2xl">in</div>
            <div className="w-16 h-12 border-[4px] border-[#002468] flex items-center justify-center rounded-xl">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
                </svg>
            </div>
          </div>

          {/* Footer Asterisks */}
          <div className="mt-24 text-3xl tracking-[0.3em] ">
            ************** </div>
        </div>

        {/* Bottom Right Illustration */}
        <div className="absolute bottom-0 right-0 w-40 h-40 overflow-hidden pointer-events-none rounded-br-[40px]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#002468]" strokeWidth="3.5">
                <path d="M10,100 C30,70 70,90 100,50" />
            </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;