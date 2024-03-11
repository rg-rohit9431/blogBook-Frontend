import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';

//components
import Profile from '../component/Profile'
import DashboradNav from '../component/DashboradNav'

//icons
import { IoMdAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";



const Dashboard = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  //multiple image
  const [selectedImages, setSelectedImages] = useState([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages((prevImages) => [...prevImages, ...files]);
  };

  const handleMainImageChange = (index) => {
    setMainImageIndex(index);
  };

  //addfrom 
  const [addForm, setAddform] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    highlight: '',
    images: [],
    description: ''
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.images = selectedImages;

    // You can add your logic for form submission here
    console.log('Form submitted:', formData);
    toast.success('Successfully Added!');
  };



  //searchbar
  const [searchbar,setSearchBar] =useState('');
  const changeSearchbarHandler = (e) => {
    setSearchBar(e.target.value);
  };
  const enter = (event) => {
    if (event.key === 'Enter') {
      // Perform the submit action here
      console.log(searchbar);
      console.log('Submit action triggered!');
      // You can call a function to handle the submit logic or dispatch an action
    }
  };
  return (
    <div className='relative w-full h-[100vh] flex flex-col lg:flex-row'>
      <DashboradNav showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className='flex w-full h-[100vh]'>
        {
          windowWidth >= 640 ?
            (<div><Profile windowWidth={windowWidth} size={`100vh`} /></div>) :
            (
              <div>
                {
                  showMenu && <Profile size={`100vh`}  />
                }
              </div>
            )
        }
        <div className={`w-full h-100vh overflow-scroll example ${windowWidth>640 ? 'p-[2rem]' : 'p-2'}`}>
          {/* header part */}
          <div className='w-full flex lg:flex-row flex-col gap-[1rem] lg:gap-0 justify-between'>
            <h1 className='text-[2.8rem] font-[700] pt-[1rem] text-center'>Welcome To blog Book!</h1>
            <div className='flex flex-wrap justify-around gap-[1rem]'>
              <div className='relative border-2 h-fit w-fit rounded-md'>
                <input
                  className='h-[3rem] w-[20rem] pl-2 pr-[36px]'
                  type='text'
                  value={searchbar}
                  onChange={changeSearchbarHandler}
                  onKeyDown={enter}
                  placeholder='Search other member & follow'
                />
                <CiSearch className=' absolute text-[26px] right-[10px] top-[50%] translate-y-[-50%]' />
              </div>
              <div
                onClick={() => {
                  setAddform(!addForm);
                }}
                className='h-fit flex gap-[4px] items-center bg-black text-white px-[1rem] py-[.5rem] rounded-md cursor-pointer'>
                <IoMdAdd className='text-[1.4rem]' />
                <p className=''>blogs</p>
              </div>
            </div>
          </div>





          {
            addForm &&

            <form onSubmit={handleSubmit} className='w-full h-fit border-2 rounded-sm p-2 mt-[1rem]'>
              <div className='text-center'>
                <p className='text-[1.6rem] font-[700]  mt-[1rem] font-[cursive]'>Add your Blogs</p>
                <p className='text-[1.2rem] text-[#116DFF]'>Explore New Things And add More </p>
              </div>
              {/* Title */}
              <div className='mt-[1rem] w-full'>
                <label htmlFor='title' className='bg-white my-[.5rem] text-[1.2rem]'>Title: </label>
                <input
                  id='title'
                  name='title'
                  type='text'
                  className={`border-b-2 border-black pl-2 h-[2.4rem] capitalize ${windowWidth>640 ? 'w-[40%]' : 'w-full'}`}
                  onChange={changeHandler}
                  value={formData.title}
                  placeholder='Enter your blog title'
                ></input>
              </div>

              <div className='w-full flex md:flex-row flex-col justify-between'>
                {/* Highlight */}
                <div className='flex flex-col mt-[1rem] md:w-[40%]'>
                  <label htmlFor='highlight' className='bg-white my-[.5rem] text-[1.2rem]'>Highlight: </label>
                  <textarea
                    id='highlight'
                    name='highlight'
                    type='text'
                    className='border-b-2 border-black pl-2 pt-2 h-[10rem]'
                    onChange={changeHandler}
                    value={formData.highlight}
                    placeholder='Enter your blog highlight'
                  ></textarea>
                </div>

                {/* description */}
                <div className='flex flex-col mt-[1rem] md:w-[40%]'>
                  <label htmlFor='description' className='bg-white my-[.5rem] text-[1.2rem]'>Description: </label>
                  <textarea
                    id='description'
                    name='description'
                    type='text'
                    className='border-b-2 border-black pl-2 pt-2 h-[10rem]'
                    onChange={changeHandler}
                    value={formData.description}
                    placeholder='Enter your blog description'
                  ></textarea>
                </div>
              </div>

              {/* image */}
              <div className="flex items-center justify-center mt-[1rem] w-full">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                  <h1 className="text-2xl font-bold mb-4">Multiple Image Upload</h1>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="mb-4"
                  />
                  <div className="grid grid-cols-3 gap-4">
                    {selectedImages.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Selected ${index + 1}`}
                          className="w-full h-24 object-cover rounded cursor-pointer"
                          onClick={() => handleMainImageChange(index)}
                        />
                        {index === mainImageIndex && (
                          <div className="absolute inset-0 bg-indigo-500 opacity-25 rounded"></div>
                        )}
                        {index === mainImageIndex && (
                          <div className="absolute inset-0 flex items-center justify-center text-white">
                            <span>Main Image</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* button */}
              <button className='mt-[1rem] relative left-[50%] translate-x-[-50%] bg-black text-white '>
                <p className='px-[3rem] py-[.5rem] text-[1.1rem]'>Submit</p>
              </button>
            </form>
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard