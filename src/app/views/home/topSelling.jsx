import Link from "next/link";
import ProductCard from "../../componenet/ui/productCard";
import { menClothingData } from "@/app/componenet/data/data";

const TopSelling = () => {
  const products = menClothingData.slice(4, 8)
  return (
    <div className="max-w-[1240px] mx-auto flex-col flex gap-[32px] md:gap-[55px] items-center ">
      <h2 className="uppercase font-inter font-black text-[32px] md:text-[48px] text-center">
        Top Selling
      </h2>
        <ProductCard productsData={products}/>
      <Link href="/shop" className="px-[80px] py-[15px] border border-gray-400 rounded-full sm:w-fit hover:bg-black hover:text-white">View All</Link>
    </div>
  )
}

export default TopSelling