"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/stTheresaStatue.png", alt: "St Theresa Statue" },
  { src: "/stTheresaChurch.png", alt: "St Theresa Church" },
  { src: "/stTheresaPic.png", alt: "St Theresa Picture" },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="px-5">
      <div className="py-2">
        <h1 className="text-3xl text-center rounded-lg mt-4">Current Events</h1>
      </div>

      <div className="w-full max-w-3xl mx-auto px-5 py-5">
        {/* Arrow, image, arrow */}
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous image"
            className="shrink-0 bg-gray-50 hover:bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center shadow text-2xl"
          >
            ‹
          </button>

          <div className="relative flex-1 aspect-video rounded-lg overflow-hidden shadow-md bg-white">
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              className="object-cover cursor-pointer"
              onClick={() => setExpanded(true)}
            />
          </div>

          <button
            onClick={next}
            aria-label="Next image"
            className="shrink-0 bg-gray-50 hover:bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center shadow text-2xl"
          >
            ›
          </button>
        </div>

        {/* Dots, below the row */}
        <div className="flex justify-center gap-3 mt-5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-black" : "bg-black/40"
              }`}
            />
          ))}
        </div>

        {expanded && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setExpanded(false)}
          >
            <div className="relative w-full max-w-4xl aspect-video">
              <Image
                src={images[current].src}
                alt={images[current].alt}
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setExpanded(false)}
              aria-label="Close"
              className="absolute top-5 right-5 text-white text-3xl leading-none"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
}