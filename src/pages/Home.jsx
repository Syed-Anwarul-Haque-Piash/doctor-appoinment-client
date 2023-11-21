import React from 'react'

const Home = () => {
  return (
    <div className='container mx-auto lg:flex md:flex mt-5 mb-5'>
      <div className='flex flex-col lg:flex-row gap-4 items-center justify-between'>
        <div className='mt-5 mb-10 ml-12 '>
          <div className='lg:w-[576px]'>
            <h1 className='text-[36px] leading-[46px] text-emerald-700 font-[800] md:text-[60px] md:leading-[70px]'>World class care <br /> right where <br /> you need it</h1>
            <p className='mt-4 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum voluptas laborum, aperiam eligendi ipsa exercitationem nostrum quisquam aut beatae deserunt consequatur, tenetur illo perferendis blanditiis, rerum amet enim reiciendis? Minima provident suscipit distinctio voluptates tempore repudiandae sit assumenda quis. Aliquid commodi ex cupiditate optio dolorum soluta repudiandae enim id.</p>
            <button className='bg-sky-600 text-white mt-4 p-4 rounded-lg'>Appoinment</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home