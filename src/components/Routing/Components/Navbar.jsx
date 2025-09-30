import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Hooks/context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    navbar: {
      display: 'flex',
      width: '100%',
      marginBottom:"300px",
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 8%',
      // backgroundColor: theme ? "#0d0d0dff" : "#fff",
      backgroundColor: theme === "dark" ? "#0d0d0dff" : "#fff",
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    },
    logo: {
      width: '40px',
    },
    navList: {
      display: 'flex',
      gap: '30px',
      padding: '10px 30px',
      borderRadius: '30px',
      boxShadow: '0 0 30px 0 rgba(0,0,0,0.1)',
      listStyle: 'none',
      
    },
    navItem: {
      // color: theme ? '#f4ededff' : "#333",
      color: theme === "dark" ? '#f4ededff' : "#333",
      fontWeight: 500,
      cursor: 'pointer',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#105BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: 600,
    },
  };

  return (
    <div style={styles.navbar}>
      <img src="./logo192.png" alt="logo" style={styles.logo} />
      <ul style={styles.navList}>
        <Link to='/'><li style={styles.navItem}>Home</li></Link>
        <Link to='/product'><li style={styles.navItem}>Product</li></Link>
        <Link to ="/about"><li style={styles.navItem}>About</li></Link>
        <Link to="/contact"><li style={styles.navItem}>Contact</li></Link>
         <Link to="/Basic"><li style={styles.navItem}> Basic</li></Link>
      </ul>
      <button style={styles.button}>Get Started</button>
      <button style={styles.button} onClick={toggleTheme}>Theme</button>
    </div>
  );
};

export default Navbar;
