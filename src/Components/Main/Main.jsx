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
    }, []);

    const showBookMark =(blog) =>{
        const newBookMark =[...bookMark,blog];
        console.log(setBookMark(newBookMark))
        
        
    }
    // console.log(bookMark)

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
                <BookMark bookMark={bookMark}></BookMark> 
                {/* <h3>Bookmark blogs:{bookMark.length}</h3>
                <h3>Bookmark blogs:{bookMark[2]}</h3> */}


            </div>

        </div>
    );
};

export default Main;