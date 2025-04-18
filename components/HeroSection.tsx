import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-end justify-start text-white pb-16 pl-8 md:pb-24 md:pl-16 lg:pb-32 lg:pl-24">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1625111381887-458fce74a923?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Contoh Unsplash
        alt="Students smiling"
        layout="fill"
        objectFit="cover"
        quality={85}
        priority
        className="-z-10"
      />
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black opacity-40 -z-10"></div>

      {/* Konten Hero */}
      <div className="z-0 text-left px-4 max-w-2xl"> 
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
          School Tagline
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow">
          School tagline description is the words that will support the
          story telling and selling of the program itself, try it now then.
        </p>
        
        <div className="flex space-x-4 justify-start">
          <button className="bg-[#0288d1] hover:bg-[#026aa9] text-white font-semibold py-3 px-8 rounded transition duration-300">
            Primary CTA
          </button>
          <button className="bg-white hover:bg-gray-200 text-[#0288d1] font-semibold py-3 px-8 rounded border border-gray-300 transition duration-300">
            Secondary CTA
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;