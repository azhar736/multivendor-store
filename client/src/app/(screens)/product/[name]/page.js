"use client";
import Footer from '@/app/components/Footer/Footer'
import Header from '@/app/components/Header'
import ProductDetail from '@/app/components/Product/ProductDetail'
import SuggestedProduct from '@/app/components/Product/SuggestedProduct';
import { productData } from '@/app/static/data';
import React, { useEffect, useState } from 'react'

function ProductDetails({params}) {
  const name=params.name;
  const [data,setData]=useState(null);
  console.log("THe Complete Params Object is ",params);
  console.log("The name we Got from the params is",name);
  const productName = name.replace(/-/g, " ");
  console.log("the Product Name is ",productName);

  useEffect(() => {
    const data = productData && productData.find((i)=>i.name === productName);
    setData(data);
  }, [])
  
  return (
    <div>
      <Header />
      <ProductDetail data={data} />
      {
        data && <SuggestedProduct data={data} />
      }
      <Footer />
    </div>
  )
}

export default ProductDetails