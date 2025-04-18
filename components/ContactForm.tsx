"use client"
import type React from "react"
import Image from "next/image"
import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    question: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // tes apa saja yang diinput di form
    console.log("Form submitted:", formData)
    alert("Pesan Anda telah dikirim. Terima kasih!")
    // setelah itu di-clear
    setFormData({
      question: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <section className="relative">
      {/* Split background */}
      <div className="absolute inset-0">
        <div className="h-1/2 bg-white"></div>
        <div className="h-1/2 bg-[#0288d1]"></div>
      </div>
      
      {/* Content */}
      <div className="relative py-16 container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl border border-black-100 p-8 mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image Column - Made to fill full height with object-cover */}
            <div className="w-full md:w-1/2 md:h-auto">
              <div className="h-full">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/9b6b/9b63/9f56b06effd490cc54217c72470b9fec?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mVMNifoGfxq6XrWBhQynNcDFxyJ2Jy~FNKs4yWKusX6Tc9rU~bTtm0VF7PnNFw9CZRHp9LMnSD6LWlbwRb4jKLlIaaRQKeUCAF9vYhow4tULEo7F8xgjg6TzgUETEr~IPLYFP29Q6iXBkYpIElRtHZHTENM-L9bNEOPy1onIppZHwHfuF3dRntqwQFrbyLn~w3XlHUiFwne6OO5BA4m1Lc6sWEIYHeu3a-CWEDd8jnkiv~oDIeWPfTPRy-fYIupre5guxK3W7G5R6rwgezX~sn~Gx6Zp8v3oj6QhPaI8iWjkMdo-y75x-iPESc5i-DJ8eyJlyJl6m8kWF7Z1Df-e9w__"
                  alt="Guru menyapa"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Form Column */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-black">Ada</span> <span className="text-[#0288d1]">Pertanyaan?</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="question" className="block text-gray-700 mb-2">
                    Pertanyaan Anda
                  </label>
                  <select
                    id="question"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0288d1]"
                  >
                    <option value="">-- Pilih Pertanyaan --</option>
                    <option value="pendaftaran">Informasi Pendaftaran</option>
                    <option value="biaya">Informasi Biaya</option>
                    <option value="kurikulum">Informasi Kurikulum</option>
                    <option value="fasilitas">Informasi Fasilitas</option>
                    <option value="lainnya">Pertanyaan Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukan nama anda"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0288d1]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Anda
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukan email anda"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0288d1]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Nomor Handphone
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                      +62
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="81296021858"
                      className="flex-1 p-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#0288d1]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Masukan pesan anda"
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0288d1]"
                    required
                  ></textarea>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-[#2271b3] hover:bg-[#1a5a8e] text-white font-medium py-3 px-8 rounded-md transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm