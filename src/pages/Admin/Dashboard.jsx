import React,{useContext} from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import { Link,useNavigate } from 'react-router-dom';
import {Button} from '@material-tailwind/react';
import logo2 from "../../assets/logo2.png"; 

const Dashboard = () => {
  const context = useContext(myContext)
  const {mode,getAllBlog,deleteBlogs} = context

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('admin'); // Remove admin data
    navigate('/'); // Navigate to home
    window.location.reload(); // Reload to clear state
};

  return (
    
    <Layout>
      <div className='py-10'>
        <div className='flex flex-wrap lg:justify-center items-center justify-start'>
          <div><img  className = 'w-40 h-40'src={logo2} alt="profile img" /></div>
          <div style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold p-3">
            <h1>Habeeba Khatoon</h1>
            <h2>Student</h2>
            <h2>Total BLog: {getAllBlog.length}</h2>
            <div> <Link to={'/createblog'}><Button style={{
                                            background: mode === 'dark'
                                                ? 'rgb(226, 232, 240)'
                                                : 'rgb(30, 41, 59)',
                                            color: mode === 'dark'
                                                ? 'black'
                                                : 'white'
                                        }}
                                        className='px-8 py-2'>Create Blog</Button></Link>
            <Button onClick={logout} style={{
                                            background: mode === 'dark'
                                                ? 'rgb(226, 232, 240)'
                                                : 'rgb(30, 41, 59)',
                                            color: mode === 'dark'
                                                ? 'black'
                                                : 'white'
                                        }}
                                        className='m-2 px-8 py-2'>Logout</Button></div>
          </div>
        </div>
        <hr className={`border-2
                 ${mode === 'dark'
                     ? 'border-gray-300'
                     : 'border-gray-400'}` 
                 }
                />
                {/* Table  */}
                <div className="">
                    <div className=' container mx-auto px-4 max-w-7xl my-5' >
                        <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
                            {/* table  */}
                            <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400" >
                                {/* thead  */}
                                <thead
                                    style={{
                                        background: mode === 'dark'
                                            ? 'white'
                                            : 'rgb(30, 41, 59)'
                                    }}
                                    className="text-xs ">
                                    <tr style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }}>
                                        <th  scope="col" className="px-6 py-3"> S.No
                                        </th>
                                        <th  scope="col" className="px-6 py-3">Thumbnail
                                        </th>
                                        <th  scope="col" className="px-6 py-3">Title
                                        </th>
                                        <th  scope="col" className="px-6 py-3">Category
                                        </th>
                                        <th  scope="col" className="px-6 py-3">Date
                                        </th>
                                        <th  scope="col" className="px-6 py-3">Action
                                        </th>
                                    </tr>
                                </thead>
                                {/* tbody  */}
                                {getAllBlog.length > 0
                                    ?
                                    <>
                                        {getAllBlog.map((item, index) => {
                                            const {thumbnail, date ,id} = item;
                                            console.log(item)
                                            

                                            return (
                                                <tbody>
                                                    <tr className=" border-b-2" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }}>
                                                        {/* S.No   */}
                                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                            {index + 1}.
                                                        </td>
                                                        {/* Blog Thumbnail  */}
                                                        <th style={{ color: mode === 'dark' ? 'white' : 'black' }} scope="row" className="px-6 py-4 font-medium ">
                                                            {/* thumbnail  */}
                                                            <img className='w-16 rounded-lg' 
                                                            src={thumbnail} alt="thumbnail" />
                                                        </th>
                                                        {/* Blog Title  */}
                                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                            {item.title}
                                                        </td>
                                                        {/* Blog Category  */}
                                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                            {item.category}
                                                        </td>
                                                        {/* Blog Date  */}
                                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                            {date}
                                                        </td>
                                                        {/* Delete Blog  */}
                                                        <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                            <button 
                                                            onClick={()=>deleteBlogs(id)} className=' px-4 py-1 rounded-lg text-white !bg-red-500 font-bold '> Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })}</>
                                    :
                                    <>
                                        <p>No Blogs Found</p>
                                    </>
                                }

                            </table>
                        </div>
                    </div>
                </div>
      </div>
    </Layout>
  )
}

export default Dashboard