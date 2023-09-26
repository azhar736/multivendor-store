import { productData } from '@/app/static/data'
import styles from '@/app/styles/style'
import React from 'react'
import ProductCard from './ProductCard'

function FeatureProducts() {
  return (
    <div>
       <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
        <h1>Feature Products</h1>
        </div>
        <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0'>
            {
                productData && productData.map((i,index)=><ProductCard data={i} key={index} />)
            }
        </div>
       </div>
    </div>
  )
}

export default FeatureProducts