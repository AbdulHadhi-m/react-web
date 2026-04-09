import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', message: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (This is a UI demonstration)");
  };

  return (
    <section id="order" className="w-full bg-cream py-24 px-4 md:px-8 text-navy relative overflow-hidden font-sans">
      
      {/* Hanging Sign Overlap */}
      <div className="absolute top-0 left-[8%] md:left-[10%] flex flex-col items-center pointer-events-none z-20">
        <div className="flex justify-between w-[70%] h-[30px] md:h-[40px]">
           <div className="w-[4px] h-full bg-navy"></div>
           <div className="w-[4px] h-full bg-navy"></div>
        </div>
        <div className="border-[4px] border-navy bg-cream px-4 md:px-6 py-2 font-black text-2xl md:text-3xl tracking-tighter shadow-sm">
           seventy two<span className="font-serif italic font-normal ml-1">mg.</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative mt-12 md:mt-16">
        
        {/* Main Box Container */}
        <div className="relative border-[4px] border-navy rounded-[10px] p-6 md:p-16 pt-16 md:pt-24 bg-cream w-full z-10"
             style={{ borderRadius: "12px 12px 250px 12px / 12px 12px 15px 12px" }}>
            
            {/* Left pipe decoration */}
            <div className="absolute top-[25%] left-[-28px] w-[24px] h-[350px] border-l-[4px] border-navy hidden lg:block border-radius-trick" style={{ borderRadius: "30% 10% 20% 40% / 10% 30% 40% 20%"}}>
               {/* Top joint */}
               <div className="absolute top-[20%] left-[-10px] w-[34px] h-[30px] bg-navy flex items-center justify-end rounded-l-[4px]">
                  <div className="w-[12px] h-[40px] bg-navy rounded-sm absolute right-[-6px]"></div>
               </div>
               {/* Bottom joint */}
               <div className="absolute bottom-[20%] left-[-10px] w-[34px] h-[30px] bg-navy flex items-center justify-end rounded-l-[4px]">
                  <div className="w-[12px] h-[40px] bg-navy rounded-sm absolute right-[-6px]"></div>
               </div>
            </div>

            <div className="text-center mb-16 px-2">
              <h2 className="text-[2.5rem] md:text-[4rem] font-sans text-navy mb-4 font-normal tracking-tight leading-[1.1] md:leading-[1.15]">
                Let's <span className="font-serif italic font-light lowercase text-[3rem] md:text-[4.5rem]">brew</span> the perfect<br />cup together
              </h2>
              <p className="text-xl md:text-2xl font-sans text-navy/80 font-medium tracking-tight mt-6 md:mt-8">
                Your Business. Your Vision. Our Craft.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto space-y-8 md:space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div className="flex flex-col gap-3">
                  <label className="text-[13px] md:text-sm font-bold text-black/40 font-sans tracking-wide px-2 uppercase">Name</label>
                  <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required className="w-full bg-[#e3decc] text-navy placeholder-black/30 px-6 py-4 rounded-[12px] outline-none focus:ring-2 focus:ring-navy transition-all font-sans font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[13px] md:text-sm font-bold text-black/40 font-sans tracking-wide px-2 uppercase">Email</label>
                  <input type="email" name="email" placeholder="Your Mail" onChange={handleChange} required className="w-full bg-[#e3decc] text-navy placeholder-black/30 px-6 py-4 rounded-[12px] outline-none focus:ring-2 focus:ring-navy transition-all font-sans font-medium" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                 <div className="flex flex-col gap-3">
                  <label className="text-[13px] md:text-sm font-bold text-black/40 font-sans tracking-wide px-2 uppercase">Company Name</label>
                  <input type="text" name="company" placeholder="Your Company NAme" onChange={handleChange} className="w-full bg-[#e3decc] text-navy placeholder-black/30 px-6 py-4 rounded-[12px] outline-none focus:ring-2 focus:ring-navy transition-all font-sans font-medium" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[13px] md:text-sm font-bold text-black/40 font-sans tracking-wide px-2 uppercase">Phone Number</label>
                  <input type="tel" name="phone" placeholder="Your Number" onChange={handleChange} className="w-full bg-[#e3decc] text-navy placeholder-black/30 px-6 py-4 rounded-[12px] outline-none focus:ring-2 focus:ring-navy transition-all font-sans font-medium" />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[13px] md:text-sm font-bold text-black/40 font-sans tracking-wide px-2 uppercase">How can we help you?</label>
                <textarea name="message" placeholder="Type Your Message" onChange={handleChange} required className="w-full bg-[#e3decc] text-navy placeholder-black/30 px-6 py-5 rounded-[12px] outline-none focus:ring-2 focus:ring-navy transition-all font-sans resize-none h-[180px] font-medium"></textarea>
              </div>

              <div className="text-center pt-8">
                 <button type="submit" className="text-xl md:text-2xl font-serif font-black italic text-cream bg-navy px-16 py-5 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                   Submit Form
                 </button>
              </div>
            </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
