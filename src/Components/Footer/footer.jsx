import styles from './footer.module.css';
import iconTheme from "../../assets/iconTheme.png";
import { useState, useEffect } from 'react';

export function Footer() {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <button 
          className={styles.themeButton} 
          onClick={toggleTheme}
          title={isDarkMode ? "Light" : "Dark"}
        >
          <img className={styles.changeTheme} src={iconTheme} alt="Theme" />
        </button>
      </div>

      <div className={styles.copyright}>
        <p>&copy; 2025 ChineseKingdom. Todos os direitos reservados. — Trabalho Individual, Laryssa Peixoto - Desenvolvimento Web</p>
      </div>
    </footer>
  );
}