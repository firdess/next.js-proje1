import React from 'react'

export default function Card({ item }) {
  return (
    <div key={item.id} className='w-[270px] px-[36px] py-[66px] hover:bg-darkPurple group group-hover:text-white bg-white rounded-[5px_5px_50px_5px] cursor-pointer shadow-[0px_0px_50px_0px_#F7EDFF]'>
      <h3 className='font-bold text-xl text-darkPurple group-hover:text-white'>{item.cardTitle}</h3>
      <span className='text-gray text-sm pt-[7px] group-hover:text-white'>{item.content}</span>
      <div className='pt-[40px]'>
        <button className='flex items-center gap-1  '>
          <span className='text-black1 text-base font-bold uppercase group-hover:text-white'>Learn More</span>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path className='group-hover:fill-white' d="M11.0094 8.53123L6.75938 12.7812C6.46563 13.075 5.99063 13.075 5.7 12.7812L4.99375 12.075C4.7 11.7812 4.7 11.3062 4.99375 11.0156L8.00625 8.0031L4.99375 4.9906C4.7 4.69685 4.7 4.22185 4.99375 3.93123L5.69687 3.21873C5.99062 2.92498 6.46562 2.92498 6.75625 3.21873L11.0062 7.46873C11.3031 7.76248 11.3031 8.23748 11.0094 8.53123Z" fill="black" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}
