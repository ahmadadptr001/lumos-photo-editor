import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const dropZoneService = () => {
  const [filePhoto, setFilePhoto] = useState(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    onDrop: (file) => setFilePhoto(file[0]),
    accept: { 'image/*': [] },
    maxFiles: 1, // max 1 file
    maxSize: 5 * 1024 * 1024, // max 5mb
  });

  return { filePhoto, setFilePhoto, getRootProps, getInputProps, isDragActive };
};
