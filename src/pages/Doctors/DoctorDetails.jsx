import React, { useState } from 'react'
import doctor2 from '../../assets/images/doctor2.jpg'
import staricon from '../../assets/images/staricon.png'
import DoctorAbout from './DoctorAbout'
import Feedback from './Feedback'

const DoctorDetails = () => {
  const [tab,setTab]=useState('about')
  return (
    <div>
      <div className='max-w-[1170px] px-5 mx-auto' >
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={doctor2} alt="" className='w-full' />
              </figure>
              <div>
                <span className='bg-[#CCF0F3] text-blue-400 py-1 px-6 lg:py-2 lg:px-6 text-[12px] lg:text-[16px] font-semibold rounded'>Sergoen</span>
                <h3 className='text-black text-[22px] mt-3 font-bold'>Syed Anwarul Haqur Piash</h3>
                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] lg:text-[16px] font-semibold text-black'>
                    <img className='w-[20px] h-[20px]' src={staricon} alt="" />4.6
                  </span>
                  <span className='text-[14px] lg:text-[16px] font-[400] text-gray-400'>(272)</span>
                </div>
                <p className='text-gray-400 text-[14px] md:text-[15px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque similique temporibus sed distinctio cumque nemo vero ipsa hic excepturi perferendis.</p>
              </div>
            </div>
            <div className='mt-[50px] border-b border-solid border-gray-400-200'>
              <button onClick={()=>setTab('about')} className={`${tab==='active' && 'border-b border-solid border-gray-900'}py-2 px-5 mr-5 text-[16px] text-black font-semibold`}>About</button>
               <button onClick={()=>setTab('feedback')} className={`${tab==='feedback' && 'border-b border-solid border-gray-900'}py-2 px-5 mr-5 text-[16px] text-black font-semibold`}>Feedback</button>
            </div>
            <div className='mt-[50px]'>
              {tab==='about' && <DoctorAbout/>}
              {tab==='feedback' && <Feedback/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetails