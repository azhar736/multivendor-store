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
        <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
            <div className='w-[335px]'>
                <ProfileSidebar active={active} setActive={setActive} />
            </div>
            <ProfileContent active={active} setActive={setActive} />
        </div>
    </div>
  )
}

export default isAuth(ProfilePage);