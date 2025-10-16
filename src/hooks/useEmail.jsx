import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const useEmail = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = async (formData) => {
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Ganti ini dengan ID milikmu dari EmailJS
      const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY_EMAIL;

      const templateParams = {
        from_name: formData.nama,
        message: formData.pesan,
        reply_to: formData.email,
        from_email: formData.email,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus({
        type: 'success',
        message: 'Pesan berhasil dikirim! 🎉',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Gagal mengirim pesan. Coba lagi nanti.',
      });
      console.error('EmailJS Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, status };
};
