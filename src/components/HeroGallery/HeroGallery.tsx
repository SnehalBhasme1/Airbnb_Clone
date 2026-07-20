"use client";

import { useState } from "react";
import Image from "next/image";
import { Grid2X2 } from "lucide-react";

import { listing } from "@/data/listing";
import PhotoTour from "@/components/PhotoTour/PhotoTour";
import Lightbox from "@/components/Lightbox/Lightbox";

export default function HeroGallery() {
  const [photoTourOpen, setPhotoTourOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="mt-6">
      <div className="grid grid-cols-4 gap-2 overflow-hidden rounded-2xl">

        {/* Main Image */}
        <div
          className="group relative col-span-2 row-span-2 h-[520px] cursor-pointer overflow-hidden"
          onClick={() => {
            setSelectedIndex(0);
            setLightboxOpen(true);
          }}
        >
          <Image
            src={listing.images[0]}
            alt={listing.title}
            fill
            priority
            className="object-cover transition duration-300 group-hover:brightness-90"
          />
        </div>

        {/* Remaining Images */}
        {listing.images.slice(1).map((image, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedIndex(index + 1);
              setLightboxOpen(true);
            }}
            className="group relative h-[256px] cursor-pointer overflow-hidden"
          >
            <Image
              src={image}
              alt={`${listing.title} ${index + 2}`}
              fill
              className="object-cover transition duration-300 group-hover:brightness-90"
            />

            {/* Show All Photos Button */}
            {index === 3 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setPhotoTourOpen(true);
                }}
                className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-gray-800 bg-white px-4 py-2 text-sm font-medium text-[#222222] shadow-md transition hover:bg-gray-100"
              >
                <Grid2X2 size={16} />
                Show all photos
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Photo Tour */}
      <PhotoTour
        open={photoTourOpen}
        onClose={() => setPhotoTourOpen(false)}
      />

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        currentIndex={selectedIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setSelectedIndex((prev) =>
            prev === 0 ? listing.images.length - 1 : prev - 1
          )
        }
        onNext={() =>
          setSelectedIndex((prev) =>
            prev === listing.images.length - 1 ? 0 : prev + 1
          )
        }
      />
    </section>
  );
}