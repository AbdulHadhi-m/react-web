import React from 'react';

import pattyIcon from '../../assets/images/patty.svg';
import burgerIcon from '../../assets/images/Burger svg.svg';
import sauceIcon from '../../assets/images/Sause.svg';
import coffeeIcon from '../../assets/images/Coffee drink.svg';


const conceptualServices = [
  {
    title: 'Smash Technique',
    description: 'Perfectly smashed patties for crispy edges and juicy centers',
    icon: <img src={pattyIcon} alt="Patty" className="h-[120px] md:h-[180px] w-auto object-contain drop-shadow-[0_0_1px_#002468]" />,
  },
  {
    title: 'Locally Sourced Ingredients',
    description: 'Fresh, high-quality ingredients sourced locally',
    icon: <img src={burgerIcon} alt="Burger" className="h-[120px] md:h-[180px] w-auto object-contain drop-shadow-[0_0_1px_#002468]" />,
  },
  {
    title: 'Pocket-Friendly Pricing',
    description: 'Premium taste without premium pricing',
    icon: <img src={sauceIcon} alt="Sauce" className="h-[120px] md:h-[180px] w-auto object-contain drop-shadow-[0_0_1px_#002468]" />,
  },
  {
    title: 'Flavor-First Menu',
    description: 'Every burger is crafted for maximum taste, not just looks',
    icon: <img src={coffeeIcon} alt="Coffee" className="h-[120px] md:h-[180px] w-auto object-contain drop-shadow-[0_0_1px_#002468]" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full bg-cream pt-16 pb-8 md:pt-24 md:pb-12 px-4 md:px-8 lg:px-12 text-navy">
      <div className="max-w-7xl mx-auto">

        {/* --- SECTION 1: USP --- */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-navy uppercase">
            WHAT MAKES US <span className="font-serif italic font-light">DIFFERENT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-28">
          {conceptualServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
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
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-4">
          <h3 className="text-3xl md:text-5xl font-serif italic text-navy mb-6">
            Signature <span className="font-light">Experience</span>
          </h3>
          <p className="text-lg md:text-xl text-navy/80 leading-relaxed font-light tracking-tight">
            At Fillmore, it’s an experience. Expect dripping sauces, melted cheese,
            and bold flavors stacked into every burger. It’s messy. It’s indulgent.
          </p>
        </div>



      </div>
    </section>
  );
};

export default Services;