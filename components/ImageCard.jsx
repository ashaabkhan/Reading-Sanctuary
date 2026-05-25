"use client";
import { Download } from "lucide-react";
import { useState } from "react";

export default function ImageCard({ image }) {
  const [hovered, setHovered] = useState(false);

  const handleDownload = async () => {
    const response = await fetch(image.src);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${image.title.toLowerCase().replace(/\s+/g, "-")}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className='group relative rounded-2xl overflow-hidden bg-muted cursor-pointer'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleDownload}>
      <img
        src={image.src}
        alt={image.title}
        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between transition-all duration-300 ${hovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
        <div>
          <p className='text-white font-medium text-sm tracking-wide'>
            {image.title}
          </p>
          <p className='text-white/60 text-xs mt-0.5'>{image.category}</p>
        </div>
        <div className='h-9 w-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors'>
          <Download className='h-4 w-4 text-white' />
        </div>
      </div>
    </div>
  );
}
