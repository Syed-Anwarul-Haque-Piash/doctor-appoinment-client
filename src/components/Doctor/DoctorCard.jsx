import React from 'react'

const DoctorCard = ({doctor,index}) => {
    const {name, specialty,avgRating,totalRating,photo,totalPatients,hospital}=doctor;
  return (
    <div className='p-3 lg:p-5'>
        <div>
            <img src={photo} className='w-full h-72' alt="" />
        </div>
        <h2 className='text-[18px] leading-[30px] lg:text[26px] lg:leading-9 font-bold mt-3 lg:mt-5'>{name}</h2>
    </div>
  )
}

export default DoctorCard