import styles from '@/app/styles/style'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

function UserAddress() {
  return (
    <div className="w-full px-5">
    <div className="w-full flex items-center justify-between">
      <h1 className="text-[25px] !font-semibold text-[#000000ba] pb-2">
        My Address
      </h1>
      <div className={`${styles.button} !rounded-md`}>
        <span className="text-[#fff]">Add New</span>
      </div>
    </div>
    <br />
    <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center justify-between px-3 shadow pr-10">
      <div className="flex items-center">
        <h5 className="font-semibold">Default</h5>
      </div>
      <div className="pl-8 flex items-center">
        <h6>Islamabad</h6>
      </div>
      <div className="pl-8 flex items-center">
        <h6>(+92) 30688811111</h6>
      </div>
      <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
      </div>
    </div>
  </div>
  )
}

export default UserAddress