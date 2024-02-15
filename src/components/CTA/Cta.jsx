import React from 'react';
import brands from '../../images/brands.svg';
import socal from '../../images/socail.svg';
import styles from './Cta.module.css';

const Cta = () => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.wrapper}>

          <div className={styles.brands}>
            <div className={styles.singleBrand}>
              <img src={brands} alt="brands" />
            </div>
          </div>

          <div className={styles.socail}>
            <ul>
              <li>
                <img src={socal} alt="social" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;