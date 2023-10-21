import styles from "@/app/styles/style";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function PaymentMethod() {
  return (
    <div className="w-full px-5">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-[25px] !font-semibold text-[#000000ba] pb-2">
          Payment Methods
        </h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-[#fff]">Add New</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center justify-between px-3 shadow pr-10">
        <div className="flex items-center">
          <img
            src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
            alt="Visa Card"
          />
          <h5 className="font-semibold">Azhar Mehmood</h5>
        </div>
        <div className="pl-8 flex items-center">
          <h6>1234 **** ****</h6>
          <h5 className="pl-6">08/2028</h5>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
            <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
