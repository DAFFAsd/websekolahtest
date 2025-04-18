import Image from "next/image"

const TestimonialSection = () => {
  // Data testimonial
  const testimonials = [
    {
      id: 1,
      name: "Siti Nurhayati",
      role: "Orang Tua Siswa",
      image: "https://images.unsplash.com/photo-1710488140888-88896ecafdcd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote: [
        "Saya sangat puas dengan sekolah ini. Anak saya kini lebih percaya diri dan selalu semangat belajar.",
        "Guru-gurunya sangat perhatian, dan kegiatan ekstrakurikulernya membantu mengembangkan bakat anak saya.",
        "Terima kasih!"
      ]
    },
    {
      id: 2,
      name: "Dimas Pratama",
      role: "Alumni",
      image: "https://plus.unsplash.com/premium_photo-1661583865189-211fc499caca?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote: [
        "Sekolah ini memberikan bekal pendidikan akademik dan karakter yang sangat kuat.",
        "Saya merasa bangga pernah menjadi bagian dari sekolah yang selalu mendukung siswa untuk meraih mimpi mereka."
      ]
    },
    {
      id: 3,
      name: "Indah Kurniasari",
      role: "Kepala Komite Sekolah",
      image: "https://plus.unsplash.com/premium_photo-1661683902215-f5cc37713052?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote: [
        "Sekolah ini memiliki fasilitas lengkap, lingkungan aman, dan program yang inovatif.",
        "Anak-anak tidak hanya belajar akademik, tapi juga tumbuh dengan nilai-nilai yang baik.",
        "Sekolah yang benar-benar luar biasa!"
      ]
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-black">Apa</span> <span className="text-[#0288d1]">Kata Mereka</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col h-full">
              <div className="w-full">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-[#0288d1] text-white py-3 px-4">
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4 flex-grow">
                {testimonial.quote.map((paragraph, index) => (
                  <p key={index} className="mb-3 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
