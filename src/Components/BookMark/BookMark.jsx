import React from 'react';

const BookMark = ({bookMark}) => {
console.log(bookMark)

    return (
        <div>
            <h3>Bookmark blogs:{bookMark.length}</h3>
            <p>title:{bookMark.title}</p>
        </div>
    );
};

export default BookMark;