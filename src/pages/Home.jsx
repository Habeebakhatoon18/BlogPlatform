import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import BlogPostsection from '../components/BlogPostSection'
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <HeroSection />
      <BlogPostsection />
    </Layout>

  )
}

export default Home