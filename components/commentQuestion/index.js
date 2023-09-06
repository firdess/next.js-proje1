'use client'
import React, { useState } from 'react'

const questionsData = [{
  id: 1,
  title: 'Nunc sed blandit libero volutpat sed?',
  info: 'Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.'
}, {
  id: 2,
  title: 'Congue mauris rhoncus aenean vel elit?',
  info: 'Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.'
}, {
  id: 3,
  title: 'Magna eget est lorem ipsum dolor sit amet?',
  info: 'Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.'
},
]

export default function CommentQuestion() {
  const [questions, setQuestions] = useState(questionsData);
  const [showInfoId, setShowInfoId] = useState({});

  const toggleQuestion = (questionId) => {
    setShowInfoId((prevQuestion) => ({
      ...prevQuestion,
      [questionId]: !prevQuestion[questionId]
    }))
  }


  return (
    <div className='flex flex-col gap-[28px] mt-[60px]'>
      {
        questions.map(question => {
          return <div key={question.id} className='w-[504px] cursor-pointer' onClick={() => toggleQuestion(question.id)}>
            <div className='w-[504px] bg-white shadow-[0px_0px_100px_0px_#F7EDFF] rounded-sm flex justify-between px-[28px] h-[58px] items-center '>
              <p className='font-bold text-black1'>{question.title}</p>
              <button >
                {showInfoId[question.id] ? <img src='../icons/arrowbottom.svg' /> : <img src='../icons/arrowTop.svg' />}
              </button>
            </div>
            <div className='px-[28px] pt-[16px]'>
              {showInfoId[question.id] && <p className='text-gray text-sm'> {question.info}</p>}
            </div>
          </div>
        })
      }
    </div>
  )
}
