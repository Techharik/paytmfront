import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const SignIn = () => {
    const [formDetails, setformDetails] = useState({
        username: '',
        password: '',
        firstname: "",
        lastname: ""
    })
    const navigate = useNavigate()


    const handlechange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setformDetails({ ...formDetails, [name]: value })
    }

    const handleSubmit = async () => {
        try {

            const response = await axios.post('http://localhost:3000/api/v1/loginuser', formDetails)
            console.log(response)
            if (response.data.success == true) {
                localStorage.setItem('tokenIn', response.data.data);
                navigate('/dashboard')
            }
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='bg-white p-4 rounded-lg'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-semibold text-lg'>Sign In</h1>
                    <p className='text-slate-400 text-center w-72 pb-8'>Enter your authentication to  create your account</p>
                </div>

                <div className='w-[400px] px-10'>
                    <div className='flex flex-col py-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='hari@gmail.com' className='border p-2 rounded-lg mt-1'
                            value={formDetails.username}
                            name='username'
                            onChange={(e) => handlechange(e)}
                        />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='hari@123#' className='border p-2 rounded-lg mt-1'
                            value={formDetails.password}
                            name='password'
                            onChange={(e) => handlechange(e)}
                        />
                    </div>

                    <button className='w-full bg-black  text-white font-semibold py-2 mt-6 rounded-lg hover:bg-opacity-80'
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                    <p className='text-center py-4'>
                        Register a New Account ?
                        <span className='underline'>
                            <Link to='/signup' > Sign Up
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignIn