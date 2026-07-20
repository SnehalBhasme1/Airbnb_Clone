"use client";

import { ChevronDown, Star } from "lucide-react";
import { listing } from "@/data/listing";

export default function BookingCard() {
  return (
    <aside className="sticky top-28 h-fit w-[372px] rounded-2xl border border-gray-300 bg-white p-6 shadow-xl">
      {/* Price */}
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[28px] font-semibold">
            ₹{listing.price.toLocaleString()}
          </span>
          <span className="ml-1 text-gray-600">night</span>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <Star size={14} fill="currentColor" />
          <span>{listing.rating}</span>
          <span className="text-gray-500">
            ({listing.reviews} reviews)
          </span>
        </div>
      </div>

      {/* Date Picker */}
      <div className="mt-6 overflow-hidden rounded-xl border border-gray-400">
        <div className="grid grid-cols-2">
          <div className="border-r border-b p-3">
            <p className="text-[10px] font-bold uppercase">Check-in</p>
            <p className="mt-1 text-sm">22 Jul 2026</p>
          </div>

          <div className="border-b p-3">
            <p className="text-[10px] font-bold uppercase">Check-out</p>
            <p className="mt-1 text-sm">25 Jul 2026</p>
          </div>
        </div>

        <div className="flex items-center justify-between p-3">
          <div>
            <p className="text-[10px] font-bold uppercase">Guests</p>
            <p className="mt-1 text-sm">
              {listing.details.guests} guests
            </p>
          </div>

          <ChevronDown size={18} />
        </div>
      </div>

      {/* Reserve Button */}
      <button className="mt-4 w-full rounded-lg bg-[#FF385C] py-3 text-white font-semibold transition hover:bg-[#E31C5F]">
        Reserve
      </button>

      <p className="mt-4 text-center text-sm text-gray-500">
        You will not be charged yet
      </p>

      {/* Price Details */}
      <div className="mt-6 space-y-4 text-[15px]">
        <div className="flex justify-between">
          <span className="underline">
            ₹25,000 × 3 nights
          </span>

          <span>₹75,000</span>
        </div>

        <div className="flex justify-between">
          <span className="underline">
            Cleaning fee
          </span>

          <span>₹2,500</span>
        </div>

        <div className="flex justify-between">
          <span className="underline">
            Service fee
          </span>

          <span>₹3,200</span>
        </div>

        <hr />

        <div className="flex justify-between font-semibold">
          <span>Total</span>

          <span>₹80,700</span>
        </div>
      </div>
    </aside>
  );
}