import React from 'react'
import '../App.css'
//import doctor from  '../assets/images/doctor.jpg'
import doctor2 from '../assets/images/doctor2.jpg'
import doctor3 from '../assets/images/doctor3.jpg'
import doctor4 from '../assets/images/doctor4.jpg'
import find1 from '../assets/images/finddoctor1.png'
import find2 from '../assets/images/find2.png'
import find3 from '../assets/images/find3.jpg'
import { Link } from 'react-router-dom'
import{BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About'

const Home = () => {
  return (
    
      <div className=''>
      <div className='flex flex-col lg:flex-row gap-4 items-center justify-between hero'>
        <div className='mt-5 mb-10 ml-12 '>
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
        <div className='flex gap-6 justify-end'>
           <div>
            <img className='w-full h-96' src={doctor2} alt="" />
           </div>
           <div>
              <img className='w-full mb-6 h-48' src={doctor3} alt="" />
              <img className='w-full h-48' src={doctor4} alt="" />
           </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='text-center font-extrabold text-4xl'>Providing best medical service</h2>
            <p className='text-gray-400 text-center mt-3'>World class healthcare provide there <br /> and provide some test and very good <br /> and high profile doctor.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={find1} alt="" />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[25px] leading-9 text-gray-800 font-[700] text-center'>Find a doctor</h2>
                <p className='text-[16px] leading-7 text-gray-400 font-[400] mt-4 text-center'>World class healthcare provide there <br /> and provide some test and very good <br /> and high profile doctor.</p>
                <Link to="/doctor" className='w-[44px] h-[44px] rounded-full border border-solid items-center justify-center mt-[30px] mx-auto flex group hover:bg-blue-500'>
                  <BsArrowRight className='group hover:text-white w-6 h-5'></BsArrowRight>
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img className='w-60 h-56' src={find2} alt="" />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[25px] leading-9 text-gray-800 font-[700] text-center'>Find a location</h2>
                <p className='text-[16px] leading-7 text-gray-400 font-[400] mt-4 text-center'>World class healthcare provide there <br /> and provide some test and very good <br /> and high profile doctor.</p>
                <Link to="/doctor" className='w-[44px] h-[44px] rounded-full border border-solid items-center justify-center mt-[30px] mx-auto flex group hover:bg-blue-500'>
                  <BsArrowRight className='group hover:text-white w-6 h-5'></BsArrowRight>
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img className='w-56 h-56' src={find3} alt="" />
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[25px] leading-9 text-gray-800 font-[700] text-center'>Book Appoinment</h2>
                <p className='text-[16px] leading-7 text-gray-400 font-[400] mt-4 text-center'>World class healthcare provide there <br /> and provide some test and very good <br /> and high profile doctor.</p>
                <Link to="/doctor" className='w-[44px] h-[44px] rounded-full border border-solid items-center justify-center mt-[30px] mx-auto flex group hover:bg-blue-500'>
                  <BsArrowRight className='group hover:text-white w-6 h-5'></BsArrowRight>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About/>
    </div>
    
  )
}

export default Home