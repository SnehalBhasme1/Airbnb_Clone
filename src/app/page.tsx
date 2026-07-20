import Header from "@/components/Header/Header";
import ListingHeader from "@/components/ListingHeader/ListingHeader";
import HeroGallery from "@/components/HeroGallery/HeroGallery";
import HostSection from "@/components/HostSection/HostSection";
import BookingCard from "@/components/BookingCard/BookingCard";
import FeatureHighlights from "@/components/FeatureHighlights/FeatureHighlights";
import DescriptionSection from "@/components/DescriptionSection/DescriptionSection";
import Amenities from "@/components/Amenities/Amenities";
import Reviews from "@/components/Reviews/Reviews";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-[1120px] px-10 py-8">
        <ListingHeader />

        <HeroGallery />

        <section className="mt-12 flex gap-20">
          {/* Left Content */}
<div className="flex-1">
  <HostSection />
  <FeatureHighlights />
  <DescriptionSection />
  <Amenities />
  <Reviews />
</div>

          {/* Right Sticky Card */}
          <BookingCard />
        </section>
      </main>
    </>
  );
}