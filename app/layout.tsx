// app/layout.tsx
import type { Metadata } from "next";
// 1. Import Kumbh Sans dari next/font/google
import { Kumbh_Sans } from "next/font/google"; // Ganti Inter dengan Kumbh_Sans
import "./globals.css";

// 2. Inisialisasi font dengan subset dan weight yang diinginkan
//    Sertakan weight yang akan Anda gunakan (misal: 400 untuk normal, 700 untuk bold)
const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'], // Tambahkan weight sesuai kebutuhan
  display: 'swap', // Optional: strategi tampilan font
});

export const metadata: Metadata = {
  title: "Nama Sekolah Anda - Landing Page",
  description: "Selamat datang di website resmi sekolah kami.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={kumbh.className}>
        {children}
      </body>
    </html>
  );
}