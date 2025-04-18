import Image from "next/image"

const FasilitasSekolah = () => {
  // Data fasilitas
  const fasilitas = [
    {
      id: 1,
      title: "Fasilitas Akademik",
      description: "Fasilitas kelas yang mendukung pembelajaran dan digitalisasi dan globalisasi",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      id: 2,
      title: "Fasilitas Akademik",
      description: "Fasilitas kelas yang mendukung pembelajaran dan digitalisasi dan globalisasi",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      id: 3,
      title: "Fasilitas Akademik",
      description: "Fasilitas kelas yang mendukung pembelajaran dan digitalisasi dan globalisasi",
      image: "/placeholder.svg?height=250&width=250",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-black">
          <span className="text-[#0288d1]">Fasilitas</span> Sekolah
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fasilitas.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="w-full aspect-square bg-gray-200 mb-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-black">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FasilitasSekolah
