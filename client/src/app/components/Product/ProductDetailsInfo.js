"use client";
import styles from "@/app/styles/style";
import Link from "next/link";
import React, { useState } from "react";

function ProductDetailsInfo({ data }) {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={`text-[#000] text-[18px] px-1 leading-5 font-semibold cursor-pointer 800px:text-[20px]`}
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={`text-[#000] text-[18px] px-1 leading-5 font-semibold cursor-pointer 800px:text-[20px]`}
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={`text-[#000] text-[18px] px-1 leading-5 font-semibold cursor-pointer 800px:text-[20px]`}
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`}></div>
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Product details are a crucial part of any eCommerce website or
            online marketplace. These details help the potential customers to
            make an informed decision about the product they are interested in
            buying. A well-written product description can also be a powerful
            marketing tool that can help to increase sales. Product details
            typically include information about the product's features,
            specifications, dimensions, weight, materials, and other relevant
            information that can help language, and be honest and transparent
            about the product's features and limitations.
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            customers to understand the product better. The product details
            section should also include high-quality images and videos of the
            product, as well as customer reviews and ratings. When writing
            product details, it is essential to keep the target audience in
            mind. The language used should be clear and easy to understand, and
            technical terms should be explained in simple language. The tone of
            the product details should be persuasive, highlighting the unique
            features of the
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            customers to understand the product better. The product details
            section should also include high-quality images and videos of the
            product, as well as customer reviews and ratings. When writing
            product details, it is essential to keep the target audience in
            mind. The language used should be clear and easy to understand, and
            technical terms should be explained in simple language. The tone of
            the product details should be persuasive, highlighting the unique
            features of the
          </p>
        </>
      ) : null}
      {active === 2 ? (
        <div className="w-full flex items-center justify-center min-h-[40vh]">
          <p className="text-[16px] text-black font-medium">No Review yet!</p>
        </div>
      ) : null}
      {active === 3 ? (
        <div className="w-full block 800px:flex">
          <div className="w-full 800px:w-[50%]">
            <div className="flex items-center">
              <img
                src={data?.shop.shop_avatar.url}
                alt="whop_image"
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="pl-3">
                <h3 className={`${styles.shop_name}`}>{data?.shop.name}</h3>
                <h5 className="pb-2 text-[15px] font-Poppins font-normal">
                  ({data?.shop.ratings}) Ratings
                </h5>
              </div>
            </div>
            <p className="pt-2">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged.
              </p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-2 800px:flex 800px:flex-col 800px:items-end">
            <div className="text-left">
                <h5 className="font-semibold">
                    Joined on : <span className="font-medium">July 10,2020</span>
                </h5>
                <h5 className="font-semibold pt-3">
                    Total Products: <span className="font-medium">2,334</span>
                </h5>
                <h5 className="font-semibold pt-3">
                    Total Reviews: <span className="font-medium">325</span>
                </h5>
                <Link href="/">
                    <div className={`${styles.button} !rounded !h-[40px] mt-3 flex items-center justify-center`}>
                        <h4 className="text-white">Visit Shop</h4>
                    </div>
                </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetailsInfo;
