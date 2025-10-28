"use client";
import Link from "next/link";
import ProductCard from "../ui/productCard";

const NewArrivals = () => {
  const products = [
    {
      name: "T-shirt with Tape Details",
      price: 120,
      rating: 4.5,
      reviews: 5,
      image: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761554278/image_7_dzfbrn.png",
    },
    {
      name: "Skinny Fit Jeans",
      price: 240,
      originalPrice: 260,
      rating: 3.4,
      reviews: 5,
      discount: "-20%",
      image: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761554278/image_8_dyj3zc.png",
    },
    {
      name: "Checkered Shirt",
      price: 180,
      rating: 2.5,
      reviews: 5,
      image: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761554278/image_9_pyj5db.png",
    },
    {
      name: "Sleeve Striped T-shirt",
      price: 130,
      originalPrice: 160,
      rating: 4,
      reviews: 5,
      discount: "-30%",
      image: "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761554278/image_10_cnhscn.png",
    },
  ];
  return (
    <div className="max-w-[1240px] mx-auto flex-col flex gap-[32px] md:gap-[55px] items-center ">
      <h2 className="uppercase font-inter font-black text-[32px] md:text-[48px] text-center">
        New Arrivals
      </h2>
      <ProductCard productsData={products}/>
      <Link href="" className="px-[80px] py-[15px] border border-gray-400 rounded-full sm:w-fit">View All</Link>
    </div>
  );
};

export default NewArrivals;
