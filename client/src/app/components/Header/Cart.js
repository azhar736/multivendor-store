import styles from '@/app/styles/style'
import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import {IoBagHandleOutline} from "react-icons/io5"
import {HiOutlineMinus, HiPlus} from "react-icons/hi"
import Link from 'next/link'
import isAuth from '@/app/components/Auth/isAuth';
function Cart({setOpenCart}) {
    const cartData=[
        {
            name:"Iphone 14 Pro max 256GB , Silver Color",
            description:"Test description",
            price:999
        },
        {
            name:"Iphone 12 Pro max 256GB , Silver Color",
            description:"Test description",
            price:899
        },
        {
            name:"Iphone 11 Pro max 256GB , Silver Color",
            description:"Test description",
            price:699
        },
    ]
  return (
    <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10'>
        <div className='fixed top-0 right-0 min-h-full w-1/4 bg-white flex flex-col justify-between shadow-sm'>
            <div>
                <div className='flex w-full justify-end pt-5 pr-5'>
                    <RxCross1
                    size={25}
                    className="cursor-pointer"
                    onClick={()=>setOpenCart(false)}
                    />
                </div>
                {/*Items Length */}
                <div className={`${styles.noramlFlex} p-4`}>
                    <IoBagHandleOutline size={25} />
                    <h5 className='pl-2 text-[20px] font-medium'>
                        3 items
                    </h5>
                </div>
                {/*Cart Single Item*/}
                <br/>
                <div className='w-full border-t'>
                    {
                        cartData && cartData.map((item,index)=>(
                            <CartSingle key={index} data={item} />
                        ))
                    }
                </div>
            </div>
            <div className='px-5 mb-3'>
                {/*Check Out Button*/}
                <Link href="/">
                <div className={`h-[45px] flex items-center justify-center w-full bg-[#e44343] rounded-[5px]`}>
                    <h1 className='text-white text-[18px] font-semibold'>Checkout Now (USD$1080)</h1>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}


const CartSingle=({data})=>{
    const [value,setValue]=useState(1);
    const totalPrice = data.price * value;
    return(
        <div className='border-b p-4'>
        <div className='w-full flex items-center'>
            <div>
                <div className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
                onClick={()=>setValue(value+1)}
                >
                <HiPlus size={18} color="#fff" />
                </div>
                <span className='pl-[10px]'>
                    {value}
                </span>
                <div className='bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer'
                onClick={()=>setValue(value === 1 ? 1 : value -1)}
                >
                 <HiOutlineMinus size={16} color='#7d879c' />
                </div>
            </div>
            <img src='https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png' alt=''
             className='w-[80px] h-[80px] ml-2'
            />
            <div className='pl-[5px]'>
              <h1>{data.name}</h1>
              <h4 className='font-normal text-[15px] text-[#00000082]'>${data.price} * {value}</h4>
              <h4 className='font-semibold text-[17px] pt-[3px] text-[#d02222] font-Roboto'>
               US${totalPrice}
              </h4>
            </div>
            <RxCross1 size={20} className='cursor-pointer text-black' />
        </div>
        </div>
    )
}
export default isAuth(Cart);