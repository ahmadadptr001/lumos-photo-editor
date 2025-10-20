import React, { useRef, useState, useEffect } from 'react';
import {
  Stage,
  Layer,
  Image as KonvaImage,
  Rect,
  Transformer,
} from 'react-konva';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function CropTool({ src, onCancel, onCropDone }) {
  const stageRef = useRef(null);
  const imageRef = useRef(null);
  const rectRef = useRef(null);
  const trRef = useRef(null);

  const [image, setImage] = useState(null);
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });
  const [displaySize, setDisplaySize] = useState({ width: 600, height: 450 });
  const [cropRect, setCropRect] = useState({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
  });

  // Load gambar
  useEffect(() => {
    if (!src) return;
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setImage(img);
      setNaturalSize({ width: img.width, height: img.height });

      // Atur ukuran display agar gambar proporsional
      const maxWidth = 600;
      const maxHeight = 450;
      const scale = Math.min(maxWidth / img.width, maxHeight / img.height);
      setDisplaySize({
        width: img.width * scale,
        height: img.height * scale,
      });
    };
  }, [src]);

  // Pasang transformer untuk resize crop area
  useEffect(() => {
    if (trRef.current && rectRef.current) {
      trRef.current.nodes([rectRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [image]);

  // Proses crop dengan ukuran asli gambar
  const handleCrop = () => {
    if (!stageRef.current || !image) return;

    const scaleX = naturalSize.width / displaySize.width;
    const scaleY = naturalSize.height / displaySize.height;

    const { x, y, width, height } = cropRect;

    // Hitung posisi crop berdasarkan ukuran asli
    const cropX = x * scaleX;
    const cropY = y * scaleY;
    const cropWidth = width * scaleX;
    const cropHeight = height * scaleY;

    // Buat kanvas sementara
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = cropWidth;
    canvas.height = cropHeight;

    ctx.drawImage(
      image,
      cropX,
      cropY,
      cropWidth,
      cropHeight,
      0,
      0,
      cropWidth,
      cropHeight
    );

    // Hasil crop dalam resolusi asli
    const croppedData = canvas.toDataURL('image/png');
    onCropDone(croppedData);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[70] flex items-center justify-center p-4">
      <div className="bg-base-200 border border-base-300 rounded-3xl shadow-2xl overflow-hidden relative">
        <Stage
          width={displaySize.width}
          height={displaySize.height}
          ref={stageRef}
        >
          <Layer>
            {image && (
              <KonvaImage
                image={image}
                ref={imageRef}
                width={displaySize.width}
                height={displaySize.height}
                listening={false}
              />
            )}

            {/* Area crop */}
            <Rect
              ref={rectRef}
              {...cropRect}
              stroke="orange"
              strokeWidth={2}
              dash={[10, 5]}
              draggable
              onDragEnd={(e) =>
                setCropRect({
                  ...cropRect,
                  x: e.target.x(),
                  y: e.target.y(),
                })
              }
              onTransformEnd={(e) => {
                const node = e.target;
                const scaleX = node.scaleX();
                const scaleY = node.scaleY();

                node.scaleX(1);
                node.scaleY(1);

                setCropRect({
                  x: node.x(),
                  y: node.y(),
                  width: Math.max(50, node.width() * scaleX),
                  height: Math.max(50, node.height() * scaleY),
                });
              }}
            />

            {/* Transformer untuk resize */}
            <Transformer
              ref={trRef}
              rotateEnabled={false}
              anchorSize={10}
              borderDash={[6, 4]}
              boundBoxFunc={(oldBox, newBox) => {
                if (newBox.width < 50 || newBox.height < 50) return oldBox;
                return newBox;
              }}
            />
          </Layer>
        </Stage>

        {/* Tombol aksi */}
        <div className="absolute bottom-3 right-3 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={onCancel}
            className="btn btn-sm btn-circle btn-ghost hover:bg-error/10 hover:text-error"
          >
            <X size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={handleCrop}
            className="btn btn-sm btn-circle btn-success text-white"
          >
            <Check size={18} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
