import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleMenu = () => setIsOpen(!isOpen);
 

  const navItems = [
    { name: 'Beranda', to: '/' },
    { name: 'Fitur', to: '/fitur' },
    { name: 'Panduan', to: '/panduan' },
    { name: 'Tentang', to: '/tentang' },
    { name: 'Kontak', to: '/kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-base-100/70 backdrop-blur-md border-b border-base-300/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* === LOGO === */}
        <Link
          to="/"
          className="flex items-center gap-2 group transition-all duration-300"
        >
          <Sparkles className="text-primary group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-extrabold tracking-tight group-hover:text-primary">
            Lumos<span className="text-secondary">Edit</span>
          </span>
        </Link>

        {/* === NAVIGATION (Desktop) === */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `relative font-medium transition-all duration-200 hover:text-primary 
                ${isActive ? 'text-primary' : 'text-base-content/80'}`
              }
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* === ACTION BUTTONS === */}
        <div className="flex items-center gap-3">
          {/* Theme Switch */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="luxury"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* CTA Button */}
          <Link
            to="/editor"
            className="hidden md:inline-flex btn btn-primary rounded-full px-5 transition-all hover:scale-105"
          >
            Mulai Edit
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden btn btn-ghost btn-sm btn-circle transition-all hover:scale-110"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* === MOBILE MENU === */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="menu bg-base-100/95 backdrop-blur-lg border-t border-base-300 py-4 px-6 space-y-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-medium transition-all hover:text-primary ${
                    isActive ? 'text-primary' : 'text-base-content/80'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/editor"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary w-full rounded-full"
            >
              Mulai Edit
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
