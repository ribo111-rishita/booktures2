import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import UploadPage from './pages/UploadPage';
import ReaderPage from './pages/ReaderPage';
import './App.css';
import themeImage from './assets/theme.png';
import headerImage from './assets/header_theme.png';

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

      <header className="app-header" style={{ backgroundImage: `url(${headerImage})` }}>
        <h1 className="app-title">BOOKTURES</h1>
        <p className="app-subtitle">Where stories come alive</p>
      </header>

      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/reader" element={<ReaderPage />} />
      </Routes>

      <footer className="app-footer" style={{ backgroundImage: `url(${themeImage})` }}>
        <p>Flip through the pages to experience the story</p>
      </footer>
    </div>
  );
}

export default App;
