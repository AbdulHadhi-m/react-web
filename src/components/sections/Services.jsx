import React from 'react';

import pattyIcon from '../../assets/images/patty.svg';
import burgerIcon from '../../assets/images/Burger svg.svg';
import sauceIcon from '../../assets/images/Sause.svg';
import coffeeIcon from '../../assets/images/Coffee drink.svg';

const conceptualServices = [
  {
    title: 'Smash Technique',
    description: 'Perfectly smashed patties for crispy edges and juicy centers',
    icon: <img src={pattyIcon} alt="Patty" className="h-[120px] md:h-[180px] w-auto object-contain" />,
  },
  {
    title: 'Locally Sourced Ingredients',
    description: 'Fresh, high-quality ingredients sourced locally',
    icon: <img src={burgerIcon} alt="Burger" className="h-[120px] md:h-[180px] w-auto object-contain" />,
  },
  {
    title: 'Pocket-Friendly Pricing',
    description: 'Premium taste without premium pricing',
    icon: <img src={sauceIcon} alt="Sauce" className="h-[120px] md:h-[180px] w-auto object-contain" />,
  },
  {
    title: 'Flavor-First Menu',
    description: 'Every burger is crafted for maximum taste, not just looks',
    icon: <img src={coffeeIcon} alt="Coffee" className="h-[120px] md:h-[180px] w-auto object-contain" />,
  },
];

const menuServices = [
  {
    category: "Beef Burgers",
    items: [
      { name: "Classic Beef Burger", price: "₹170 / ₹240" },
      { name: "Beef Baconator Burger", price: "₹190 / ₹260" },
      { name: "Smashed Ham Burger", price: "₹240 / ₹280" },
      { name: "Oklahoma Beef Burger", price: "₹280" },
      { name: "Mushroom Beef Burger", price: "₹260" },
      { name: "Juicy Lucy Burger", price: "₹320" }
    ]
  },
  {
    category: "Chicken Burgers",
    items: [
      { name: "Classic Chicken Burger", price: "₹170 / ₹240" },
      { name: "Chicken Sunny Side Up", price: "₹190 / ₹260" },
      { name: "Nashville Chicken Burger", price: "₹260" },
      { name: "Triple Cluck Burger", price: "₹240 / ₹300" },
      { name: "Chick Lucy Burger", price: "₹320" }
    ]
  }
];

const Services = () => {
  return (
    <section id="menu" className="w-full bg-cream py-16 md:py-24 px-4 md:px-8 lg:px-12 text-navy">
      <div className="max-w-7xl mx-auto">

        {/* --- SECTION 1: USP --- */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-navy uppercase">
            WHAT MAKES US <span className="font-serif italic font-light">DIFFERENT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-28">
          {conceptualServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left hover:-translate-y-2 transition-transform duration-300">
              <div className="text-navy flex-shrink-0 mb-6 md:mb-10">
                {service.icon}
              </div>
              <h3 className="text-2xl md:text-4xl font-serif italic mb-4 tracking-tight text-navy">
                {service.title}
              </h3>
              <p className="text-base md:text-[1.1rem] font-sans text-navy/80 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* --- SECTION 2: EXPERIENCE --- */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32 px-4">
          <h3 className="text-3xl md:text-5xl font-serif italic text-navy mb-6">
            Signature <span className="font-light">Experience</span>
          </h3>
          <p className="text-lg md:text-xl text-navy/80 leading-relaxed font-light tracking-tight">
            At Fillmore, it’s an experience. Expect dripping sauces, melted cheese,
            and bold flavors stacked into every burger. It’s messy. It’s indulgent.
          </p>
        </div>

        {/* --- SECTION 3: RESPONSIVE MENU BOARD --- */}
        <div className="relative w-full">
          
          {/* BACKGROUND FRAME */}
          <div className="absolute inset-0 z-0">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none" 
              className="stroke-navy stroke-[0.3px] fill-none"
            >
              <path d="M3,2 Q1,50 3,98 Q50,99 97,98 Q99,50 97,2 Q50,1 3,2" />
              <circle cx="5" cy="4" r="0.8" fill="currentColor" />
              <circle cx="95" cy="4" r="0.8" fill="currentColor" />
              <circle cx="5" cy="96" r="0.8" fill="currentColor" />
              <circle cx="95" cy="96" r="0.8" fill="currentColor" />
            </svg>
          </div>

          <div className="relative z-10 w-full h-full">
            
            {/* Header */}
            <div className="py-12 md:h-[220px] flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-5xl md:text-8xl font-serif italic text-navy leading-none">
                Our <span className="font-normal not-italic font-sans">Menu</span>
              </h2>
              <p className="mt-2 text-navy/60 font-sans tracking-[0.3em] uppercase text-[10px] md:text-xs font-black">
                Select Your Burger
              </p>
            </div>

            {/* HORIZONTAL DIVIDER */}
            <div className="w-[90%] mx-auto mb-6">
               <svg viewBox="0 0 1000 20" preserveAspectRatio="none" className="w-full h-3 stroke-navy stroke-[4px] fill-none opacity-80">
                  <path d="M10,10 Q500,5 990,10" />
               </svg>
            </div>

            {/* Menu Grid - Two Column for Burgers Only */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full px-4 md:px-12 lg:px-20">
              {menuServices.map((column, index) => (
                <div 
                  key={index} 
                  className={`p-8 lg:p-12 flex flex-col items-start 
                    ${index === 0 ? 'md:border-r border-navy/10' : ''}`}
                >
                  <h3 className="text-4xl md:text-5xl font-serif italic text-navy mb-10 leading-none">
                    {column.category}
                  </h3>

                  <ul className="space-y-6 w-full">
                    {column.items.map((item, idx) => (
                      <li key={idx} className="group cursor-pointer border-b border-navy/5 pb-3">
                        <div className="flex justify-between items-baseline gap-4">
                          <span className="text-lg md:text-xl font-sans font-medium text-navy/80 group-hover:text-navy transition-all">
                            {item.name}
                          </span>
                          <span className="text-base md:text-lg font-sans font-bold text-navy whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer / CTA */}
            <div className="p-12 flex justify-center">
              <button className="bg-navy text-cream px-12 py-5 rounded-[30px_30px_5px_30px] font-bold text-xl hover:scale-105 transition-transform shadow-xl">
                Place Your Order
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;