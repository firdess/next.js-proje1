
'use client'
import React, { useState } from 'react'
import navlink from '@/navlink'
import Hotline from '../hotline'
import Logo from '../logo'

export default function Header() {
  const [link, setLink] = useState(navlink)
  return (
    <div className='pt-[26px]  '>
      <div className='max-w-[1140px] z-10  relative mx-auto flex items-center justify-between'>
        <Logo/>
        <div className='flex gap-12'>
          {link.map((item) => {
            return <div key={item.id} className='font-normal text-white text-[16px]  py-1 px-2 hover:underline  cursor-pointer'>{item.title}</div>
          })}
        </div>
        <Hotline />

      </div>
    </div>
  )
}  
