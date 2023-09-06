'use client'
import React, { useState } from 'react'

const infoItems = [
  {
    title: 'DEDICATED TEAMS',
    content:
      'Risus viverra adipiscing at in tellus integer feugiat. Aenean et tortor at risus viverra.',
  },
  {
    title: 'CERTIFIED PROFESSIONAL',
    content:
      'Risus viverra adipiscing at in tellus integer feugiat. Aenean et tortor at risus viverra.',
  },
  {
    title: '24/7 SUPPORT TEAM',
    content:
      'Risus viverra adipiscing at in tellus integer feugiat. Aenean et tortor at risus viverra.',
  },
];

export default function Info() {
  const [activeIndex, setActiveIndex] = useState(null);

  const isToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }

  }


  return (
    <div className='flex flex-col gap-7'>
      {infoItems.map((item, index) => (
        <div
          className='flex items-start gap-3'
          key={index}
        >
          <button onClick={() => isToggle(index)}>
            <img
              src='../icons/plus.svg'
              alt={`Toggle Button ${index + 1}`}
            />
          </button>
          <div>
            <h5>{item.title}</h5>
            {activeIndex === index && (
              <p className={`text-[#575757] text-sm w-2/3`}>{item.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
