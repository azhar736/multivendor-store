"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/style";
import Link from "next/link";
import { categoriesData, productData } from "../static/data";
import { FiSearch } from "react-icons/fi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BsFilterLeft } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import DropDown from "./Header/DropDown";
import Navbar from "./Header/Navbar";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
const Backend_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
function Header({ activeHeading }) {
  const {isAuthenticated,user, loading} = useSelector((state)=>state.user);
  const [searchTerm, setSearchTem] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTem(term);
    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 70) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  };

  console.log("user",user);
  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link href="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
              />
            </Link>
          </div>
          {/*Search Box*/}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <FiSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;
                    const Product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link key={index} href={`/product/${Product_name}`}>
                        <div className="w-full flex items-start py-3">
                          <img
                            src={i.image_Url[0].url}
                            alt=""
                            className="h-[40px] w-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          <div className={`${styles.button}`}>
            <Link href="/seller">
              <h1 className="text-[#fff] flex items-center">
                Become Seller
                <MdOutlineArrowForwardIos className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          isActive === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/*Categories*/}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] w-[270px] mt-[10px] hidden 1000px:block">
              <BsFilterLeft size={30} className="absolute top-3 left-2" />
              <button className="h-[100%] w-full flex justify-between items-center pl-10 bg-white font-Poppins text-lg font-[500] select-none rounded-t-md">
                All Categories
              </button>
              {
                dropDown ? (
                  <IoIosArrowUp
                  size={20}
                  className="absolute right-2 top-4 cursor-pointer"
                  onClick={() => setDropDown(!dropDown)}
                  />
                ) :(
                  <IoIosArrowDown
                  size={20}
                  className="absolute right-2 top-4 cursor-pointer"
                  onClick={() => setDropDown(!dropDown)}
                />
                )
              }
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* nav items */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>
          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineHeart size={30} color="rgba(255,255,255)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineShoppingCart size={30} color="rgba(255,255,255)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white text-[12px] leading-tight text-center">
                  1
                </span>
              </div>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {
                  isAuthenticated ? (
                    <Link href="/profile">
                      <img src={`${Backend_URL}/${user.avatar}`} alt="avatar" className="h-[40px] w-[40px] rounded-full" />
                    </Link>
                  ):(
                    <Link href="/login">
                    <CgProfile size={30} color="rgba(255,255,255)" />
                  </Link>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
