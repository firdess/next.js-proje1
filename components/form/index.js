import React from 'react'

export default function Form() {
  return (
    <div className=' bg-white w-[493px] pt-[76px] pb-[94px] px-[65px] rounded-[5px_5px_0px_0px]  mt-[100px]'>
      <div className='mb-[38px]'>
        <span className='text-black1font-bold text-xl'>Consultation for Free</span>
        <p className='text-gray text-sm w-2/3'>Posuere morbi leo urna molestie at elementum eu egestas.</p>
      </div>
      <form className='flex flex-col gap-[26px]'>
        <input className='shadow-[0px_0px_50px_0px_#F7EDFF] h-[50px] pl-[26px] rounded-[50px] text-gray text-sm' type="text" placeholder='Your name' />
        <input className='shadow-[0px_0px_50px_0px_#F7EDFF] h-[50px] pl-[26px] rounded-[50px] text-gray text-sm' type="tel" placeholder='Phone number' />
        <input className='shadow-[0px_0px_50px_0px_#F7EDFF] h-[50px] pl-[26px] rounded-[50px] text-gray text-sm' type="text" placeholder='Project category' />
        <div>
          <button className='bg-darkPurple rounded-[50px] text-white w-[154px] h-[50px] hover:bg-darkPurple1'>SEND</button>
        </div>
      </form>
    </div>
  )
}
