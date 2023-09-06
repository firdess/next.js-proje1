import React from 'react'
import cardData from '@/card'
import Card from './card'

export default function CardList() {
  return (
    <div className='flex gap-5 '>
      {
        cardData.map(item => {
          return <Card item={item}/>
        })
      }
    </div>
  )
}
