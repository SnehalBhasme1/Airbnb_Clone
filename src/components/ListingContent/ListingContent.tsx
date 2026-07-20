import { listing } from "@/data/listing";

export default function ListingContent() {
  return (
    <section className="flex-1 pr-20">
      <h2 className="text-[22px] font-semibold text-[#222222]">
        Entire rental unit hosted by {listing.host.name}
      </h2>

      <p className="mt-2 text-[16px] text-[#222222]">
        {listing.details.guests} guests ·{" "}
        {listing.details.bedroom} bedroom ·{" "}
        {listing.details.bed} bed ·{" "}
        {listing.details.bath} bath
      </p>

      <hr className="my-8 border-gray-200" />

      <p className="leading-7 text-gray-700">
        Escape to this beautiful villa surrounded by nature.
        Relax with family and friends while enjoying spacious interiors,
        a private pool, and peaceful outdoor spaces.
      </p>

      <hr className="my-8 border-gray-200" />
    </section>
  );
}