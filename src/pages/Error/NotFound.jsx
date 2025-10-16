// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-base-100 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-warning/10 border border-warning/30">
            <AlertTriangle className="w-12 h-12 text-warning" />
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-3">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Halaman Tidak Ditemukan</h2>
        <p className="text-base-content/70 mb-6 leading-relaxed">
          Sepertinya Anda tersesat di dunia cahaya ✨. Halaman yang Anda cari
          tidak tersedia atau sudah dipindahkan.
        </p>

        <div className="flex justify-center gap-3">
          <Link to="/" className="btn btn-primary rounded-full">
            Kembali ke Beranda
          </Link>
          <Link
            to="/editor"
            className="btn btn-outline btn-warning rounded-full"
          >
            Buka Editor
          </Link>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-sm text-base-content/60"
      >
        © {new Date().getFullYear()} Lumos Photo Editor • Dibuat oleh Ahmad
        Bagas Adiputra
      </motion.p>
    </section>
  );
}
