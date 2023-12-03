import React from 'react'
import doctor from '../../assets/images/doctor2.jpg'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section>
            <div className="container">
                <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                    <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ml-10'>
                        <img src={doctor} alt="" />
                    </div>
                    <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                        <h2 className='text-3xl font-bold ml-4'>Proud to be one of the best</h2>
                        <p className='mt-10 text-gray-400 ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima similique veritatis optio non libero eveniet, ea pariatur exercitationem sequi corporis incidunt, aspernatur temporibus voluptatem eos corrupti tempore soluta error!</p>

                        <p className='mt-7 text-gray-400 ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deserunt quaerat tenetur saepe nulla excepturi quo harum a. Iure commodi voluptates distinctio consectetur consequuntur, delectus voluptatum non quam tempora. Recusandae.</p>
                        <Link to='/'><button className='bg-sky-600 text-white mt-4 p-4 rounded-lg'>See More</button></Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About