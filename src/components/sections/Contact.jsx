import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast, Toaster } from 'react-hot-toast';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  location: z.string().min(1, "Location is required"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  botcheck: z.boolean().optional(),
});
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });


  // State to handle responsive border radius calculations
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: "New Inquiry - Fillmore Burgers",
          from_name: "Fillmore Website",
          replyto: data.email,
          botcheck: data.botcheck ? "true" : "",
          name: data.name,
          email: data.email,
          location: data.location,
          phone: data.phone,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Inquiry sent successfully");
        reset();
      } else {
        toast.error(result.message || "Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send inquiry. Please try again.");
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#F2EDE4] flex items-center justify-center p-4 md:p-10 font-sans">
      <Toaster position="top-center" />
      {/* 1. Main Outer Container */}
      <div className="relative w-full max-w-5xl">
        
        {/* 2. Burger-Shaped Inner Frame */}
        <div 
          className="relative w-full bg-[#F2EDE4] px-6 py-12 md:px-20 md:py-16 transition-all duration-300 ease-in-out mx-auto"
          style={{
            border: '5px solid #0A235C',
            maxWidth: isMobile ? '380px' : '100%',
            /* On mobile, we use px values for border-radius. 
               This prevents the "pill" stretching seen in your first image.
            */
            borderRadius: isMobile 
              ? '60px 80px 40px 30px / 40px 40px 60px 40px' 
              : '13% 18% 10% 8% / 15% 15% 30% 12%',
          }}
        >
          
          {/* 3. Left Side Graphic (Visible only on Desktop) */}
          <div className="absolute left-[-18px] top-1/3 -translate-y-1/2 flex flex-col gap-28 hidden md:flex">
            <div className="w-[32px] h-[50px] bg-[#0A235C] rounded-sm relative">
                <div className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-6 h-[7px] bg-[#0A235C]"></div>
            </div>
            <div className="w-[32px] h-[50px] bg-[#0A235C] rounded-sm relative">
                <div className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-6 h-[7px] bg-[#0A235C]"></div>
            </div>
          </div>

          {/* 4. Heading Section */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[#0A235C] text-4xl md:text-7xl font-serif leading-[1.0] tracking-tighter">
              Let's <span className="italic font-light">smash</span> together
            </h2>
            <p className="text-[#0A235C] mt-4 md:mt-7 font-semibold tracking-[0.15em] text-[10px] md:text-sm uppercase opacity-90">
              Fresh Ingredients. Your Taste. Our Craft.
            </p>
          </div>

          {/* 5. Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
            {/* Honeypot field for spam protection */}
            <input type="checkbox" className="hidden" style={{ display: 'none' }} {...register("botcheck")} />

            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col">
                <label className="text-gray-400 text-[10px] md:text-[11px] uppercase font-bold mb-1.5 ml-1 tracking-widest">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name")}
                  className="bg-[#D9D6CE] p-3 md:p-4 rounded-md outline-none text-[#0A235C] placeholder:text-gray-500/60 transition-all focus:ring-1 focus:ring-[#0A235C]"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
              </div>
              <div className="flex flex-col">
                <label className="text-gray-400 text-[10px] md:text-[11px] uppercase font-bold mb-1.5 ml-1 tracking-widest">Email</label>
                <input
                  type="email"
                  placeholder="Your Mail"
                  {...register("email")}
                  className="bg-[#D9D6CE] p-3 md:p-4 rounded-md outline-none text-[#0A235C] placeholder:text-gray-500/60 transition-all focus:ring-1 focus:ring-[#0A235C]"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
              </div>
            </div>

            {/* Row 2: Location and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col">
                <label className="text-gray-400 text-[10px] md:text-[11px] uppercase font-bold mb-1.5 ml-1 tracking-widest">Location</label>
                <input
                  type="text"
                  placeholder="Your Location"
                  {...register("location")}
                  className="bg-[#D9D6CE] p-3 md:p-4 rounded-md outline-none text-[#0A235C] placeholder:text-gray-500/60 transition-all focus:ring-1 focus:ring-[#0A235C]"
                />
                {errors.location && <p className="text-red-500 text-xs mt-1 ml-1">{errors.location.message}</p>}
              </div>
              <div className="flex flex-col">
                <label className="text-gray-400 text-[10px] md:text-[11px] uppercase font-bold mb-1.5 ml-1 tracking-widest">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Your Number"
                  {...register("phone")}
                  className="bg-[#D9D6CE] p-3 md:p-4 rounded-md outline-none text-[#0A235C] placeholder:text-gray-500/60 transition-all focus:ring-1 focus:ring-[#0A235C]"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone.message}</p>}
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="flex flex-col">
              <label className="text-gray-400 text-[10px] md:text-[11px] uppercase font-bold mb-1.5 ml-1 tracking-widest">How can we help?</label>
              <textarea
                rows={isMobile ? "4" : "6"}
                placeholder="Type Your Message"
                {...register("message")}
                className="bg-[#D9D6CE] p-4 md:p-5 rounded-md outline-none text-[#0A235C] placeholder:text-gray-500/60 resize-none transition-all focus:ring-1 focus:ring-[#0A235C]"
              />
              {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-2 md:pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0A235C] text-white font-bold py-4 md:py-5 rounded-md hover:bg-[#081d4a] transition-colors shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;