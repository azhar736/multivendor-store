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
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import Cart from "./Header/Cart";
import WishList from "./Header/WishList";
import { RxCross1 } from "react-icons/rx";
const Backend_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
function Header({ activeHeading }) {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);
  const [searchTerm, setSearchTem] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [wishList, setWishList] = useState(false);
  const [open, setOpen] = useState(false);
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

  console.log("user", user);
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
              {dropDown ? (
                <IoIosArrowUp
                  size={20}
                  className="absolute right-2 top-4 cursor-pointer"
                  onClick={() => setDropDown(!dropDown)}
                />
              ) : (
                <IoIosArrowDown
                  size={20}
                  className="absolute right-2 top-4 cursor-pointer"
                  onClick={() => setDropDown(!dropDown)}
                />
              )}
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
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setWishList(true)}
              >
                <AiOutlineHeart size={30} color="rgba(255,255,255)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineShoppingCart
                  size={30}
                  color="rgba(255,255,255)"
                  onClick={() => setOpenCart(true)}
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white text-[12px] leading-tight text-center">
                  1
                </span>
              </div>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link href="/profile">
                    <img
                      src={`${Backend_URL}${user.avatar}`}
                      alt="avatar"
                      className="h-[40px] w-[40px] rounded-full"
                    />
                  </Link>
                ) : (
                  <Link href="/login">
                    <CgProfile size={30} color="rgba(255,255,255)" />
                  </Link>
                )}
              </div>
            </div>
            <div>
              {/* Card POP UP */}
              {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
              {/* WishList POP UP */}
              {wishList ? <WishList setWishList={setWishList} /> : null}
            </div>
          </div>
        </div>
      </div>
      {/*Mobile Header*/}
      <div className="w-full h-[60px] fixed top-0 left-0 right-0 z-10 bg-white shadow-sm 800px:hidden">
        <div className="flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-8"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link href="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="logo"
                className="mt-3 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <div className="relative mr-[20px]">
           <AiOutlineShoppingCart size={30} />
           <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white text-[12px] leading-tight text-center">
                  1
                </span>
            </div>
          </div>
        </div>
        {/* Header Side bar*/}
        {
          open && (
            <div className="fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0" >
              <div className="fixed w-[60%] bg-[#fff] h-screen top-0 left-0 z-10">
                <div className="w-full justify-between flex pr-3">
                  <div>
                    <div className="relative mr-[15px]">
                      <AiOutlineHeart size={30} className="ml-3 mt-5" />
                      <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white text-[12px] leading-tight text-center">
                  1
                </span>
                    </div>
                  </div>
                  <RxCross1 
                  size={25}
                  className="ml-4 mt-5"
                  onClick={()=> setOpen(false)}
                  />
                </div>
                <div className="my-8 !w-[92%] m-auto h-[40px]">
              <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
}

export default Header;
