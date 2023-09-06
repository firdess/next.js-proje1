import React from 'react'

export default function ProgressBar({ completed, title }) {
  return (
    <div className='w-[342px] mt-[36px]'>
      <div className='flex justify-between mb-[5px]'>
        <span className='font-bold text-black1'>{title}</span>
        <span className='font-bold text-black1'>{`${completed}%`}</span>
      </div>
      <div className='w-full bg-gray-200  h-1.5 dark:bg-purple mb-[37px]'>
        <div className='bg-darkPurple h-1.5  ' style={{ width: `${completed}%` }}></div>
      </div>
    </div>
  )
}
