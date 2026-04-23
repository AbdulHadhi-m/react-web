import React from 'react';
import { Rocket, Trees, RefreshCw, Layers } from 'lucide-react';

import pattyIcon from '../../assets/images/patty.svg';
import burgerIcon from '../../assets/images/Burger svg.svg';
import sauceIcon from '../../assets/images/Sause.svg';
import coffeeIcon from '../../assets/images/Coffee drink.svg';

const conceptualServices = [
  {
    title: 'Smash Technique',
    description: 'Perfectly smashed patties for crispy edges and juicy centers',
    icon: <img src={pattyIcon} alt="Patty" className="h-[120px] md:h-[150px] w-auto object-contain" />,
  },
  {
    title: 'Locally Sourced Ingredients',
    description: 'Fresh, high-quality ingredients sourced locally',
    icon: <img src={burgerIcon} alt="Burger" className="h-[120px] md:h-[150px] w-auto object-contain" />,
  },
  {
    title: 'Pocket-Friendly Pricing',
    description: 'Premium taste without premium pricing',
    icon: <img src={sauceIcon} alt="Sauce" className="h-[120px] md:h-[150px] w-auto object-contain" />,
  },
  {
    title: 'Flavor-First Menu',
    description: 'Every burger is crafted for maximum taste, not just looks',
    icon: <img src={coffeeIcon} alt="Coffee" className="h-[120px] md:h-[150px] w-auto object-contain" />,
  },
];

const menuServices = [
  {
    category: 'Visual',
    items: ['Logo Design', 'Visual Identity Development', 'Advertising & PR Collateral', 'Packaging Design', 'Event + Retail Design']
  },
  {
    category: 'Digital',
    items: ['Website Design + Development', 'UI/UX Design', 'Full Stack Development']
  },
  {
    category: 'Campaign',
    items: ['360° Campaigns', 'Creative Video Campaigns']
  }
];

const Services = () => {
  return (
    <section id="menu" className="w-full bg-cream py-24 px-4 md:px-8 lg:px-12 text-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-sans font-normal tracking-tight mb-6">
            WHAT MAKES US <span className="font-serif italic font-light">DIFFERENT</span>
          </h2>
        </div>

        {/* Conceptual Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-40">
          {conceptualServices.map((service, index) => (
            <div key={index} className="flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
              <div className="text-navy flex-shrink-0 mb-6 md:mb-10">
                {service.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-serif italic mb-4 md:mb-6 tracking-tight text-navy">{service.title}</h3>
              <p className="text-lg md:text-[1.1rem] font-sans text-navy/80 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Menu Clipboard Wrapper */}
        <div className="relative w-full mt-24">
          


          {/* Outer Clipboard Box */}
          <div className="border-[4px] border-navy rounded-[2rem] p-3 md:p-4 bg-cream relative">
            {/* Decorative dots in padding area */}
            <div className="absolute top-4 left-4 md:top-5 md:left-5 w-4 h-4 bg-navy rounded-full"></div>
            <div className="absolute top-4 right-4 md:top-5 md:right-5 w-4 h-4 bg-navy rounded-full"></div>
            
            {/* Inner Box Content */}
            <div className="border-[3px] border-navy rounded-[1.25rem] relative flex flex-col overflow-hidden bg-cream">
               
               {/* Header Section */}
               <div className="w-full py-12 md:py-16 flex flex-col items-center justify-center border-b-[3px] border-navy">
                  <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-sans font-normal text-navy tracking-tight leading-none flex items-center gap-2 md:gap-4 flex-wrap justify-center">
                     Our <span className="font-serif italic text-navy font-light tracking-normal">Menu</span>
                  </h2>
                  <p className="text-xl md:text-2xl font-sans text-navy/80 mt-2 font-medium tracking-tight">of services</p>
               </div>

               {/* Columns Grid */}
               <div className="grid grid-cols-1 md:grid-cols-3 w-full relative">
                  {menuServices.map((column, index) => (
                     <div key={index} className={`p-8 md:p-12 lg:p-16 ${index !== 2 ? 'border-r-[3px] md:border-b-0 border-b-[3px] border-navy' : ''}`}>
                        <h3 className="text-4xl md:text-[3rem] tracking-tight font-serif italic mb-10 text-navy font-light">{column.category}</h3>
                        <ul className="space-y-4">
                          {column.items.map((item, idx) => (
                            <li key={idx} className="text-lg md:text-[1.3rem] font-sans text-navy/80 hover:text-navy transition-colors tracking-tight font-medium leading-snug">
                              {item}
                            </li>
                          ))}
                        </ul>
                     </div>
                  ))}

                  {/* Bottom Right Graphic - "Your Order ?" Speech Bubble */}
                  <a
                    href="#contact"
                    className="absolute bottom-8 right-8 flex flex-col items-end pointer-events-auto group"
                    aria-label="Go to contact form"
                  >
                    {/* Bubble */}
                    <div className="bg-navy text-cream font-sans text-lg md:text-xl font-medium px-6 py-3 rounded-2xl rounded-br-sm relative shadow-sm cursor-pointer group-hover:-translate-y-1 transition-transform">
                      Your Order ?
                    </div>
                    {/* Floating cursor pointing up at bubble */}
                    <div className="mt-2 w-[40px] h-[40px] mr-2 -translate-x-4 translate-y-2 group-hover:animate-bounce cursor-pointer">
                      <svg viewBox="0 0 100 100" className="w-full h-full stroke-navy fill-cream stroke-[6px]" style={{ transform: "rotate(-20deg)" }}>
                        <polygon points="30,20 30,80 50,60 65,90 80,80 65,50 90,45" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </a>
               </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
