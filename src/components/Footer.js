import React from 'react'
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFacebook,
  } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='w-full h-[100px] bg-[#434445] p-[1rem]'>
        <p className='flex flex-row justify-center text-[15px] text-[#5ccbd7]'> <a href='/'>Sachith Wickramasekara</a></p>
        <ul className='flex flex-row justify-center items-center mt-[20px]'>
            <li>
              <a href='https://www.facebook.com/sachith.wickramasekara/'>
               <FaFacebook size={28}/>
               </a> 
            </li>
            <li>
              <a href='https://www.linkedin.com/in/sachith-wickramasekara-302238201/'>
                <FaLinkedin size={28}/>
              </a>
            </li>
            <li>
              <a href='https://github.com/SachithWickramasekara?tab=repositories'>
                <FaGithub size={28}/>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/sach.cha_/'>
                <FaInstagram size={28}/>
              </a>
            </li>
        </ul>
    </div>
  )
}

export default Footer