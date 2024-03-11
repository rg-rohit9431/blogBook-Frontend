import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';

//component
import DummyData from "../DummyData";
import Card from "../component/Card";

//image
import blog from '../assets/blog.png';

const Home = () => {

  // contactpage
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
    toast.success('Register successfully!');
  };

  // const handleMove = (size) => {
  //   window.scrollTo({ top: size, behavior: "smooth" }); // here it goes
  // };

  const handleMoveToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div>
      {/* herosection */}
      <div className='z-[1] relative h-[calc(100vh-80px)] w-full bg-black '>
        <img src='https://img.freepik.com/free-photo/3d-background-with-white-cubes_23-2150472983.jpg?t=st=1710066746~exp=1710070346~hmac=99a579e68753ebef76e4b9fb6b6bae784dafd8c82a69a0a3358166798bb802a5&w=996'
          alt='bgImage'
          className='absolute w-full h-full  opacity-15 right-0 object-cover z-[-1]' />

        <section className="z-[2] text-white h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Unleashing the Power of <span className='text-[#116DFF]'>Possibilities</span></h1>
          <p className="text-lg md:text-xl text-center text-[#116DFF]">Explore, Learn, and Inspire with our Thoughtful Insights and Engaging Stories.</p>
          <Link
            className='bg-white text-black mt-[1rem] px-[4rem] py-[1rem] rounded-sm cursor-pointer'
            to='/signup'><p className='font-[500] text-[1.2rem]'>Get Started</p></Link>
        </section>
      </div>

      <div className='lg:flex-row flex flex-col justify-evenly lg:justify-around w-full min-h-[80vh] h-fit items-center mt-[3rem]'>
        <img src='https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?t=st=1710071028~exp=1710074628~hmac=9d36114033473fe11831037931448b10d49776af95182ef818838d307267f3b7&w=1060'
          alt='blogimage'
          className='max-w-[600px] aspect-auto w-[90%]' />

        <div className='max-w-[800px] flex flex-col items-center'>
          <p className='text-[2.4rem] font-semibold tracking-tight leading-[2.8rem] text-center'>WEEKLY ARTICLES WITH INSIGHT INTO THE WEEKEND'S MESSAGE</p>
          <p className='text-[1.2rem] text-[#116DFF] mt-[.5rem] w-[80%] mx-auto text-center'>Our blog takes the message from the weekend and lays out next right steps, so you can hear a message and do a message in practical ways.</p>

          <button
            onClick={handleMoveToBottom}
            className='text-white bg-black mt-[1rem] px-[4rem] py-[1rem] rounded-sm cursor-pointer'
          >
            <p className='font-[500] text-[1.2rem]'>See Demo</p>
          </button>
        </div>
      </div>


      <div className='w-full h-fit my-[2rem] flex flex-wrap justify-center gap-[2rem]'>
        {
          DummyData.map((data, index) => <Card data={data} key={index} />)
        }
      </div>

      {/* contactus */}
      <div className='w-full bg-gray-200 flex lg:flex-row flex-col lg:justify-center justify-evenly items center p-2 pb-[2rem]'>
        <div className='lg:w-[50%] w-full text-center lg:text-start'>
          <p className='text-[1.8rem] font-[400] my-[1rem]'>Subscribe to Weekly All Updates into the World of Art and Expression</p>
          <p className=' text-[1.1rem] text-gray-6 leading-[2rem]'>Explore the boundless realms of artistic inspiration, discover unique perspectives, and ignite your passion for creativity with our curated collection of insightful articles and engaging stories. Immerse yourself in a vibrant community where each piece unveils the power of self-expression, fostering a rich tapestry of ideas and inspiration. Join us on this enriching exploration of creativity's diverse landscape!</p>
        </div>

        <div className='w-full lg:w-[40%]'>
          <form onSubmit={handleSubmit} className=' w-full lg:flex flex-col items-center '>
            {/* email */}
            <div className='mt-[1rem] flex flex-col gap-[.5rem] lg:w-[60%]'>
              <label htmlFor='email' className='text-[1.2rem]'>Email: </label>
              <input
                className='border-b-2 border-black pl-2 h-[3rem]'
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
              <label htmlFor='password' className='text-[1.2rem]'>Password: </label>
              <input
                className='border-b-2 border-black pl-2 h-[3rem]'
                type='password'
                name='password'
                id='password'
                onChange={changeHandler}
                value={formData.password}
                placeholder='Enter your password'

              ></input>
            </div>


            <button className='mt-[2rem] lg:w-[60%]  w-full bg-black text-white '>
              <p className='px-[6rem] py-[.5rem] text-[1.1rem]'>Login</p>
            </button>
          </form>
        </div>
      </div>

      {/* footer */}
      <div className='p-[2rem] pb-[1rem] bg-black text-white'>
        <div className='flex md:flex-row flex-col items-center justify-between'>
          <Link className='w-fit h-full flex items-center'>
            <img src={blog} alt='logo' className='w-[15rem] aspect-auto' />
          </Link>
          <p className='text-[1.2rem]'>Stay Connected </p>
        </div>
        <p className='w-[95%] mx-auto h-[1px] my-[1rem] bg-gray-200'></p>
        <p className='text-center'>©  {new Date().getFullYear()} <Link to='https://github.com/rg-rohit9431' className='text-[#116DFF]'>rg_rohit9431</Link></p>
      </div>

    </div>
  )
}

export default Home