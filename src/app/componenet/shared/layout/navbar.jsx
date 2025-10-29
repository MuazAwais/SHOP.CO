import Link from 'next/link'
import { LuShoppingCart } from "react-icons/lu";
import SideBar from './sideBar';
import CartLogo from '../../ui/cartLogo';

const Navbar = () => {
  return (
    <nav className='container flex items-center py-[24px] justify-between'>
        <div className='flex gap-[16px] items-center'>
            <div className='md:hidden'>
                <SideBar />
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
                <li><Link href={'/construction'}>New Arrivals</Link></li>
                <li><Link href={'/construction'}>Brands</Link></li>
            </ul>
        </div>

        <div className=''>
            <CartLogo/>
        </div>
    </nav>
  )
}

export default Navbar