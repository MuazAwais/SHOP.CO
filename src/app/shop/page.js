import ProductCard from "../componenet/ui/productCard";


const Shop = () => {

  const products = [
    {
      name: "Gradient Graphic T-shirt",
      rating: 3.5,
      price: 145,
      reviews: 5,
      image : "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761653246/image_8_ewka9t.png"
    },
    {
      name: "Polo with Tipping Details",
      rating: 4.5,
      price: 180,
      reviews: 5,
      image : "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761653246/image_9_cuy9wy.png"
    },
    {
      name: "Black Striped T-shirt",
      rating: 5.0,
      price: 120,
      originalPrice: 150,
      reviews: 5,
      discount : "-30%",
      image : "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761653246/image_10_wgigyk.png"
    },
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
    <div className="pt-[150px] max-w-[1240px] mx-auto">
      <h2 className="font-black text-[24px] md:text-[32px] ">Casual</h2>
      <div className="mt-6">
      <ProductCard productsData={products}/>
      </div>
    </div>
  )
}

export default Shop