'use client';
import Header from '@/app/components/Header'
import ProfileContent from '@/app/components/Profile/ProfileContent'
import ProfileSidebar from '@/app/components/Profile/ProfileSidebar'
import styles from '@/app/styles/style'
import React, { useState } from 'react'
import isAuth from '@/app/components/Auth/isAuth';
function ProfilePage() {
    const [active,setActive] =useState(1);
  return (
    <div>
        <Header />
        <div className={`w-full h-auto flex bg-[#f5f5f5] py-10 pl-3 sm:${styles.section}`}>
            <div className='w-[50px] 800px:w-[335px] sticky mt-[50%] sm:mt-[35%] 800px:mt-0'>
                <ProfileSidebar active={active} setActive={setActive} />
            </div>
            <ProfileContent active={active} setActive={setActive} />
        </div>
    </div>
  )
}

export default isAuth(ProfilePage);