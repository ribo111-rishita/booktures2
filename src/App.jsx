import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import UploadPage from './pages/UploadPage';
import ReaderPage from './pages/ReaderPage';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <header className="app-header">
        <h1 className="app-title">BOOKTURES</h1>
        <p className="app-subtitle">Where stories come alive</p>
      </header>

      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/reader" element={<ReaderPage />} />
      </Routes>

      <footer className="app-footer">
        <p>Flip through the pages to experience the story</p>
      </footer>
    </div>
  );
}

export default App;
