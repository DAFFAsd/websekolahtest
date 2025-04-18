import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#0288d1] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1 - Informasi Sekolah */}
          <div>
            <h2 className="text-2xl font-bold mb-6">SMA Bina Sarana</h2>
            <p className="mb-6">
              Jalan Merdeka No. 123,
              <br />
              Kelurahan Gambir, Kecamatan Gambir,
              <br />
              Kota Jakarta Pusat, DKI Jakarta,
              <br />
              Indonesia, 10110
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="https://mts.al-jihad.sch.id/wp-content/uploads/2024/12/Nama_Madrasah__1_-removebg-preview.png"
                  alt="Logo Sekolah"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6" />
                <Instagram className="w-6 h-6" />
                <Twitter className="w-6 h-6" />
                <Youtube className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Kolom 2 - Link */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Link</h2>
            <ul className="space-y-3">
              <li>Tentang Kami</li>
              <li>Program</li>
              <li>Admisi</li>
              <li>Ekstrakurikuler</li>
              <li>Berita</li>
            </ul>
          </div>

          {/* Kolom 3 - Kontak */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Kontak Kami</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+628129993021</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>info@sekolahkami.ac.id</span>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-medium">Hubungi Kami</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-6 text-center">
        <p>© 2025 Sekolah Menengah Atas Negeri 1 Jakarta. Semua Hak Dilindungi Undang-Undang.</p>
      </div>
    </footer>
  )
}

export default Footer
