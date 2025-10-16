import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Panduan() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Panduan Penggunaan Lumos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-base-content/70 max-w-3xl mx-auto"
        >
          Ikuti langkah-langkah berikut untuk mulai mengedit foto dengan mudah
          dan profesional menggunakan{' '}
          <span className="font-semibold">Lumos Photo Editor</span>.
        </motion.p>
      </section>

      {/* Steps Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-10">
        {[
          {
            step: '1',
            title: 'Unggah Foto',
            desc: "Klik tombol 'Mulai Edit', lalu unggah gambar dari perangkat Anda. Lumos mendukung format JPG, PNG, dan WEBP.",
          },
          {
            step: '2',
            title: 'Gunakan Alat Editor',
            desc: 'Sesuaikan kecerahan, rotasi, filter, hingga coretan menggunakan kontrol interaktif yang tersedia.',
          },
          {
            step: '3',
            title: 'Simpan Hasil',
            desc: "Setelah puas, klik tombol 'Unduh' untuk menyimpan hasil edit dalam kualitas tinggi.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.2 }}
            className="card bg-base-200 hover:bg-base-300 transition-all shadow-lg border border-base-300"
          >
            <div className="card-body items-center text-center">
              <div className="badge badge-primary text-lg mb-4 w-10 h-10 rounded-full flex items-center justify-center">
                {item.step}
              </div>
              <h2 className="card-title">{item.title}</h2>
              <p className="text-base-content/70">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Pertanyaan Umum
        </h2>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300 bg-base-200">
            <input type="radio" name="faq" defaultChecked />
            <div className="collapse-title text-lg font-semibold">
              Apakah Lumos gratis digunakan?
            </div>
            <div className="collapse-content">
              <p>
                Ya, Lumos dapat digunakan secara gratis tanpa batasan fitur
                dasar. Versi premium akan ditambahkan di masa depan.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300 bg-base-200">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-semibold">
              Apakah hasil edit tersimpan di server?
            </div>
            <div className="collapse-content">
              <p>
                Tidak, semua proses edit dilakukan langsung di perangkat Anda
                menggunakan browser (client-side rendering).
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300 bg-base-200">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-semibold">
              Bisakah saya menggunakan Lumos di HP?
            </div>
            <div className="collapse-content">
              <p>
                Bisa! Lumos dirancang responsif dan dapat dijalankan di
                perangkat mobile, tablet, maupun desktop tanpa instalasi
                tambahan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Siap mencoba Lumos Photo Editor?
          </h3>
          <Link to="/editor" className="btn btn-primary btn-wide">
            Mulai Edit Sekarang
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
