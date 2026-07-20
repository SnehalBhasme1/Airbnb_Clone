import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya",
    date: "March 2026",
    comment:
      "Beautiful place with amazing interiors. The jacuzzi was the highlight of our stay!",
  },
  {
    name: "Rahul",
    date: "February 2026",
    comment:
      "Very clean, peaceful, and exactly as shown in the photos. Highly recommended.",
  },
];

export default function Reviews() {
  return (
    <section className="py-10 border-b border-gray-200">
      <div className="flex items-center gap-2 mb-8">
        <Star size={20} fill="currentColor" />
        <h2 className="text-[22px] font-semibold">4.98 · 127 reviews</h2>
      </div>

      <div className="grid grid-cols-2 gap-10">
        {reviews.map((review) => (
          <div key={review.name}>
            <h3 className="font-semibold">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.date}</p>

            <p className="mt-3 leading-7 text-gray-700">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-8 rounded-lg border border-black px-6 py-3 font-semibold hover:bg-gray-100 transition">
        Show all reviews
      </button>
    </section>
  );
}