

/*import React, { useState } from 'react';
import axios from "axios";
import { API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getInputData = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (isLogin) {
            // Login
            const user = { email, password };
            try {
                const res = await axios.post(`${API_END_POINT}/login`, user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });
                if (res.data.success) {
                    toast.success(res.data.message);
                    // Handle user state or redirection as needed
                }
                navigate("/");
            } catch (error) {
                console.error("Login Error:", error);
                if (error.response && error.response.data) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("An error occurred during login.");
                }
            } finally {
                setLoading(false);
            }
        } else {
            // Register
            const user = { fullName, email, password };
            try {
                const res = await axios.post(`${API_END_POINT}/register`, user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });
                if (res.data.success) {
                    toast.success(res.data.message);
                    setIsLogin(true); // Switch to login mode after successful registration
                }
            } catch (error) {
                console.error("Register Error:", error);
                if (error.response && error.response.data) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("An error occurred during registration.");
                }
            } finally {
                setLoading(false);
            }
        }

        // Reset form fields after submission
        setFullName("");
        setEmail("");
        setPassword("");
    }

    const toggleLoginMode = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div>
            <div className='absolute'>
                <img className='w-[100vw] h-[100vh] bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="banner" />
            </div>
            <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
                <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
                <div className='flex flex-col'>
                    {!isLogin && <input value={fullName} onChange={(e) => setFullName(e.target.value)} type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />}
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    <button type='submit' className={`bg-red-600 mt-6 p-3 text-white rounded-sm font-medium ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}>
                        {isLoading ? "Loading..." : (isLogin ? "Login" : "Signup")}
                    </button>
                    <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}
                        <span onClick={toggleLoginMode} className='ml-1 text-blue-900 font-medium cursor-pointer'>
                            {isLogin ? "Signup" : "Login"}
                        </span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login;*/

import React, { useState } from 'react';
import axios from "axios";
import { API_END_POINT } from '../utils/constant';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, setLoading } from '../redux/userSlice';

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setLoadingState] = useState(false);

    const getInputData = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        setLoadingState(true);

        if (isLogin) {
            // Login
            const user = { email, password };
            try {
                const res = await axios.post(`${API_END_POINT}/login`, user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });
                if (res.data.success) {
                    toast.success(res.data.message);
                    dispatch(setUser(res.data.user));
                    navigate('/');
                }
            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error);
            } finally {
                dispatch(setLoading(false));
                setLoadingState(false);
            }
        } else {
            // Register
            const user = { fullName, email, password };
            try {
                const res = await axios.post(`${API_END_POINT}/register`, user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });
                if (res.data.success) {
                    toast.success(res.data.message);
                    setIsLogin(true); // Switch to login mode after successful registration
                }
            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error);
            } finally {
                dispatch(setLoading(false));
                setLoadingState(false);
            }
        }

        // Reset form fields after submission
        setFullName("");
        setEmail("");
        setPassword("");
    }

    const toggleLoginMode = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div>
            <Toaster />
            <div className='absolute'>
                <img className='w-[100vw] h-[100vh] bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="banner" />
            </div>
            <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
                <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
                <div className='flex flex-col'>
                    {!isLogin && <input value={fullName} onChange={(e) => setFullName(e.target.value)} type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />}
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    <button type='submit' className={`bg-red-600 mt-6 p-3 text-white rounded-sm font-medium ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}>
                        {isLoading ? "Loading..." : (isLogin ? "Login" : "Signup")}
                    </button>
                    <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}
                        <span onClick={toggleLoginMode} className='ml-1 text-blue-900 font-medium cursor-pointer'>
                            {isLogin ? "Signup" : "Login"}
                        </span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login;
