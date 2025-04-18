import Image from "next/image"
import Link from "next/link"

const LocationSection = () => {
  return (
    <section className="py-16 bg-[#0288d1] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Lokasi Kami</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-lg overflow-hidden">
          {/* Gambar Sekolah */}
          {/* --- Ganti Nilai Height Di Sini --- */}
          <div className="relative h-[450px] lg:h-[550px]"> {/* Contoh: Naikkan ke 450px & 550px */}
            {/* Update placeholder height jika perlu, tapi ini hanya visual placeholder */}
            <Image src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB8NOdqizF17mdpSUCkMgixQw3nl1DEpNqWhpzUUSsYM3UB34nXd6uYxvKlji-2oywq86u0DL2HIAZ_mtD6tbkbx27tZm4xvTOKTF96EuTA_m7GS4NSwLCQDN5jvLOuKFBFg37Ca=s1360-w1360-h1020?height=550&width=600" alt="SMA Bina Sarana" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
              <h3 className="text-2xl font-bold text-white">MTs. Al-Jihad Depok</h3>
              <p className="text-white text-sm mt-1">
                Jalan. H. Abdul Gani I,
                <br />
                Kelurahan Kalibaru, Kecamatan Cilodong,
                <br />
                Kota Depok, Jawa Barat
                <br />
                Indonesia, 10110
              </p>
            </div>
          </div>

          {/* Peta Lokasi */}
          {/* --- Ganti Nilai Height Di Sini (buat sama) --- */}
          <div className="relative h-[450px] lg:h-[550px]"> {/* Contoh: Naikkan ke 450px & 550px */}
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.9881354441!2d106.83917429999999!3d-6.447805199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebd2107be727%3A0x37429a6c2f0bfa2f!2sMTs.%20Al%20Jihad%20Depok!5e0!3m2!1sen!2sid!4v1713442967123!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi MTs. Al Jihad Depok"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute bottom-4 right-4">
              <Link
                href="https://g.co/kgs/6ksyfCw" // Pastikan link Google Maps/peta benar
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0288d1] hover:bg-[#026aa9] text-white px-6 py-3 rounded-md font-medium transition-colors inline-block"
              >
                Cek Lokasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
