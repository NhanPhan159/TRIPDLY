import React from 'react'
import TripStory from '../components/TripStory'
export default function User() {
  return (
    <div className="flex flex-col w-full h-fit bg-[#f5f5f5]">
        <div className='relative h-96 w-full flex flex-col items-center '>
            <div className='w-full h-1/3 bg-slate-600'></div>
            <div className='absolute w-2/3 h-1/2 '>
                <div className='relative h-1/2'>
                    <div className='absolute flex justify-center items-center h-52 w-full '>
                        <img className='w-32 rounded-full' src='https://res.cloudinary.com/practicaldev/image/fetch/s--StOs_dXE--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1185053/655ef889-0262-417c-b1d6-d2e7e854ff93.png'/>
                    </div>
                </div>
                <div className='w-full h-1/2 flex flex-row-reverse items-center bg-white rounded-t-lg border-x-2 border-t-2 border-[#efefef]'>
                    <div>
                        <button className='px-5 py-1 rounded-full bg-blue-200 mr-2 font-medium'>Edit</button>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 w-2/3 h-1/2 flex flex-col text-center bg-white rounded-b-lg mb-5 border-x-2 border-b-2 border-[#efefef]'>
                <h1 className='relative flex justify-center font-bold text-2xl'>Username</h1>
                <h1 className='relative flex justify-center text-center mt-3 ml-36 mr-36 text-lg'>
                   A Front-end Developer who is interested in human-computer interactions, media arts, artificial intelligence and everything in between.
                </h1>
                <div className='relative mt-7 mb-3 flex justify-center gap-4'>
                    <h1 className=' '>Da Nang</h1>
                    <h1>Joined</h1>
                </div>
            </div>
        </div>
        <div className='w-full flex flex-col items-center'>
            <div className='w-2/3 h-full flex flex-row gap-3'>
                <div className='w-1/3 flex flex-col h-full '>
                    <div className='w-full h-fit bg-white border-2 border-[#efefef] rounded-lg flex flex-col justify-center'>
                        <div className='p-3 flex flex-row items-center gap-2'>
                            <div className='pi pi-language'></div>
                            English, Vietnamese
                        </div>
                        <div className='p-3 flex flex-row items-center gap-2'>
                            <div className='pi pi-mobile'></div>
                            0905123456  
                        </div>
                        <div className='p-3 flex flex-row items-center gap-2'>
                            <div className='pi pi-star'></div>
                            3 trips created
                        </div>
                        <div className='p-3 flex flex-row items-center gap-2'>
                            <div className='pi pi-users'></div>
                            12 people joined
                        </div>
                        <div className='p-3 flex flex-row items-center gap-2'>
                            <div className='pi pi-thumbs-up'></div>
                            10 ratings
                        </div>
                        <div className='p-3 flex flex-row items-center gap-2'>
                            <div className='pi pi-comments'></div>
                            10 rated posts
                        </div>
                    </div>  
                </div>
                <div className='w-2/3 h-fit flex flex-col gap-3 '>
                    <TripStory/>
                    <TripStory/>
                    <TripStory/>
                    
                </div>
            </div>
        </div>
    </div>
    
  )
}
