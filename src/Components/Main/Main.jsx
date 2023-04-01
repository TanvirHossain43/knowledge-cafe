import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Main.css'

const Main = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('FakeDb.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='main-container'>
            <div className='blog-section'>
                { 
                blogs.map(blog => <Blog
                key ={blog.id}
                blog ={blog}
                ></Blog>)
                }
            </div>
            <div className='bookmark-section'>
                <h3>Bookmark blogs:</h3>

            </div>

        </div>
    );
};

export default Main;