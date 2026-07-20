import { Heart, Share, Star } from "lucide-react";
import { listing } from "@/data/listing";

export default function ListingHeader() {
  return (
    <section className="mb-6">
      {/* Property Title */}
      <h1 className="text-[28px] font-semibold text-[#222222]">
        {listing.title}
      </h1>

      {/* Info Row */}
      <div className="mt-3 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-2 text-[15px] text-[#222222]">
          <Star size={14} fill="currentColor" />

          <span className="font-semibold">
            {listing.rating}
          </span>

          <span>·</span>

          <button className="font-medium underline underline-offset-2">
            {listing.reviews} reviews
          </button>

          <span>·</span>

          <button className="underline underline-offset-2">
            {listing.location}
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 text-[14px] font-medium hover:underline">
            <Share size={16} />
            Share
          </button>

          <button className="flex items-center gap-2 text-[14px] font-medium hover:underline">
            <Heart size={16} />
            Save
          </button>
        </div>
      </div>
    </section>
  );
}