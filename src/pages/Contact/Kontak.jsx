import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEmail } from '../../hooks/useEmail';
import { CheckCircle, XCircle } from 'lucide-react';
import { useSnackbar } from 'notistack';

export default function Kontak() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { sendEmail, loading, status } = useEmail();
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // pengiriman data
    sendEmail(form);
    if (status.type == 'error') {
      console.log('error')
      enqueueSnackbar(status.message, {
        variant: 'error',
        autoHideDuration: 4000,
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        action: (key) => (
          <button
            onClick={() => closeSnackbar(key)}
            className="btn btn-xs btn-ghost ml-3 text-xs"
          >
            Tutup
          </button>
        ),
        content: (key, message) => (
          <div
            key={key}
            className="bg-error text-error-content shadow-lg rounded-xl px-4 py-3 flex items-center gap-3 border border-error/40"
          >
            <XCircle size={20} />
            <span className="text-sm font-medium">{message}</span>
          </div>
        ),
      });
      return;
    }

    // notifikasi setelah pengiriman data
    enqueueSnackbar('Pesan Anda telah terkirim! 🎉', {
      variant: 'success',
      autoHideDuration: 4000,
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      action: (key) => (
        <button
          onClick={() => closeSnackbar(key)}
          className="btn btn-xs btn-ghost ml-3 text-xs"
        >
          Tutup
        </button>
      ),
      content: (key, message) => (
        <div
          key={key}
          className="bg-success text-success-content shadow-lg rounded-xl px-4 py-3 flex items-center gap-3 border border-success/40"
        >
          <CheckCircle size={20} />
          <span className="text-sm font-medium">{message}</span>
        </div>
      ),
    });
    setForm({ nama: '', email: '', pesan: '' });
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="relative w-full bg-base-200 overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80"
          alt="Contact Background"
          className="w-full h-[380px] object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-neutral-content px-6">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold drop-shadow-lg"
          >
            Hubungi Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-neutral-content/80 mt-3 max-w-2xl"
          >
            Ada pertanyaan, saran, atau masukan? Kami senang mendengarnya dari
            Anda.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Kirim Pesan</h2>
          <p className="text-base-content/70 mb-6">
            Tim kami akan merespons secepat mungkin. Pastikan data yang Anda
            kirimkan sudah benar.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-base-200 p-6 rounded-2xl shadow-md border border-base-300"
          >
            <div>
              <label className="label">
                <span className="label-text font-medium">Nama</span>
              </label>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                required
                placeholder="Masukkan nama Anda"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="nama@email.com"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Pesan</span>
              </label>
              <textarea
                name="pesan"
                value={form.pesan}
                onChange={handleChange}
                required
                placeholder="Tulis pesan Anda di sini..."
                className="textarea textarea-bordered w-full min-h-[120px]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? 'Mengirim..' : 'Kirim Pesan'}
            </button>
          </form>
        </motion.div>

        {/* Right Side Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-semibold mb-6">Informasi Kontak</h2>
          <div className="space-y-4 text-base-content/80">
            <div className="flex items-center gap-3">
              <i className="bi bi-envelope text-xl text-primary"></i>
              <span>ahmadadptr@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="bi bi-github text-xl text-primary"></i>
              <a
                href="https://github.com/ahmadadptr001"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover"
              >
                github.com/ahmadadptr001
              </a>
            </div>
            <div className="flex items-center gap-3">
              <i className="bi bi-geo-alt text-xl text-primary"></i>
              <span>Kendari, Sulawesi Tenggara</span>
            </div>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
            alt="Contact Illustration"
            className="rounded-2xl shadow-lg mt-10"
          />
        </motion.div>
      </section>
    </div>
  );
}
