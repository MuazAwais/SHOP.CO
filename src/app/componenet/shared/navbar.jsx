import Link from 'next/link'
import { LuShoppingCart } from "react-icons/lu";
import SideBar from './sideBar';

const Navbar = () => {
  return (
    <nav className='max-w-[1240px] px-3 mx-auto flex gap-[40px] items-center py-[24px] justify-between'>
        <div className='flex gap-[16px] items-center'>
            <div className='md:hidden'>
                <SideBar/>
            </div>
            <div className='font-inter font-black text-[22px] sm:text-[32px]'>
                <Link href="/">
                    SHOP.CO
                </Link>
            </div>
        </div>
        <div className='hidden md:flex'>
            <ul className='flex items-center gap-[24px] w-full'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/shop'}>On Sale</Link></li>
                <li><Link href={''}>New Arrivals</Link></li>
                <li><Link href={''}>Brands</Link></li>
            </ul>
        </div>

        <div className='flex gap-3'>
            <div className='hover:cursor-pointer'><LuShoppingCart size={24}/></div>
        </div>
    </nav>
  )
}

export default Navbar