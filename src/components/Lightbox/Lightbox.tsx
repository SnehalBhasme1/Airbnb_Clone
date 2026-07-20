"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { listing } from "@/data/listing";

type Props = {
  open: boolean;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({
  open,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: Props) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 rounded-full p-2 text-white hover:bg-white/10"
      >
        <X />
      </button>

      {/* Previous */}
      <button
        onClick={onPrev}
        className="absolute left-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Image */}
      <div className="relative h-[80vh] w-[80vw]">
        <Image
          src={listing.images[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          fill
          className="object-contain"
        />
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}