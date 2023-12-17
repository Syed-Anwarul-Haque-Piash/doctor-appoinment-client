import React from 'react'

const DoctorCard = ({doctor,index}) => {
    const {name, specialty,avgRating,totalRating,photo,totalPatients,hospital}=doctor;
  return (
    <div className='p-3 lg:p-5'>
        <div>
            <img src={photo} className='w-full h-72' alt="" />
        </div>
        <h2 className='text-[18px] leading-[30px] lg:text[26px] lg:leading-9 font-bold mt-3 lg:mt-5'>{name}</h2>
        <div className='mt-2 lg:mt-4 flex items-center justify-between'>
          <span className='bg-[#CCF0F3] text-indigo-400 py-1 px-2 lg:py-2 lg:px-6 text-[16px]
          font-semibold rounded'>{specialty}</span>
          <div className='flex items-center gap-[6px]'>
            <span className='text-[14px] leading-6 lg:text-[16px] font-[400] text-gray-400'>
              ({totalRating})
            </span>
          </div>
        </div>
        <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
          <div>
            <h3 className='text-[16px] leading-7 lg:text-[18px] font-semibold text-black-400'>+{totalPatients} Patients</h3>
            <p className='text-gray-400 text-2xl font-[400]'>{hospital}</p>
          </div>
        </div>
    </div>
  )
}

export default DoctorCard