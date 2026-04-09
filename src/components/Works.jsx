import React, { useRef } from 'react';

const mockProjects = [
  { name: 'KUVAN', logo: 'K', category: 'Brand Identity' },
  { name: 'DAKHNII', logo: 'D', category: 'Packaging Design' },
  { name: 'BREW', logo: 'B', category: 'Website Design' },
  { name: '72MG', logo: '72', category: 'Studio' },
];

const Works = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-cream py-24 px-4 md:px-8 text-navy relative">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-sans font-normal text-navy tracking-tight leading-none mb-4">
          Have a <span className="font-serif italic text-navy font-light tracking-normal">taste</span>
        </h2>
        <p className="text-xl md:text-2xl font-sans text-navy/80 font-medium tracking-tight">
          of our works
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Navigation Arrows */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:scale-110 transition-transform hidden md:block"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:scale-110 transition-transform hidden md:block"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Carousel Content */}
        <div 
          ref={scrollRef}
          className="w-full overflow-x-auto scrollbar-hide flex gap-6 pb-10 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mockProjects.map((project, index) => (
            <div 
              key={index} 
              className="min-w-[80%] md:min-w-[60%] lg:min-w-[100%] aspect-video bg-black rounded-[2rem] flex items-center justify-center snap-center relative group overflow-hidden"
            >
              {/* Logo Placeholder */}
              <div className="text-white text-8xl md:text-[12rem] font-sans font-black opacity-90 group-hover:scale-110 transition-transform duration-500">
                {project.logo}
              </div>

              {/* View Project Overlay */}
              <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="bg-cream text-navy px-8 py-3 rounded-full font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Project
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Text (Global link) */}
      <div className="text-center mt-12">
        <a href="#works" className="text-xl md:text-2xl font-sans font-bold text-navy hover:underline transition-all">
          View More
        </a>
      </div>
    </section>
  );
};

export default Works;
