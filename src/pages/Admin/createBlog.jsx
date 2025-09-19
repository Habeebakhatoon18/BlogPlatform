import React, { useState, useContext } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import myContext from '../../context/data/myContext';
import { Link, useNavigate } from "react-router-dom";
import {Button, Typography} from "@material-tailwind/react";
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { fireDB } from '../../Firebase/FirebaseConfig';

function CreateBlog() {
    const context = useContext(myContext);
    const { mode } = context;

    const navigate = useNavigate();

    const [blogs, setBlogs] = useState({
        title: '',
        category: '',
        content: '',
        thumbnail: '', // Stores Base64 image
        time: Timestamp.now(),
    });

    //* Encode Image as Base64
    const encodeImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setBlogs({ ...blogs, thumbnail: reader.result }); // Store Base64 string
        };
        reader.onerror = (error) => {
            console.error("Error converting image:", error);
            toast.error("Image upload failed.");
        };
    };

    //* Add Post Function 
    const addPost = async () => {
        if (blogs.title === "" || blogs.category === "" || blogs.content === "" || blogs.thumbnail === "") {
            toast.error('Please Fill All Fields');
            return;
        }

        try {
            const postRef = collection(fireDB, "blogPost");
            await addDoc(postRef, {
                ...blogs,
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                })
            });

            toast.success('Post Added Successfully');
            navigate('/dashboard');
        } catch (error) {
            toast.error("Error adding post");
            console.log(error);
        }
    };

    return (
        <div className='container md:ml-20 lg:ml-50 w-full py-6 flex justify-center items-center'>
            <div className="p-5" style={{
                background: mode === 'dark' ? '#353b48' : 'rgb(226, 232, 240)',
                borderBottom: mode === 'dark' ? '4px solid rgb(226, 232, 240)' : '4px solid rgb(30, 41, 59)'
            }}>
                {/* Top Bar */}
                <div className="mb-2 flex justify-between">
                    <div className="flex gap-2 items-center">
                        <Link to={'/dashboard'}>
                            <BsFillArrowLeftCircleFill size={25} />
                        </Link>
                        <Typography
                            variant="h4"
                            style={{ color: mode === 'dark' ? 'white' : 'black' }}
                        >
                            Create Blog
                        </Typography>
                    </div>
                </div>

                {/* Thumbnail Preview */}
                {blogs.thumbnail && (
                    <img className="w-full rounded-md mb-3" src={blogs.thumbnail} alt="Thumbnail Preview" />
                )}

                {/* Upload Thumbnail */}
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-semibold"
                    style={{ color: mode === 'dark' ? 'white' : 'black' }}
                >
                    Upload Thumbnail
                </Typography>
                <input
                    type="file"
                    className="w-full rounded-md p-1"
                    style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
                    onChange={encodeImage}
                />

                {/* Title Input */}
                <input
                    className="w-full rounded-md p-1.5 mt-3 outline-none placeholder-black"
                    placeholder="Enter Your Title"
                    style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
                    onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
                    value={blogs.title}
                />

                {/* Category Input */}
                <input
                    className="w-full rounded-md p-1.5 mt-3 outline-none placeholder-black"
                    placeholder="Enter Your Category"
                    style={{ background: mode === 'dark' ? '#dcdde1' : 'rgb(226, 232, 240)' }}
                    onChange={(e) => setBlogs({ ...blogs, category: e.target.value })}
                    value={blogs.category}
                />

                {/* Text Editor */}
                <Editor
                    apiKey='9jo3lu73p1xbfqaw6jvgmsbrmy7qr907nqeafe1wbek6os9d'
                    onEditorChange={(newValue) => {
                        setBlogs({ ...blogs, content: newValue });
                    }}
                    init={{
                        plugins: 'advlist autolink lists link image charmap print preview anchor',
                        toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
                    }}
                />

                {/* Submit Button */}
                <Button className="w-full mt-5"
                    onClick={addPost}
                    style={{
                        background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                        color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)'
                    }}
                >
                    Publish Post
                </Button>

                {/* Preview Section */}
                <div className="mt-5">
                    <h1 className="text-center mb-3 text-2xl">Preview</h1>
                    <div className="content">
                        <div
                            className={`[&>h1]:text-[32px] [&>h1]:font-bold
                            ${mode === 'dark' ? '[&>h1]:text-[#ff4d4d]' : '[&>h1]:text-black'}
                            [&>p]:text-[16px] [&>p]:mb-1.5
                            ${mode === 'dark' ? '[&>p]:text-[#7efff5]' : '[&>p]:text-black'}
                        `}
                            dangerouslySetInnerHTML={{ __html: blogs.content }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;
