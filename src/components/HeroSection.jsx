import React, { createContext, useContext } from 'react'
import myContext from '../context/data/myContext';
import logo from "../assets/logo.png"; 

const HeroSection = () => {
  const context = createContext(myContext)
  const { mode } = context;
  return (
    <section className='p-4'
      style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>
      <main>
        <div className='flex m-4 gap-2  text-blue-100 justify-center items-center flex-col'>
          <img src={logo} alt="" />
          <h1 className='text-3xl font-bold'>BlogApp</h1>
          <p className='text-2xl'>Welcome to my Blogs</p>
        </div>
      </main>
    </section>
  )
}

export default HeroSection