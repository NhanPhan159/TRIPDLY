import React from 'react'

export default function User() {
  return (
    <>
        <div className='h-3/5 bg-slate-500'>
            <div className='w-2/3 h-1/2 bg-yellow-500 ml-52 mr-52 '>
                <div className='h-1/2'>

                </div>
                <div className='h-1/2 bg-white flex flex-row-reverse items-center'>
                    <div>
                        <button className='p-2 bg-blue-400 rounded-xl mr-5'>Edit</button>
                    </div>
                </div>
            </div>
            <div className='w-2/3 h-1/2 flex flex-col text-center bg-red-500 ml-52 mr-52 '>
                <h1 className='flex justify-center font-bold text-2xl'>Username</h1>
                <h1 className='flex justify-center text-center mt-3 ml-36 mr-36 text-lg'>
                   A Front-end Developer who is interested in human-computer interactions, media arts, artificial intelligence and everything in between.
                </h1>
                <div className='mt-7 flex justify-center gap-4'>
                    <h1 className=' '>Da Nang</h1>
                    <h1>Joined</h1>
                </div>
            </div>
        </div>
        <div className='h-1/2 flex '>
            <div className='w-2/3 bg-green-200 ml-52 mr-52'>
                <div className='w-1/3 flex flex-col h-full bg-black'>

                </div>
                <div className='w-2/3 flex flex-col h-full'>

                </div>
            </div>
        </div>
    </>
    
  )
}
