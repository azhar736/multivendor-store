import styles from '@/app/styles/style'
import React from 'react'

function SponSored() {
  return (
    <div className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl  shadow-gray-300 shadow-xl border-[2px] border-gray-100`}>
        <div className='flex justify-between w-full'>
          <div className='flex items-start'>
            <img  src='https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png'
             alt='sponsor' loading='lazy'
             style={{width:"150px", objectFit:"contain"}}
             />
          </div>
          <div className='flex items-start'>
            <img  src='https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png'
             alt='sponsor' loading='lazy'
             style={{width:"150px", objectFit:"contain"}}
             />
          </div>
          <div className='flex items-start'>
            <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png'
             alt='sponsor' loading='lazy'
             style={{width:"150px", objectFit:"contain"}}
             />
          </div>
          <div className='flex items-start'>
            <img  src='https://www.vectorlogo.zone/logos/apple/apple-ar21.png'
             alt='sponsor' loading='lazy'
             style={{width:"150px", objectFit:"contain"}}
             />
          </div>
          <div className='flex items-start'>
            <img  src='https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png'
             alt='sponsor' loading='lazy'
             style={{width:"150px", objectFit:"contain"}}
             />
          </div>
        </div>

    </div>
  )
}

export default SponSored;