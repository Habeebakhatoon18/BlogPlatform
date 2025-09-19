import React, { useContext } from 'react'
import myContext from '../context/data/myContext';
import logo from "../assets/logo.png";
const Footer = () => {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <footer style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>
      <div className='flex mx-auto sm:flex-row flex-col justify-between items-center p-4 text-gray-400'>
        <div className='flex items-center gap-4 '>
          <img className="w-10" src={logo} alt="" />
          <span className='text-white'> BlogApp | </span>
          <p>&copy; All rights reserved </p>
        </div>
        <div> <p>Made by By Habeeba Khatoon</p></div>
        <div className='text-white'>

          <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center gap-2  sm:justify-start">
            <a href="https://github.com/Habeebakhatoon18" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.24 1.839 1.24 1.07 1.835 2.809 1.304 3.495.997.108-.775.42-1.304.764-1.605-2.665-.303-5.466-1.333-5.466-5.932 0-1.312.469-2.382 1.235-3.22-.123-.303-.535-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.526 11.526 0 013.003-.403c1.019.005 2.045.137 3.003.403 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.838 1.234 1.908 1.234 3.22 0 4.609-2.804 5.625-5.475 5.921.43.37.823 1.1.823 2.22v3.293c0 .319.218.694.825.576C20.565 22.093 24 17.595 24 12.297c0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>


            <a href="https://www.instagram.com/habibakhatoon18/" target='_blank' className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            {/* Icon 4  */}
            <a href="https://www.linkedin.com/in/habeeba-khatoon18/" target='_blank' className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer