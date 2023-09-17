import { useRef, useState, useEffect } from 'react';
import {Navigate,Link,useNavigate} from 'react-router-dom'

import axios from '../api/axios';
  

const Login = () => {

    const navigate = useNavigate()

    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLParagraphElement>(null);

    const [username, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        try {
            const response =  await axios.post("http://127.0.0.1:4000/account/login",{ username, password },);
            setUser('');
            setPwd('');
            if(response.status)
                navigate("/home")
                
        } catch (err:any) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current?.focus();
        }
    }

    return (
        <div className='flex justify-center'>
            <div>
            <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Sign in</h1>
            <p ref={errRef} className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400" aria-live="assertive">{errMsg}</p>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='flex my-5'>
                    <label htmlFor="username" className="mb-2 text-sm font-medium text-gray-900 ">Your username</label>
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={username}
                        required
                        />
                </div>
                <div className='flex my-5'>    
                    <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                    <input
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        type="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={password}
                        required
                        />
                </div>
                <button className='ml-20 w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Sign In</button>
            </form>
            <p>
                Need an Account?
                <button className='ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Sign Up</button>
            </p>
            </div>
        </div>
    )
}

export default Login