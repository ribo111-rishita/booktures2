import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FlipBook from '../components/FlipBook';
import { samplePages } from '../data/samplePages';
import { processPDFForFlipBook } from '../utils/pdfUtils';
import './ReaderPage.css';

const ReaderPage = () => {
    const location = useLocation();
    const [pages, setPages] = useState(samplePages);
    const [bookTitle, setBookTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPDF = async () => {
            // Check if a PDF file was passed via router state
            const pdfFile = location.state?.pdfFile;

            if (!pdfFile) {
                // No PDF provided, use sample pages
                setPages(samplePages);
                setBookTitle('');
                return;
            }

            try {
                setLoading(true);
                setError(null);

                // Process the PDF and extract text with optimal lines per page
                const { pages: extractedPages, title } = await processPDFForFlipBook(pdfFile, 20);

                console.log('Extracted pages:', extractedPages.length, 'First page:', extractedPages[0]);

                setPages(extractedPages);
                setBookTitle(title);
            } catch (err) {
                console.error('Error processing PDF:', err);
                setError(err.message || 'Failed to load PDF');
                // Fall back to sample pages on error
                setPages(samplePages);
                setBookTitle('');
            } finally {
                setLoading(false);
            }
        };

        loadPDF();
    }, [location.state]);

    return (
        <div className="reader-page">
            {loading && (
                <div className="loading-overlay">
                    <div className="loading-content">
                        <div className="loading-spinner"></div>
                        <p className="loading-text">Extracting text from your book...</p>
                    </div>
                </div>
            )}

            {error && (
                <div className="error-message">
                    <p>⚠️ {error}</p>
                    <p className="error-subtext">Showing sample content instead.</p>
                </div>
            )}

            <main className="reader-main">
                {bookTitle && (
                    <div className="book-title-header">
                        {bookTitle}
                    </div>
                )}
                <FlipBook pages={pages} />
            </main>
        </div>
    );
};

export default ReaderPage;
