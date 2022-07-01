import React from 'react'
import { Link } from 'react-scroll';
import Logo from '../assets/coder.png';
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import {
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
//   FaFacebook,
// } from 'react-icons/fa';
const Newnavbar = () => {
  return (
    <div>
    <header className="text-[white] body-font font-extrabold">
    <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
    </div>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
      <a className="mr-5 hover:text-pink-900">
      <Link to='about' smooth={true} duration={500}>
            About
          </Link></a>
      <a className="mr-5 hover:text-pink-900">
      <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
      </a>
      <a className="mr-5 hover:text-pink-900">
      <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
      </a>
      <a className="mr-5 hover:text-pink-900">
      <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
      </a>
    </nav>
  </div>
</header>
 </div>
  )
}

export default Newnavbar