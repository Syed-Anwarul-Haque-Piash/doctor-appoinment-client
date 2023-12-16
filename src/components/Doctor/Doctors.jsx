import React from 'react'
import DoctorList from './DoctorList'

const Doctors = () => {
  return (
    <div>
        <div className="container">
            <div className='xl:w-[470px] mx-auto'>
                <h2 className='text-center text-3xl font-bold mt-4'>Our Doctors</h2>
                <p className='text-center text-gray-400 mt-4'>World class healthcare provide there
                     and provide some test and very good
                    and high profile doctor.</p>
            </div>
            <DoctorList></DoctorList>
        </div>
    </div>
  )
}

export default Doctors