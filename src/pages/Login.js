import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add your logic for form submission here
    console.log('Form submitted:', formData);
    toast.success('Login successfully!');
    navigate('/dashboard');
  };
  return (
    <div className='w-full h-[calc(100vh-80px)]'>
    <div className='w-full text-center leading-[3.2rem]'>
      <h1 className='text-[3.6rem] font-[700]'>Log In</h1>
      <p className='text-[1.2rem] '>Don't have an account? <Link className='text-[#116DFF]' to='/signup'>Sign Up</Link></p>
    </div>
    <div className='w-[80%] mx-auto pb-[1rem] flex lg:flex-row flex-col justify-around items-center '>
      
      {/* image */}
      <img src='https://img.freepik.com/free-vector/access-control-system-abstract-concept-vector-illustration-security-system-authorize-entry-login-credentials-electronic-access-password-passphrase-pin-verification-abstract-metaphor_335657-5746.jpg?t=st=1709980996~exp=1709984596~hmac=00cd7d416278973c863b94686d041e4048103f9e61d5d129d522cb5f097d5758&w=740' alt='login'  className='md:w-[40%] aspect-auto mx-auto'/>


      {/* form */}
      <form onSubmit={handleSubmit} className=' lg:w-[50%] w-full lg:flex flex-col items-center '>
        {/* email */}
        <div className='mt-[1rem] flex flex-col gap-[.5rem] lg:w-[60%]'>
          <label htmlFor='email' className=''>Email: </label>
          <input
            className='border-b-2 border-black pl-2 h-[2.4rem]'
            type='email'
            name='email'
            id='email'
            onChange={changeHandler}
            value={formData.email}
            placeholder='Enter your email address'

          ></input>
        </div>
        {/* password */}
        <div className='mt-[1rem] flex flex-col gap-[.5rem] lg:w-[60%]'>
          <label htmlFor='password' className=''>Password: </label>
          <input
            className='border-b-2 border-black pl-2 h-[2.4rem]'
            type='password'
            name='password'
            id='password'
            onChange={changeHandler}
            value={formData.password}
            placeholder='Enter your password'

          ></input>
        </div>
        

        <button className='mt-[1rem] relative left-[50%] translate-x-[-50%] lg:left-0 lg:translate-x-0 bg-black text-white '>
          <p className='px-[3rem] py-[.5rem] text-[1.1rem]'>Submit</p>
        </button>
      </form>
    </div>
  </div>
  )
}

export default Login