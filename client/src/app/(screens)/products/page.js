"use client";
import Header from "@/app/components/Header";
import ProductCard from "@/app/components/Home/ProductCard";
import { productData } from "@/app/static/data";
import styles from "@/app/styles/style";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();
  const categoryData = searchParams.get("categories");

  useEffect(() => {
    if (categoryData === null) {
      const d =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(d);
    } else {
      const d =
        productData && productData.filter((i) => i.category === categoryData);
      setData(d);
    }
  }, []);

  return (
    <div>
      <Header activeHeading={3} />
      <div className={`${styles.section}`}>
       <div className="mt-16 grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
        {
            data && data.map((i,index)=>(
                <ProductCard data={i} key={index} />
            ))
        }
       </div>
       {
                data && data.length === 0 ?(
                    <h1 className="text-center w-full pb-[100px] text-[20px]">
                        No Products Found!
                    </h1>
                ):null
            }
      </div>
    </div>
  );
}

export default page;
