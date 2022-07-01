import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Home = () => {
  return (
  <section classNme="text-gray-600 body-font" data-aos="fade-down-right"
  data-aos-duration="3000"  >
  <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
    <div  className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 h-[550px]">
      <img className=" sm:hidden lg:block object-cover object-center rounded-[10px] " alt="hero " src="../assets/sachith-edit.jpg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" >
    <p className='text-pink-600 font-extrabold text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]  max-w-[400px]'>
          Sachith Wickramasekara
        </h1>
        <h2 className='text-4xl sm:text-3xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[400px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <Link to='work' smooth={true} duration={500}>
           View Work
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
    </div>
    <div className='cursor-pointer'>
        <div className='hidden lg:flex fixed flex-col top-[10%] right-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-[50px] mb-2'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/sachith-wickramasekara-302238201/'
            >
             <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-[50px] mb-2'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/SachithWickramasekara?tab=repositories'
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] rounded-[50px] mb-2'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:sachithwickramasekara@gmail.com'
            >
            <HiOutlineMail size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-[#4684cc] rounded-[50px] mb-2'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.facebook.com/sachith.wickramasekara/'
            >
             <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-[#c86537] rounded-[50px] mb-2'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/sach.cha_/'
            >
             <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-[50px]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
               <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
        </div>
    </div>
  </div>
</section>
  
);
};

export default Home;