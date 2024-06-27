import Hero from "@/app/ui/hero";
import Ctas from "@/app/ui/ctas";
import CarCarousel from "@/app/ui/car-carousel";
import HomeContent from "@/app/ui/home-content";
import HomeReview from "@/app/ui/home-review";
import HomeContent2 from "@/app/ui/home-content2";
import HomeAbout from "@/app/ui/home-about";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Ctas></Ctas>
      <CarCarousel></CarCarousel>
      {/* <HomeContent></HomeContent> */}
      <HomeContent2></HomeContent2>
      <HomeReview></HomeReview>
      <HomeAbout></HomeAbout>
    </main>
  );
}
