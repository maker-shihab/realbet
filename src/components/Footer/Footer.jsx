import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();


  return (
    <footer className={styles.footer}>
      <div className="contaienr">
        <div className={styles.wrapper}>
          <nav className={styles.nav}>
            <ul>
              <li><Link to={'/'}>Terms & Conditions</Link></li>
              <li><Link to={'/'}>Responsible Gambling</Link></li>
              <li><Link to={'/'}>Privacy Policy</Link></li>
              <li><Link to={'/'}>Cookie Policy</Link></li>
              <li><Link to={'/'}>Contact Us</Link></li>
              <li><Link to={'/'}>FAQ</Link></li>
              <li><Link to={'/'}>Affiliates</Link></li>
            </ul>
          </nav>
          <p className={styles.cp}>
            Copyright &copy; {currentYear} <Link to={"/"}>realbet.ng</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;