
import ReviewCard from "../../componenet/shared/reviewCard";
import Star from "../../componenet/ui/star";

const Reviews = () => {
    
      
  return (
    <div className="max-w-[1240px] mx-auto">
        <h2 className='font-inter text-[32px] md:text-[48px]  font-black uppercase '>Our Happy customers</h2>
        <div className="">   
            <ReviewCard />
        </div>
    </div>
  )
}

export default Reviews