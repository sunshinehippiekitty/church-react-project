"use client";

import { useState } from "react";
import Image from "next/image";

const mediaItems = [
  { src: "/stTheresaStatue.png", alt: "St Theresa Statue", type: "image" },
  { 
    src: "https://www.instagram.com/reel/DZztsqIhD_U/?utm_source=ig_embed&amp;utm_campaign=loading", 
    alt: "Church Instagram Video", 
    type: "instagram" 
  },
  { src: "/stTheresaPic.png", alt: "St Theresa Picture", type: "image" },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const prev = () => setCurrent((i) => (i === 0 ? mediaItems.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === mediaItems.length - 1 ? 0 : i + 1));

  const currentMedia = mediaItems[current];

  return (
    <div className="px-5">
      <div className="py-2">
        <h1 className="text-3xl text-center rounded-lg mt-4">Current Events</h1>
      </div>

      <div className="w-full max-w-3xl mx-auto px-5 py-5">

        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous item"
            className="shrink-0 bg-gray-50 hover:bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center shadow text-2xl"
          >
            ‹
          </button>

          <div className="relative flex-1 aspect-video rounded-lg overflow-hidden shadow-md bg-white">

            {currentMedia.type === "instagram" ? (
              <iframe
                src={currentMedia.src}
                title={currentMedia.alt}
                className="w-full h-full border-none"
                allowFullScreen
                scrolling="no"
              />
            ) : (
              <Image
                src={currentMedia.src}
                alt={currentMedia.alt}
                fill
                className="object-cover cursor-pointer"
                onClick={() => setExpanded(true)}
              />
            )}
          </div>

          <button
            onClick={next}
            aria-label="Next item"
            className="shrink-0 bg-gray-50 hover:bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center shadow text-2xl"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-5">
          {mediaItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to item ${i + 1}`}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-black" : "bg-black/40"
              }`}
            />
          ))}
        </div>

        {expanded && currentMedia.type === "image" && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setExpanded(false)}
          >
            <div className="relative w-full max-w-4xl aspect-video">
              <Image
                src={currentMedia.src}
                alt={currentMedia.alt}
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
