import { useRef, useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { useAuthStore } from '../store/auth';
import {InputText} from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

import axiosInstance from '../api/axios';
  

const Login = () => {

    const navigate = useNavigate()
    const updateInfoAuth = useAuthStore(state=>state.updateInfoAuth)

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
            const response =  await axiosInstance.post("http://127.0.0.1:4000/account/login",{ username, password },);
            setUser('');
            setPwd('');
            if(response.status===200){
                const token = response.data.token
                const role = response.data.role
                updateInfoAuth(true,role)
                localStorage.setItem("accessToken",token)
                navigate(`/${role.toLowerCase()}`)
            }
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
        <div className='flex h-screen'>
            <div className="grow p-20 bg-login flex justify-center items-center">
                <div className='w-64 '>
                    <p className='text-5xl font-bold text-slate-100'>Join an Exciting Social Experience.</p>
                </div>
            </div>
            <div className="grow flex justify-center items-center">
                <div className='w-3/5'>
                    <form onSubmit={handleSubmit}>
                        <p ref={errRef} className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400" aria-live="assertive">{errMsg}</p>
                            <div className="p-inputgroup flex-1 mb-4">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <InputText 
                                    ref={userRef}
                                    placeholder="Username" 
                                    onChange={(e) => setUser(e.target.value)}
                                    value={username}
                                />
                            </div>
                            <div className="p-inputgroup flex-1 mb-5">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-lock"></i>
                                </span>
                                <Password
                                    placeholder='*******' feedback={false}
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={password}
                                />
                            </div>
                            <div className='flex justify-center'>
                                <Button label='Login' rounded></Button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login