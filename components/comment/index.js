'use client'
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const userData = [{
  id: 1,
  userName: 'ROBERT DOE',
  job: 'Businessman',
  comment: 'Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.',
  img: 'profile.jpeg'
}, {
  id: 2,
  userName: 'JULIA DOE',
  job: 'Businesswoman',
  comment: 'Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.',
  img: 'profile1.jpeg'
}, {
  id: 3,
  userName: 'SARAH DOE',
  job: 'Businesswoman',
  comment: 'Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.',
  img: 'profile2.jpeg'
}, {
  id: 4,
  userName: 'ALIA DOE',
  job: 'Businesswoman',
  comment: 'Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.',
  img: 'profile1.jpeg'
}, {
  id: 5,
  userName: 'MARIA DOE',
  job: 'Businesswoman',
  comment: 'Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.',
  img: 'profile2.jpeg'
}]


export default function Comment() {

  const [users, setUsers] = useState(userData);
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCommentsCount = 3;


  const customPaging = (i) => {
    // Aktif yorumun index'i ile mevcut dot'un index'i eşleşiyorsa
    // Aktif dot'un rengini değiştir
    const isActive = i === activeIndex;

    return (
      <div className={`w-[16px] h-[16px] rounded-full ${isActive ? 'bg-[#624DE7]' : 'bg-[#9483FF]'} `}></div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: visibleCommentsCount,
    slidesToScroll: 1,
    initialSlide: activeIndex,
    afterChange: (current) => setActiveIndex(current),

    customPaging: (i) => customPaging(i), // Özel dot içeriğini belirtilen işlevle oluşturun
  };


  if (users.length >= visibleCommentsCount) {
    settings.appendDots = (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    );
  }



  return (

    <Slider {...settings}>
      {
        users.map((user, index) => {
          return (<div key={user.id}  className='cursor-pointer pt-[20px] '>
            <div className='bg-white shadow-[0px_4px_100px_0px_#F7EDFF] w-[360px] rounded-[5px] mx-auto text-center px-[66px] pt-[50px] pb-[62px]'>
              <div className='flex justify-center mb-[21px]'>
                <img src='../icons/quote-right.svg' />
              </div>
              <p className='mb-[51px] text-gray text-sm'>{user.comment}</p>
              <div className='flex items-center justify-center'>
                <img src='../icons/star.svg' />
                <img src='../icons/star.svg' />
                <img src='../icons/star.svg' />
                <img src='../icons/star.svg' />
                <img src='../icons/star-half-alt.svg' />
              </div>
            </div>
            <div className='flex flex-col items-center gap-[15px] relative top-[-36px]'>
              <img className='w-[73px] h-[73px] rounded-full object-cover border-[5px]  border-solid border-white' src={user.img} />
              <div className='flex flex-col justify-center  text-center'>
                <span className='font-bold text-black1'>
                  {user.userName}
                </span>
                <span className='text-gray'>{user.job}</span>
              </div>
            </div>
          </div>

          )
        })}
    </Slider>

  )
}
