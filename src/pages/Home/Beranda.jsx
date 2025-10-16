import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Wand2, Image, Layers, Upload } from 'lucide-react';

export default function Beranda() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* HERO SECTION */}
      <section className="hero min-h-screen bg-gradient-to-br from-base-200 to-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <motion.img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
            alt="Photo Editing"
            className="max-w-sm rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div>
            <motion.h1
              className="text-5xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ubah Foto Menjadi{' '}
              <span className="text-primary">Karya Profesional</span>
            </motion.h1>
            <p className="py-6 text-lg">
              Lumos membantu kamu mengedit foto dengan cepat, cerdas, dan mudah
              — tanpa perlu aplikasi tambahan. Semua berbasis web, semua instan.
            </p>
            <Link to="/editor" className="btn btn-primary btn-lg">
              Coba Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* FITUR UTAMA */}
      <section id="fitur" className="py-20 px-6 bg-base-200">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Fitur Unggulan Lumos</h2>
          <p className="text-base-content/70">
            Nikmati berbagai fitur canggih yang dirancang untuk pengalaman
            editing modern.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Wand2 className="w-10 h-10 text-primary" />,
              title: 'AI Enhance',
              desc: 'Perbaiki kualitas foto secara otomatis hanya dalam satu klik.',
            },
            {
              icon: <Layers className="w-10 h-10 text-primary" />,
              title: 'Layer Control',
              desc: 'Atur komposisi foto seperti pro dengan sistem layer canggih.',
            },
            {
              icon: <Image className="w-10 h-10 text-primary" />,
              title: 'Smart Filter',
              desc: 'Gunakan filter dinamis yang menyesuaikan warna dan cahaya.',
            },
            {
              icon: <Sparkles className="w-10 h-10 text-primary" />,
              title: 'Background Remover',
              desc: 'Hilangkan latar belakang otomatis tanpa ribet.',
            },
            {
              icon: <Upload className="w-10 h-10 text-primary" />,
              title: 'Cloud Save',
              desc: 'Simpan hasil editan langsung ke cloud Lumos.',
            },
            {
              icon: <Wand2 className="w-10 h-10 text-primary" />,
              title: 'AI Portrait Fix',
              desc: 'Perhalus wajah dan sesuaikan pencahayaan secara pintar.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="card-body items-center text-center">
                {item.icon}
                <h3 className="card-title mt-4">{item.title}</h3>
                <p className="text-base-content/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PANDUAN SINGKAT */}
      <section id="panduan" className="py-20 px-6 bg-base-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Cara Menggunakan Lumos</h2>
          <p className="text-base-content/70 mb-10">
            Cukup tiga langkah mudah untuk menghasilkan foto yang memukau.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Unggah Foto',
                desc: 'Pilih foto dari perangkat atau drag & drop ke halaman editor.',
              },
              {
                step: '2',
                title: 'Edit Sesuka Hati',
                desc: 'Gunakan fitur AI, filter, dan tools untuk menyempurnakan hasilnya.',
              },
              {
                step: '3',
                title: 'Simpan & Bagikan',
                desc: 'Ekspor ke berbagai format atau simpan langsung di cloud Lumos.',
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="card bg-base-200 shadow-sm hover:shadow-md transition-all border border-base-300"
                whileHover={{ scale: 1.03 }}
              >
                <div className="card-body items-center text-center">
                  <div className="badge badge-primary badge-lg mb-3">
                    {s.step}
                  </div>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="text-base-content/70">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-base-200 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Siap Ciptakan Keajaiban Visual?
        </motion.h2>
        <p className="mb-8 text-base-content/70">
          Mulai gunakan Lumos dan ubah foto biasa menjadi karya luar biasa.
        </p>
        <Link to="/editor" className="btn btn-primary btn-lg">
          Buka Editor Sekarang
        </Link>
      </section>
    </div>
  );
}
