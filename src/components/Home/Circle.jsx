import React from 'react'

const Circle = () => {
  return (
    <div className='h-[700px] flex items-center justify-center gap-20'>
      <div className='w-16'>
        <div className='rounded-full bg-gradient-to-b from-orange-400 to-yellow-300 p-5'>
            null
        </div>
        <p className='text-center'>years</p>
        <p className='text-[#EBBA18] font-bold'>Experience</p>
      </div>
      <div className='w-16'>
        <div className='rounded-full bg-gradient-to-b from-orange-400 to-yellow-300 p-5'>
            5+
        </div>
        <p className='text-center'>Completed</p>
        <p className='text-[#EBBA18] text-center font-bold'>Projects</p>
      </div>
      <div className='w-16'>
        <div className='rounded-full bg-gradient-to-b from-orange-400 to-yellow-300 p-5'>
            null
        </div>
        <p className='text-center'>Companies</p>
        <p className='text-[#EBBA18] text-center font-bold'>work</p>
      </div>
    </div>
  )
}

export default Circle