import React from 'react';

import pattyIcon from '../../assets/images/patty.svg';
import burgerIcon from '../../assets/images/Burger svg.svg';
import sauceIcon from '../../assets/images/Sause.svg';
import coffeeIcon from '../../assets/images/Coffee drink.svg';

const conceptualServices = [
  {
    title: 'Smash Technique',
    description: 'Perfectly smashed patties for crispy edges and juicy centers',
    icon: <img src={pattyIcon} alt="Patty" className="h-[150px] md:h-[180px] w-auto object-contain" />,
  },
  {
    title: 'Locally Sourced Ingredients',
    description: 'Fresh, high-quality ingredients sourced locally',
    icon: <img src={burgerIcon} alt="Burger" className="h-[150px] md:h-[180px] w-auto object-contain" />,
  },
  {
    title: 'Pocket-Friendly Pricing',
    description: 'Premium taste without premium pricing',
    icon: <img src={sauceIcon} alt="Sauce" className="h-[150px] md:h-[180px] w-auto object-contain" />,
  },
  {
    title: 'Flavor-First Menu',
    description: 'Every burger is crafted for maximum taste, not just looks',
    icon: <img src={coffeeIcon} alt="Coffee" className="h-[150px] md:h-[180px] w-auto object-contain" />,
  },
];

const menuServices = [
  {
    category: "Beef Burgers",
    items: [
      "Juicy Lucy Burger - Thick patty stuffed with oozing cheese & caramelized onions.",
      "Beef Baconator - Smashed beef patty, beef bacon, cheese, and BBQ sauces.",
      "Oklahoma Beef Burger - Double beef patty on thinly sliced onions with pickles."
    ]
  },
  {
    category: "Chicken Burgers",
    items: [
      "Chick Lucy Burger - Griddled chicken patty stuffed with oozing cheese.",
      "Nashville Chicken Burger - Crunchy deep-fried breast with hot sauce & coleslaw.",
      "Triple Cluck Burger - A triple threat of chicken patty, beef ham, and bacon."
    ]
  },
  {
    category: "Sides & Hotdogs",
    items: [
      "Fillmore’s Animal Fries - Loaded with bacon, caramelized onions, & BBQ sauce.",
      "Chicago Hotdog - Loaded with bacon, minced beef, jalapeños, & honey mustard.",
      "Dynamite Crispy Fries - Topped with crispy chicken and explosive sauce."
    ]
  }
  ,
  // {
  //   category: "Drinks & Shakes",
  //   items: [
  //     "Lotus Biscoff Shake - Premium thick shake with caramelized biscuit flavor.",
  //     "Passion Fruit Mocktail - Refreshing tropical twist with a zesty finish.",
  //     "Belgian Chocolate Shake - Rich, dark, and decadent chocolate indulgence."
  //   ]
  // }
];  

