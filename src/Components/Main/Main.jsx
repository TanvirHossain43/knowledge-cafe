import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Main.css'
import BookMark from '../BookMark/BookMark';

const Main = () => {
    const [blogs, setBlogs] = useState([])
    const [bookMark,setBookMark] =useState([])

    useEffect(() => {
        fetch('FakeDb.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const showBookMark =(title) =>{
        const newBookMark =[...bookMark,title];
        setBookMark(newBookMark)
        
    }

    return (
        <div className='main-container'>
            <div className='blog-section'>
                { 
                blogs.map(blog => <Blog
                key ={blog.id}
                blog ={blog}
                showBookMark={showBookMark}
                
                ></Blog>)
                }
            </div>
            <div className='bookmark-section'>
                <BookMark 
              
                bookMark={bookMark}
                 ></BookMark> 
                


            </div>

        </div>
    );
};

export default Main;