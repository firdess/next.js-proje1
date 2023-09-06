import React from 'react'
import Hotline from '../hotline'
import Logo from '../logo'
import navlink from '@/navlink'
import servicesData from '@/servicesData'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='max-w-[1920px] mx-auto bg-darkPurple pt-[125px] relative z-10 overflow-hidden'>
    <div className='w-[1121px] top-[-200px] right-[-550px]  -z-[1] absolute h-[1121px] rounded-full border-[110px] border-solid border-purple  '>  </div>
        <div className='border-purple w-[205px] h-[205px] border-[26px] rounded-full absolute bottom-[-66px] left-[200px]'></div>
        <div className='border-purple w-[593px] h-[593px] border-[64px] -z-[1] rounded-full absolute top-[-245px] left-[-320px]'></div>
      <div className='max-w-[1140px]  mx-auto  '>
        <div className='flex justify-between items-center pb-[50px] border-b-purple border-b'>
          <div className='flex gap-[99px]'>
            <Hotline />
            <div className='flex items-center gap-3 relative z-0'>
              <img src='../icons/envelope-open.svg' />
              <div className='flex flex-col'>
                <span className='text-xl text-white font-bold'>support@mail.com</span>
                <span className='text-sm text-white'>Free consult</span>
              </div>
            </div>
            <div className='flex items-center gap-3 relative z-0'>
              <img src='../icons/map-marker-alt.svg' />
              <div className='flex flex-col'>
                <span className='text-xl text-white font-bold'>12, Rd. Balista Avenue</span>
                <span className='text-sm text-white'>Birmingham, England 59985.</span>
              </div>
            </div>

          </div>
          <div >
            <button className='text-white flex font-bold items-center gap-2 hover:underline'>
              GET IN TOUCH
              <img src='../icons/angle-right.svg' />
            </button>
          </div>
        </div>
        <div className='flex mt-[107px] justify-between pb-[168px]'>
          <div className='w-[294px]'>
            <Logo />
            <p className='text-white my-[24px]'>Leo urna molestie at elementum. At consectetur lorem donec massa sapien faucibus et. iverra suspendisse potenti nullam ac tortor vitae.</p>
            <div className='flex gap-[15px]'>
              <Link href="https://www.facebook.com" className='circle'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M11.7231 9L12.1675 6.10437H9.38905V4.22531C9.38905 3.43313 9.77718 2.66094 11.0216 2.66094H12.2847V0.195625C12.2847 0.195625 11.1384 0 10.0425 0C7.75436 0 6.25874 1.38688 6.25874 3.8975V6.10437H3.7153V9H6.25874V16H9.38905V9H11.7231Z" fill="white" />
                </svg>
              </Link>
              <Link href="https://www.twitter.com" className='circle'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14.3553 4.741C14.3655 4.88313 14.3655 5.02529 14.3655 5.16741C14.3655 9.50241 11.066 14.4973 5.03553 14.4973C3.17766 14.4973 1.45178 13.9593 0 13.0253C0.263969 13.0557 0.51775 13.0659 0.791875 13.0659C2.32484 13.0659 3.73603 12.5481 4.86294 11.6649C3.42131 11.6344 2.21319 10.6903 1.79694 9.39075C2 9.42119 2.20303 9.4415 2.41625 9.4415C2.71066 9.4415 3.00509 9.40088 3.27919 9.32985C1.77666 9.02525 0.649719 7.70547 0.649719 6.11157V6.07097C1.08625 6.31463 1.59391 6.46691 2.13194 6.48719C1.24869 5.89835 0.670031 4.89329 0.670031 3.75622C0.670031 3.1471 0.832437 2.58872 1.11672 2.10141C2.73094 4.09125 5.15734 5.39072 7.87812 5.53288C7.82737 5.28922 7.79691 5.03544 7.79691 4.78163C7.79691 2.9745 9.25884 1.50244 11.0761 1.50244C12.0202 1.50244 12.873 1.89838 13.472 2.53797C14.2131 2.39585 14.9238 2.12172 15.5532 1.7461C15.3096 2.50754 14.7918 3.14713 14.1116 3.55319C14.7715 3.48216 15.4111 3.29938 15.9999 3.0456C15.5533 3.69532 14.9949 4.27397 14.3553 4.741Z" fill="white" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com" className='circle'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4.13375 14.0002H1.23125V4.6533H4.13375V14.0002ZM2.68094 3.3783C1.75281 3.3783 1 2.60955 1 1.68143C1 1.23561 1.1771 0.80806 1.49234 0.492823C1.80757 0.177587 2.23513 0.000488281 2.68094 0.000488281C3.12675 0.000488281 3.5543 0.177587 3.86954 0.492823C4.18478 0.80806 4.36188 1.23561 4.36188 1.68143C4.36188 2.60955 3.60875 3.3783 2.68094 3.3783ZM14.9969 14.0002H12.1006V9.45018C12.1006 8.3658 12.0787 6.97518 10.5916 6.97518C9.0825 6.97518 8.85125 8.1533 8.85125 9.37205V14.0002H5.95188V4.6533H8.73562V5.9283H8.77625C9.16375 5.19393 10.1103 4.41893 11.5225 4.41893C14.46 4.41893 15 6.3533 15 8.8658V14.0002H14.9969Z" fill="white" />
                </svg>
              </Link>
              <Link href="#" className='circle'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12.9031 3.03437C11.5938 1.72187 9.85 1 7.99687 1C4.17187 1 1.05937 4.1125 1.05937 7.9375C1.05937 9.15938 1.37813 10.3531 1.98438 11.4062L1 15L4.67812 14.0344C5.69063 14.5875 6.83125 14.8781 7.99375 14.8781H7.99687C11.8188 14.8781 15 11.7656 15 7.94063C15 6.0875 14.2125 4.34687 12.9031 3.03437ZM7.99687 13.7094C6.95937 13.7094 5.94375 13.4312 5.05937 12.9062L4.85 12.7812L2.66875 13.3531L3.25 11.225L3.1125 11.0063C2.53437 10.0875 2.23125 9.02812 2.23125 7.9375C2.23125 4.75938 4.81875 2.17188 8 2.17188C9.54062 2.17188 10.9875 2.77187 12.075 3.8625C13.1625 4.95312 13.8313 6.4 13.8281 7.94063C13.8281 11.1219 11.175 13.7094 7.99687 13.7094ZM11.1594 9.39062C10.9875 9.30313 10.1344 8.88438 9.975 8.82812C9.81563 8.76875 9.7 8.74062 9.58438 8.91562C9.46875 9.09062 9.1375 9.47813 9.03438 9.59688C8.93438 9.7125 8.83125 9.72812 8.65938 9.64062C7.64062 9.13125 6.97188 8.73125 6.3 7.57812C6.12188 7.27187 6.47812 7.29375 6.80937 6.63125C6.86562 6.51562 6.8375 6.41563 6.79375 6.32812C6.75 6.24062 6.40313 5.3875 6.25938 5.04063C6.11875 4.70312 5.975 4.75 5.86875 4.74375C5.76875 4.7375 5.65312 4.7375 5.5375 4.7375C5.42188 4.7375 5.23438 4.78125 5.075 4.95312C4.91562 5.12813 4.46875 5.54688 4.46875 6.4C4.46875 7.25313 5.09063 8.07813 5.175 8.19375C5.2625 8.30938 6.39687 10.0594 8.1375 10.8125C9.2375 11.2875 9.66875 11.3281 10.2188 11.2469C10.5531 11.1969 11.2437 10.8281 11.3875 10.4219C11.5312 10.0156 11.5312 9.66875 11.4875 9.59688C11.4469 9.51875 11.3313 9.475 11.1594 9.39062Z" fill="white" />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className='text-white pb-[23px] font-bold uppercase'>
              Pages
            </h3>
            <div className='flex flex-col gap-4'>
              {navlink.map((item) => {
                return <div key={item.id} className='font-normal flex gap-1 text-white  hover:underline  cursor-pointer'>
                  <img src='../icons/angle-right.svg' />
                  {item.title}
                </div>
              })}
            </div>

          </div>
          <div>
            <h3 className='text-white pb-[23px] font-bold uppercase'>
              Services
            </h3>
            <div className='flex flex-col gap-4'>
              {servicesData.map((item) => {
                return <div key={item.id} className='font-normal flex gap-1 text-white  hover:underline  cursor-pointer'>
                  <img src='../icons/angle-right.svg' />
                  {item.title}
                </div>
              })}
            </div>

          </div>
          <div className='w-[251px]'>
            <h3 className='text-white pb-[23px] font-bold uppercase'>NEWSLETTER</h3>
            <div className='relative'>
              <input type="email" className='pl-[23px] pr-[55px] h-[50px] bg-white rounded-[50px] w-[251px]' placeholder='Enter your email' />
              <div className='w-[26px] h-[26px] flex items-center justify-center bg-darkPurple cursor-pointer rounded-[50px] absolute  top-3 right-6'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M6.08398 1.8291L6.69102 1.22207C6.94805 0.965039 7.36367 0.965039 7.61797 1.22207L12.9336 6.53496C13.1906 6.79199 13.1906 7.20762 12.9336 7.46191L7.61797 12.7775C7.36094 13.0346 6.94531 13.0346 6.69102 12.7775L6.08398 12.1705C5.82422 11.9107 5.82969 11.4869 6.09492 11.2326L9.38984 8.09355H1.53125C1.16758 8.09355 0.875 7.80098 0.875 7.4373V6.5623C0.875 6.19863 1.16758 5.90605 1.53125 5.90605H9.38984L6.09492 2.76699C5.82695 2.5127 5.82148 2.08887 6.08398 1.8291Z" fill="white" />
                </svg>
              </div>
              <p className='text-white text-sm pt-[20px]'>
              Nisl rhoncus mattis rhoncus urna neque viverra. Unsubscribe
              </p>
            </div>
          </div>
        </div>
        <div className='text-center text-white pb-[55px]'>
        © Copyright by AltDesain-Studio – All right reserved.
        </div>
      </div>
    </div>
  )
}
