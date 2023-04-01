import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { author, title, cover, img, readTime, publishDate } = props.blog
    console.log(author)

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
                    <p>{readTime} <FontAwesomeIcon icon={faBookmark} /></p>
                </div>
            </div>
            <div className='blog-title'>
                <h2>{title}</h2>
            </div>

        </div>
    );
};

export default Blog;