import React from 'react'
import { Avatar, Collapse, IconButton } from "@material-tailwind/react"
import { useContext, useState } from 'react'
import MyContext from '../context/data/myContext'
import { NavLink } from 'react-router-dom';
import { AiOutlineShareAlt, AiOutlineSearch } from 'react-icons/ai'
import ShareDialogBox from './ShareDialog';
import SearchDialog from './SearchDialog';
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const admin = localStorage.getItem('admin');
  const [openNav, setOpenNav] = useState(false)
  const context = useContext(MyContext)
  const { mode, toggleMode } = context
  const NavbarMenu = (

    <ul className=" flex lg:flex-row flex-col gap-4 ">
      <li><NavLink to={'/'} className="hover:text-gray-300 !text-white" >Home</NavLink>
      </li>
      <li><NavLink to='/allBlogs' className="hover:text-gray-300 !text-white" >Blogs</NavLink></li>
      <li><NavLink to='/AdminLogin' className="hover:text-gray-300 !text-white" >Admin Login</NavLink></li>
    </ul>
  );

  return (
    <>

      <nav className="sticky w-screen p-4  items-center " style={{ background: mode === 'dark' ? 'rgb(30,41,59)' : '#30336b' }}>
        <div className='flex justify-between px-4 items-center mx-auto'>

          {/*Logo section */}
          <div className="Logo items-center gap-2 flex text-white">
            <img src={logo} alt="" className="w-10 h-10" />
            <span className='font-bold'>Tech <br/>Diva</span>
          </div>

          {/*Navlinks section */}
          <div className="lg:block hidden">
            {NavbarMenu}
          </div>

          {/*Icons section */}
          <div className='flex gap-2 items-center'>
            <div className="flex gap-4 items-center">
              {/* <AiOutlineShareAlt size={20} color="white" /> */}
              <ShareDialogBox />
              {/* <AiOutlineSearch size={20} color="white" /> */}
              <SearchDialog />
              {admin ? <NavLink to={'/dashboard'}>
                <Avatar src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'} size="xs" />
              </NavLink> : ""}
            </div>
            <div>
              {mode === 'light'
                ?
                <>
                  {/* Light Button  */}
                  <IconButton onClick={toggleMode} className=" flex items-center justify-center p-2  rounded-full " style={{ background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </IconButton>
                </>
                :
                <>
                  {/* Dark Button  */}
                  <IconButton onClick={toggleMode} className=" rounded-full flex items-center justify-center p-2" style={{ background: mode === 'light' ? '#ced6e0' : '#57606f' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                  </IconButton>
                </>}
            </div>
            {/* Mobile Toggle  */}
            <div>
              <IconButton
                className=" h-10 w-10 text-inherit flex items-center justify-center p-2 rounded-lg  lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
                style={{ background: mode === 'light' ? '#ced6e0' : '#57606f', color: mode === 'dark' ? 'white' : 'black' }}
              >
                {openNav ?
                  (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )
                  :
                  (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
              </IconButton>
            </div>
          </div>
        </div>
        {/*Mobile hamburger section */}
        <Collapse open={openNav}>
          {NavbarMenu}
        </Collapse>
      </nav>
    </>
  );
};



export default Navbar;
