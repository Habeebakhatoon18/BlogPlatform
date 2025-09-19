import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/home/Home"
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import NoPage from "./pages/nopage/Nopage";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "../pages/admin/AdminLogin";
import Dashboard from "../pages/admin/Dashboard";
import CreateBlog from "../pages/admin/createBlog";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import MyState from './context/MyState';
import logo from './assets/logo2.png'

function App() {
  return ( 
    <MyState>
      <Helmet>
          <title>Tech Diva-By Habeeba Khatoon</title>
          <link rel="icon" type="image/png" href={logo} />
          <meta name="This webiste is about blogs related to tech" content="This is my awesome blog website about tech and life." />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>} />
          <Route path="/createblog" element={<ProtectedRouteForAdmin><CreateBlog />
          </ProtectedRouteForAdmin>} />
          <Route path="/*" element={<NoPage />} />

        </Routes>
        <Toaster />
      </Router>
    </MyState>

  )
}

export default App

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "160623747018@stanley.edu.in") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'} />
  }
}