import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ServiceCard = ({service,index}) => {
    const {name,desc,bgColor,textColor}=service
  return (
    <div className='py-[30px] px-3 lg:px-5 mx-auto'>
        <h2 className='text-[26px] leading-9 font-[700]'>{name}</h2>
        <p className='text-[16px] leading-7 font-[400] mt-4 text-gray-400'>{desc}</p>
        <div className='flex items-center justify-between mt-[30px]'>
        <Link to="/doctor" className='w-[44px] h-[44px] rounded-full border border-solid items-center justify-center mt-[30px] mx-auto flex group hover:bg-blue-500'>
            <BsArrowRight className='group hover:text-white w-6 h-5'></BsArrowRight>
        </Link>
        <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]'
        style={{background:`${bgColor}`,
        color:`${textColor}`,
        borderRadius:"6px 0 0 0 "
    }}
        >
            {index+1}
        </span>
        </div>
    </div>
  )
}

export default ServiceCard