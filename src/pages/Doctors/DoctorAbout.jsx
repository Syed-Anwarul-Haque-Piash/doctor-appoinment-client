import React from 'react'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] text-black font-semibold flex items-center gap-4'>About of
            <span className='text-blue-600 font-bold text-[24px]'>Syed Anwarul Ahque Piash</span>
            </h3>
            <p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque natus ipsum corporis ipsa hic quam, ex aspernatur, aperiam sed perferendis amet quasi voluptates veritatis, et odit labore exercitationem necessitatibus consectetur vero inventore ipsam iste illum. Expedita repellendus autem ut porro?</p>
           
        </div>
        <div className='mt-12'>
          <h3 className='text-[20px] text-black font-semibold'>Education</h3>
          <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
              <div>
                <span className='text-blue-600 text-[15px] font-semibold'>3 Jan,2024</span>
                <p className='text-[16px] font-medium text-gray-500'>FCPS,Surgery</p>
              </div>
              <p className='text-[14px] font-medium text-gray-500'>Mymensingh Medical College Hospital</p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
              <div>
                <span className='text-blue-600 text-[15px] font-semibold'>3 Jan,2024</span>
                <p className='text-[16px] font-medium text-gray-500'>FCPS,Surgery</p>
              </div>
              <p className='text-[14px] font-medium text-gray-500'>Mymensingh Medical College Hospital</p>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default DoctorAbout