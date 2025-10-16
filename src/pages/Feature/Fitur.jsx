import { motion } from 'framer-motion';
import {
  Sliders,
  RotateCcw,
  Brush,
  Image,
  Wand2,
  Contrast,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Fitur() {
  const fiturUtama = [
    {
      icon: <Sliders size={32} />,
      judul: 'Penyesuaian Dasar',
      deskripsi:
        'Atur kecerahan, kontras, saturasi, dan hue untuk menghasilkan warna yang sempurna.',
    },
    {
      icon: <Brush size={32} />,
      judul: 'Kuas & Coretan',
      deskripsi:
        'Beri sentuhan personal dengan alat kuas bebas, stabil, dan presisi tinggi.',
    },
    {
      icon: <RotateCcw size={32} />,
      judul: 'Rotasi & Flip',
      deskripsi:
        'Putar atau balik gambar secara instan tanpa mengurangi kualitas visual.',
    },
    {
      icon: <Image size={32} />,
      judul: 'Filter Instan',
      deskripsi:
        'Gunakan filter profesional seperti grayscale, sepia, dan vivid tone dengan satu klik.',
    },
    {
      icon: <Wand2 size={32} />,
      judul: 'Efek Cerdas',
      deskripsi:
        'Tambahkan efek artistik menggunakan AI untuk menghasilkan gaya foto unik.',
    },
    {
      icon: <Contrast size={32} />,
      judul: 'Grayscale & Tone Map',
      deskripsi:
        'Kontrol penuh terhadap level abu dan tone foto untuk kesan sinematik.',
    },
  ];

  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-primary mb-4"
        >
          Jelajahi Fitur Canggih Lumos
        </motion.h1>
        <p className="max-w-2xl mx-auto text-base opacity-80">
          Setiap fitur dirancang untuk memberikan kendali penuh atas hasil akhir
          fotomu — dari koreksi warna dasar hingga efek visual kompleks.
        </p>
      </section>

      {/* Fitur Utama */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {fiturUtama.map((fitur, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card bg-base-200 hover:bg-base-300 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300 group"
          >
            <div className="card-body items-center text-center p-8">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {fitur.icon}
              </div>
              <h2 className="text-lg font-bold mb-2">{fitur.judul}</h2>
              <p className="text-sm opacity-80">{fitur.deskripsi}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Fitur Pro Showcase */}
      <section className="bg-base-200 py-20 mt-10">
        <div className="max-w-6xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
          >
            Fitur Pro untuk Kreator Serius
          </motion.h2>
          <p className="max-w-2xl mx-auto text-base opacity-80 mb-12">
            Nikmati teknologi pengeditan tingkat lanjut seperti masking layer,
            penyesuaian selektif, dan efek AI yang mempercepat workflow
            profesionalmu.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-300 border border-base-200 hover:shadow-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-secondary">
                Layer Masking
              </h3>
              <p className="text-sm opacity-80">
                Buat layer terpisah untuk kontrol total pada area tertentu tanpa
                merusak gambar utama.
              </p>
            </div>
            <div className="card bg-base-300 border border-base-200 hover:shadow-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-secondary">
                Smart Selection
              </h3>
              <p className="text-sm opacity-80">
                Pilih objek otomatis menggunakan deteksi AI, sempurna untuk
                menghapus background dengan cepat.
              </p>
            </div>
            <div className="card bg-base-300 border border-base-200 hover:shadow-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-secondary">
                Color Grading Pro
              </h3>
              <p className="text-sm opacity-80">
                Atur tone warna seperti di film dengan curve editor dan LUT
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <motion.h3
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-6"
        >
          Siap Mulai Mengedit?
        </motion.h3>
        <Link
          to="/editor"
          className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-all"
        >
          Buka Editor Sekarang
        </Link>
      </section>
    </main>
  );
}
