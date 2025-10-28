import Link from "next/link";
import ProductCard from "../ui/productCard";

const TopSelling = () => {
    const products = [
        {
          name: "Vertical Striped Shirt",
          price: 212,
          originalPrice: 232,
          rating: 5.0,
          reviews: 5,
          discount: "20%",
          image: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761565014/image_7_pbipl6.png"
        },
        {
          name: "Courage Graphic T-shirt",
          price: 145,
          rating: 4.0,
          reviews: 5,
          image: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761565014/image_8_ivdbi7.png"
        },
        {
          name: "Loose Fit Bermuda Shorts",
          price: 80,
          rating: 3.0,
          reviews: 5,
          image: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761565014/image_9_dvp373.png"
        },
        {
          name: "Faded Skinny Jeans",
          price: 210,
          rating: 4.5,
          reviews: 5,
          image: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761565013/image_10_xsl8an.png"
        }
      ];
  return (
    <div className="max-w-[1240px] mx-auto flex-col flex gap-[32px] md:gap-[55px] items-center ">
      <h2 className="uppercase font-inter font-black text-[32px] md:text-[48px] text-center">
        Top Selling
      </h2>
        <ProductCard productsData={products}/>
      <Link href="" className="px-[80px] py-[15px] border border-gray-400 rounded-full sm:w-fit">View All</Link>
    </div>
  )
}

export default TopSelling