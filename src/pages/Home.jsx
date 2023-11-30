import React from 'react'
import '../App.css'

const Home = () => {
  return (
    <div className='container mx-auto lg:flex md:flex mt-5 mb-5 hero'>
      <div className='flex flex-col lg:flex-row gap-4 items-center justify-between'>
        <div className='mt-5 mb-10 ml-36 '>
          <div className='lg:w-[576px]'>
            
            <h1 className='text-[36px] leading-[46px] text-emerald-700 font-[800] md:text-[60px] md:leading-[70px]'>World class care <br /> right where <br /> you need it</h1>
            <p className='mt-4 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum voluptas laborum, aperiam eligendi ipsa exercitationem nostrum quisquam aut beatae deserunt consequatur, tenetur illo perferendis blanditiis, rerum amet enim reiciendis? Minima provident suscipit distinctio voluptates tempore repudiandae sit assumenda quis. Aliquid commodi ex cupiditate optio dolorum soluta repudiandae enim id.</p>
            <button className='bg-sky-600 text-white mt-4 p-4 rounded-lg'>Appoinment</button>
          </div>
          <div className='mt-5 lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-5'>
             <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]'>2+</h2>
              <span className='w-[100px] h-2 bg-yellow-300 rounded-full block mb-[14px]'></span>
              <p className='text-slate-400 italic	'>Years Of Experience</p>
             </div>
             <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]'>2+</h2>
              <span className='w-[100px] h-2 bg-purple-500-300 rounded-full block mb-[14px]'></span>
              <p className='text-slate-400 italic	'>Clinic Location</p>
             </div>
             <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]'>100%</h2>
              <span className='w-[100px] h-2 bg-blue-300 rounded-full block mb-[14px]'></span>
              <p className='text-slate-400 italic	'>Patient Satisfaction</p>
             </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home