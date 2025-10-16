import { Github, Mail, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Deskripsi */}
        <div>
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-primary hover:text-secondary transition-colors"
          >
            Lumos 
          </Link>
          <p className="mt-3 text-sm opacity-80 leading-relaxed">
            Editor foto berbasis web buatan <br />
            <span className="font-semibold text-base-content">
              Ahmad Bagas Adiputra
            </span>
            .  
            <br />Edit, ubah, dan ekspresikan kreativitasmu langsung di browser.
          </p>
        </div>

        {/* Navigasi Halaman */}
        <div>
          <h6 className="footer-title mb-3 text-base font-semibold">Halaman</h6>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="link link-hover hover:text-primary transition-colors">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/fitur" className="link link-hover hover:text-primary transition-colors">
                Fitur
              </Link>
            </li>
            <li>
              <Link to="/panduan" className="link link-hover hover:text-primary transition-colors">
                Panduan
              </Link>
            </li>
            <li>
              <Link to="/tentang" className="link link-hover hover:text-primary transition-colors">
                Tentang
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h6 className="footer-title mb-3 text-base font-semibold">Kontak</h6>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:ahmad@example.com"
                className="link link-hover flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={16} /> Email
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ahmadadptr001"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h6 className="footer-title mb-3 text-base font-semibold">Ikuti Kami</h6>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/"
              className="btn btn-ghost btn-sm btn-circle hover:scale-110 transition-transform"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://instagram.com/"
              className="btn btn-ghost btn-sm btn-circle hover:scale-110 transition-transform"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://github.com/ahmadadptr001"
              className="btn btn-ghost btn-sm btn-circle hover:scale-110 transition-transform"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Garis bawah */}
      <div className="border-t border-base-300 py-4 mt-4">
        <p className="text-center text-sm opacity-70">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-primary">Lumos</span> — Semua hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
