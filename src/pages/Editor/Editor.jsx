import {
  Image,
  Crop,
  RotateCcw,
  RotateCw,
  Filter,
  Save,
  Trash,
  MoreHorizontal,
  X,
  Edit3,
  Wand2,
  Settings,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { dropZoneService } from '../../services/dropZonePhotoService';

export default function PhotoEditor() {
  const { filePhoto, setFilePhoto, getRootProps, getInputProps, isDragActive } =
    dropZoneService();

  const [showExtraMenu, setShowExtraMenu] = useState(false);

  const handleDeletePhoto = () => {
    if (confirm('Apakah Anda yakin ingin menghapus gambar ini?')) {
      setFilePhoto(null);
    }
  };

  const tools = [
    { icon: Crop, tip: 'Crop' },
    { icon: RotateCcw, tip: 'Rotate Left' },
    { icon: RotateCw, tip: 'Rotate Right' },
    { icon: Filter, tip: 'Filters' },
    { icon: Save, tip: 'Save Image' },
    { icon: Trash, tip: 'Delete', onClick: handleDeletePhoto },
  ];

  const extraTools = [
    { icon: Edit3, label: 'Sesuaikan Warna' },
    { icon: Wand2, label: 'Auto Enhance' },
    { icon: Settings, label: 'Pengaturan Lanjutan' },
  ];

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-base-100">
      {/* === BAGIAN UTAMA === */}
      <div className="flex-1 p-4 sm:p-10 flex flex-col">
        <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">
          Lumos Photo Editor
        </h1>

        <div
          {...getRootProps()}
          className={`flex-1 border-2 border-dashed rounded-2xl flex items-center justify-center transition-all duration-300 min-h-[50vh] sm:min-h-[70vh] ${
            isDragActive
              ? 'border-warning bg-warning/10 shadow-lg shadow-warning/20'
              : 'border-base-300 bg-base-200 hover:border-warning/40'
          }`}
        >
          <input {...getInputProps()} />
          {filePhoto ? (
            <img
              src={URL.createObjectURL(filePhoto)}
              alt="Preview"
              className="max-h-full max-w-full object-contain rounded-lg shadow-md"
            />
          ) : (
            <div className="text-center text-base-content/70 select-none pointer-events-none">
              <Image
                size={42}
                className={`mx-auto mb-2 ${
                  isDragActive ? 'animate-bounce text-warning' : ''
                }`}
              />
              {isDragActive ? (
                <p className="text-warning font-medium">
                  Lepaskan gambar untuk mengunggah
                </p>
              ) : (
                <p className="font-medium">
                  Klik atau drop gambar untuk mengunggah
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* === SIDEBAR UNTUK DESKTOP === */}
      <div className="hidden sm:flex w-20 bg-base-200 flex-col items-center py-10 gap-6 border-l border-base-300 relative">
        {tools.map(({ icon: Icon, tip, onClick }, i) => (
          <div key={i} className="tooltip tooltip-left" data-tip={tip}>
            <motion.button
              type="button"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                if (onClick) onClick();
              }}
              className={`btn btn-ghost btn-circle hover:bg-warning/20 hover:text-warning transition ${
                tip === 'Delete' ? 'hover:text-error' : ''
              }`}
            >
              <Icon size={24} />
            </motion.button>
          </div>
        ))}

        {/* Tombol titik tiga di desktop */}
        <div className="relative">
          <motion.button
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowExtraMenu(!showExtraMenu);
            }}
            className="btn btn-ghost btn-circle hover:bg-warning/20 hover:text-warning transition"
          >
            <MoreHorizontal size={24} />
          </motion.button>

          <AnimatePresence>
            {showExtraMenu && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-14 right-0 bg-base-200/90 backdrop-blur-xl border border-base-300 shadow-2xl rounded-2xl py-3 w-48"
              >
                {extraTools.map(({ icon: Icon, label }, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setShowExtraMenu(false)}
                    className="flex items-center gap-3 px-4 py-2 w-full hover:bg-warning/10 text-left transition text-sm"
                  >
                    <Icon size={18} />
                    {label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* === DOCK MENU MOBILE === */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sm:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md"
      >
        <div className="bg-base-200/80 backdrop-blur-2xl border border-base-300 rounded-3xl shadow-2xl flex justify-around items-center py-3 px-2">
          {tools.map(({ icon: Icon, tip, onClick }, i) => (
            <motion.button
              key={i}
              type="button"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                if (onClick) onClick();
              }}
              className={`relative group flex flex-col items-center text-base-content/70 hover:text-warning transition ${
                tip === 'Delete' ? 'hover:text-error' : ''
              }`}
            >
              <Icon size={22} className="transition-all" />
              <span className="absolute -top-8 text-xs bg-base-100/90 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 border border-base-300 shadow-sm">
                {tip}
              </span>
            </motion.button>
          ))}

          {/* Titik tiga mobile */}
          <motion.button
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={() => setShowExtraMenu(true)}
            className="btn btn-ghost btn-circle hover:bg-warning/20 hover:text-warning transition"
          >
            <MoreHorizontal size={22} />
          </motion.button>
        </div>
      </motion.div>

      {/* === MODAL UNTUK MOBILE === */}
      <AnimatePresence>
        {showExtraMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] flex items-end sm:hidden"
            onClick={() => setShowExtraMenu(false)}
          >
            <motion.div
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              exit={{ y: 80 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-base-200/90 border border-base-300 rounded-t-3xl p-5 w-full shadow-2xl"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg">Edit Foto</h3>
                <button
                  onClick={() => setShowExtraMenu(false)}
                  className="btn btn-sm btn-circle btn-ghost hover:bg-error/10 hover:text-error"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {extraTools.map(({ icon: Icon, label }, i) => (
                  <button
                    key={i}
                    onClick={() => setShowExtraMenu(false)}
                    className="flex flex-col items-center justify-center p-3 rounded-2xl bg-base-100/70 hover:bg-warning/10 transition border border-base-300"
                  >
                    <Icon size={22} className="text-warning" />
                    <span className="text-xs mt-1 font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
