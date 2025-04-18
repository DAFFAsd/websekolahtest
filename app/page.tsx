// app/page.tsx
import Navbar from "@/components/Navbar";       // Menggunakan alias '@/' (jika dikonfigurasi)
// ATAU gunakan path relatif jika alias tidak disetup:
// import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramUnggulan from "@/components/ProgramUnggulan"; // Jika Anda membuat Program Unggulan
import FasilitasSekolah from "@/components/FasilitasSekolah";
import BeritaTerkini from "@/components/BeritaTerkini";
import TestimonialSection from "@/components/TestimonialSection";
import LocationSection from "@/components/LocationSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
// import Footer from "@/components/Footer"; // Jika Anda membuat Footer

export default function Home() {
  return (
    // Div ini penting sebagai 'positioning context' untuk Navbar yang absolute
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramUnggulan />
        <FasilitasSekolah />
        <BeritaTerkini />
        <TestimonialSection />
        <LocationSection />
        <ContactForm />
        <Footer />
        {/* Tambahkan section lain di sini */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}