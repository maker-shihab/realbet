import React from 'react';
import { Link } from 'react-router-dom';
import TopHeader from '../TopHeader/TopHeader';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <TopHeader />
      <div className={styles.navigation}>
        <div className='container-full'>
          <nav>
            <ul>
              <li>
              <Link to={"/"} className={styles.active}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>Search</Link>
              </li>
              <li>
                <Link to={"/"}>Products</Link>
              </li>
              <li>
                <Link to={"/"}>About Us</Link>
              </li>
              <li>
                <Link to={"/"}>Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;