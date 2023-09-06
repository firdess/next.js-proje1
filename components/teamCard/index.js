
'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const teamList = [{
  id: 1,
  name: 'SEBASTIAN DOE',
  job: 'Code Expert',
  img: 'profile6.jpeg',
  facebook: 'https://www.facebook.com',
  twitter: 'https://www.twitter.com',
  linkedin: 'https://www.linkedin.com',
}, {
  id: 2,
  name: 'STEVE DOE',
  job: 'Software Engineer',
  img: 'profile4.jpeg',
  facebook: 'https://www.facebook.com',
  twitter: 'https://www.twitter.com',
  linkedin: 'https://www.linkedin.com',
}, {
  id: 3,
  name: 'SARAH DOE',
  job: 'Code Expert',
  img: 'profile5.jpeg',
  facebook: 'https://www.facebook.com',
  twitter: 'https://www.twitter.com',
  linkedin: 'https://www.linkedin.com',
}]

export default function TeamCard() {
  const [teamPerson, setTeamPerson] = useState(teamList)
  return (
    <div className='flex gap-[47px] px-[36px]'>
      {
        teamPerson.map(person => {
          return <div key={person.id} className='p-3 bg-white shadow-[0px_0px_100px_0px_#F7EDFF] h-[423px]  rounded-md flex flex-col'>
            <img className='w-[302px] h-[201px] object-cover' src={person.img} />
            <div className='flex flex-col items-center gap-[6px] mt-[28px]'>
              <span className='font-bold text-black1'>{person.name}</span>
              <span className='text-gray'>{person.job}</span>
            </div>
            <div className='flex gap-4 justify-center mt-[21px]'>
              <Link className='link' href={person.facebook} target='_blank'>
                <img src='../icons/facebook-f.svg' />
              </Link>
              <Link className='link' href={person.twitter} target='_blank'>
                <img src='../icons/twitter.svg' />
              </Link>
              <Link className='link' href={person.linkedin} target='_blank'>
                <img  src='../icons/linkedin-in.svg' />
              </Link>
            </div>
          </div>
        })
      }
    </div>
  )
}
