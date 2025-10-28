import React from 'react'
import Register from '../home/register'
import Link from 'next/link'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from 'react-icons/io5'

const Footer = () => {
  return (
    <div className='bg-[#f0f0f0] mt-[200px]'>
        <div className='max-w-[1240px] relative mx-auto pt-[140px] px-[16px]'>
        <div className='max-w-[358px] md:max-w-[1240px] mx-auto absolute left-1 sm:left-1/5 md:left-0 -top-[180px] md:-top-[100px] w-full'><Register/></div>
        <div className='max-w-[1240px] mx-auto'>
            <div className='flex gap-[113px] flex-col md:flex-row mx-auto'>
                <div className='md:max-w-[248px] flex flex-col gap-[25px]'>
                <h2 className='font-inter font-black text-[28px] md:text-[33.5px]'>SHOP.CO</h2>
                <p className='text-[14px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className='flex gap-3  mt-[10px]'>
                    <Link href={""} className='text-black bg-white px-[9px] py-[9px] border border-gray-300 rounded-full hover:text-white hover:bg-black hover:border-black active:bg-gray-400'><FaXTwitter /></Link>
                    <Link href={""} className='text-black bg-white px-[9px] py-[9px] border border-gray-300 rounded-full hover:text-white hover:bg-black hover:border-black active:bg-gray-400'><FaFacebookF /></Link>
                    <Link href={""} className='text-black bg-white px-[9px] py-[9px] border border-gray-300 rounded-full hover:text-white hover:bg-black hover:border-black active:bg-gray-400'><FaInstagram /></Link>
                    <Link href={""} className='text-black bg-white px-[9px] py-[9px] border border-gray-300 rounded-full hover:text-white hover:bg-black hover:border-black active:bg-gray-400'><IoLogoGithub /></Link>
                </div>
                </div>
                <div className='flex md:gap-[113px] gap-x-[69px] gap-y-[24px] flex-wrap justify-between'>
                    <div className='flex flex-col gap-[16px]'>
                        <h4 className='font-black text-[14px] md:text-[16px] uppercase tracking-widest'>Company</h4>
                        <div className='flex flex-col gap-[8px] textt-[14px] md:text-[16px]'>
                        <Link href={""}>About</Link>
                        <Link href={""}>Features</Link>
                        <Link href={""}>Works</Link>
                        <Link href={""}>Career</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <h4 className='font-black text-[14px] md:text-[16px] uppercase tracking-widest'>HELP</h4>
                        <div className='flex flex-col gap-[8px] textt-[14px] md:text-[16px]'>
                            <Link href={""}>Customer Support</Link>
                            <Link href={""}>Delivery Detail</Link>
                            <Link href={""}>Terms & Conditions</Link>
                            <Link href={""}>Privacy Policy</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <h4 className='font-black text-[14px] md:text-[16px] uppercase tracking-widest'>FAQ</h4>
                        <div className='flex flex-col gap-[8px] textt-[14px] md:text-[16px]'>
                            <Link href={""}>Account</Link>
                            <Link href={""}>Manage Deliveries</Link>
                            <Link href={""}>Orders</Link>
                            <Link href={""}>Payments</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <h4 className='font-black text-[14px] md:text-[16px] uppercase tracking-widest'>Resources</h4>
                        <div className='flex flex-col gap-[8px] textt-[14px] md:text-[16px]'>
                            <Link href={""}>Free eBooks</Link>
                            <Link href={""}>Development Tutorial</Link>
                            <Link href={""}>How to-Blog</Link>
                            <Link href={""}>Youtube Playlist</Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border border-gray-400 mt-[40px] md:mt-[50px] mb-[16px] md:mb-[20px] px-[17px]'/>
            <div className='flex flex-col items-center md:justify-between md:flex-row gap-y-[16px]'>
                <div className='text-[#00000073]'>Shop.co &copy; 2000-2025, All Rights Reserved</div>
                <div className='flex gap-[10px] md:gap-[12px]'>
                    <img src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761646654/Badge_ly29lk.png" alt="Visa" />
                    <img src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761646653/Badge1_yue7ef.png" alt="Master" />
                    <img src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761646653/Badge3_shwkkr.png" alt="Paypal" />
                    <img src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761646653/Badge4_u0zizm.png" alt="Apple pay" />
                    <img src="https://res.cloudinary.com/dv8dtipj1/image/upload/v1761646654/Badge5_ulminh.png" alt="Google pay" />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer