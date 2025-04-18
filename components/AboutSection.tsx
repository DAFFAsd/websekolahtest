import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Kolom Gambar */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center md:h-[550px] h-[450px]">
              {/* Gunakan positioning absolut untuk menumpuk gambar */}
              <div className="absolute top-0 left-0 w-3/5 md:w-2/3 max-w-xs md:max-w-sm z-0 transform translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6">
                <Image
                    src="https://awsimages.detik.net.id/community/media/visual/2022/11/30/anak-sekolah-1.jpeg?w=1200"
                    alt="Student studying"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-3/5 md:w-2/3 max-w-xs md:max-w-sm z-10 transform -translate-x-4 -translate-y-4 md:-translate-x-6 md:-translate-y-6">
                <Image
                    src="https://smpn38sby.sch.id/gbr/GAMBAR38108594572.jpg"
                    alt="Student in hallway"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-lg object-cover w-full h-auto border-4 border-white" // Tambahkan border putih
                />
              </div>
          </div>

          {/* Kolom Teks */}
          <div className="w-full md:w-1/2 text-gray-700 mt-8 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-black">
              Membentuk Generasi{' '}
              <span className="text-[#0288d1]">Cerdas</span> dan{' '}
              <span className="text-[#0288d1]">Berkarakter</span>
            </h2>
            <p className="mb-4 text-base md:text-lg leading-relaxed">
              Kami percaya bahwa setiap anak memiliki potensi luar biasa
              untuk menjadi pemimpin masa depan.
            </p>
            <p className="mb-6 text-base md:text-lg leading-relaxed">
              Dengan kurikulum yang inovatif, guru-guru berdedikasi,
              kami menciptakan lingkungan belajar yang mendukung
              perkembangan akademik, emosional, dan sosial siswa.
            </p>
            <div className="flex justify-end">
              <Link
                href="#"
                className="text-[#0288d1] hover:text-[#026aa9] font-semibold text-lg transition duration-300"
              >
                Lihat Lengkap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;