"use client"
import Link from 'next/link'
import React from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useSelector } from 'react-redux'
const Backend_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

function DashboardHeader() {
  const {seller} = useSelector((state)=>state.seller)
  return (
    <div className='w-full h-[80px] shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4'>
       <div>
            <Link href="/dashboard">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
              />
            </Link>
          </div>
          <div className='flex items-center'>
             <div className='flex items-center mr-4'>
              <Link href="/dahboard/coupans" className='800px:block  hidden'>
              <AiOutlineGift 
              color='#555'
              size={30}
              className='mx-5 cursor-pointer'
              />
              </Link>
              <Link href="/dahboard-events" className='800px:block  hidden'>
              <MdOutlineLocalOffer 
              color='#555'
              size={30}
              className='mx-5 cursor-pointer'
              />
              </Link>
              <Link href="/dahboard-products" className='800px:block  hidden'>
              <FiShoppingBag 
              color='#555'
              size={30}
              className='mx-5 cursor-pointer'
              />
              </Link>
              <Link href="/dahboard-orders" className='800px:block  hidden'>
              <FiPackage 
              color='#555'
              size={30}
              className='mx-5 cursor-pointer'
              />
              </Link>
              <Link href="/dahboard-messages" className='800px:block  hidden'>
              <BiMessageSquareDetail 
              color='#555'
              size={30}
              className='mx-5 cursor-pointer'
              />
              </Link>
              <Link href={`/shop/${seller._id}`}>
                    <img
                      src={`${Backend_URL}${seller.avatar}`}
                      alt="avatar"
                      className="h-[40px] w-[40px] rounded-full"
                    />
                  </Link>
             </div>
          </div>
    </div>
  )
}

export default DashboardHeader