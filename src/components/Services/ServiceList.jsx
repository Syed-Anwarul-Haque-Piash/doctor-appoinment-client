import React from 'react'
import { services } from '../../assets/data/services'
import ServiceCard from './ServiceCard'

const ServiceList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {/* {services.map(service =><ServiceCard service={service}></ServiceCard>)} */}
       {services.map((service,index)=><ServiceCard service={service} index={index} key={index}></ServiceCard>)}
    </div>
  )
}

export default ServiceList