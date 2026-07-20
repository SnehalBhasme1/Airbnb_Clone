import {
  Wifi,
  Car,
  Tv,
  Snowflake,
  CookingPot,
  Bath,
} from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Car, label: "Free parking" },
  { icon: Tv, label: "TV" },
  { icon: Snowflake, label: "Air conditioning" },
  { icon: CookingPot, label: "Kitchen" },
  { icon: Bath, label: "Hot tub" },
];

export default function Amenities() {
  return (
    <section className="border-b border-gray-200 py-8">
      <h2 className="mb-8 text-[22px] font-semibold">
        What this place offers
      </h2>

      <div className="grid grid-cols-2 gap-x-16 gap-y-6">
        {amenities.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-4"
          >
            <Icon size={24} />

            <span className="text-[16px]">
              {label}
            </span>
          </div>
        ))}
      </div>

      <button className="mt-8 rounded-lg border border-black px-6 py-3 font-semibold transition hover:bg-gray-100">
        Show all amenities
      </button>
    </section>
  );
}