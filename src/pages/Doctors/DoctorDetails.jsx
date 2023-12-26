import React from 'react'
import doctor2 from '../../assets/images/doctor2.jpg'

const DoctorDetails = () => {
  return (
    <div>
      <div className='max-w-[1170px] px-5 mx-auto' >
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={doctor2} alt="" className='w-full' />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetails