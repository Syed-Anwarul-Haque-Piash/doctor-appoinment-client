import React from 'react'
import ServiceList from './ServiceList'

const Services = () => {
  return (
    <section>
        <div className="container">
            <div className='xl:w-[470px] mx-auto'>
                <h2 className='text-center text-3xl font-bold mt-4'>Our Medical Services</h2>
                <p className='text-center text-gray-400 mt-4'>World class healthcare provide there
                     and provide some test and very good
                    and high profile doctor.</p>
            </div>
            <ServiceList></ServiceList>
        </div>
    </section>
  )
}

export default Services