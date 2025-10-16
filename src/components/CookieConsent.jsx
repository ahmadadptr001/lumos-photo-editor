import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from '../hooks/useCookieConsent';

export default function CookieConsent() {
  const { consent, acceptCookies, rejectCookies } = useCookieConsent();

  // Tombol abaikan hanya menutup banner sementara
  const handleDismiss = () => {
    const banner = document.getElementById('cookie-banner');
    banner.style.display = 'none';
  };

  return (
    <AnimatePresence>
      {!consent && (
        <motion.div
          id="cookie-banner"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[85%] lg:w-[70%]"
        >
          <div className="bg-base-200 border border-base-300 shadow-2xl rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 backdrop-blur-md">
            {/* Teks */}
            <div className="flex-1">
              <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                🍪 Penggunaan Cookie
              </h3>
              <p className="text-sm md:text-base opacity-80 leading-relaxed">
                Kami menggunakan cookie untuk meningkatkan pengalaman Anda di{' '}
                <span className="font-semibold text-primary">
                  Lumos Photo Editor
                </span>
                . Dengan menerima, Anda mengizinkan kami menyimpan preferensi
                seperti tema, tampilan, dan pengaturan lainnya untuk kenyamanan
                Anda.
              </p>
            </div>

            {/* Tombol Aksi */}
            <div className="flex-shrink-0 flex flex-wrap gap-2 md:gap-3 justify-end">
              <button
                onClick={handleDismiss}
                className="btn btn-outline btn-sm md:btn-md rounded-full"
              >
                Abaikan
              </button>
              <button
                onClick={rejectCookies}
                className="btn btn-ghost btn-sm md:btn-md rounded-full"
              >
                Tolak
              </button>
              <button
                onClick={acceptCookies}
                className="btn btn-primary btn-sm md:btn-md rounded-full"
              >
                Terima
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
