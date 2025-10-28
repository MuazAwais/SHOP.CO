import HeroSection from "./heroSection";
import Brands from "./brands";
import NewArrivals from "./newArrivals";
import TopSelling from "./topSelling";
import Reviews from "./reviews";

const Home = () => {
  return (
    <div>
      <div className="bg-[#f0f0f0]">
        <HeroSection />
      </div>
      <div className="bg-black ">
        <Brands />
      </div>
      <div className="mt-[50px] md:mt-[72px]">
        <NewArrivals />
      </div>
      <hr className="max-w-[1240px] mx-auto px-4 md:px-[100px] my-[40px] md:my-[64px] text-gray-400" />
      <div>
        <TopSelling />
      </div>
      <div className="mt-[50px] md:mt-[72px]">
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
