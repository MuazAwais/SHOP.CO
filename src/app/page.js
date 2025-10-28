import Brands from "./componenet/home/brands";
import HeroSection from "./componenet/home/heroSection";
import NewArrivals from "./componenet/home/newArrivals";
import Reviews from "./componenet/home/reviews";
import TopSelling from "./componenet/home/topSelling";

export default function Home() {
  return (
    <div className="pt-[120px] contianer">
      <div className="bg-[#f0f0f0]">
        <HeroSection />
      </div>
      <div className="bg-black ">
        <Brands />
      </div>
      <div className="mt-[50px] md:mt-[72px]">
        <NewArrivals />
      </div>
      <hr className="max-w-[1240px] mx-auto px-4 md:px-[100px] my-[40px] md:my-[64px] text-gray-400"/>
      <div >
        <TopSelling/>
      </div>
      <div className="mt-[50px] md:mt-[72px]">
        <Reviews />
      </div>
    </div>
  );
}
