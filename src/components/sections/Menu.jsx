import React from 'react';
import beefIcon from '../../assets/images/beef.svg';
import chickenIcon from '../../assets/images/chicken.svg';

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

const Menu = () => {
  return (
    <section id="menu" className="w-full bg-cream pt-8 pb-8 md:pt-12 md:pb-12 px-4 md:px-8 lg:px-12 text-navy">
      <div className="max-w-7xl mx-auto">
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
                  <h3 className="text-4xl md:text-5xl font-serif italic text-navy mb-10 leading-none flex items-center gap-4">
                    {column.category}
                    {column.category === "Beef Burgers" && (
                      <img src={beefIcon} alt="Beef" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                    )}
                    {column.category === "Chicken Burgers" && (
                      <img src={chickenIcon} alt="Chicken" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                    )}
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
            {/* <div className="p-12 flex justify-center">
              <button className="bg-navy text-cream px-12 py-5 rounded-[30px_30px_5px_30px] font-bold text-xl hover:scale-105 transition-transform shadow-xl">
                Place Your Order
              </button>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;