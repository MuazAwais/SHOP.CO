import React from 'react'
import Navbar from './navbar'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <div className="bg-black text-[#ffffff] py-[10px] text-center text-[12px] sm:text-[14px] ">
        Sign up and get 20% off to your first order. <Link href={""} className="underline underline-offset-4 text-[13px] sm:text-[15px]">Sign Up Now</Link>
        </div>
        <Navbar />
    </header>
  )
}

export default Header