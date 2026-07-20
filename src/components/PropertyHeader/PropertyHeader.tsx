import { Star, Share, Heart } from "lucide-react";
import { listing } from "@/data/listing";

export default function PropertyHeader() {
  return (
    <section className="mt-6 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-2 text-[15px] text-[#222]">
        <Star
          size={14}
          fill="currentColor"
          className="text-black"
        />

        <span className="font-semibold">
          {listing.rating}
        </span>

        <span>·</span>

        <button className="underline font-medium hover:text-gray-600">
          {listing.reviews} reviews
        </button>

        {listing.superhost && (
          <>
            <span>·</span>

            <span className="font-medium">
              Superhost
            </span>
          </>
        )}

        <span>·</span>

        <button className="underline hover:text-gray-600">
          {listing.location}
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <button className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-gray-100">
          <Share size={16} />
          <span className="text-sm font-medium underline">
            Share
          </span>
        </button>

        <button className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-gray-100">
          <Heart size={16} />
          <span className="text-sm font-medium underline">
            Save
          </span>
        </button>

      </div>
    </section>
  );
}