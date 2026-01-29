import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <span className="theme-icon">☀️</span>
            ) : (
                <span className="theme-icon">🌙</span>
            )}
        </button>
    );
};

export default ThemeToggle;
