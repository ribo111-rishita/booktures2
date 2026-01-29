import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadPage.css';

const UploadPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
        } else if (file) {
            alert('Please select a PDF file');
            e.target.value = '';
        }
    };

    const handleStartReading = () => {
        if (selectedFile) {
            // Pass the PDF file to the reader page via router state
            navigate('/reader', { state: { pdfFile: selectedFile } });
        }
    };

    return (
        <div className="upload-page">
            <div className="upload-content">
                <h2 className="upload-title">Upload Your Book</h2>
                <p className="upload-subtitle">Select a PDF to begin your magical reading journey</p>

                <div className="upload-area-container">
                    <label
                        htmlFor="pdf-upload"
                        className={`upload-area ${selectedFile ? 'has-file' : ''}`}
                    >
                        <input
                            type="file"
                            id="pdf-upload"
                            accept=".pdf,application/pdf"
                            onChange={handleFileChange}
                            className="file-input"
                        />

                        {!selectedFile ? (
                            <div className="upload-prompt">
                                <div className="upload-icon">📚</div>
                                <p className="upload-text">Click or drag to upload</p>
                                <p className="upload-hint">PDF files only</p>
                            </div>
                        ) : (
                            <div className="file-selected">
                                <div className="file-icon">📄</div>
                                <p className="file-name">{selectedFile.name}</p>
                                <div className="check-icon">✓</div>
                            </div>
                        )}
                    </label>
                </div>

                <button
                    className="start-reading-btn"
                    onClick={handleStartReading}
                    disabled={!selectedFile}
                >
                    Start Reading
                </button>
            </div>
        </div>
    );
};

export default UploadPage;
