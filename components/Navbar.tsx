import React from 'react';

const Navbar = () => {
  const navItems = ["Program", "Tentang Kami", "Admisi", "Ekstrakurikuler", "Berita", "Fasilitas"];

  return (
    // Position absolute agar bisa overlay di atas HeroSection
    <nav className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 text-white">
          {navItems.map((item) => (
            // Ganti href="#" dengan link sebenarnya jika perlu
            <a key={item} href="#" className="hover:text-gray-300 text-sm lg:text-base">
              {item}
            </a>
          ))}
        </div>
         {/* Mobile Menu Button (Placeholder) */}
        <div className="md:hidden text-white">
           {/* Ganti dengan komponen ikon burger menu jika perlu */}
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
           </svg>
        </div>

        {/* Enroll Button */}
        <button className="bg-[#0288d1] hover:bg-[#026aa9] text-white text-sm font-semibold py-2 px-5 rounded transition duration-300">
          Enroll
        </button>
      </div>
    </nav>
  );
};

export default Navbar;