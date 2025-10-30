import { menClothingData } from "@/app/componenet/data/data";
import ProductCard from "@/app/componenet/ui/productCard";


const ShopView = () => {
    const products = menClothingData
  return (
    <div>
      <h2 className="font-black font-inter text-[24px] md:text-[32px] ">Casual</h2>
      <div className="mt-6 flex justify-center">
        <ProductCard productsData={products} />
      </div>
    </div>
  );
};

export default ShopView;
