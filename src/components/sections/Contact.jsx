import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Order query received! We will connect soon.');
  };

  return (
    <section className="min-h-screen bg-[#F2EDE4] flex items-center justify-center p-4 md:p-10 font-sans">
      {/* 1. Main Outer Container */}
      <div className="relative w-full max-w-5xl p-4 md:p-10">
        
        {/* 2. Burger-Shaped Inner Frame */}
        {/* The magic happens in the border-radius style below */}
        <div 
          className="relative w-full h-full bg-[#F2EDE4] px-6 py-12 md:px-20 md:py-16 transition-all duration-300 ease-in-out"
          style={{
            border: '5px solid #0A235C',
            // Creates the asymmetric, "puffy bun" burger look.
            borderRadius: '13% 18% 10% 8% / 15% 15% 30% 12%',
          }}
        >
          
          {/* 3. Left Side Graphic (Hinge/Pipe Detail - still matches the theme but thicker) */}
          <div className="absolute left-[-18px] top-1/3 -translate-y-1/2 flex flex-col gap-28 hidden md:flex">
            {/* Top Hinge */}
            <div className="w-[32px] h-[50px] bg-[#0A235C] rounded-sm relative">
                <div className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-6 h-[7px] bg-[#0A235C]"></div>
            </div>
            {/* Bottom Hinge */}
            <div className="w-[32px] h-[50px] bg-[#0A235C] rounded-sm relative">
                <div className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-6 h-[7px] bg-[#0A235C]"></div>
            </div>
          </div>

          {/* 4. Heading Section */}
          <div className="text-center mb-16">
            <h2 className="text-[#0A235C] text-5xl md:text-7xl font-serif leading-[1.0] tracking-tighter">
              Let's <span className="italic font-light">smash</span> together <br />
              {/* burger together */}
            </h2>
            <p className="text-[#0A235C] mt-7 font-semibold tracking-[0.15em] text-xs md:text-sm uppercase opacity-90">
              Fresh Ingredients. Your Taste. Our Craft.
            </p>
          </div>

          {/* 5. Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-gray-400 text-[11px] uppercase font-bold mb-1.5 ml-1 tracking-widest">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onChange={handleChange}
                  className="bg-[#D9D6CE] p-4 rounded-md outline-none text-[#0A235C] placeholder:text-gray-500/60 transition-all focus:ring-1 focus:ring-[#0A235C]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-400 text-[11px] uppercase font-bold mb-1.5 ml-1 tracking-widest">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Mail"
                  required
                  onChange={handleChange}
                  className="bg-[#D9D6CE] p-4 rounded-md outline-none text-[#0A235C] placeholder:text-gray-500/60 transition-all focus:ring-1 focus:ring-[#0A235C]"
                />
              </div>
            </div>

            {/* Row 2: Location and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-gray-400 text-[11px] uppercase font-bold mb-1.5 ml-1 tracking-widest">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Your Location"
                  onChange={handleChange}
                  className="bg-[#D9D6CE] p-4 rounded-md outline-none text-[#0A235C] placeholder:text-gray-500/60 transition-all focus:ring-1 focus:ring-[#0A235C]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-400 text-[11px] uppercase font-bold mb-1.5 ml-1 tracking-widest">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Number"
                  onChange={handleChange}
                  className="bg-[#D9D6CE] p-4 rounded-md outline-none text-[#0A235C] placeholder:text-gray-500/60 transition-all focus:ring-1 focus:ring-[#0A235C]"
                />
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="flex flex-col">
              <label className="text-gray-400 text-[11px] uppercase font-bold mb-1.5 ml-1 tracking-widest">How can we help your order?</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Type Your Message (e.g., specific burger requests)"
                required
                onChange={handleChange}
                className="bg-[#D9D6CE] p-5 rounded-md outline-none text-[#0A235C] placeholder:text-gray-500/60 resize-none transition-all focus:ring-1 focus:ring-[#0A235C]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-[#0A235C] text-white font-bold py-5 rounded-md hover:bg-[#081d4a] transition-colors shadow-lg active:scale-[0.98]"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 