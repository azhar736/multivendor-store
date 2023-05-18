"use client";
import styles from "@/app/styles/style";
import Link from "next/link";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");
  return (
    <div className="w-full h-[370px] bg-white rounded-lg shadow-md p-3 relative cursor-pointer">
      <div className="flex justify-end"></div>
      <Link href={`/product/${product_name}`}>
        <img
          src={data.image_Url[0].url}
          alt=""
          className="w-full h-[170px] object-contain"
        />
      </Link>
      <Link href="/">
        <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
      </Link>
      <Link href={`/product/${product_name}`}>
        <h4 className="pb-3 text-[16px] font-Poppins font-[500] leading-6">
          {data.name.length > 40 ? data.name.slice(0.4) + "..." : data.name}
        </h4>
        <div className={`flex`}>
          <AiFillStar
            className="mr-2 cursor-pointer"
            size={20}
            color="F6BA00"
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            size={20}
            color="F6BA00"
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            size={20}
            color="F6BA00"
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            size={20}
            color="F6BA00"
          />
          <AiOutlineStar
            className="mr-2 cursor-pointer"
            size={20}
            color="F6BA00"
          />
        </div>
        <div className="py-2 flex items-center justify-between">
          <div className="flex">
            <h5 className={`${styles.productDiscountPrice}`}>
              {data.price === 0 ? data.price : data.discount_price}$
            </h5>
            <h4 className={`${styles.price}`}>
              {data.price ? data.price + "$" : null}
            </h4>
          </div>
          <span className="font-[400] text-[17px] text-[#68d284]">
            {data.total_sell} sold
          </span>
        </div>
        {/*Side Options*/}
      </Link>
    </div>
  );
};

export default ProductCard;
