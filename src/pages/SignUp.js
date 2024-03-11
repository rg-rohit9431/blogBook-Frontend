import React, { useState  } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


//icons


const SignUp = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('password mismatched!');
      return;
    }
    // You can add your logic for form submission here
    console.log('Form submitted:', formData);
    toast.success('Register successfully!');
    navigate('/');
  };

  return (
    <div className='w-full h-[calc(100vh-80px)]'>
      <div className='w-full text-center leading-[3.2rem]'>
        <h1 className='text-[3.6rem] font-[700]'>Sign Up</h1>
        <p className='text-[1.2rem] '>Already have an account? <Link className='text-[#116DFF]' to='/login'>Log In</Link></p>
      </div>
      <div className='w-[80%] mx-auto pb-[1rem] flex lg:flex-row flex-col-reverse justify-around items-center '>
        <form onSubmit={handleSubmit} className=' lg:w-[50%] w-full '>
          {/* name */}
          <div className='mt-[1rem] flex flex-col gap-[.5rem] lg:w-[60%]'>
            <label htmlFor='name' className=''>Name: </label>
            <input
              className='border-b-2 border-black pl-2 h-[2.4rem]'
              type='text'
              name='name'
              id='name'
              onChange={changeHandler}
              value={formData.name}
              placeholder='Enter your full name'
              required
            ></input>
          </div>
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
              required
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
              required
            ></input>
          </div>
          {/* confirmPassword */}
          <div className='mt-[1rem] flex flex-col gap-[.5rem] lg:w-[60%]'>
            <label htmlFor='confirmPassword' className=''>ConfirmPassword: </label>
            <input
              className='border-b-2 border-black pl-2 h-[2.4rem]'
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              onChange={changeHandler}
              value={formData.confirmPassword}
              placeholder='Enter your confirmPassword'
              required
            ></input>
          </div>

          <button className='mt-[1rem] relative left-[50%] translate-x-[-50%] lg:left-0 lg:translate-x-0 bg-black text-white '>
            <p className='px-[3rem] py-[.5rem] text-[1.1rem]'>Submit</p>
          </button>
        </form>

        
        {/* image */}
        <img src='https://img.freepik.com/free-vector/stay-connected-people-abstract-concept-vector-illustration-self-isolation-social-media-connections-friends-meetup-online-communication-social-distance-stay-home-abstract-metaphor_335657-6188.jpg?t=st=1709978248~exp=1709981848~hmac=105e446e230a62d28bf98167e3b9906157b641bd8b55d6749f8f79cfaa640366&w=740' alt='signup'  className='md:w-[40%] aspect-auto mx-auto'/>
      </div>
    </div>
  )
}

export default SignUp