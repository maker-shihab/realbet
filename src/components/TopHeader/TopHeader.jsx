import React from 'react';
import { LuArrowDownSquare } from "react-icons/lu";
import { Link } from 'react-router-dom';
import styles from './TopHeader.module.css';

const TopHeader = () => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.left}>
        <ul>
          <li>
            <Link to={"/"} className={styles.logo}>
              Img
            </Link>
          </li>
          <li>
            <Link to={"/"} className='btn btn_primary'>
              NIGERIA
            </Link>
          </li>
          <li>
            <Link to={"/"} className='btn btn_primary'>
              SPORTS BOOK
            </Link>
          </li>
          <li>
            <Link to={"/"} className='btn btn_primary'>
              EXCHANGE
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Link to={"/"} className='btn btn_primary'>
          JOIN US
        </Link>
        <Link to={"/"} className='btn btn_outline'>
          LOGIN
        </Link>
        <button type='button' className='btn btn_outline'>
          EN <LuArrowDownSquare />
        </button>
      </div>
    </div>
  );
};

export default TopHeader;