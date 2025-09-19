import React, { useContext } from 'react'
import { Button } from '@material-tailwind/react';
import myContext from '../../context/data/myContext';

import { useNavigate, Link } from 'react-router-dom';

const BlogPostsection = () => {
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;
  const navigate = useNavigate();
  const stripHtml = (html) => html.replace(/<\/?[^>]+(>|$)/g, "");
  return (
    <section className=' container p-4 mx-auto '>
      <h1 className='text-center' style={{
        color: mode === 'dark'
          ? 'rgb(226, 232, 240)'
          : ' rgb(30, 41, 59)'
      }}>Latest Blogs </h1>
      <div className=' flex m-4 p-3 justify-center items-center w-full flex-wrap'>

        {getAllBlog.length > 0
          ?
          <>
            {getAllBlog.slice(-6).map((item, index) => {
              const { thumbnail, id, date } = item
              return (
                <div className="p-4 md:w-1/3 md:h-[550px]" key={index}>
                  <div onClick={() => navigate(`/bloginfo/${id}`)}
                    style={{
                      background: mode === 'dark'
                        ? 'rgb(30, 41, 59)'
                        : 'white',
                      borderBottom: mode === 'dark'
                        ?
                        ' 4px solid rgb(226, 232, 240)'
                        : ' 4px solid rgb(30, 41, 59)'
                    }}
                    className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                        ${mode === 'dark'
                        ? 'shadow-gray-700'
                        : 'shadow-xl'
                      } 
                        rounded-xl overflow-hidden`}
                  >
                    {/* Blog Thumbnail  */}
                    <img className=" w-full md:h-[200px]" src={thumbnail} alt="blog" />
                    {/* Top Items  */}
                    <div className="p-6">
                      {/* Blog Date  */}
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                        color: mode === 'dark'
                          ? 'rgb(226, 232, 240)'
                          : ' rgb(30, 41, 59)'
                      }}>
                        {date}
                      </h2>
                      {/* Blog Title  */}
                      <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                        color: mode === 'dark'
                          ? 'rgb(226, 232, 240)'
                          : ' rgb(30, 41, 59)'
                      }}>
                        {item.title}
                      </h1>
                      {/* Blog Description  */}


                      <p
                        className="leading-relaxed mb-3"
                        style={{
                          color: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)'
                        }}
                        dangerouslySetInnerHTML={{
                          __html:
                            stripHtml(item.content).length > 150
                              ? stripHtml(item.content).slice(0, 150) + "..."
                              : stripHtml(item.content)
                        }}
                      ></p>

                    </div>
                  </div>
                </div>
              )
            })}
          </>
          :
          <>
            <h1 className='text-xl font-bold'>No Blogs Found</h1>
          </>
        }


      </div>
      <div className='flex justify-center my-5'>
        {/* See More Button  */}
        <Link to={'/allblogs'}>
          <Button
            style={{
              background: mode === 'dark'
                ? 'rgb(226, 232, 240)'
                : 'rgb(30, 41, 59)',
              color: mode === 'dark'
                ?
                'rgb(30, 41, 59)'
                : 'rgb(226, 232, 240)'
            }}>
            See More
          </Button>
        </Link>
      </div>

    </section>
  )
}

export default BlogPostsection