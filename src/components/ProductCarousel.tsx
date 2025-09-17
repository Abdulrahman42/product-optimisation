"use client";
import { useState } from "react";
import Image from "next/image";

export default function Carousel({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(0);
  if (!images || images.length === 0) return null;
  return (
    <div className="relative">
      <div className="relative h-96 w-full">
        <Image
          src={images[activeImage]}
          alt={`image-${activeImage}`}
          fill
          style={{ objectFit: "contain" }}
          sizes="100vw"
          priority={activeImage === 0}
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={() => setActiveImage((p) => (p - 1 + images.length) % images.length)}
            className="absolute text-black left-2 top-1/2 -translate-y-1/2 hover:cursor-pointer bg-white/70 p-2 rounded">
            ◀
          </button>
          <button
            onClick={() => setActiveImage((p) => (p + 1) % images.length)}
            className="absolute text-black right-2 top-1/2 -translate-y-1/2 hover:cursor-pointer bg-white/70 p-2 rounded">
            ▶
          </button>
        </>
      )}
    </div>
  );
}
