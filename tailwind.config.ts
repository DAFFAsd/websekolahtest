// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Sesuaikan path ini jika struktur folder Anda berbeda
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Sertakan jika mungkin akan pakai Pages Router
    "./components/*.{js,ts,jsx,tsx,mdx}", // Target folder components
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // Target folder app
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008CD5', // Warna kustom Anda
        // 'primary-hover': '#007bbd',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;