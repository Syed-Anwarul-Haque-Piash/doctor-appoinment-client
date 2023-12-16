import React from 'react'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from './DoctorCard'

const DoctorList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        {doctors.map((doctor,index)=><DoctorCard doctor={doctor} index={index}></DoctorCard>)}
    </div>
  )
}

export default DoctorList