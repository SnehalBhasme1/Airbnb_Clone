"use client";

import { useState } from "react";
import { listing } from "@/data/listing";

export default function DescriptionSection() {
  const [expanded, setExpanded] = useState(false);

  const shortText =
    listing.description.length > 180
      ? listing.description.slice(0, 180) + "..."
      : listing.description;

  return (
    <section className="border-b border-gray-200 py-8">
      <p className="text-[16px] leading-7 text-[#222222]">
        {expanded ? listing.description : shortText}
      </p>

      {listing.description.length > 180 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 font-semibold underline underline-offset-2"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </section>
  );
}