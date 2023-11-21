import DashboardHeader from '@/app/components/Shop/layout/DashboardHeader'
import DashboardSideBar from '@/app/components/Shop/layout/DashboardSideBar'
import React from 'react'

function ShopDashboard() {
  return (
    <div>
      <DashboardHeader />
      <div className='flex items-center justify-between w-full'>
        <div className='w-[80px] 800px:w-[330px]'>
          <DashboardSideBar active={1} />
        </div>
      </div>
    </div>
  )
}

export default ShopDashboard