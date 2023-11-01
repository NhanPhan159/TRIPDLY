import React, { useState } from 'react'

export default function Block() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [signup,setSignup] = useState(true);
  return (
    signup?
    <div className='w-4/5 h-auto bg-white rounded-xl md:w-1/3'>
      <p className='flex justify-center mt-5 text-4xl items-center text-cyan-900 font-semibold'>Tripdly</p>
      <p className='text-center p-2 text-sm'>Sign in to continue</p>

      <form className='flex flex-col justify-center'>
        <input type='text' className='p-2 border-2 mt-2 mb-2 ml-5 mr-5 shadow-sm rounded-xl' placeholder='Username' onChange={(e)=>setUsername(e.target.value)} ></input>
        <input type='password' className='p-2 border-2 mt-2 mb-2 ml-5 mr-5 rounded-xl' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} ></input>
        <a href='#' className='text-sm text-[#2EBBF5] ml-5 hover:underline hover:underline-offset-2 md:underline-offset-4'>Forgot your password?</a>
        <button className='p-2 bg-[#2EBBF5] text-white border-2 mt-2 mb-2  ml-5 mr-5 rounded-xl hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300'>Log in</button>
      </form>

      <p className='text-center p-2 text-sm mb-4'>Don't have an account? 
        <button className='text-[#2EBBF5] ml-1 md:underline-offset-4 hover:underline hover:underline-offset-2' onClick={()=>setSignup(false)}>
          Sign up</button>
      </p>
    </div>
    :
    <div className='w-4/5 h-auto bg-white rounded-xl md:w-1/3'>
      <button className='pi pi-angle-left p-2 mt-2 ' onClick={()=>setSignup(true)}></button>
      <p className='flex justify-center text-4xl items-center text-cyan-900 font-semibold'>Tripdly</p>
      <p className='text-center p-2 text-sm'>Sign up</p>

      <form className='flex flex-col justify-center mb-5'>
        <input type='text' className='p-2 border-2 mt-2 mb-2 ml-5 mr-5 shadow-sm rounded-xl' placeholder='Username' onChange={(e)=>setUsername(e.target.value)} ></input>
        <input type='password' className='p-2 border-2 mt-2 mb-2 ml-5 mr-5 rounded-xl' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} ></input>
        <input type='text' className='p-2 border-2 mt-2 mb-2 ml-5 mr-5 shadow-sm rounded-xl' placeholder='Confirm password' onChange={(e)=>setUsername(e.target.value)} ></input>
        <input type='password' className='p-2 border-2 mt-2 mb-2 ml-5 mr-5 rounded-xl' placeholder='Email' onChange={(e)=>setPassword(e.target.value)} ></input>
        <input type='password' className='p-2 border-2 mt-2 mb-2 ml-5 mr-5 rounded-xl' placeholder='Fullname' onChange={(e)=>setPassword(e.target.value)} ></input>
        <input type='password' className='p-2 border-2 mt-2 mb-2 ml-5 mr-5 rounded-xl' placeholder='Phone number' onChange={(e)=>setPassword(e.target.value)} ></input>

        <button className='p-2 bg-[#2EBBF5] text-white border-2 mt-2 mb-2  ml-5 mr-5 rounded-xl
         hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300'>
          Sign up</button>
      </form> 
    </div>
  )
}
