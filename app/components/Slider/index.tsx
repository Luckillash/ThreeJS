import React from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

export default function Index() {

    return (

        <div className='h-screen w-screen bg-slate-600 grid grid-cols-12 justify-center items-center'>

            <div className='h-2/4 col-start-2 col-span-8 bg-white flex gap-8'>

                <div className='w-1/12 flex items-center justify-center text-4xl'> 
                
                    <BsChevronCompactLeft /> 
                
                </div>

                <div className="w-1/2 bg-sky-500 relative bg-[url('../app/assets/yo.jpg')] bg-cover bg-no-repeat">

                    <div className='absolute w-full h-1/5 bottom-0 left-0 bg-slate-900 opacity-60 text-white p-4'>

                        <h1 className='text-xl'>Texto</h1>

                    </div>

                </div>

                <div className='w-1/2'>item</div>

                <div className='w-1/12 flex items-center justify-center text-4xl'>

                    <BsChevronCompactRight />

                </div>

            </div>

        </div>

    )

}
