import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Main.css'
import BookMark from '../BookMark/BookMark';

const Main = () => {
    const [blogs, setBlogs] = useState([])

    const [bookMark, setBookMark] = useState([])

    useEffect(() => {
        fetch('FakeDb.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const showBookMark = (blog) => {
        const newBookMark = [...bookMark, blog];
        setBookMark(newBookMark)


    }
    // console.log(bookMark)

    return (
        <div className='main-container'>
            <div className='blog-section'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        showBookMark={showBookMark}

                    ></Blog>)
                }
            </div>
            <div className='bookmark-section'>
                <h3 className='bookmark-length'>Bookmark blogs:{bookMark.length}</h3>
                {
                    bookMark.map(mark => <BookMark key={mark.id} bookMark={mark}></BookMark>)
                }

            </div>

        </div>
    );
};

export default Main;