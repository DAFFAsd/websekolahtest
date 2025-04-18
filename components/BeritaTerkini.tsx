import Image from "next/image"
import Link from "next/link"

const BeritaTerkini = () => {
  // Data berita
  const berita = [
    {
      id: 1,
      title: "Bina Prestasi raih juara olimpiade tingkat provinsi",
      description:
        'SMA Bina Prestasi kembali menorehkan prestasi gemilang dengan meraih penghargaan sebagai "Sekolah Berprestasi Nasional 2024". Ajang bergengsi ini diikuti oleh ratusan sekolah',
      date: "27 Maret 2025",
      image: "/placeholder.svg?height=150&width=150",
      url: "#",
    },
    {
      id: 2,
      title: "Bina Prestasi raih juara olimpiade tingkat provinsi",
      description:
        'SMA Bina Prestasi kembali menorehkan prestasi gemilang dengan meraih penghargaan sebagai "Sekolah Berprestasi Nasional 2024". Ajang bergengsi ini diikuti oleh ratusan sekolah',
      date: "27 Maret 2025",
      image: "/placeholder.svg?height=150&width=150",
      url: "#",
    },
    {
      id: 3,
      title: "Bina Prestasi raih juara olimpiade tingkat provinsi",
      description:
        'SMA Bina Prestasi kembali menorehkan prestasi gemilang dengan meraih penghargaan sebagai "Sekolah Berprestasi Nasional 2024". Ajang bergengsi ini diikuti oleh ratusan sekolah',
      date: "27 Maret 2025",
      image: "/placeholder.svg?height=150&width=150",
      url: "#",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-black">
        <h2 className="text-4xl font-bold mb-12">Berita Terkini</h2>

        <div className="space-y-8 mb-8">
          {berita.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-48 bg-gray-200 flex-shrink-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-400 text-sm">{item.date}</span>
                  <Link href={item.url} className="text-[#0288d1] hover:underline">
                    Baca lanjut &gt;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <Link
            href="#"
            className="bg-[#0288d1] text-white px-6 py-3 rounded-md font-medium hover:bg-[#026aa9] transition-colors"
          >
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BeritaTerkini
