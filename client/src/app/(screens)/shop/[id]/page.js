'use client';
import React from 'react'
import isSeller from '@/app/components/Auth/isSeller';

function ShopHomePage() {
  return (
    <div>Shope page</div>
  )
}

export default isSeller(ShopHomePage);