"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import {VscNewFile} from "react-icons/vsc"
import {CiMoneyBill, CiSettings} from "react-icons/ci"
import { HiOutlineReceiptRefund } from "react-icons/hi";
function DashboardSideBar({ active }) {
  return (
    <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      {/*Single Item */}
      <div className="w-full flex items-center p-4">
        <Link href="/dashboard" className="w-full flex items-center">
          <RxDashboard size={30} color={active === 1 ? "#e83333":"#555"} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-400 ${
              active === 1 ? "text-red-400" : "text-[#555]"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link href="/dashboard-orders" className="w-full flex items-center">
          <FiShoppingBag size={30} color={active === 2 ? "#e83333":"#555"} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-400 ${
              active === 2 ? "text-red-400" : "text-[#555]"
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link href="/dashboard-products" className="w-full flex items-center">
          <FiPackage size={30} color={active === 3 ? "#e83333":"#555"} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-400 ${
              active === 3 ? "text-red-400" : "text-[#555]"
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link href="/dashboard-create-product" className="w-full flex items-center">
          <AiOutlineFolderAdd size={30} color={active === 4 ? "#e83333":"#555"} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-400 ${
              active === 4 ? "text-red-400" : "text-[#555]"
            }`}
          >
            Create Products
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link href="/dashboard-events" className="w-full flex items-center">
          <FiPackage size={30} color={active === 5 ? "#e83333":"#555"} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-400 ${
              active === 5 ? "text-red-400" : "text-[#555]"
            }`}
          >
            All Events
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link href="/dashboard-create-event" className="w-full flex items-center">
          <VscNewFile size={30} color={active === 6 ? "#e83333":"#555"} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-400 ${
              active === 6 ? "text-red-400" : "text-[#555]"
            }`}
          >
            Create Events
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link href="/dashboard-widthdraw-money" className="w-full flex items-center">
          <CiMoneyBill size={30} color={active === 7 ? "#e83333":"#555"} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-400 ${
              active === 7 ? "text-red-400" : "text-[#555]"
            }`}
          >
            Withdraw Money
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link href="/dashboard-messages" className="w-full flex items-center">
          <CiMoneyBill size={30} color={active === 8 ? "#e83333":"#555"} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-400 ${
              active === 8 ? "text-red-400" : "text-[#555]"
            }`}
          >
            Shop Inbox
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link href="/dashboard/coupans" className="w-full flex items-center">
          <AiOutlineGift size={30} color={active === 9 ? "#e83333":"#555"} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-400 ${
              active === 9 ? "text-red-400" : "text-[#555]"
            }`}
          >
            Discount Code
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link href="/dashboard-refunds" className="w-full flex items-center">
          <HiOutlineReceiptRefund size={30} color={active === 10 ? "#e83333":"#555"} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-400 ${
              active === 10 ? "text-red-400" : "text-[#555]"
            }`}
          >
            Refunds
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link href="/dashboard-settings" className="w-full flex items-center">
          <CiSettings size={30} color={active === 11 ? "#e83333":"#555"} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-400 ${
              active === 11 ? "text-red-400" : "text-[#555]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>
      
      
    </div>
  );
}

export default DashboardSideBar;
