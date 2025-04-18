import { GraduationCap, Trophy } from 'lucide-react';
import Link from "next/link";

export default function ProgramUnggulan() {
  return (
    <div className="w-full bg-[#0288d1] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Bagian Kiri - Judul */}
        <div className="mb-8 lg:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Program<br />Unggulan
          </h1>
        </div>

        {/* Bagian Kanan - Program cards */}
        <div className="space-y-6">
          {/* Program Card 1 */}
          <div className="border-2 border-white rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <GraduationCap size={48} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Program Akademik</h2>
                <p className="text-lg">
                  Kurikulum yang terintegrasi dengan standar nasional dan internasional.
                </p>
              </div>
            </div>
          </div>

          {/* Program Card 2 */}
          <div className="border-2 border-white rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Trophy size={48} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Pendidikan Karakter Juara</h2>
                <p className="text-lg">
                  Penanaman nilai-nilai karakter untuk saling bersaing kompetitif
                </p>
              </div>
            </div>
          </div>

          {/* Program Card 3 */}
          <div className="border-2 border-white rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <GraduationCap size={48} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Program Akademik</h2>
                <p className="text-lg">
                  Kurikulum yang terintegrasi dengan standar nasional dan internasional.
                </p>
              </div>
            </div>
          </div>

          {/* See More Button */}
          <div className="flex justify-end mt-8">
            <Link 
              href="#" 
              className="bg-white text-[#0288d1] px-6 py-3 rounded-md font-medium text-lg hover:bg-opacity-90 transition-all"
            >
              Lihat Lengkap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
