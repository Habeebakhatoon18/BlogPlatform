import React, { useContext, useState } from 'react'
import myContext from '../../context/data/myContext'
import { useNavigate } from 'react-router';
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../../Firebase/FirebaseConfig";


const AdminLogin = () => {
  console.log("admin")
  const context = useContext(myContext)
  const { mode } = context
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    console.log("Login function triggered!");
    if (!email || !password) {
      return toast.error("Fill all required fields")
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged In: ", result.user); // Debugging line
      toast.success('Login Success')
      localStorage.setItem('admin', JSON.stringify(result));
      navigate('/dashboard');
    } catch (error) {
      console.error("Firebase Login Error:", error.code, error.message);
      toast.error('Login Failed')
      console.log(error)
    }
  }

  return (
    <div className='flex h-screen w-screen justify-center items-center'>
      <div className='w-full max-w-[24rem] rounded-xl text-white' style={{
        background: mode === 'dark'
          ? 'rgb(30, 41, 59)'
          : 'rgb(226, 232, 240)'
      }}>
        <div className='flex flex-col rounded-xl rounded-b-none items-center justify-center p-4' style={{
          background: mode === 'dark'
            ? 'rgb(226, 232, 240)'
            : 'rgb(30, 41, 59)'
        }}>
          <div className='rounded-full mb-2' ><img src="https://cdn-icons-png.flaticon.com/128/727/727399.png" alt="" /></div>
          <p>Admin Login</p>
        </div>

        <form action="" className='flex p-4  flex-col gap-4'>
          <div className='border-2  text-gray-600 p-2 rounded-xl'><input className="w-full outline-none" type="email " placeholder='Email' label="Email" name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} /></div>
          <div className='border-2 text-gray-600 p-2 rounded-xl'><input className="w-full outline-none" type="password" placeholder='Password' label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} /></div>
          <button
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
            style={{
              background: mode === 'dark'
                ? 'rgb(226, 232, 240)'
                : 'rgb(30, 41, 59)',
              color: mode === 'dark'
                ? 'rgb(30, 41, 59)'
                : 'rgb(226, 232, 240)'
            }}>
            Login
          </button>
        </form>
      </div>


    </div>
  )
}

export default AdminLogin
