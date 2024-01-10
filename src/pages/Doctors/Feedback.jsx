import React from 'react'
//import doctor from '../../assets/images/doctor1.jpg'
import avatar from '../../assets/images/avatar.png'

const Feedback = () => {
  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] font-bold text-black mb-[30px]'>All reviews (272)</h4>
        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'>
              <img className='w-full rounded-full' src={avatar} alt="" />
            </figure>
            <div>
              <h5 className='text-[16px] text-blue-500 font-bold'>Tasin Sarwar</h5>
              <p className='text-[14px] text-gray-400'>
                2 June, 2023
              </p>
              <p className='text-gray-400 mt-3 font-medium text-[15px]'>High treatment service and good recommendetion</p>
            </div>
          </div>
          <div className=''></div>
        </div>
      </div>
    </div>
  )
}

export default Feedback