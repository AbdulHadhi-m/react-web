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
    category: 'Visual',
    items: [
      'Logo Design',
      'Visual Identity Development',
      'Advertising & PR Collateral',
      'Packaging Design',
      'Event + Retail Design',
    ],
  },
  {
    category: 'Digital',
    items: [
      'Website Design + Development',
      'UI/UX Design',
      'Full Stack Development',
    ],
  },
  {
    category: 'Campaign',
    items: ['360° Campaigns', 'Creative Video Campaigns'],
  },
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
                  of services
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