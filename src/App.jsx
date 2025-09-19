import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home"
import Blog from "./pages/Blog";
import AllBlogs from "./pages/AllBlog";
import NoPage from "./pages/NoPage";
import BlogInfo from "./pages/BlogInfo";
import AdminLogin from "./pages/Admin/AdminLogin";
import Dashboard from "./pages/Admin/Dashboard";
import CreateBlog from "./pages/Admin/createBlog";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import MyState from './context/MyState';
import logo from './assets/logo.png'
import { ThemeProvider } from "@material-tailwind/react";
function App() {
  return ( 
      <ThemeProvider>
     <MyState>
    
      <Helmet>
          <title>BlogApp-By Habeeba Khatoon</title>
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
</ThemeProvider>
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