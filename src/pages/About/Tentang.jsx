import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Tentang() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="relative w-full bg-base-200 overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1920&q=80"
          alt="Editing Studio"
          className="w-full h-[400px] object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-neutral-content px-6">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold drop-shadow-lg"
          >
            Tentang Lumos Photo Editor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-neutral-content/80 mt-4 max-w-2xl"
          >
            Menyatukan kreativitas dan teknologi — tempat di mana pencahayaan,
            warna, dan ekspresi berpadu jadi satu.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src="data:image/jpeg;base64,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"
          alt="Creative Editing"
          className="rounded-2xl shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Visi & Misi Lumos</h2>
          <p className="text-base-content/70 leading-relaxed mb-3">
            <span className="font-medium">Lumos</span> hadir sebagai alat bantu
            bagi siapa pun yang ingin menciptakan karya visual tanpa batas.
            Dengan teknologi berbasis browser, pengguna dapat mengedit foto
            secara instan tanpa instalasi.
          </p>
          <p className="text-base-content/70 leading-relaxed">
            Misi kami adalah menghadirkan pengalaman editing modern yang ringan,
            cepat, dan ramah pengguna — semua berjalan langsung di perangkat
            Anda. Dari pelajar, kreator konten, hingga profesional, Lumos siap
            mendukung setiap imajinasi.
          </p>
        </motion.div>
      </section>

      {/* Interactive Stats Section */}
      <section className="bg-base-200 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: '5K+', label: 'Pengguna Aktif' },
            { value: '12+', label: 'Fitur Canggih' },
            { value: '0%', label: 'Data Tersimpan di Server' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card bg-base-100 shadow-lg border border-base-300 py-10 hover:scale-105 transition-all"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">
                {item.value}
              </h3>
              <p className="text-base-content/70">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Developer Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl font-semibold mb-4">Dibuat oleh</h2>
          <h3 className="text-2xl font-bold mb-2">Ahmad Bagas Adiputra</h3>
          <p className="text-base-content/70 leading-relaxed mb-4">
            Mahasiswa Teknik Informatika yang memiliki semangat dalam
            menciptakan solusi digital sederhana namun bermakna. Lumos menjadi
            proyek yang menggambarkan dedikasi terhadap desain, interaktivitas,
            dan pengalaman pengguna.
          </p>
          <Link
            to="https://github.com/ahmadadptr001"
            target="_blank"
            className="btn btn-outline btn-primary"
          >
            Kunjungi GitHub
          </Link>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg"
          alt="Developer Portrait"
          className="rounded-2xl shadow-xl object-cover h-[350px] w-full"
        />
      </section>

      {/* CTA */}
      <section className="text-center pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Siap bergabung dalam perjalanan visual ini?
          </h3>
          <Link to="/editor" className="btn btn-primary btn-wide">
            Buka Editor Sekarang
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
