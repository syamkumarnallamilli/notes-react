import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <img src="./logo192.png" alt="logo" style={styles.logo} />
      <ul style={styles.navList}>
        <Link to='/'><li style={styles.navItem}>Home</li></Link>
        <Link to='/product'><li style={styles.navItem}>Product</li></Link>
        <Link to ="/about"><li style={styles.navItem}>About</li></Link>
        <Link to="/contact"><li style={styles.navItem}>Contact</li></Link>
      </ul>
      <button style={styles.button}>Get Started</button>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 8%',
    backgroundColor: '#fff',
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
    color: '#333',
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

export default Navbar;
