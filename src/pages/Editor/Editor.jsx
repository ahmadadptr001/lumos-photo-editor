import {
  Image,
  Crop,
  RotateCcw,
  RotateCw,
  Filter,
  Save,
  Trash,
} from 'lucide-react';
import { dropZoneService } from '../../services/dropZonePhotoService';

export default function PhotoEditor() {
  const { filePhoto, setFilePhoto, getRootProps, getInputProps, isDragActive } =
    dropZoneService();

  const handleDeletePhoto = () => {
    if (confirm('Apakah Anda yakin ingin menghapus gambar ini?')) {
      setFilePhoto(null);
    }
  };
  return (
    <div className="flex min-h-screen bg-base-100">
      {/* Main Content */}
      <div className="flex-1 sm:p-10 p-3" {...getRootProps()}>
        <h1 className="text-3xl font-bold mb-6">Photo Editor Dashboard</h1>
        <div className="border-2 border-dashed border-base-300 rounded-lg h-[500px] flex items-center justify-center bg-base-200">
          <input {...getInputProps()} />
          {filePhoto ? (
            <img
              src={URL.createObjectURL(filePhoto)}
              alt="Preview"
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <div className="cursor-pointer text-center">
              {isDragActive ? (
                <div className="flex flex-col items-center justify-center text-base-content/70">
                  <Image size={40} className="mb-2 animate-bounce" />
                  Lepaskan gambar untuk mengunggah
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-base-content/70">
                  <Image size={40} className="mb-2" />
                  Klik atau drop image untuk mengunggah
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar kanan */}
      <div className="w-20 bg-base-200 flex flex-col items-center py-10 gap-6 border-l border-base-300 relative">
        {/* Icon Buttons with DaisyUI tooltip */}
        <div className="tooltip tooltip-left" data-tip="Crop">
          <button className="btn btn-ghost btn-circle hover:bg-base-300 transition">
            <Crop size={24} />
          </button>
        </div>

        <div className="tooltip tooltip-left" data-tip="Rotate Left">
          <button className="btn btn-ghost btn-circle hover:bg-base-300 transition">
            <RotateCcw size={24} />
          </button>
        </div>

        <div className="tooltip tooltip-left" data-tip="Rotate Right">
          <button className="btn btn-ghost btn-circle hover:bg-base-300 transition">
            <RotateCw size={24} />
          </button>
        </div>

        <div className="tooltip tooltip-left" data-tip="Filters">
          <button className="btn btn-ghost btn-circle hover:bg-base-300 transition">
            <Filter size={24} />
          </button>
        </div>

        <div className="tooltip tooltip-left" data-tip="Save Image">
          <button className="btn btn-ghost btn-circle hover:bg-base-300 transition">
            <Save size={24} />
          </button>
        </div>

        <div className="tooltip tooltip-left" data-tip="Delete Image">
          <button
            onClick={() => handleDeletePhoto()}
            className="btn btn-ghost btn-circle hover:bg-base-300 transition"
          >
            <Trash size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
