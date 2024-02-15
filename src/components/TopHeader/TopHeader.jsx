import React from 'react';
import { LuArrowDownSquare } from "react-icons/lu";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import styles from './TopHeader.module.css';

const TopHeader = () => {
  return (
    <div className={styles.topHeader}>
      <div className='container-full'>
        <div className={styles.content}>
          <div className={styles.left}>
            <ul>
              <li>
                <Link to={"/"} className={styles.logo}>
                  <img src={logo} alt="logo" />
                </Link>
              </li>
              <li>
                <Link to={"/"} className='btn btn_primary'>
                  NIGERIA
                </Link>
              </li>
              <li>
                <Link to={"/"} className='btn btn_teal'>
                  SPORTS BOOK
                </Link>
              </li>
              <li>
                <Link to={"/"} className='btn btn_purple'>
                  EXCHANGE
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <Link to={"/"} className='btn btn_red'>
              JOIN US
            </Link>
            <Link to={"/"} className='btn btn_primary_outline'>
              LOGIN
            </Link>
            <button type='button' className='btn btn_primary_outline'>
              EN <LuArrowDownSquare /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;