"use client";
import Header from "@/app/components/Header";
import ProductCard from "@/app/components/Home/ProductCard";
import { productData } from "@/app/static/data";
import styles from "@/app/styles/style";
import React, { useEffect, useState } from "react";

function page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const d=productData && productData.sort((a,b)=>b.total_sell - a.total_sell);
    setData(d);
  }, []);

  return (
    <div>
      <Header activeHeading={2} />
      <div className={`${styles.section}`}>
       <div className="mt-16 grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
        {
            data && data.map((i,index)=>(
                <ProductCard data={i} key={index} />
            ))
        }
       </div>
      </div>
    </div>
  );
}

export default page;
