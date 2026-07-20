"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { listing } from "@/data/listing";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function PhotoTour({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black">
      {/* Header */}
      <div className="sticky top-0 flex items-center justify-between bg-black p-6">
        <button
          onClick={onClose}
          className="rounded-full p-2 text-white hover:bg-white/10"
        >
          <X />
        </button>

        <h2 className="text-lg font-semibold text-white">
          Photo Tour
        </h2>

        <div className="w-10" />
      </div>

      {/* Images */}
      <div className="mx-auto max-w-5xl space-y-6 px-6 pb-10">
        {listing.images.map((image, index) => (
          <div
            key={index}
            className="relative h-[650px] overflow-hidden rounded-xl"
          >
            <Image
              src={image}
              alt={`Photo ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}