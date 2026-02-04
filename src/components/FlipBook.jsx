import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import './FlipBook.css';

const FlipBook = ({ pages }) => {
    const bookRef = useRef();

    return (
        <div className="flipbook-container">
            <HTMLFlipBook
                width={500}
                height={750}
                size="stretch"
                minWidth={400}
                maxWidth={1200}
                minHeight={600}
                maxHeight={1800}
                showCover={false}
                usePortrait={false}
                mobileScrollSupport={true}
                className="flip-book"
                ref={bookRef}
            >
                {pages.map((pageData) => (
                    <Page
                        key={pageData.id}
                        pageData={pageData}
                    />
                ))}
            </HTMLFlipBook>

            <div className="flip-instructions">
                Click or drag pages to flip
            </div>
        </div>
    );
};

export default FlipBook;
