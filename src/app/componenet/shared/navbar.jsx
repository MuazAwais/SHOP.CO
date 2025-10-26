import Link from 'next/link'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='max-w-[1240px] mx-auto flex'>
        <div className='flex gap-[16px]'>
        <div className='md:hidden'>
        <IoMenu size={32}/>
        </div>
        <div className='font-inter font-black text-[22px] sm:text-[32px]'>
            <Link href="/">
            SHOP.CO
            </Link>
        </div>
        </div>
    </nav>
  )
}

export default Navbar