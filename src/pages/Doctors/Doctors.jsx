import React from 'react'
import DoctorList from '../../components/Doctor/DoctorList'

const Doctors = () => {
  return (
    <>
    <section className='bg-[#fff9ea]'>
      <div className='container text-center'>
        <h2 className='text-2xl font-bold'>Find A Doctor</h2>
        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
          <input type="search" 
          className='p-4 mt-0  bg-transparent w-full focus:outline-none cursor:pointer '
          placeholder='Search'
           />
           <button className='bg-sky-600 text-white mt-0 p-4 rounded-lg'>Search</button>
        </div>
      </div>
    </section>

    <section className='container'>
      <DoctorList></DoctorList>
    </section>
    </>
  )
}

export default Doctors