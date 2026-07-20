import { Medal, KeyRound, CalendarClock } from "lucide-react";

export default function FeatureHighlights() {
  return (
    <section className="border-b border-gray-200 py-8 space-y-8">
      <div className="flex gap-5">
        <Medal className="mt-1" size={24} />
        <div>
          <h3 className="font-semibold text-[16px]">
            Dedicated workspace
          </h3>
          <p className="mt-1 text-[14px] text-gray-500">
            A common area with Wi-Fi that's well suited for working.
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <KeyRound className="mt-1" size={24} />
        <div>
          <h3 className="font-semibold text-[16px]">
            Self check-in
          </h3>
          <p className="mt-1 text-[14px] text-gray-500">
            Check yourself in with the keypad.
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <CalendarClock className="mt-1" size={24} />
        <div>
          <h3 className="font-semibold text-[16px]">
            Free cancellation for 48 hours
          </h3>
          <p className="mt-1 text-[14px] text-gray-500">
            Cancel within 48 hours of booking for a full refund.
          </p>
        </div>
      </div>
    </section>
  );
}