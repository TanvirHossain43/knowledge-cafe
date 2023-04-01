import React from 'react';
import './BookMark.css'

const BookMark = (props) => {
    const bookMark =props.bookMark
    console.log(bookMark)
    // const {title,id} =props.bookMark
// console.log(bookMark)

    return (
        <div className='bookmark'>
            <h3>Bookmark blogs:</h3>
            <p>title:</p>
        </div>
    );
};

export default BookMark;