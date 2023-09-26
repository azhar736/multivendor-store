import styles from "@/app/styles/style";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

function ProductDetailsCard({ setOpen, data }) {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [selected, selectedCount] = useState(false);

  const handleMessageSubmit = () => {};

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="bg-[#ffff]">
        {data ? (
          <div>
            <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
              <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white shadow-sm relative p-4">
                <RxCross1
                  size={30}
                  className="absolute right-3 top-3 z-30"
                  onClick={() => setOpen(false)}
                />
                <div className="block w-full 800px:flex">
                  <div className="w-full 800px:w-[50%]">
                    {/* <Image  src={data?.image_Url[0].url} height={100} width={100} alt='img' loading='lazy' /> */}
                    <img src={data?.image_Url[0].url} alt="img" />
                    <div className="flex">
                      <img
                        src={data?.shop.shop_avatar.url}
                        alt="img"
                        className="h-[50px] w-[50px] rounded-full mr-2"
                      />
                      <div>
                        <h3 className={`${styles.shop_name}`}>
                          {data?.shop.name}
                        </h3>
                        <h5 className="pb-3 text-[15px]">
                          ({data?.shop.ratings}) Ratings
                        </h5>
                      </div>
                    </div>
                    <div
                      className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11`}
                      onClick={handleMessageSubmit}
                    >
                      <span className="text-[#ffff] flex items-center justify-between text-[14px]">
                        Send Message{" "}
                        <AiOutlineMessage size={20} className="ml-2" />
                      </span>
                    </div>
                    <h5 className="text-[16px] text-[red] mt-5">
                      ({data?.total_sell}) Sold Out
                    </h5>
                  </div>
                  <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]">
                    <h1 className={`${styles.productTitle} text-[20px]`}>
                      {data?.name}
                    </h1>
                    <p className="text-[16px] font-normal leading-6">
                      {data?.description}
                    </p>
                    <div className="flex pt-3">
                      <h4 className={`${styles.productDiscountPrice}`}>
                        {data?.discount_price}$
                      </h4>
                      <h3 className={`${styles.price}`}>
                        {data.price ? data.price + "$" : null}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between mt-12 pr-3">
                      <div>
                        <button
                          className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-lg px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                          onClick={decrement}
                        >
                          -
                        </button>
                        <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                          {count}
                        </span>
                        <button
                          className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-lg px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                          onClick={Increment}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        {click ? (
                          <AiFillHeart
                            size={30}
                            className="cursor-pointer"
                            onClick={() => setClick(!click)}
                            color={click ? "red" : "#333"}
                            title="Remove from Wishlist"
                          />
                        ) : (
                          <AiOutlineHeart
                            size={30}
                            className="cursor-pointer"
                            onClick={() => setClick(!click)}
                            color={click ? "red" : "#333"}
                            title="Add to Wishlist"
                          />
                        )}
                      </div>
                    </div>
                    <div className={`${styles.button} mt-10 rounded-[4px] h-11 flex items-center`}>
                     <span className="text-[#ffff] flex items-center justify-between text-[14px]">
                      Add to cart  <AiOutlineShoppingCart size={20} className="ml-2" />
                     </span>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ProductDetailsCard;
