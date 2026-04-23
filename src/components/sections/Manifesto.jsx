import React from 'react';

const DoodleIcon = ({ children }) => (
  <span className="inline-flex translate-y-[0.15em] items-center px-1 text-navy">
    {children}
  </span>
);

const DoodleBurger = () => (
  <svg width="42" height="42" viewBox="0 0 100 100" className="stroke-navy fill-none stroke-[4px]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 20 50 C 20 20 80 20 80 50" />
    <path d="M 35 35 L 40 35 M 50 30 L 55 30 M 65 38 L 70 38" />
    <path d="M 15 50 Q 25 60 35 50 T 55 50 T 75 50 T 85 50" />
    <rect x="20" y="55" width="60" height="15" rx="5" />
    <path d="M 25 75 C 25 90 75 90 75 75 Z" />
  </svg>
);

const DoodleSpatula = () => (
  <svg width="38" height="38" viewBox="0 0 100 100" className="stroke-navy fill-none stroke-[4px]" strokeLinecap="round" strokeLinejoin="round" style={{transform: 'rotate(-15deg)'}}>
    <rect x="30" y="20" width="40" height="30" rx="3" />
    <line x1="40" y1="25" x2="40" y2="45" />
    <line x1="50" y1="25" x2="50" y2="45" />
    <line x1="60" y1="25" x2="60" y2="45" />
    <line x1="50" y1="50" x2="50" y2="95" strokeWidth="6" />
  </svg>
);

const DoodleFlame = () => (
  <svg width="38" height="38" viewBox="0 0 100 100" className="stroke-navy fill-none stroke-[4px]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 50 90 C 20 90 20 50 50 15 C 60 40 80 50 80 70 C 80 90 65 90 50 90 Z" />
    <path d="M 50 80 C 40 80 40 60 50 40 C 60 55 65 65 65 70 C 65 80 55 80 50 80 Z" />
  </svg>
);

const DoodleFries = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" className="stroke-navy fill-none stroke-[4px]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 30 50 L 40 90 L 60 90 L 70 50 Z" />
    <path d="M 30 50 C 50 60 70 50 70 50" />
    <path d="M 35 50 L 30 15 L 40 15 L 45 52" />
    <path d="M 45 53 L 45 10 L 55 10 L 55 55" />
    <path d="M 55 55 L 60 20 L 70 20 L 65 50" />
  </svg>
);

const DoodleBite = () => (
  <svg width="38" height="38" viewBox="0 0 100 100" className="stroke-navy fill-none stroke-[4px]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 50 15 A 35 35 0 1 1 15 50" />
    <path d="M 15 50 C 25 45 30 35 25 25 C 35 20 40 10 50 15" />
  </svg>
);

const DoodleSplash = () => (
  <svg width="42" height="42" viewBox="0 0 100 100" className="stroke-navy fill-none stroke-[4px]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 20 50 C 10 30 30 20 40 40 C 50 10 70 20 60 50 C 80 40 90 60 70 70 C 80 90 60 90 50 75 C 30 90 10 80 25 65 C 5 60 10 40 20 50 Z" />
    <circle cx="50" cy="50" r="5" className="fill-navy" />
  </svg>
);

const DoodleStar = () => (
  <svg width="42" height="42" viewBox="0 0 100 100" className="stroke-navy fill-none stroke-[4px]" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 50 15 L 60 40 L 90 40 L 65 60 L 75 90 L 50 70 L 25 90 L 35 60 L 10 40 L 40 40 Z" />
    <path d="M 15 15 L 20 20 M 85 15 L 80 20 M 85 85 L 80 80 M 15 85 L 20 80" />
  </svg>
);

const Manifesto = () => {
  return (
    <section className="w-full bg-cream px-4 py-20 text-navy md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mx-auto max-w-5xl font-sans text-[2.2rem] font-normal leading-[1.15] tracking-tight md:text-[3.2rem]">
          Fillmore Burgers is all about real burgers <DoodleIcon><DoodleBurger /></DoodleIcon> done right. Smashed patties with crispy edges <DoodleIcon><DoodleSpatula /></DoodleIcon> and juicy flavor <DoodleIcon><DoodleFlame /></DoodleIcon>.
          <br /><br />
          Fresh ingredients <DoodleIcon><DoodleFries /></DoodleIcon> and bold taste in every bite <DoodleIcon><DoodleBite /></DoodleIcon>. Messy, satisfying burgers <DoodleIcon><DoodleSplash /></DoodleIcon> that hit every time <DoodleIcon><DoodleStar /></DoodleIcon>.
        </p>
      </div>
    </section>
  );
};

export default Manifesto;
