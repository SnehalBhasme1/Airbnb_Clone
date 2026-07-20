import Image from "next/image";
import { listing } from "@/data/listing";

export default function HostSection() {
  return (
    <section className="border-b border-gray-200 py-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[22px] font-semibold text-[#222222]">
            Entire rental unit hosted by {listing.host.name}
          </h2>

          <p className="mt-2 text-[16px] text-[#6A6A6A]">
            {listing.details.guests} guests ·{" "}
            {listing.details.bedroom} bedroom ·{" "}
            {listing.details.bed} bed ·{" "}
            {listing.details.bath} bath
          </p>
        </div>

        <div className="relative h-14 w-14 overflow-hidden rounded-full bg-gray-200">
          <Image
            src={listing.host.image}
            alt={listing.host.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}