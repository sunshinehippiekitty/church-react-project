"use client";

import { useState } from "react";
import Image from "next/image";

const mediaItems = [
  { src: "/stTheresaStatue.png", alt: "St Theresa Statue", type: "image" },
  { 
    // This is the direct link that users will navigate to when clicked
    src: "https://www.instagram.com/reel/DZztsqIhD_U/?utm_source=ig_embed&amp;utm_campaign=loading", 
    alt: "Church of St Teresa Singapore Reel", 
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
        {/* Arrow, media window, arrow */}
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous item"
            className="shrink-0 bg-gray-50 hover:bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center shadow text-2xl"
          >
            ‹
          </button>

          <div className="relative flex-1 aspect-video rounded-lg overflow-hidden shadow-md bg-white">
            {/* Conditional Rendering for Instagram vs standard Images */}
            {currentMedia.type === "instagram" ? (
              /* 1. Wrapped the entire frame inside an anchor tag to direct users to Instagram */
              <a 
                href={currentMedia.src} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full relative cursor-pointer group"
              >
                {/* Visual Placeholder: Since iframes block clicks, we display a beautiful card that links out */}
                <div className="absolute inset-0 bg-gray-900 flex flex-col items-center justify-center text-white p-4 text-center z-10 group-hover:bg-gray-800 transition-colors">
                  <span className="text-4xl mb-2">🎬</span>
                  <p className="font-semibold text-lg">{currentMedia.alt}</p>
                  <span className="text-sm text-blue-400 mt-2 underline group-hover:text-blue-300">
                    Watch Video on Instagram →
                  </span>
                </div>
              </a>
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

        {/* Dots */}
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

        {/* Lightbox / Expanded View (Skips Instagram items) */}
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
