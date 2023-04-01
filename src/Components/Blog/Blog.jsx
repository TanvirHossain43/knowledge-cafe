import React, { useState } from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import BookMark from '../BookMark/BookMark';

const Blog = (props) => {
    const { author, title, cover, img, readTime, publishDate } = props.blog
    const showBookMark = props.showBookMark;
    
    return (
        <div className='blog-container'>
            <div className='blog-cover'>
                <img src={cover} alt="" />

            </div>
            <div className='blog-author'>
                <div className='author-publish-date'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className='author-name'>
                        <h4>{author}</h4>
                        <p>{publishDate}</p>
                    </div>
                </div>

                <div>
                    <p>{readTime} min read <button onClick={() => showBookMark(props.blog)}><FontAwesomeIcon icon={faBookmark} /></button></p>
                </div>
            </div>
            <div className='blog-title'>
                <h2>{title}</h2>
                <a href="#" >Mark as read</a>
                
                
            </div>
           <hr className='border-bottom' />
        </div>
        
        
    );
};

export default Blog;