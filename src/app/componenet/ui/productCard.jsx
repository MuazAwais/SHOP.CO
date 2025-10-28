'use client'
import Star from "../ui/star";

const ProductCard = ({productsData}) => {
    const products = productsData 
  
    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-hidden">
          {products?.map((products, index) => (
            <div key={index} className="flex flex-col gap-4" >
                <div className="w-[295px] h-[298px] overflow-hidden rounded-2xl ">
                    <img src={products?.image} alt={products?.name}  className="w-full h-full hover:scale-[105%]"/>
                  </div>
                  <div className="">
                    <h3 className="text-[20px] font-black hover:cursor-pointer hover:underline">{products?.name}</h3>
                    <div >
                      <Star stars={products?.rating} reviews={products?.reviews}/>
                      <div className="flex gap-[5px] md:gap-[10px] items-center">
                        <div className="text-5 md:text-[24px] font-inter font-bold">${products?.price}</div>
                        <div className={`text-5 md:text-[24px] font-inter font-bold text-gray-400 line-through ${products.originalPrice ? 'block': 'hidden'}`}>${products?.originalPrice}</div>
                        <div className={`text-[10px] md:text-[12px] text-[#ff3333] bg-[#ff333334] px-[13px] py-[6px] rounded-full ${products.discount ? 'block': 'hidden'}`}>{products?.discount}</div>
                      </div>
                    </div>
                  </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

export default ProductCard