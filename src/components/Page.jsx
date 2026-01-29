import React, { forwardRef } from 'react';
import './Page.css';

const Page = forwardRef(({ pageData }, ref) => {
    return (
        <div className="page" ref={ref}>
            <div className="page-content">
                {pageData.type === 'text' ? (
                    <>
                        {pageData.chapter && (
                            <div className="chapter-header">
                                {pageData.chapter}
                            </div>
                        )}
                        <div className="page-text">
                            {pageData.content}
                        </div>
                    </>
                ) : (
                    <div className="page-image-placeholder">
                        <div className="placeholder-box">
                            <span className="placeholder-text">Image Placeholder</span>
                        </div>
                    </div>
                )}
            </div>
            <div className="page-number">{pageData.id}</div>
        </div>
    );
});

Page.displayName = 'Page';

export default Page;
