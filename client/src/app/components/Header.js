"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/style";
import Link from "next/link";
import { categoriesData, productData } from "../static/data";
import { FiSearch } from "react-icons/fi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BsFilterLeft } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import DropDown from "./Header/DropDown";
function Header() {
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
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.screenY > 70) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  };
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
          <div>
            <div className="relative h-[60px] w-[270px] mt-[10px] hidden 1000px:block">
              <BsFilterLeft size={30} className="absolute top-3 left-2" />
              <button className="h-[100%] w-full flex justify-between items-center pl-20 bg-white font-Poppins text-lg font-[500] select-none rounded-t-md">
                All Categories
                <IoIosArrowDown
                  size={20}
                  className="absolute right-2 top-4 cursor-pointer"
                  onClick={() => setDropDown(!dropDown)}
                />
                {dropDown ? (
                  <DropDown
                    categoriesData={categoriesData}
                    setDropDown={setDropDown}
                  />
                ) : null}
                {/* nav items */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