const Services = () => {
  return (
    <section id="menu" className="w-full bg-cream py-24 px-4 md:px-8 lg:px-12 text-navy">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans tracking-tight">
            WHAT MAKES US <span className="font-serif italic font-light">DIFFERENT</span>
          </h2>
        </div>

        {/* Conceptual Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-28">
          {conceptualServices.map((service, index) => (
            <div key={index} className="flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">

              <div className="text-navy flex-shrink-0 mb-8 md:mb-10 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-3xl md:text-4xl font-serif italic mb-4 tracking-tight text-navy">
                {service.title}
              </h3>

              <p className="text-lg md:text-[1.1rem] font-sans text-navy/80 leading-relaxed font-light">
                {service.description}
              </p>

            </div>
          ))}
        </div>

        {/* 🔥 Signature Experience Section */}
        <div className="text-center max-w-3xl mx-auto mb-32 px-4">
          <h3 className="text-3xl md:text-5xl font-serif italic text-navy mb-6">
            Signature <span className="font-light">Experience</span>
          </h3>

          <p className="text-lg md:text-xl text-navy/80 leading-[1.7] font-light tracking-tight">
            At Fillmore, it’s an experience. Expect dripping sauces, melted cheese,
            and bold flavors stacked into every burger. It’s messy. It’s indulgent.
            And it’s completely worth it.
          </p>
        </div>

        {/* Menu Clipboard Wrapper */}
        <div className="relative w-full mt-16">

          <div className="border-[4px] border-navy rounded-[2rem] p-3 md:p-4 bg-cream relative">

            {/* Decorative dots */}
            <div className="absolute top-4 left-4 w-4 h-4 bg-navy rounded-full"></div>
            <div className="absolute top-4 right-4 w-4 h-4 bg-navy rounded-full"></div>

            <div className="border-[3px] border-navy rounded-[1.25rem] relative flex flex-col overflow-hidden bg-cream">

              {/* Header */}
              <div className="w-full py-12 md:py-16 flex flex-col items-center border-b-[3px] border-navy">
                <h2 className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-sans text-navy tracking-tight">
                  Our <span className="font-serif italic font-light">Menu</span>
                </h2>
                <p className="text-lg md:text-2xl text-navy/80 mt-2">
                  Full Never Felt Better
                </p>
              </div>

              {/* Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 w-full">

                {menuServices.map((column, index) => (
                  <div
                    key={index}
                    className={`p-8 md:p-12 lg:p-16 ${
                      index !== 2 ? 'border-r-[3px] border-b-[3px] md:border-b-0 border-navy' : ''
                    }`}
                  >

                    <h3 className="text-3xl md:text-[2.5rem] font-serif italic mb-8 text-navy">
                      {column.category}
                    </h3>

                    <ul className="space-y-4">
                      {column.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-lg md:text-[1.2rem] text-navy/80 hover:text-navy transition-colors"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                  </div>
                ))}

                {/* CTA */}
                <a
                  href="#contact"
                  className="absolute bottom-8 right-8 flex flex-col items-end group"
                >
                  <div className="bg-navy text-cream px-6 py-3 rounded-2xl rounded-br-sm hover:-translate-y-1 transition-transform">
                    Your Order ?
                  </div>

                  <div className="mt-2 w-[40px] h-[40px] group-hover:animate-bounce">
                    <svg viewBox="0 0 100 100" className="w-full h-full stroke-navy fill-cream stroke-[6px]">
                      <polygon points="30,20 30,80 50,60 65,90 80,80 65,50 90,45" />
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


import React from 'react';

const menuServices = [
  {
    category: "Beef",
    items: ["Juicy Lucy Burger", "Beef Baconator", "Oklahoma Beef Burger"]
  },
  {
    category: "Chicken",
    items: ["Chick Lucy Burger", "Nashville Chicken Burger", "Triple Cluck Burger"]
  },
  {
    category: "Sides",
    items: ["Fillmore's Animal Fries", "Chicago Hotdog", "Dynamite Crispy Fries"]
  },
  {
    category: "Drinks",
    items: ["Lotus Biscoff Shake", "Passion Fruit Mocktail", "Belgian Chocolate Shake"]
  }
];

const Services = () => {
  return (
    <section id="menu" className="w-full bg-cream py-20 px-6 md:px-12 text-navy flex justify-center">
      <div className="max-w-7xl w-full relative">
        
        {/* --- THE HAND-DRAWN FRAME --- */}
        <div className="relative w-full min-h-[600px] p-1 md:p-4">
          
          {/* Background SVG for the Wobbly Border */}
          <div className="absolute inset-0 z-0">
            <svg viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none" className="w-full h-full stroke-navy stroke-[4px]">
              {/* Outer Frame Path */}
              <path d="M40,60 Q30,400 45,740 Q600,760 1150,745 Q1170,400 1155,55 Q600,35 40,60" fill="none" />
              {/* Top Header Divider */}
              <path d="M45,280 Q600,270 1155,280" />
              {/* Column Dividers */}
              <path d="M320,280 Q330,500 325,745" />
              {/* Vertical line 2 */}
              <path d="M600,280 Q590,500 605,745" />
              {/* Vertical line 3 */}
              <path d="M880,280 Q890,500 875,745" />
              
              {/* Decorative Hanging Shoes Top Left */}
              <path d="M100,50 L105,150" strokeWidth="3" />
              <path d="M140,50 L135,160" strokeWidth="3" />
              <path d="M90,150 Q105,175 125,150 Z" fill="#F5F5DC" />
              <path d="M125,160 Q140,185 160,160 Z" fill="#F5F5DC" />

              {/* Corner Bolts */}
              <circle cx="55" cy="55" r="6" fill="currentColor" />
              <circle cx="1145" cy="55" r="6" fill="currentColor" />
              <circle cx="55" cy="745" r="6" fill="currentColor" />
              <circle cx="1145" cy="745" r="6" fill="currentColor" />
            </svg>
          </div>

          {/* --- CONTENT LAYER --- */}
          <div className="relative z-10 w-full h-full">
            
            {/* Header Area */}
            <div className="h-[230px] flex flex-col items-center justify-center text-center">
              <h2 className="text-6xl md:text-8xl font-serif italic text-navy leading-none">
                Our <span className="font-normal not-italic font-sans">Menu</span>
              </h2>
              <p className="mt-4 text-navy/60 font-sans tracking-[0.3em] uppercase text-xs font-black">
                of services
              </p>
            </div>

            {/* Grid Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
              {menuServices.map((column, index) => (
                <div key={index} className="p-10 lg:p-12 flex flex-col items-start min-h-[400px]">
                  <h3 className="text-4xl md:text-6xl font-serif italic text-navy mb-8 leading-none">
                    {column.category}
                  </h3>

                  <ul className="space-y-4">
                    {column.items.map((item, idx) => (
                      <li key={idx} className="text-lg md:text-xl font-sans font-medium text-navy/80 hover:text-navy transition-all cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer / CTA Area */}
            <div className="absolute bottom-10 right-10 flex flex-col items-end">
              <div className="relative">
                {/* Speech Bubble / Button */}
                <button className="bg-navy text-cream px-8 py-3 rounded-[30px_30px_5px_30px] font-bold text-lg hover:scale-105 transition-transform">
                  Your Order ?
                </button>
                {/* Cursor Pointer */}
                <div className="absolute -bottom-10 right-0 transform rotate-[-15deg]">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M5 5L20 35L25 25L35 20L5 5Z" stroke="#0A2342" strokeWidth="3" fill="white" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;